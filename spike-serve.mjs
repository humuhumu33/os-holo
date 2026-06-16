import http from 'node:http';
import { readFileSync, statSync } from 'node:fs';
import { join, extname, normalize } from 'node:path';
const ROOT = process.argv[2];
const PORT = +(process.argv[3] || 8350);
const MIME = { '.html':'text/html', '.js':'text/javascript', '.mjs':'text/javascript', '.wasm':'application/wasm',
  '.json':'application/json', '.holo':'application/octet-stream', '.ts':'text/plain', '.css':'text/css' };
http.createServer((req, res) => {
  try {
    const url = decodeURIComponent(req.url.split('?')[0]);
    const p = normalize(join(ROOT, url));
    if (!p.startsWith(normalize(ROOT))) { res.writeHead(403); return res.end('no'); }
    let fp = p; try { if (statSync(fp).isDirectory()) fp = join(fp, 'index.html'); } catch {}
    const body = readFileSync(fp);
    res.writeHead(200, {
      'Content-Type': MIME[extname(fp)] || 'application/octet-stream',
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'credentialless',
      'Cache-Control': 'no-store',
    });
    res.end(body);
  } catch (e) { res.writeHead(404); res.end('404: ' + e.message); }
}).listen(PORT, () => console.log('spike server on http://localhost:' + PORT + ' root=' + ROOT));
