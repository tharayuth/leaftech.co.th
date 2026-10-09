import { X } from "lucide-react";
import { useEffect, useRef } from "react";

export interface LightboxImage {
  src: string;
  alt: string;
  caption?: string;
}

interface LightboxProps {
  image: LightboxImage | null;
  closeLabel: string;
  onClose: () => void;
}

/** Full-size image viewer on the native <dialog> (focus trap + Esc for free). */
export function Lightbox({ image, closeLabel, onClose }: LightboxProps) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dlg = ref.current;
    if (!dlg) return;
    if (image && !dlg.open) dlg.showModal();
    if (!image && dlg.open) dlg.close();
  }, [image]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={e => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="m-auto max-h-none max-w-none bg-transparent p-0 backdrop:bg-ink-950/90"
    >
      {image && (
        <figure className="relative flex max-h-[92vh] w-[min(96vw,1600px)] flex-col items-center gap-3 p-2">
          <img
            src={image.src}
            alt={image.alt}
            className="max-h-[82vh] w-auto max-w-full rounded-xl border border-line-strong object-contain shadow-2xl"
          />
          {image.caption && (
            <figcaption className="text-center text-sm text-slate-300">
              {image.caption}
            </figcaption>
          )}
          <button
            type="button"
            onClick={onClose}
            aria-label={closeLabel}
            className="absolute top-4 right-4 flex size-10 items-center justify-center rounded-full border border-white/15 bg-ink-950/90 text-white hover:border-leaf-400/60"
          >
            <X aria-hidden className="size-5" />
          </button>
        </figure>
      )}
    </dialog>
  );
}
