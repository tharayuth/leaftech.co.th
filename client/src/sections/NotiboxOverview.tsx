import { Reveal } from "@/components/Reveal";
import { Phrases } from "@/components/Phrases";
import { SectionHeader } from "@/components/SectionHeader";
import { FEATURE_IDS, type FeatureId } from "@/content/types";
import { useLang } from "@/i18n/LangProvider";
import {
  BellRing,
  Box,
  ChevronRight,
  Cpu,
  Eye,
  GitBranch,
  History,
  LayoutDashboard,
  PlugZap,
  Send,
  Share2,
  UsersRound,
  Workflow,
  type LucideIcon,
} from "lucide-react";

const STEP_ICONS: LucideIcon[] = [PlugZap, GitBranch, Send, Eye];

const FEATURE_ICONS: Record<FeatureId, LucideIcon> = {
  points: Cpu,
  alerts: BellRing,
  flowbox: Workflow,
  iotdash: LayoutDashboard,
  twins: Box,
  history: History,
  access: UsersRound,
  share: Share2,
};

function Chips({ chips, chained }: { chips: string[]; chained: boolean }) {
  return (
    <div className="mt-5 flex flex-wrap items-center gap-1.5">
      {chips.map((c, i) => (
        <span key={c} className="flex items-center gap-1.5">
          {chained && i > 0 && (
            <ChevronRight aria-hidden className="size-3 text-leaf-400/70" />
          )}
          <span className="rounded-md border border-line bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] text-slate-300">
            {c}
          </span>
        </span>
      ))}
    </div>
  );
}

export function NotiboxOverview() {
  const { t } = useLang();
  const n = t.notibox;

  return (
    <section
      id="notibox"
      aria-labelledby="notibox-title"
      className="relative py-20 lg:py-24"
    >
      <div className="container-x">
        <SectionHeader
          id="notibox-title"
          eyebrow={n.eyebrow}
          title={n.title}
          lead={n.lead}
        />

        <ol className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {n.steps.map((s, i) => {
            const Icon = STEP_ICONS[i];
            return (
              <Reveal
                as="li"
                key={s.title}
                delay={i * 0.08}
                className="card relative rounded-2xl p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-leaf-500/10 text-leaf-400 ring-1 ring-leaf-500/25">
                    <Icon aria-hidden className="size-5" />
                  </span>
                  <span className="font-mono text-xs text-slate-500">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-semibold">
                  <Phrases text={s.title} />
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {s.body}
                </p>
                <Chips chips={s.chips} chained={i === 1} />
                {i < n.steps.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute top-[34px] -right-[16px] z-10 hidden size-7 items-center justify-center rounded-full border border-line-strong bg-ink-900 text-leaf-400 lg:flex"
                  >
                    <ChevronRight className="size-4" />
                  </span>
                )}
              </Reveal>
            );
          })}
        </ol>

        <div className="mt-20 grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:sticky lg:top-28 lg:col-span-5">
            <figure className="relative overflow-hidden rounded-3xl border border-line-strong shadow-[0_40px_100px_-50px_rgb(34_197_94/0.45)]">
              <img
                src="/images/v3/notibox-box.webp"
                alt={n.boxAlt}
                width={1448}
                height={1086}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/10 to-transparent"
              />
              <figcaption className="absolute right-4 bottom-4 left-4 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-leaf-500 px-3 py-1 font-display text-xs font-semibold text-ink-950">
                  Notibox v3
                </span>
                {n.boxBadges.map(b => (
                  <span
                    key={b}
                    className="rounded-full border border-white/15 bg-ink-950/80 px-3 py-1 text-xs font-medium text-slate-200"
                  >
                    {b}
                  </span>
                ))}
              </figcaption>
            </figure>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal>
              <h3 className="text-2xl font-semibold sm:text-[28px]">
                <Phrases text={n.featuresTitle} />
              </h3>
            </Reveal>
            <ul className="mt-9 grid gap-x-10 gap-y-9 sm:grid-cols-2">
              {FEATURE_IDS.map((id, i) => {
                const f = n.features[id];
                const Icon = FEATURE_ICONS[id];
                return (
                  <Reveal
                    as="li"
                    key={id}
                    delay={(i % 2) * 0.06}
                    y={16}
                    className="flex gap-4"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-line-strong bg-white/[0.03] text-sky-glow">
                      <Icon aria-hidden className="size-[18px]" />
                    </span>
                    <div>
                      <h4 className="text-base font-semibold">
                        <Phrases text={f.title} />
                      </h4>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
                        {f.body}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
