import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// One primary (lime) button per view; everything else is secondary or a text link.
export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors duration-150 active:translate-y-px",
  {
    variants: {
      variant: {
        primary: "bg-brand text-ink hover:bg-brand-hover",
        /** Secondary action on light backgrounds. */
        secondary: "border border-line-strong text-ink hover:border-ink hover:bg-sunken",
        /** Secondary action on the dark band. */
        secondaryOnNight: "border border-line-night text-on-night hover:border-on-night-2 hover:bg-white/5",
      },
      size: {
        md: "min-h-11 px-5 py-2.5 text-base",
        sm: "min-h-10 px-4 py-2 text-sm",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof buttonVariants> {
  href: string;
  external?: boolean;
}

export default function Button({ href, variant, size, external, children, className, ...rest }: ButtonProps) {
  const externalProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <a href={href} className={cn(buttonVariants({ variant, size }), className)} {...externalProps} {...rest}>
      {children}
    </a>
  );
}
