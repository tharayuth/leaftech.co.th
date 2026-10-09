import { Reveal } from "@/components/Reveal";
import { Phrases } from "@/components/Phrases";
import { SectionHeader } from "@/components/SectionHeader";
import { AI_POINT_IDS, type AiPointId } from "@/content/types";
import { useLang } from "@/i18n/LangProvider";
import { cn } from "@/lib/utils";
import { m } from "framer-motion";
import {
  Activity,
  Bot,
  CheckCircle2,
  Database,
  LayoutDashboard,
  Sparkles,
  User,
  type LucideIcon,
} from "lucide-react";

const POINT_ICONS: Record<AiPointId, LucideIcon> = {
  build: LayoutDashboard,
  analyse: Database,
  health: Activity,
  proof: Sparkles,
};

const CLIENTS = ["Claude", "ChatGPT", "Cursor"];

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
};
const item = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

function McpSession() {
  const { t } = useLang();
  const s = t.aiNative.session;
  return (
    <div className="overflow-hidden rounded-2xl border border-line-strong bg-ink-900/95 shadow-[0_40px_100px_-30px_rgb(0_0_0/0.95)]">
      <div className="flex items-center gap-3 border-b border-line px-4 py-3">
        <span className="flex size-7 items-center justify-center rounded-lg bg-leaf-500/15 text-leaf-400">
          <Bot aria-hidden className="size-4" />
        </span>
        <p className="min-w-0 flex-1 truncate text-sm font-medium text-white">
          {s.label} <span className="text-slate-500">·</span>{" "}
          <span className="font-normal text-slate-400">{s.connected}</span>
        </p>
        <span
          aria-hidden
          className="size-2 animate-pulse-dot rounded-full bg-leaf-400"
        />
      </div>

      <m.div
        variants={list}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="space-y-4 p-4 sm:p-5"
      >
        <m.div variants={item} className="flex justify-end gap-2.5">
          <p className="max-w-[88%] rounded-2xl rounded-tr-md bg-white/[0.07] px-4 py-3 text-sm leading-relaxed text-slate-100">
            {s.user}
          </p>
          <span className="mt-1 flex size-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-slate-300">
            <User aria-hidden className="size-3.5" />
          </span>
        </m.div>

        <m.ol
          variants={list}
          className="space-y-2 rounded-xl border border-line bg-ink-950/60 p-3 font-mono text-[12px] sm:text-[12.5px]"
        >
          {s.steps.map(step => (
            <m.li
              key={step.tool + step.text}
              variants={item}
              className="flex items-start gap-2.5"
            >
              <CheckCircle2
                aria-hidden
                className="mt-px size-3.5 shrink-0 text-leaf-400"
              />
              <span className="min-w-0">
                <span className="text-leaf-300">{step.tool}</span>
                <span className="text-slate-500"> — </span>
                <span className="font-sans text-slate-400">{step.text}</span>
              </span>
            </m.li>
          ))}
        </m.ol>

        <m.div variants={item} className="flex gap-2.5">
          <span className="mt-1 flex size-7 shrink-0 items-center justify-center rounded-full bg-leaf-500/15 text-leaf-400">
            <Bot aria-hidden className="size-3.5" />
          </span>
          <p className="max-w-[88%] rounded-2xl rounded-tl-md border border-leaf-500/20 bg-leaf-500/[0.08] px-4 py-3 text-sm leading-relaxed text-slate-100">
            {s.reply}
          </p>
        </m.div>
      </m.div>
      <p className="border-t border-line px-4 py-2.5 text-[11px] tracking-wide text-slate-500">
        {s.illustrative}
      </p>
    </div>
  );
}

export function AiNative() {
  const { t } = useLang();
  const a = t.aiNative;

  return (
    <section
      id="ai"
      aria-labelledby="ai-title"
      className="relative isolate overflow-hidden py-20 lg:py-24"
    >
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-[-15%] h-[600px] w-[800px] bg-[radial-gradient(closest-side,rgb(34_197_94/0.12),transparent)]" />
        <div className="absolute right-[-10%] bottom-0 h-[600px] w-[800px] bg-[radial-gradient(closest-side,rgb(34_211_238/0.1),transparent)]" />
      </div>
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-12">
        <div className="lg:col-span-6">
          <SectionHeader
            id="ai-title"
            eyebrow={a.eyebrow}
            title={a.title}
            lead={a.lead}
          />

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {AI_POINT_IDS.map((id, i) => {
              const p = a.points[id];
              const Icon = POINT_ICONS[id];
              const proof = id === "proof";
              return (
                <Reveal
                  as="li"
                  key={id}
                  delay={i * 0.06}
                  y={16}
                  className={cn(
                    "rounded-2xl p-5",
                    proof
                      ? "border border-leaf-500/30 bg-gradient-to-br from-leaf-500/[0.12] to-transparent"
                      : "card"
                  )}
                >
                  <Icon
                    aria-hidden
                    className={cn(
                      "size-5",
                      proof ? "text-leaf-300" : "text-sky-glow"
                    )}
                  />
                  <h3 className="mt-3 text-base font-semibold">
                    <Phrases text={p.title} />
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
                    {p.body}
                  </p>
                </Reveal>
              );
            })}
          </ul>

          <Reveal className="mt-8 flex flex-wrap items-center gap-2 text-sm">
            <span className="mr-1 text-slate-500">{a.clientsLabel}</span>
            {[...CLIENTS, a.anyClient].map(c => (
              <span
                key={c}
                className="rounded-full border border-line-strong bg-white/[0.03] px-3 py-1 font-medium text-slate-200"
              >
                {c}
              </span>
            ))}
          </Reveal>
        </div>

        <Reveal className="relative lg:col-span-6" y={32}>
          <div className="relative overflow-hidden rounded-3xl border border-line-strong">
            <img
              src="/images/v3/ai-native.webp"
              alt={a.imageAlt}
              width={1600}
              height={900}
              loading="lazy"
              decoding="async"
              className="aspect-[16/10] w-full object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent"
            />
          </div>
          <div className="relative z-10 -mt-24 px-3 sm:-mt-36 sm:px-8 lg:-mt-44 lg:pr-0 lg:pl-10 xl:-mr-6">
            <McpSession />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
