import { ButtonLink } from "@/components/Button";
import { LangToggle } from "@/components/LangToggle";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useLang } from "@/i18n/LangProvider";
import { DEMOS_URL, LOGO_SRC, SECTION_IDS } from "@/lib/site";
import { cn } from "@/lib/utils";
import { AnimatePresence, m } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export function Nav() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const links = SECTION_IDS.map(id => ({ id, label: t.nav[id] }));
  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-300",
        // solid fill, no backdrop-filter: the bar scrolls over live WebGL iframes
        solid
          ? "border-line bg-ink-950/95"
          : "border-transparent bg-transparent"
      )}
    >
      <a
        href="#main"
        className="sr-only rounded-md bg-white px-3 py-2 text-sm font-semibold text-ink-950 focus:not-sr-only focus:absolute focus:top-3 focus:left-3"
      >
        {t.nav.skip}
      </a>
      <nav className="container-x flex h-16 items-center gap-4 lg:h-[72px]">
        <a href="#top" className="shrink-0" aria-label="Leaftech">
          <img
            src={LOGO_SRC}
            alt="Leaftech"
            width={1238}
            height={500}
            className="h-9 w-auto lg:h-10"
          />
        </a>

        <ul className="mx-auto hidden items-center gap-1 lg:flex">
          {links.map(l => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? "location" : undefined}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  active === l.id
                    ? "bg-white/[0.07] text-white"
                    : "text-slate-400 hover:text-white"
                )}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <LangToggle />
          <ButtonLink
            href={DEMOS_URL}
            external
            size="sm"
            className="hidden sm:inline-flex"
          >
            {t.nav.demo}
          </ButtonLink>
          <button
            type="button"
            onClick={() => setOpen(o => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.nav.close : t.nav.menu}
            className="flex size-10 items-center justify-center rounded-full border border-line-strong text-slate-200 lg:hidden"
          >
            {open ? (
              <X aria-hidden className="size-5" />
            ) : (
              <Menu aria-hidden className="size-5" />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <m.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-line bg-ink-950 lg:hidden"
          >
            <ul className="container-x flex flex-col py-3">
              {links.map(l => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    className="flex h-12 items-center border-b border-line font-display text-base font-medium text-slate-200 last:border-0"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="container-x pb-5">
              <ButtonLink href={DEMOS_URL} external className="w-full">
                {t.nav.demo}
              </ButtonLink>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
