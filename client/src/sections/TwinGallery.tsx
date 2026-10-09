import { BrowserFrame } from "@/components/BrowserFrame";
import { Lightbox, type LightboxImage } from "@/components/Lightbox";
import { ButtonLink } from "@/components/Button";
import { Phrases } from "@/components/Phrases";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { TwinFrame } from "@/components/TwinFrame";
import { useLang } from "@/i18n/LangProvider";
import {
  DEMO_HOST,
  DEMO_URL,
  TWIN_BOARD_SHOT,
  TWIN_DESIGN_WIDTH,
  TWIN_IDS,
  twinPoster,
  twinSrc,
  type TwinId,
} from "@/lib/site";
import { cn } from "@/lib/utils";
import {
  Building2,
  Cctv,
  Check,
  LayoutGrid,
  MapPinned,
  Maximize2,
  Server,
  type LucideIcon,
} from "lucide-react";
import { useRef, useState, type KeyboardEvent } from "react";

const ICONS: Record<TwinId, LucideIcon> = {
  tower: Building2,
  hall: LayoutGrid,
  campus: MapPinned,
  cctv: Cctv,
  rack: Server,
};

export function TwinGallery() {
  const { t } = useLang();
  const [active, setActive] = useState<TwinId>("hall");
  const tabRefs = useRef<Partial<Record<TwinId, HTMLButtonElement | null>>>({});
  const tab = t.twin.tabs[active];
  const [zoom, setZoom] = useState<LightboxImage | null>(null);
  const boardAlt = `${tab.title} — ${t.twin.boardLabel}`;

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const i = TWIN_IDS.indexOf(active);
    const next =
      e.key === "ArrowRight"
        ? TWIN_IDS[(i + 1) % TWIN_IDS.length]
        : e.key === "ArrowLeft"
          ? TWIN_IDS[(i - 1 + TWIN_IDS.length) % TWIN_IDS.length]
          : e.key === "Home"
            ? TWIN_IDS[0]
            : e.key === "End"
              ? TWIN_IDS[TWIN_IDS.length - 1]
              : null;
    if (!next) return;
    e.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section
      id="twin"
      aria-labelledby="twin-title"
      className="relative isolate py-20 lg:py-24"
    >
      <div
        aria-hidden
        className="bg-grid fade-y absolute inset-0 -z-10 opacity-60"
      />
      <div className="container-x">
        <SectionHeader
          id="twin-title"
          eyebrow={t.twin.eyebrow}
          title={t.twin.title}
          lead={t.twin.lead}
          actions={
            <ButtonLink href={DEMO_URL} external variant="secondary">
              {t.twin.explore}
            </ButtonLink>
          }
        />

        <Reveal className="mt-12">
          <div
            role="tablist"
            aria-label={t.twin.tablistLabel}
            onKeyDown={onKeyDown}
            className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0 [&::-webkit-scrollbar]:hidden"
          >
            {TWIN_IDS.map(id => {
              const Icon = ICONS[id];
              const selected = id === active;
              return (
                <button
                  key={id}
                  ref={el => {
                    tabRefs.current[id] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`twin-tab-${id}`}
                  aria-selected={selected}
                  aria-controls="twin-panel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(id)}
                  className={cn(
                    "flex h-10 shrink-0 items-center gap-2 rounded-full border px-4 text-sm font-medium transition-colors",
                    selected
                      ? "border-leaf-500/50 bg-leaf-500/[0.12] text-white"
                      : "border-line text-slate-400 hover:border-line-strong hover:text-white"
                  )}
                >
                  <Icon
                    aria-hidden
                    className={cn(
                      "size-4",
                      selected ? "text-leaf-400" : "text-slate-500"
                    )}
                  />
                  {t.twin.tabs[id].label}
                </button>
              );
            })}
          </div>

          <div
            id="twin-panel"
            role="tabpanel"
            aria-labelledby={`twin-tab-${active}`}
            className="mt-5"
          >
            <BrowserFrame
              address={DEMO_HOST}
              label={tab.title}
              badge={
                <span className="rounded-full border border-amber-400/25 bg-amber-400/10 px-2 py-0.5 text-[11px] font-medium text-amber-200">
                  {t.twin.simulated}
                </span>
              }
            >
              <TwinFrame
                key={active}
                src={twinSrc(active)}
                poster={twinPoster(active)}
                designWidth={TWIN_DESIGN_WIDTH[active]}
                title={`Notibox v3 — ${tab.title}`}
                className="aspect-[4/3] sm:aspect-video"
              />
            </BrowserFrame>

            <div className="mt-7 grid gap-6 lg:grid-cols-12 lg:gap-10">
              <h3 className="text-xl font-semibold lg:col-span-4 lg:text-2xl">
                <Phrases text={tab.title} />
              </h3>
              <ul className="grid gap-4 sm:grid-cols-3 lg:col-span-8 lg:row-span-2">
                {tab.bullets.map(b => (
                  <li
                    key={b}
                    className="flex gap-2.5 text-sm leading-relaxed text-slate-400"
                  >
                    <Check
                      aria-hidden
                      className="mt-0.5 size-4 shrink-0 text-leaf-400"
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() =>
                  setZoom({
                    src: TWIN_BOARD_SHOT[active],
                    alt: boardAlt,
                    caption: boardAlt,
                  })
                }
                className="group flex items-center gap-3 rounded-xl border border-line bg-white/[0.02] p-2 text-left transition-colors hover:border-leaf-500/40 sm:max-w-sm lg:col-span-4"
              >
                <span className="relative w-28 shrink-0 overflow-hidden rounded-md border border-line">
                  <img
                    src={TWIN_BOARD_SHOT[active]}
                    alt=""
                    width={1920}
                    height={1080}
                    loading="lazy"
                    decoding="async"
                    className="aspect-video w-full object-cover"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-ink-950/50 opacity-0 transition-opacity group-hover:opacity-100">
                    <Maximize2 aria-hidden className="size-4 text-white" />
                  </span>
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-medium text-slate-200">
                    {t.twin.boardLabel}
                  </span>
                  <span className="mt-0.5 block text-xs text-slate-500">
                    {t.twin.boardHint}
                  </span>
                </span>
              </button>
            </div>
          </div>
        </Reveal>
      </div>
      <Lightbox
        image={zoom}
        closeLabel={t.operators.close}
        onClose={() => setZoom(null)}
      />
    </section>
  );
}
