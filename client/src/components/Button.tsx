import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  size?: Size;
  external?: boolean;
  icon?: ReactNode;
}

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-leaf-500 text-ink-950 shadow-[0_10px_34px_-10px_rgb(34_197_94/0.75)] hover:bg-leaf-400 hover:shadow-[0_12px_40px_-8px_rgb(34_197_94/0.85)]",
  secondary:
    "border border-line-strong bg-white/[0.04] text-white hover:border-white/25 hover:bg-white/[0.08]",
  ghost: "text-slate-200 hover:bg-white/[0.06] hover:text-white",
};

const SIZES: Record<Size, string> = {
  sm: "h-9 gap-1.5 px-3.5 text-[13px]",
  md: "h-11 gap-2 px-5 text-sm",
  lg: "h-12 gap-2 px-6 text-[15px]",
};

/** Link styled as a button. `external` opens a new tab and shows an ↗ glyph. */
export function ButtonLink({
  variant = "primary",
  size = "md",
  external = false,
  icon,
  className,
  children,
  ...rest
}: ButtonLinkProps) {
  return (
    <a
      className={cn(
        "group inline-flex shrink-0 items-center justify-center rounded-full font-display font-semibold whitespace-nowrap transition-[background-color,box-shadow,border-color,color] duration-200",
        VARIANTS[variant],
        SIZES[size],
        className
      )}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {icon}
      <span>{children}</span>
      {external && (
        <ArrowUpRight
          aria-hidden
          className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </a>
  );
}
