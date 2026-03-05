import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-sans font-bold text-sm transition-all duration-150 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        // Primary CTA Button (on light bg)
        primary:
          "bg-primary text-light px-6 py-3 rounded-xl hover:bg-primary-mid shadow-card hover:shadow-card-md",
        // Accent CTA Button (on dark bg)
        accent:
          "bg-accent text-primary px-6 py-3 rounded-xl hover:bg-accent-hover shadow-card hover:shadow-card-md",
        // Ghost button (transparent with border)
        ghost:
          "bg-transparent text-white border border-white/20 px-6 py-3 rounded-xl hover:bg-white/10 hover:border-white/40",
        // Secondary button
        secondary:
          "bg-secondary text-secondary-foreground px-6 py-3 rounded-xl hover:bg-secondary/80 shadow-card",
        // Destructive button
        destructive:
          "bg-danger text-light px-6 py-3 rounded-xl hover:bg-danger/90 shadow-card",
        // Link style
        link: "text-primary underline-offset-4 hover:underline p-0",
      },
      size: {
        default: "px-6 py-3",
        sm: "px-4 py-2 text-xs",
        lg: "px-8 py-4 text-base",
        icon: "size-10 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
