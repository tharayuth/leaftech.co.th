import { Lightbox, type LightboxImage } from "@/components/Lightbox";
import { Phrases } from "@/components/Phrases";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import type { Shot, ShotId } from "@/content/types";
import { useLang } from "@/i18n/LangProvider";
import { cn } from "@/lib/utils";
import { Camera, Maximize2 } from "lucide-react";
import { useState } from "react";

const SRC: Record<ShotId, string> = {
  hall: "/images/v3/ui-hall.webp",
  ops: "/images/v3/ui-ops.webp",
  rack: "/images/v3/ui-rackb3.webp",
};

function ShotImage({
  id,
  shot,
  enlarge,
  onOpen,
  className,
  wide = false,
}: {
  id: ShotId;
  shot: Shot;
  enlarge: string;
  onOpen: (img: LightboxImage) => void;
  className?: string;
  /** tighter crop for screenshots with empty board margins */
  wide?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={() =>
        onOpen({ src: SRC[id], alt: shot.alt, caption: shot.title })
      }
      aria-label={`${enlarge}: ${shot.title}`}
      className={cn(
        "group relative block w-full overflow-hidden bg-ink-950 text-left",
        className
      )}
    >
      <img
        src={SRC[id]}
        alt={shot.alt}
        width={1920}
        height={1080}
        loading="lazy"
        decoding="async"
        className={cn(
          "size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]",
          wide ? "aspect-[1920/900]" : "aspect-video"
        )}
      />
      <span className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full border border-white/15 bg-ink-950/85 px-3 py-1.5 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
        <Maximize2 aria-hidden className="size-3.5" />
        {enlarge}
      </span>
    </button>
  );
}

function RealShotTag({ label }: { label: string }) {
  return (
    <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-line-strong bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-slate-300">
      <Camera aria-hidden className="size-3 text-leaf-400" />
      {label}
    </span>
  );
}

export function Operators() {
  const { t } = useLang();
  const o = t.operators;
  const [open, setOpen] = useState<LightboxImage | null>(null);

  return (
    <section aria-labelledby="ops-title" className="relative pb-20 lg:pb-24">
      <div className="container-x">
        <SectionHeader
          id="ops-title"
          eyebrow={o.eyebrow}
          title={o.title}
          lead={o.lead}
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-2 lg:gap-6">
          <Reveal
            as="article"
            className="card overflow-hidden rounded-3xl lg:col-span-2 lg:grid lg:grid-cols-12"
          >
            <ShotImage
              id="hall"
              shot={o.shots.hall}
              enlarge={o.enlarge}
              onOpen={setOpen}
              wide
              className="lg:col-span-8"
            />
            <div className="flex flex-col justify-center gap-4 p-6 sm:p-8 lg:col-span-4 lg:p-10">
              <RealShotTag label={o.realShot} />
              <h3 className="text-2xl font-semibold">
                <Phrases text={o.shots.hall.title} />
              </h3>
              <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
                {o.shots.hall.body}
              </p>
            </div>
          </Reveal>

          {(["ops", "rack"] as const).map((id, i) => (
            <Reveal
              as="article"
              key={id}
              delay={i * 0.08}
              className="card overflow-hidden rounded-3xl"
            >
              <ShotImage
                id={id}
                shot={o.shots[id]}
                enlarge={o.enlarge}
                onOpen={setOpen}
              />
              <div className="flex flex-col gap-3 p-6 sm:p-8">
                <RealShotTag label={o.realShot} />
                <h3 className="text-xl font-semibold">
                  <Phrases text={o.shots[id].title} />
                </h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  {o.shots[id].body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <Lightbox
        image={open}
        closeLabel={o.close}
        onClose={() => setOpen(null)}
      />
    </section>
  );
}
