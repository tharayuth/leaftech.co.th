import { useElementSize } from "@/hooks/useElementSize";
import { useInView } from "@/hooks/useInView";
import {
  DESKTOP_POINTER_QUERY,
  REDUCED_MOTION_QUERY,
  useMediaQuery,
} from "@/hooks/useMediaQuery";
import { useLang } from "@/i18n/LangProvider";
import { cn } from "@/lib/utils";
import { Loader2, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface TwinFrameProps {
  src: string;
  poster: string;
  /** accessible name of the embedded widget */
  title: string;
  /** above-the-fold poster: load eagerly */
  priority?: boolean;
  /** narrowest board width the widget is laid out for; smaller frames scale it down */
  designWidth?: number;
  className?: string;
}

/** The widgets lay out for a board ≥ ~1100 px wide; narrower frames render them at that size and scale down. */
const DEFAULT_DESIGN_WIDTH = 1100;
/** Hide the poster a moment after load so the first WebGL frame is on screen. */
const REVEAL_DELAY_MS = 450;

/**
 * Live Notibox widget in an iframe, shown over a poster screenshot.
 * - Mounted only while near the viewport (unmounted again when scrolled away).
 * - Starts by itself on a desktop with a mouse; on touch devices or with
 *   prefers-reduced-motion it waits for the visitor to press "Run live 3D".
 */
export function TwinFrame({
  src,
  poster,
  title,
  priority = false,
  designWidth = DEFAULT_DESIGN_WIDTH,
  className,
}: TwinFrameProps) {
  const { t } = useLang();
  const wrapRef = useRef<HTMLDivElement>(null);
  const near = useInView(wrapRef, "250px 0px");
  const desktop = useMediaQuery(DESKTOP_POINTER_QUERY);
  const reduced = useMediaQuery(REDUCED_MOTION_QUERY);
  const autoStart = desktop && !reduced;
  const [optedIn, setOptedIn] = useState(false);
  const [ready, setReady] = useState(false);
  const { width, height } = useElementSize(wrapRef);

  const revealTimer = useRef<number | undefined>(undefined);

  const mounted = near && (autoStart || optedIn);

  useEffect(() => {
    if (mounted) return;
    window.clearTimeout(revealTimer.current);
    setReady(false);
  }, [mounted]);

  useEffect(() => () => window.clearTimeout(revealTimer.current), []);

  const scale = width > 0 && width < designWidth ? width / designWidth : 1;
  const frameStyle =
    scale < 1
      ? {
          width: designWidth,
          height: height / scale,
          transform: `scale(${scale})`,
          transformOrigin: "0 0",
        }
      : { width: "100%", height: "100%" };

  const onLoad = () => {
    window.clearTimeout(revealTimer.current);
    revealTimer.current = window.setTimeout(
      () => setReady(true),
      REVEAL_DELAY_MS
    );
  };

  return (
    <div
      ref={wrapRef}
      className={cn("relative isolate overflow-hidden bg-[#070d1a]", className)}
    >
      <img
        src={poster}
        alt=""
        aria-hidden
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        className={cn(
          "absolute inset-0 size-full object-cover transition-opacity duration-500",
          ready ? "opacity-0" : "opacity-100"
        )}
      />

      {mounted && (
        <iframe
          key={src}
          src={src}
          title={title}
          loading="lazy"
          onLoad={onLoad}
          className={cn(
            "absolute top-0 left-0 border-0 transition-opacity duration-500",
            ready ? "opacity-100" : "opacity-0"
          )}
          // same color-scheme as the widget page keeps the iframe canvas transparent
          style={{ ...frameStyle, colorScheme: "normal" }}
          allow="fullscreen"
        />
      )}

      {mounted && !ready && (
        <div className="pointer-events-none absolute bottom-3 left-3 flex items-center gap-2 rounded-full border border-line bg-ink-950/85 px-3 py-1.5 text-xs text-slate-300">
          <Loader2
            aria-hidden
            className="size-3.5 animate-spin text-leaf-400"
          />
          {t.twinFrame.loading}
        </div>
      )}

      {!mounted && !autoStart && (
        <button
          type="button"
          onClick={() => setOptedIn(true)}
          className="group absolute inset-0 flex items-center justify-center bg-gradient-to-t from-ink-950/70 via-ink-950/10 to-transparent"
        >
          <span className="flex items-center gap-2.5 rounded-full border border-white/15 bg-ink-950/85 py-2 pr-4 pl-2 font-display text-sm font-semibold text-white shadow-2xl transition-colors group-hover:border-leaf-400/60">
            <span className="flex size-8 items-center justify-center rounded-full bg-leaf-500 text-ink-950">
              <Play
                aria-hidden
                className="size-4 translate-x-px fill-current"
              />
            </span>
            {t.twinFrame.load}
          </span>
        </button>
      )}
    </div>
  );
}
