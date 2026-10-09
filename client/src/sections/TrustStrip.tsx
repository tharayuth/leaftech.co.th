import { Reveal } from "@/components/Reveal";
import { useLang } from "@/i18n/LangProvider";
import { cn } from "@/lib/utils";
import {
  BellRing,
  Bot,
  Cable,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

const ICONS: LucideIcon[] = [ShieldCheck, Cable, BellRing, Bot];

export function TrustStrip() {
  const { t } = useLang();
  return (
    <section
      aria-label="Leaftech at a glance"
      className="relative border-y border-line bg-ink-900/70"
    >
      <ul className="container-x grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {t.trust.map((item, i) => {
          const Icon = ICONS[i];
          return (
            <Reveal
              as="li"
              key={item.value}
              delay={i * 0.06}
              y={12}
              className={cn(
                "flex items-start gap-4 py-6 sm:py-8 lg:flex-col lg:gap-4 lg:px-7",
                i > 0 && "border-t border-line sm:border-t-0",
                i >= 2 && "sm:border-t lg:border-t-0",
                i % 2 === 1 && "sm:border-l sm:border-line sm:pl-7",
                i > 0 && "lg:border-l lg:border-line",
                i === 0 && "lg:pl-0"
              )}
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-leaf-500/10 text-leaf-400 ring-1 ring-leaf-500/20">
                <Icon aria-hidden className="size-5" />
              </span>
              <div className="min-w-0">
                <p className="font-display text-[17px] leading-snug font-semibold text-balance text-white">
                  {item.value}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-slate-400">
                  {item.label}
                </p>
              </div>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}
