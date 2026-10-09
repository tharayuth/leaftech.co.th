import { useLang } from "@/i18n/LangProvider";
import {
  APPBOOX_URL,
  COMPANY,
  CONTACT,
  DEMO_URL,
  LOGO_SRC,
  SECTION_IDS,
} from "@/lib/site";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

function FooterLink({
  href,
  children,
  external,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="inline-flex items-center gap-1 text-sm text-slate-400 transition-colors hover:text-white"
    >
      {children}
      {external && <ArrowUpRight aria-hidden className="size-3.5" />}
    </a>
  );
}

function Column({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <p className="font-display text-sm font-semibold text-white">{title}</p>
      <ul className="mt-4 space-y-2.5">{children}</ul>
    </div>
  );
}

export function Footer() {
  const { t } = useLang();
  const f = t.footer;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink-950">
      <div className="container-x grid grid-cols-2 gap-x-6 gap-y-10 py-14 lg:grid-cols-12 lg:gap-8">
        <div className="col-span-2 lg:col-span-5">
          <img
            src={LOGO_SRC}
            alt="Leaftech"
            width={1238}
            height={500}
            loading="lazy"
            className="h-11 w-auto"
          />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
            {f.tagline}
          </p>
        </div>
        <div className="lg:col-span-2">
          <Column title={f.explore}>
            {SECTION_IDS.map(id => (
              <li key={id}>
                <FooterLink href={`#${id}`}>{t.nav[id]}</FooterLink>
              </li>
            ))}
          </Column>
        </div>
        <div className="lg:col-span-2">
          <Column title={f.products}>
            <li>
              <FooterLink href={DEMO_URL} external>
                {f.demo}
              </FooterLink>
            </li>
            <li>
              <FooterLink href={APPBOOX_URL} external>
                AppBoox
              </FooterLink>
            </li>
          </Column>
        </div>
        <div className="col-span-2 sm:col-span-1 lg:col-span-3">
          <Column title={f.contact}>
            <li>
              <FooterLink href={CONTACT.phoneHref}>{CONTACT.phone}</FooterLink>
            </li>
            <li>
              <FooterLink href={CONTACT.emailHref}>{CONTACT.email}</FooterLink>
            </li>
            <li>
              <FooterLink href={CONTACT.facebookHref} external>
                {CONTACT.facebook}
              </FooterLink>
            </li>
          </Column>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="container-x flex flex-col gap-1.5 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {COMPANY.en} · <span lang="th">{COMPANY.th}</span> —{" "}
            {f.rights}
          </p>
          <p>{t.contact.city}</p>
        </div>
      </div>
    </footer>
  );
}
