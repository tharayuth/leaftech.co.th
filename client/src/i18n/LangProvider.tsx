import { copy, type SiteCopy } from "@/content";
import {
  readStoredLang,
  resolveInitialLang,
  storeLang,
  withLangParam,
  type Lang,
} from "@/lib/lang";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

interface LangContextValue {
  lang: Lang;
  t: SiteCopy;
  setLang: (lang: Lang) => void;
}

const LangContext = createContext<LangContextValue | null>(null);

function setMeta(selector: string, content: string) {
  document.querySelector(selector)?.setAttribute("content", content);
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() =>
    resolveInitialLang(window.location.search, readStoredLang())
  );
  const t = copy[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.meta.title;
    setMeta('meta[name="description"]', t.meta.description);
  }, [lang, t]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    storeLang(next);
    const href = withLangParam(window.location.href, next);
    if (href) window.history.replaceState(null, "", href);
  }, []);

  const value = useMemo(() => ({ lang, t, setLang }), [lang, t, setLang]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside <LangProvider>");
  return ctx;
}
