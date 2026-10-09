import type { TwinId } from "@/lib/site";

export interface TitledText {
  title: string;
  body: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface PipelineStep extends TitledText {
  chips: string[];
}

export interface TwinCopy {
  label: string;
  title: string;
  bullets: string[];
}

export interface Shot extends TitledText {
  alt: string;
}

export interface McpStep {
  tool: string;
  text: string;
}

export const FEATURE_IDS = [
  "points",
  "alerts",
  "flowbox",
  "iotdash",
  "twins",
  "history",
  "access",
  "share",
] as const;
export type FeatureId = (typeof FEATURE_IDS)[number];

export const AI_POINT_IDS = ["build", "analyse", "health", "proof"] as const;
export type AiPointId = (typeof AI_POINT_IDS)[number];

export const INDUSTRY_IDS = [
  "datacenter",
  "building",
  "coldstore",
  "flood",
  "factory",
] as const;
export type IndustryId = (typeof INDUSTRY_IDS)[number];

export const SHOT_IDS = ["hall", "ops", "rack"] as const;
export type ShotId = (typeof SHOT_IDS)[number];

export interface SiteCopy {
  meta: { title: string; description: string };
  nav: {
    notibox: string;
    twin: string;
    ai: string;
    appboox: string;
    contact: string;
    demo: string;
    menu: string;
    close: string;
    language: string;
    skip: string;
  };
  hero: {
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    sub: string;
    ctaDemo: string;
    ctaTalk: string;
    frameLabel: string;
    live: string;
    caption: string;
  };
  twinFrame: { load: string; loading: string; openFull: string };
  trust: Stat[];
  notibox: {
    eyebrow: string;
    title: string;
    lead: string;
    boxAlt: string;
    boxBadges: string[];
    steps: PipelineStep[];
    featuresTitle: string;
    features: Record<FeatureId, TitledText>;
  };
  twin: {
    eyebrow: string;
    title: string;
    lead: string;
    explore: string;
    simulated: string;
    tablistLabel: string;
    boardLabel: string;
    boardHint: string;
    tabs: Record<TwinId, TwinCopy>;
  };
  operators: {
    eyebrow: string;
    title: string;
    lead: string;
    realShot: string;
    enlarge: string;
    close: string;
    shots: Record<ShotId, Shot>;
  };
  aiNative: {
    eyebrow: string;
    title: string;
    lead: string;
    points: Record<AiPointId, TitledText>;
    clientsLabel: string;
    anyClient: string;
    imageAlt: string;
    session: {
      label: string;
      connected: string;
      user: string;
      steps: McpStep[];
      reply: string;
      illustrative: string;
    };
  };
  industries: {
    eyebrow: string;
    title: string;
    lead: string;
    liveDemo: string;
    demoBoards: string;
    items: Record<IndustryId, TitledText>;
  };
  aiApps: {
    eyebrow: string;
    title: string;
    lead: string;
    vision: TitledText & {
      bullets: string[];
      productLabel: string;
      productCaption: string;
      alt: string;
    };
    chat: TitledText & {
      bullets: string[];
      sampleLabel: string;
      sample: string;
      alt: string;
    };
  };
  appboox: {
    eyebrow: string;
    title: string;
    lead: string;
    stats: Stat[];
    features: string[];
    note: string;
    cta: string;
    imageAlt: string;
    urlPill: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    lead: string;
    phone: string;
    email: string;
    facebook: string;
    city: string;
    demoTitle: string;
    demoBody: string;
  };
  footer: {
    tagline: string;
    explore: string;
    products: string;
    contact: string;
    demo: string;
    rights: string;
  };
}
