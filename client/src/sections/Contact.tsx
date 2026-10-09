import { ButtonLink } from "@/components/Button";
import { FacebookIcon } from "@/components/icons";
import { Phrases } from "@/components/Phrases";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { useLang } from "@/i18n/LangProvider";
import { COMPANY, CONTACT, DEMO_URL } from "@/lib/site";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

interface ContactCard {
  href: string;
  label: string;
  value: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  external?: boolean;
}

export function Contact() {
  const { t } = useLang();
  const c = t.contact;

  const cards: ContactCard[] = [
    {
      href: CONTACT.phoneHref,
      label: c.phone,
      value: CONTACT.phone,
      icon: Phone,
    },
    {
      href: CONTACT.emailHref,
      label: c.email,
      value: CONTACT.email,
      icon: Mail,
    },
    {
      href: CONTACT.facebookHref,
      label: c.facebook,
      value: CONTACT.facebook,
      icon: FacebookIcon,
      external: true,
    },
  ];

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative isolate overflow-hidden py-20 lg:py-24"
    >
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_60%_60%_at_30%_50%,#000,transparent)]" />
        <div className="absolute top-1/3 left-[-10%] h-[620px] w-[820px] bg-[radial-gradient(closest-side,rgb(34_197_94/0.16),transparent)]" />
      </div>

      <div className="container-x grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="lg:col-span-6">
          <SectionHeader
            id="contact-title"
            eyebrow={c.eyebrow}
            title={c.title}
            lead={c.lead}
          />
          <Reveal className="mt-9 border-l-2 border-leaf-500/60 pl-5">
            <p className="font-display text-lg font-semibold text-white">
              {COMPANY.en}
            </p>
            <p lang="th" className="font-thai text-base text-slate-300">
              {COMPANY.th}
            </p>
            <p className="mt-2 flex items-center gap-1.5 text-sm text-slate-500">
              <MapPin aria-hidden className="size-4" />
              {c.city}
            </p>
          </Reveal>
        </div>

        <div className="grid gap-4 lg:col-span-6">
          {cards.map(({ href, label, value, icon: Icon, external }, i) => (
            <Reveal key={href} delay={i * 0.07} y={16}>
              <a
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="card group flex items-center gap-4 rounded-2xl p-5 transition-colors hover:border-leaf-500/40 sm:gap-5 sm:p-6"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-leaf-500/10 text-leaf-400 ring-1 ring-leaf-500/25 transition-colors group-hover:bg-leaf-500 group-hover:text-ink-950">
                  <Icon aria-hidden className="size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs font-medium tracking-wider text-slate-500 uppercase">
                    {label}
                  </span>
                  <span className="mt-0.5 block font-display text-base font-semibold [overflow-wrap:anywhere] text-white sm:text-xl">
                    {value}
                  </span>
                </span>
                <ArrowUpRight
                  aria-hidden
                  className="hidden size-5 shrink-0 text-slate-500 transition-[color,transform] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-leaf-400 sm:block"
                />
              </a>
            </Reveal>
          ))}

          <Reveal delay={0.25} y={16}>
            <div className="flex flex-col gap-4 rounded-2xl border border-dashed border-line-strong p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div>
                <p className="font-display font-semibold text-white">
                  <Phrases text={c.demoTitle} />
                </p>
                <p className="mt-0.5 text-sm text-slate-400">{c.demoBody}</p>
              </div>
              <ButtonLink
                href={DEMO_URL}
                external
                variant="secondary"
                size="md"
              >
                {t.nav.demo}
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
