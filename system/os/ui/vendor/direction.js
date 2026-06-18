"use client";

// ../../ui-main/ui-main/apps/v4/registry/new-york-v4/ui/direction.tsx
import { Direction } from "radix-ui";
import { jsx } from "react/jsx-runtime";
function DirectionProvider({
  dir,
  direction,
  children
}) {
  return /* @__PURE__ */ jsx(Direction.DirectionProvider, { dir: direction ?? dir, children });
}
var useDirection = Direction.useDirection;
export {
  DirectionProvider,
  useDirection
};
