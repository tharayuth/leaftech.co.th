// Fixed facts and links used across the page (not translated).

export const DEMO_URL =
  "https://notibox-dc2.appboox.com/p/DM0Hl71_kmmsPuAUgvclM4JfWKn97m-p3HmFzG-Da8Y/b/f3e42f25-008d-4fbb-a30f-3d2db205ec0f";
export const DEMO_HOST = "notibox-dc2.appboox.com";
export const APPBOOX_URL = "https://www.appboox.com";

export const CONTACT = {
  phone: "099-051-5359",
  phoneHref: "tel:0990515359",
  email: "tharayuth@leaftech.co.th",
  emailHref: "mailto:tharayuth@leaftech.co.th",
  facebook: "facebook.com/notiboxaiot",
  facebookHref: "https://facebook.com/notiboxaiot",
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
