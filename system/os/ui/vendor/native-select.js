// ../../ui-main/ui-main/apps/v4/registry/new-york-v4/ui/native-select.tsx
import { ChevronDownIcon } from "lucide-react";

// ../../ui-main/ui-main/apps/v4/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// ../../ui-main/ui-main/apps/v4/registry/new-york-v4/ui/native-select.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function NativeSelect({
  className,
  size = "default",
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "group/native-select relative w-fit has-[select:disabled]:opacity-50",
      "data-slot": "native-select-wrapper",
      children: [
        /* @__PURE__ */ jsx(
          "select",
          {
            "data-slot": "native-select",
            "data-size": size,
            className: cn(
              "h-9 w-full min-w-0 appearance-none rounded-md border border-input bg-transparent px-3 py-2 pr-9 text-sm shadow-xs transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed data-[size=sm]:h-8 data-[size=sm]:py-1 dark:bg-input/30 dark:hover:bg-input/50",
              "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
              "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
              className
            ),
            ...props
          }
        ),
        /* @__PURE__ */ jsx(
          ChevronDownIcon,
          {
            className: "pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-muted-foreground opacity-50 select-none",
            "aria-hidden": "true",
            "data-slot": "native-select-icon"
          }
        )
      ]
    }
  );
}
function NativeSelectOption({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "option",
    {
      "data-slot": "native-select-option",
      className: cn("bg-[Canvas] text-[CanvasText]", className),
      ...props
    }
  );
}
function NativeSelectOptGroup({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "optgroup",
    {
      "data-slot": "native-select-optgroup",
      className: cn("bg-[Canvas] text-[CanvasText]", className),
      ...props
    }
  );
}
export {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption
};
