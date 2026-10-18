// Fixed facts and links used across the page (not translated).

export const DEMO_URL =
  "https://notibox-dc2.appboox.com/p/DM0Hl71_kmmsPuAUgvclM4JfWKn97m-p3HmFzG-Da8Y/b/f3e42f25-008d-4fbb-a30f-3d2db205ec0f";
export const DEMO_HOST = "notibox-dc2.appboox.com";

/** Public (view-only) share links of the hosted Notibox v3 demos, per industry card. Cold storage has no hosted demo yet. */
export const INDUSTRY_DEMO: Partial<Record<"datacenter" | "building" | "coldstore" | "flood" | "factory", string>> = {
  datacenter: DEMO_URL,
  building:
    "https://notibox-e.appboox.com/p/AuJPwMmWpU8MUVlQx2BWh6IGu_7v4kMJJtSYdPGMjYU/b/86d4d588-8617-431b-8181-a169ef97c3a2",
  flood:
    "https://flood2026.appboox.com/p/eg-eMw0rEsrP18OvfX5OGQDQMbUEq76mGkXEb4jEZWE/b/1695cfa0-27c0-4988-9634-c0b3b09b5a53",
  factory:
    "https://notibox-by.appboox.com/p/gw7wopTL_ki2reXbW7_ITkgoS0IzSqb5mLiceCMQBLI/b/62ab742b-1d39-4c39-a345-982341aa31d6",
};
export const APPBOOX_URL = "https://www.appboox.com";

export const CONTACT = {
  phone: "099-051-5359",
  phoneHref: "tel:0990515359",
  email: "tharayuth@leaftech.co.th",
  emailHref: "mailto:tharayuth@leaftech.co.th",
  facebook: "facebook.com/aiot.leaftech",
  facebookHref: "https://www.facebook.com/aiot.leaftech",
} as const;

export const COMPANY = {
  en: "Leaftech Co., Ltd.",
  th: "บริษัท ลีฟเทค จำกัด",
} as const;

export const LOGO_SRC = "/images/leaftech-logo-transparent.gif";

export const SECTION_IDS = [
  "notibox",
  "twin",
  "ai",
  "appboox",
  "contact",
] as const;
export type SectionId = (typeof SECTION_IDS)[number];

export const TWIN_IDS = ["tower", "hall", "campus", "cctv", "rack"] as const;
export type TwinId = (typeof TWIN_IDS)[number];

export const twinSrc = (id: TwinId) => `/twin/${id}.html`;
export const twinPoster = (id: TwinId) => `/images/v3/twin-${id}.webp`;

/** Board width each widget is laid out for (the hall switches to a compact layout below 1250 px). */
export const TWIN_DESIGN_WIDTH: Partial<Record<TwinId, number>> = {
  hall: 1280,
};

/** Real screenshot of the board each twin lives on in the DC2 demo. */
export const TWIN_BOARD_SHOT: Record<TwinId, string> = {
  tower: "/images/v3/ui-tower.webp",
  hall: "/images/v3/ui-hall3d.webp",
  campus: "/images/v3/ui-campus.webp",
  cctv: "/images/v3/ui-cctv.webp",
  rack: "/images/v3/ui-racka5.webp",
};
