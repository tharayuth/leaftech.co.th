import { useCallback, useSyncExternalStore } from "react";

export function useMediaQuery(query: string): boolean {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    },
    [query]
  );
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false
  );
}

/** Large screen with a real mouse — where a live 3D iframe may start on its own. */
export const DESKTOP_POINTER_QUERY =
  "(min-width: 1024px) and (hover: hover) and (pointer: fine)";
export const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
