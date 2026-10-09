import { useEffect, useState } from "react";

/** Scroll-spy: id of the section that currently crosses the upper third of the viewport. */
export function useActiveSection(ids: readonly string[]): string | null {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const visible = new Map<string, boolean>();
    const io = new IntersectionObserver(
      entries => {
        for (const e of entries) visible.set(e.target.id, e.isIntersecting);
        setActive(ids.find(id => visible.get(id)) ?? null);
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    }
    return () => io.disconnect();
  }, [ids]);

  return active;
}
