import { m } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  /** element to render — keeps lists valid (`li` inside `ol`/`ul`) */
  as?: "div" | "li" | "article";
}

const EASE = [0.22, 1, 0.36, 1] as const;

/** Fade/slide in once when scrolled into view. MotionConfig(reducedMotion="user") drops the slide. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  as = "div",
}: RevealProps) {
  const props = {
    className,
    initial: { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.7, ease: EASE, delay },
  };
  if (as === "li") return <m.li {...props}>{children}</m.li>;
  if (as === "article") return <m.article {...props}>{children}</m.article>;
  return <m.div {...props}>{children}</m.div>;
}
