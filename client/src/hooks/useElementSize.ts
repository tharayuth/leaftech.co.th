import { useEffect, useState, type RefObject } from "react";

export interface Size {
  width: number;
  height: number;
}

export function useElementSize(ref: RefObject<Element | null>): Size {
  const [size, setSize] = useState<Size>({ width: 0, height: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const r = el.getBoundingClientRect();
      setSize(prev =>
        prev.width === r.width && prev.height === r.height
          ? prev
          : { width: r.width, height: r.height }
      );
    };
    update();
    if (typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [ref]);

  return size;
}
