export const LANGS = ["en", "th"] as const;
export type Lang = (typeof LANGS)[number];

export const DEFAULT_LANG: Lang = "en";
export const LANG_STORAGE_KEY = "leaftech.lang";

export function isLang(value: unknown): value is Lang {
  return (
    typeof value === "string" && (LANGS as readonly string[]).includes(value)
  );
}

/** `?lang=` wins, then the remembered choice, then English. */
export function resolveInitialLang(
  search: string,
  stored: string | null
): Lang {
  const fromQuery = new URLSearchParams(search)
    .get("lang")
    ?.trim()
    .toLowerCase();
  if (isLang(fromQuery)) return fromQuery;
  const fromStore = stored?.trim().toLowerCase();
  if (isLang(fromStore)) return fromStore;
  return DEFAULT_LANG;
}

/** Keep an explicit `?lang=` in the address bar in step with the toggle (other params untouched). */
export function withLangParam(href: string, lang: Lang): string | null {
  const url = new URL(href);
  if (!url.searchParams.has("lang")) return null;
  url.searchParams.set("lang", lang);
  return url.pathname + url.search + url.hash;
}

export function readStoredLang(): string | null {
  try {
    return window.localStorage.getItem(LANG_STORAGE_KEY);
  } catch {
    return null; // private mode / blocked storage
  }
}

export function storeLang(lang: Lang): void {
  try {
    window.localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch {
    // storage unavailable — the choice just won't be remembered
  }
}
