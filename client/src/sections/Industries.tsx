import { Reveal } from "@/components/Reveal";
import { Phrases } from "@/components/Phrases";
import { SectionHeader } from "@/components/SectionHeader";
import { INDUSTRY_IDS, type IndustryId } from "@/content/types";
import { useLang } from "@/i18n/LangProvider";
import { INDUSTRY_DEMO } from "@/lib/site";
import { cn } from "@/lib/utils";
import {
  ArrowUpRight,
  Building2,
  Factory,
  Server,
  Snowflake,
  Waves,
  type LucideIcon,
} from "lucide-react";

const META: Record<
  IndustryId,
  { img: string; icon: LucideIcon; span: string }
> = {
  datacenter: { img: "ind-datacenter", icon: Server, span: "sm:col-span-2" },
  building: { img: "ind-building", icon: Building2, span: "" },
  coldstore: { img: "ind-coldstore", icon: Snowflake, span: "" },
  flood: { img: "ind-flood", icon: Waves, span: "" },
  factory: { img: "ind-factory", icon: Factory, span: "" },
};

export function Industries() {
  const { t } = useLang();
  const ind = t.industries;

  return (
    <section
      aria-labelledby="industries-title"
      className="relative py-20 lg:py-24"
    >
      <div className="container-x">
        <SectionHeader
          id="industries-title"
          eyebrow={ind.eyebrow}
          title={ind.title}
          lead={ind.lead}
        />

        <ul className="mt-12 grid auto-rows-[280px] gap-4 sm:grid-cols-2 lg:auto-rows-[300px] lg:grid-cols-3 lg:gap-5">
          {INDUSTRY_IDS.map((id, i) => {
            const { img, icon: Icon, span } = META[id];
            const item = ind.items[id];
            const demoUrl = INDUSTRY_DEMO[id];
            const isDemo = Boolean(demoUrl);
            const body = (
              <>
                <img
                  src={`/images/v3/${img}.webp`}
                  alt=""
                  width={1600}
                  height={900}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/55 to-ink-950/5"
                />
                <div className="relative flex h-full flex-col justify-end p-6 sm:p-7">
                  <span
                    className={cn(
                      "mb-auto inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold",
                      isDemo
                        ? "bg-leaf-500 text-ink-950"
                        : "border border-white/15 bg-ink-950/70 font-medium text-slate-200"
                    )}
                  >
                    {isDemo && (
                      <span
                        aria-hidden
                        className="size-1.5 animate-pulse-dot rounded-full bg-ink-950"
                      />
                    )}
                    {isDemo ? ind.liveDemo : ind.demoBoards}
                    {isDemo && (
                      <ArrowUpRight aria-hidden className="size-3.5" />
                    )}
                  </span>
                  <Icon aria-hidden className="size-6 text-leaf-400" />
                  <h3 className="mt-3 text-xl font-semibold sm:text-2xl">
                    <Phrases text={item.title} />
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-300/85">
                    {item.body}
                  </p>
                </div>
              </>
            );
            const cls =
              "group relative block h-full overflow-hidden rounded-3xl border border-line-strong bg-ink-900";
            return (
              <Reveal as="li" key={id} delay={(i % 3) * 0.07} className={span}>
                {isDemo ? (
                  <a
                    href={demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cls}
                  >
                    {body}
                  </a>
                ) : (
                  <div className={cls}>{body}</div>
                )}
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
