import { useLang } from "@/i18n/LangProvider";
import { cn } from "@/lib/utils";

const SPLIT = /(\s+|\u200B)/;

/**
 * Heading text. In Thai, lines break only between phrases — at spaces or a U+200B hint in
 * the copy — so a heading never wraps in the middle of a word. Each phrase is an inline
 * block that may still wrap inside itself if it is wider than the line.
 */
export function Phrases({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const { lang } = useLang();
  if (lang !== "th")
    return className ? <span className={className}>{text}</span> : <>{text}</>;
  return (
    <>
      {text.split(SPLIT).map((part, i) => {
        if (part === "\u200B") return <wbr key={i} />;
        if (!part) return null;
        if (/^\s+$/.test(part)) return " ";
        return (
          <span key={i} className={cn("inline-block max-w-full", className)}>
            {part}
          </span>
        );
      })}
    </>
  );
}
