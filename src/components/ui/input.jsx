import * as React from "react";

import { cn } from "@/components/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-[62px] w-full border-white/10 bg-white/5 px-6 py-2 text-white/80 placeholder:text-white/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400/60 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
