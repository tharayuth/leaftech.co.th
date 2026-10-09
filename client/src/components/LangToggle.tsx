import { useLang } from "@/i18n/LangProvider";
import { LANGS } from "@/lib/lang";
import { cn } from "@/lib/utils";

const LABELS = { en: "EN", th: "TH" } as const;
const NAMES = { en: "English", th: "ภาษาไทย" } as const;

export function LangToggle({ className }: { className?: string }) {
  const { lang, setLang, t } = useLang();
  return (
    <div
      role="group"
      aria-label={t.nav.language}
      className={cn(
        "flex items-center rounded-full border border-line-strong bg-white/[0.03] p-0.5",
        className
      )}
    >
      {LANGS.map(l => (
        <button
          key={l}
          type="button"
          lang={l}
          aria-pressed={lang === l}
          aria-label={NAMES[l]}
          onClick={() => setLang(l)}
          className={cn(
            "h-7 min-w-9 rounded-full px-2.5 font-display text-xs font-semibold transition-colors",
            lang === l
              ? "bg-white text-ink-950"
              : "text-slate-400 hover:text-white"
          )}
        >
          {LABELS[l]}
        </button>
      ))}
    </div>
  );
}
