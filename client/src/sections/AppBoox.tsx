import { ButtonLink } from "@/components/Button";
import { BoxMark } from "@/components/icons";
import { Phrases } from "@/components/Phrases";
import { Reveal } from "@/components/Reveal";
import { useLang } from "@/i18n/LangProvider";
import { APPBOOX_URL } from "@/lib/site";
import { Check, Info, Lock } from "lucide-react";

export function AppBoox() {
  const { t } = useLang();
  const a = t.appboox;

  return (
    <section
      id="appboox"
      aria-labelledby="appboox-title"
      className="relative py-20 lg:py-24"
    >
      <div className="container-x">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[28px] border border-line-strong bg-gradient-to-br from-ink-850 via-ink-900 to-[#03231c] p-6 sm:p-10 lg:p-14">
            <div aria-hidden className="absolute inset-0 -z-10">
              <div className="bg-dots absolute inset-0 opacity-40 [mask-image:linear-gradient(to_left,#000,transparent_70%)]" />
              <div className="absolute -top-40 -right-40 h-[520px] w-[520px] bg-[radial-gradient(closest-side,rgb(34_211_238/0.18),transparent)]" />
              <div className="absolute -bottom-48 -left-24 h-[520px] w-[620px] bg-[radial-gradient(closest-side,rgb(34_197_94/0.16),transparent)]" />
            </div>

            <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-14">
              <div className="lg:col-span-6">
                <p className="eyebrow text-sky-glow">
                  <BoxMark className="size-4" />
                  {a.eyebrow}
                </p>
                <h2
                  id="appboox-title"
                  className="mt-4 text-[clamp(2.1rem,1.3rem+3vw,3.6rem)] leading-[1.04] font-semibold tracking-[-0.03em]"
                >
                  <Phrases text={a.title} />
                </h2>
                <p className="lead mt-5 text-base text-slate-300/90 sm:text-lg">
                  {a.lead}
                </p>

                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {a.features.map(f => (
                    <li key={f} className="flex gap-2.5 text-sm text-slate-200">
                      <Check
                        aria-hidden
                        className="mt-0.5 size-4 shrink-0 text-sky-glow"
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-8 flex gap-2.5 rounded-xl border border-line bg-white/[0.03] p-3.5 text-sm leading-relaxed text-slate-400">
                  <Info
                    aria-hidden
                    className="mt-0.5 size-4 shrink-0 text-leaf-400"
                  />
                  <span>{a.note}</span>
                </p>

                <div className="mt-8">
                  <ButtonLink href={APPBOOX_URL} external size="lg">
                    {a.cta}
                  </ButtonLink>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative overflow-hidden rounded-2xl border border-line-strong">
                  <img
                    src="/images/v3/appboox.webp"
                    alt={a.imageAlt}
                    width={1600}
                    height={900}
                    loading="lazy"
                    decoding="async"
                    className="aspect-video w-full object-cover"
                  />
                  <div className="absolute top-3 left-3 flex max-w-[calc(100%-1.5rem)] items-center gap-2 rounded-full border border-white/15 bg-ink-950/85 px-3 py-1.5 font-mono text-xs text-slate-200">
                    <Lock
                      aria-hidden
                      className="size-3 shrink-0 text-leaf-400"
                    />
                    <span className="truncate">
                      <span className="text-slate-500">https://</span>
                      {a.urlPill}
                    </span>
                  </div>
                </div>
                <dl className="mt-4 grid grid-cols-2 gap-3">
                  {a.stats.map(s => (
                    <div
                      key={s.value}
                      className="card flex flex-col-reverse rounded-2xl p-4 sm:p-5"
                    >
                      <dt className="mt-1 text-xs leading-snug text-slate-400">
                        {s.label}
                      </dt>
                      <dd className="font-display text-lg font-semibold text-white sm:text-2xl">
                        {s.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
