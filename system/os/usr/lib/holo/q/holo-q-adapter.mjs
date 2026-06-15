// holo-q-adapter.mjs — provider-agnostic request/response SHAPING for the remote-model tier (ADR-0090).
// This is the any-llm value (normalize across OpenAI · Anthropic · Ollama) in three tiny PURE functions
// and zero dependencies — no SDK, no Python, no fetch, no keys held. Each adapter knows only how to:
//   • path()                 → the endpoint path to POST to
//   • headers(key)           → the request headers (key injected by the HOST at call time, never stored)
//   • body({model,messages,params}) → the wire body
//   • parseEvent(obj)        → { text? , usage? , done? } | null   (one decoded SSE event → a delta)
// The HOST owns fetch + key custody (holo-q-remote.mjs); the adapter stays pure so it is witnessed in
// Node with canned SSE — the same discipline holo-q-boost.js claimed for streamClaude, now generalized.
//
// The sampler the codegen seam consumes is UNCHANGED: (messages, opts) → async-iterable of text deltas.
// Only the construction moves — host-brokered + grant-checked instead of an in-app raw key.

// ── the adapters (one object per wire format) ──────────────────────────────────────────────────────
export const adapters = {
  // ANTHROPIC — lifted from holo-q-boost.js (system/messages split, x-api-key, SSE text_delta).
  anthropic: {
    wire: "anthropic",
    base: "https://api.anthropic.com",
    path: () => "/v1/messages",
    headers: (key) => ({
      "content-type": "application/json",
      "x-api-key": key,
      "anthropic-version": "2023-06-01",
      "anthropic-dangerous-direct-browser-access": "true",   // required for client-side calls
    }),
    body: ({ model, messages, params = {} }) => {
      const system = (messages || []).filter((m) => m.role === "system").map((m) => m.content).join("\n\n");
      const turns = (messages || []).filter((m) => m.role !== "system").map((m) => ({ role: m.role, content: m.content }));
      return { model, max_tokens: params.maxTokens || 4096, stream: true, system, messages: turns,
        ...(params.thinking ? { thinking: { type: "adaptive" } } : {}) };
    },
    parseEvent: (ev) => {
      if (!ev || typeof ev !== "object") return null;
      if (ev.type === "content_block_delta" && ev.delta && ev.delta.type === "text_delta") return { text: ev.delta.text };
      if (ev.type === "message_start" && ev.message && ev.message.usage) return { usage: { promptTokens: ev.message.usage.input_tokens } };
      if (ev.type === "message_delta" && ev.usage) return { usage: { completionTokens: ev.usage.output_tokens } };
      if (ev.type === "message_stop") return { done: true };
      if (ev.type === "error") throw new Error("remote: " + ((ev.error && ev.error.message) || "stream error"));
      return null;
    },
  },

  // OPENAI — the de-facto wire format (chat/completions SSE; `data: [DONE]` sentinel).
  openai: {
    wire: "openai",
    base: "https://api.openai.com",
    path: () => "/v1/chat/completions",
    headers: (key) => ({ "content-type": "application/json", ...(key ? { authorization: "Bearer " + key } : {}) }),
    body: ({ model, messages, params = {} }) => ({
      model, messages, stream: true, max_tokens: params.maxTokens || 4096, stream_options: { include_usage: true },
    }),
    parseEvent: (ev) => {
      if (ev === "[DONE]") return { done: true };
      if (!ev || typeof ev !== "object") return null;
      if (ev.error) throw new Error("remote: " + (ev.error.message || "stream error"));
      const out = {};
      const d = ev.choices && ev.choices[0] && ev.choices[0].delta && ev.choices[0].delta.content;
      if (d) out.text = d;
      if (ev.usage) out.usage = { promptTokens: ev.usage.prompt_tokens, completionTokens: ev.usage.completion_tokens };
      return (out.text || out.usage) ? out : null;
    },
  },

  // OLLAMA — local, OpenAI-compatible endpoint (no key). Same shaping as openai; distinct identity so a
  // receipt names the engine honestly. base points at the loopback host (resolved from the vault).
  ollama: {
    wire: "ollama",
    base: "http://localhost:11434",
    path: () => "/v1/chat/completions",
    headers: () => ({ "content-type": "application/json" }),
    body: ({ model, messages, params = {} }) => ({ model, messages, stream: true, max_tokens: params.maxTokens || 4096 }),
    parseEvent: (ev) => adapters.openai.parseEvent(ev),
  },
};

export const pick = (wireFormat) => adapters[wireFormat] || adapters.openai;

// ── pure SSE driver (no network) ─────────────────────────────────────────────────────────────────
// runSSE(adapter, sseText) → { text, usage, done } — feed a complete SSE body, get the reconstructed
// answer + accumulated usage. The witness drives this with canned bytes; the live streamer (in
// holo-q-remote.mjs) reuses the SAME line logic incrementally over a fetch reader.
export function runSSE(adapter, sseText) {
  let text = "", done = false; const usage = {};
  for (const line of String(sseText).split("\n")) {
    const ev = decodeLine(line); if (ev === undefined) continue;
    const out = adapter.parseEvent(ev); if (!out) continue;
    if (out.text) text += out.text;
    if (out.usage) Object.assign(usage, out.usage);
    if (out.done) done = true;
  }
  return { text, usage, done };
}
// decodeLine(line) → a decoded SSE event, the "[DONE]" sentinel string, or undefined to skip. Pure.
export function decodeLine(line) {
  const s = String(line).trim();
  if (!s.startsWith("data:")) return undefined;
  const data = s.slice(5).trim();
  if (!data) return undefined;
  if (data === "[DONE]") return "[DONE]";
  try { return JSON.parse(data); } catch { return undefined; }
}

export default { adapters, pick, runSSE, decodeLine };
