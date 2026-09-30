import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// One filled (accent) button per view; everything else is outline or a text link.
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-body font-semibold rounded-lg transition-colors duration-200",
  {
    variants: {
      variant: {
        primary: "bg-brand-accent text-dark hover:bg-brand-accent-hover",
        /** Secondary action on a light section. */
        outline: "border border-dark/25 text-dark hover:border-dark/50 hover:bg-dark/5",
        /** Secondary action on a dark section. */
        outlineOnDark: "border border-light/25 text-light hover:border-light/50 hover:bg-light/10",
      },
      size: {
        md: "px-6 py-3.5 text-base",
        sm: "px-4 py-2 text-sm",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

interface ButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  href: string;
  external?: boolean;
}

export default function Button({
  href,
  variant,
  size,
  external,
  children,
  className,
  ...rest
}: ButtonProps): React.JSX.Element {
  const externalProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <a href={href} className={cn(buttonVariants({ variant, size }), className)} {...externalProps} {...rest}>
      {children}
    </a>
  );
}
