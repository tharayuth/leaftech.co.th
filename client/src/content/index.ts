import type { Lang } from "@/lib/lang";
import { keepWordsTogether, mapStrings, THAI_LOANWORDS } from "@/lib/thai";
import { en } from "./en";
import { th } from "./th";
import type { SiteCopy } from "./types";

// Thai copy with loanwords glued against mid-word line breaks (document meta left as written).
const thDisplay: SiteCopy = {
  ...mapStrings(th, s => keepWordsTogether(s, THAI_LOANWORDS)),
  meta: th.meta,
};

export const copy: Record<Lang, SiteCopy> = { en, th: thDisplay };
export type { SiteCopy } from "./types";
