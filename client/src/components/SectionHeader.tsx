import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { Phrases } from "./Phrases";
import { Reveal } from "./Reveal";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  lead?: string;
  id?: string;
  center?: boolean;
  actions?: ReactNode;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  lead,
  id,
  center,
  actions,
  className,
}: SectionHeaderProps) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-6",
        center
          ? "items-center text-center"
          : "lg:flex-row lg:items-end lg:justify-between",
        className
      )}
    >
      <div className={cn("max-w-3xl", center && "mx-auto")}>
        <p className="eyebrow">
          <span aria-hidden className="h-px w-6 bg-leaf-400/70" />
          {eyebrow}
        </p>
        <h2
          id={id}
          className="mt-4 text-[clamp(1.9rem,1.2rem+2.6vw,3.25rem)] leading-[1.08] font-semibold tracking-[-0.02em]"
        >
          <Phrases text={title} />
        </h2>
        {lead && (
          <p className="lead mt-5 max-w-2xl text-base text-slate-400 sm:text-lg">
            {lead}
          </p>
        )}
      </div>
      {actions && (
        <div className="flex shrink-0 flex-wrap gap-3">{actions}</div>
      )}
    </Reveal>
  );
}
