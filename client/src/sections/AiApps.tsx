import { Lightbox, type LightboxImage } from "@/components/Lightbox";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { useLang } from "@/i18n/LangProvider";
import {
  Check,
  Eye,
  Maximize2,
  MessageSquareText,
  type LucideIcon,
} from "lucide-react";
import { useState, type ReactNode } from "react";

const GAUGE_APP = "/images/v3/ai-gauge-app.webp";

function AppCard({
  img,
  alt,
  icon: Icon,
  title,
  body,
  bullets,
  footer,
}: {
  img: string;
  alt: string;
  icon: LucideIcon;
  title: string;
  body: string;
  bullets: string[];
  footer: ReactNode;
}) {
  return (
    <div className="card flex h-full flex-col overflow-hidden rounded-3xl">
      <div className="relative">
        <img
          src={img}
          alt={alt}
          width={1600}
          height={900}
          loading="lazy"
          decoding="async"
          className="aspect-[16/8] w-full object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-transparent"
        />
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-8 lg:p-9">
        <div className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-xl bg-leaf-500/10 text-leaf-400 ring-1 ring-leaf-500/25">
            <Icon aria-hidden className="size-5" />
          </span>
          <h3 className="text-2xl font-semibold">{title}</h3>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
          {body}
        </p>
        <ul className="mt-6 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
          {bullets.map(b => (
            <li key={b} className="flex gap-2.5 text-sm text-slate-300">
              <Check
                aria-hidden
                className="mt-0.5 size-4 shrink-0 text-leaf-400"
              />
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-8">{footer}</div>
      </div>
    </div>
  );
}

export function AiApps() {
  const { t, lang } = useLang();
  const a = t.aiApps;
  const [open, setOpen] = useState<LightboxImage | null>(null);

  return (
    <section aria-labelledby="aiapps-title" className="relative pb-20 lg:pb-24">
      <div className="container-x">
        <SectionHeader
          id="aiapps-title"
          eyebrow={a.eyebrow}
          title={a.title}
          lead={a.lead}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal className="h-full">
            <AppCard
              img="/images/v3/ai-vision.webp"
              alt={a.vision.alt}
              icon={Eye}
              title={a.vision.title}
              body={a.vision.body}
              bullets={a.vision.bullets}
              footer={
                <button
                  type="button"
                  onClick={() =>
                    setOpen({
                      src: GAUGE_APP,
                      alt: a.vision.productCaption,
                      caption: a.vision.productCaption,
                    })
                  }
                  className="group flex w-full items-center gap-4 rounded-2xl border border-line-strong bg-ink-950/50 p-3 text-left transition-colors hover:border-leaf-500/40"
                >
                  <span className="relative w-32 shrink-0 overflow-hidden rounded-lg border border-line sm:w-44">
                    <img
                      src={GAUGE_APP}
                      alt=""
                      width={1202}
                      height={664}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[1202/664] w-full object-cover object-left-top"
                    />
                    <span className="absolute inset-0 flex items-center justify-center bg-ink-950/50 opacity-0 transition-opacity group-hover:opacity-100">
                      <Maximize2 aria-hidden className="size-4 text-white" />
                    </span>
                  </span>
                  <span className="min-w-0">
                    <span className="inline-flex rounded-full bg-leaf-500/15 px-2 py-0.5 text-[11px] font-semibold text-leaf-300">
                      {a.vision.productLabel}
                    </span>
                    <span className="mt-1.5 block text-sm leading-snug text-slate-300">
                      {a.vision.productCaption}
                    </span>
                  </span>
                </button>
              }
            />
          </Reveal>

          <Reveal className="h-full" delay={0.08}>
            <AppCard
              img="/images/v3/ai-chat.webp"
              alt={a.chat.alt}
              icon={MessageSquareText}
              title={a.chat.title}
              body={a.chat.body}
              bullets={a.chat.bullets}
              footer={
                <figure className="rounded-2xl border border-line-strong bg-ink-950/50 p-4">
                  <figcaption className="text-[11px] font-semibold tracking-wider text-slate-500 uppercase">
                    {a.chat.sampleLabel}
                  </figcaption>
                  <blockquote
                    lang={lang}
                    className="mt-2 font-display text-base text-white sm:text-lg"
                  >
                    “{a.chat.sample}”
                    <span
                      aria-hidden
                      className="ml-1 inline-block h-5 w-[2px] translate-y-1 animate-blink bg-leaf-400"
                    />
                  </blockquote>
                </figure>
              }
            />
          </Reveal>
        </div>
      </div>
      <Lightbox
        image={open}
        closeLabel={t.operators.close}
        onClose={() => setOpen(null)}
      />
    </section>
  );
}
