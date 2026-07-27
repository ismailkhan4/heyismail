import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-body font-semibold rounded-lg transition-all duration-200",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-accent text-dark hover:bg-brand-accent-hover hover:shadow-[0_8px_28px_rgba(197,216,109,0.35)] hover:-translate-y-0.5",
        outline:
          "bg-transparent border border-current hover:bg-brand-accent/15 hover:border-brand-accent hover:text-brand-accent",
      },
      size: {
        md: "px-7 py-4 text-base",
        sm: "px-5 py-2.5 text-sm",
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
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <a
      href={href}
      className={cn(buttonVariants({ variant, size }), className)}
      {...externalProps}
      {...rest}
    >
      {children}
    </a>
  );
}

export { buttonVariants };
