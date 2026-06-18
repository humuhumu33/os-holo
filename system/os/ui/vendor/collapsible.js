"use client";

// ../../ui-main/ui-main/apps/v4/registry/new-york-v4/ui/collapsible.tsx
import { Collapsible as CollapsiblePrimitive } from "radix-ui";
import { jsx } from "react/jsx-runtime";
function Collapsible({
  ...props
}) {
  return /* @__PURE__ */ jsx(CollapsiblePrimitive.Root, { "data-slot": "collapsible", ...props });
}
function CollapsibleTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx(
    CollapsiblePrimitive.CollapsibleTrigger,
    {
      "data-slot": "collapsible-trigger",
      ...props
    }
  );
}
function CollapsibleContent({
  ...props
}) {
  return /* @__PURE__ */ jsx(
    CollapsiblePrimitive.CollapsibleContent,
    {
      "data-slot": "collapsible-content",
      ...props
    }
  );
}
export {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
};
