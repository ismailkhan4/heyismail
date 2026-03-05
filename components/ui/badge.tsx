import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center px-3 py-1 text-label font-sans font-bold w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1.5 [&>svg]:pointer-events-none transition-all duration-150 overflow-hidden rounded-full",
  {
    variants: {
      variant: {
        default:
          "bg-primary-tint text-primary border border-primary/20",
        accent:
          "bg-accent/10 text-accent border border-accent/20",
        secondary:
          "bg-secondary text-secondary-foreground border border-border",
        destructive:
          "bg-danger/10 text-danger border border-danger/20",
        outline:
          "text-foreground border border-border bg-transparent hover:bg-primary-tint",
        // For stack pills with colored dots
        stack:
          "bg-primary-tint text-primary border border-primary/20 flex items-center gap-2",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
