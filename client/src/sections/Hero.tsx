import { BrowserFrame, LiveBadge } from "@/components/BrowserFrame";
import { ButtonLink } from "@/components/Button";
import { Phrases } from "@/components/Phrases";
import { Reveal } from "@/components/Reveal";
import { TwinFrame } from "@/components/TwinFrame";
import { useLang } from "@/i18n/LangProvider";
import { DEMO_HOST, DEMO_URL, twinPoster, twinSrc } from "@/lib/site";
import { m } from "framer-motion";
import { ArrowUpRight, MonitorPlay, MousePointer2 } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;
const rise = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: EASE, delay },
});

export function Hero() {
  const { t } = useLang();

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden pt-28 pb-14 sm:pt-32 lg:pt-36 lg:pb-16"
    >
      <div aria-hidden className="absolute inset-0 -z-10">
        <img
          src="/images/v3/hero-control-room.webp"
          alt=""
          className="fade-b absolute inset-x-0 top-0 h-[82vh] min-h-[560px] w-full object-cover opacity-[0.22]"
        />
        <div className="bg-dots absolute inset-0 opacity-70 [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,#000,transparent)]" />
        <div className="absolute top-[-14%] left-1/2 h-[640px] w-[1200px] max-w-[160vw] -translate-x-1/2 bg-[radial-gradient(closest-side,rgb(34_197_94/0.2),transparent)]" />
        <div className="absolute top-[38%] right-[-12%] h-[520px] w-[760px] bg-[radial-gradient(closest-side,rgb(34_211_238/0.1),transparent)]" />
      </div>

      <div className="container-x">
        <div className="mx-auto max-w-4xl text-center">
          <m.p
            {...rise(0)}
            className="inline-flex max-w-full items-center gap-2 rounded-full border border-leaf-500/25 bg-leaf-500/[0.08] px-3.5 py-1.5 text-xs font-medium text-leaf-300 sm:text-[13px]"
          >
            <span
              aria-hidden
              className="size-1.5 shrink-0 animate-pulse-dot rounded-full bg-leaf-400"
            />
            <span className="truncate">{t.hero.eyebrow}</span>
          </m.p>

          <m.h1
            {...rise(0.08)}
            id="hero-title"
            className="mt-6 text-[clamp(2.35rem,1.1rem+5.2vw,4.85rem)] leading-[1.02] font-semibold tracking-[-0.035em]"
          >
            <Phrases text={t.hero.titleLead} />{" "}
            <Phrases text={t.hero.titleAccent} className="text-gradient" />
          </m.h1>

          <m.p
            {...rise(0.16)}
            className="lead mx-auto mt-6 max-w-2xl text-base text-slate-300/90 sm:text-lg"
          >
            {t.hero.sub}
          </m.p>

          <m.div
            {...rise(0.24)}
            className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
          >
            <ButtonLink
              href={DEMO_URL}
              external
              size="lg"
              icon={<MonitorPlay aria-hidden className="size-[18px]" />}
            >
              {t.hero.ctaDemo}
            </ButtonLink>
            <ButtonLink href="#contact" variant="secondary" size="lg">
              {t.hero.ctaTalk}
            </ButtonLink>
          </m.div>
        </div>

        <Reveal
          className="relative mx-auto mt-12 max-w-[1200px] lg:mt-14"
          y={40}
          delay={0.2}
        >
          <div
            aria-hidden
            className="absolute -inset-x-6 -top-12 bottom-1/3 -z-10 rounded-[48px] bg-[radial-gradient(55%_60%_at_50%_0%,rgb(34_197_94/0.28),transparent)] blur-2xl"
          />
          <BrowserFrame
            address={DEMO_HOST}
            label={t.hero.frameLabel}
            badge={<LiveBadge>{t.hero.live}</LiveBadge>}
            actions={
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-1 rounded-md px-2 py-1 text-xs font-medium text-slate-300 transition-colors hover:bg-white/[0.06] hover:text-white md:inline-flex"
              >
                {t.twinFrame.openFull}
                <ArrowUpRight aria-hidden className="size-3.5" />
              </a>
            }
          >
            <TwinFrame
              src={twinSrc("tower")}
              poster={twinPoster("tower")}
              title={`Notibox v3 — ${t.hero.frameLabel}`}
              priority
              className="aspect-[4/3] sm:aspect-video"
            />
          </BrowserFrame>
          <p className="mx-auto mt-4 flex max-w-2xl items-start justify-center gap-2 text-center text-xs text-slate-500 sm:text-sm">
            <MousePointer2
              aria-hidden
              className="mt-0.5 size-3.5 shrink-0 text-leaf-400/80"
            />
            <span>{t.hero.caption}</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
