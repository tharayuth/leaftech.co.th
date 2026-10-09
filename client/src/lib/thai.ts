// Thai has no spaces between words; browsers guess line breaks with a dictionary and
// split loanwords that are not in it (แด|ชบอร์ด). These helpers keep such words intact.

const WORD_JOINER = "\u2060";
/** Thai combining vowels and tone marks — never put a joiner in front of these. */
const COMBINING = /[ัิ-ฺ็-๎]/;

/** Glue the characters of `word` with WORD JOINER (U+2060), between grapheme clusters only. */
export function joinWord(word: string): string {
  return [...word]
    .map((ch, i) => (i > 0 && !COMBINING.test(ch) ? WORD_JOINER + ch : ch))
    .join("");
}

/** Replace every occurrence of the given words in `text` with their unbreakable form. */
export function keepWordsTogether(
  text: string,
  words: readonly string[]
): string {
  // longest first so a short word never splits a longer one that contains it
  const sorted = [...words].sort((a, b) => b.length - a.length);
  let out = text;
  for (const w of sorted) {
    if (out.includes(w)) out = out.split(w).join(joinWord(w));
  }
  return out;
}

/** Deep-map every string in a copy object. Returns a new object; the input is not touched. */
export function mapStrings<T>(value: T, fn: (s: string) => string): T {
  if (typeof value === "string") return fn(value) as T;
  if (Array.isArray(value)) return value.map(v => mapStrings(v, fn)) as T;
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([k, v]) => [k, mapStrings(v, fn)])
    ) as T;
  }
  return value;
}

/** Loanwords used on the site that the line breaker tends to cut in half. */
export const THAI_LOANWORDS = [
  "แดชบอร์ด",
  "วิดเจ็ต",
  "เรียลไทม์",
  "ดาต้าเซ็นเตอร์",
  "เซิร์ฟเวอร์",
  "แพลตฟอร์ม",
  "คอนเทนเนอร์",
  "โปรโตคอล",
  "ชิลเลอร์",
  "คอมเพรสเซอร์",
  "เซนเซอร์",
  "แคมปัส",
  "เรนเดอร์",
  "ลอจิก",
  "โมเดล",
  "เดโม",
  "ล็อกอิน",
  "ฟังก์ชัน",
  "อัปเดต",
  "มอนิเตอร์",
  "มิเตอร์",
  "คลัสเตอร์",
  "คลาวด์",
  "ไซต์",
  "แร็ค",
  "บอร์ด",
] as const;
