import { describe, expect, it } from "vitest";
import { isLang, resolveInitialLang, withLangParam } from "./lang";

describe("resolveInitialLang", () => {
  it("defaults to English", () => {
    expect(resolveInitialLang("", null)).toBe("en");
  });

  it("uses the remembered choice", () => {
    expect(resolveInitialLang("", "th")).toBe("th");
  });

  it("lets ?lang= override the remembered choice", () => {
    expect(resolveInitialLang("?lang=th", "en")).toBe("th");
    expect(resolveInitialLang("?utm=x&lang=EN", "th")).toBe("en");
  });

  it("ignores unknown values", () => {
    expect(resolveInitialLang("?lang=fr", "de")).toBe("en");
    expect(resolveInitialLang("?lang=fr", "th")).toBe("th");
  });
});

describe("isLang", () => {
  it("accepts only supported codes", () => {
    expect(isLang("en")).toBe(true);
    expect(isLang("th")).toBe(true);
    expect(isLang("TH")).toBe(false);
    expect(isLang(undefined)).toBe(false);
  });
});

describe("withLangParam", () => {
  it("rewrites an existing lang param and keeps the rest", () => {
    expect(withLangParam("https://leaftech.co.th/?lang=th&x=1#ai", "en")).toBe(
      "/?lang=en&x=1#ai"
    );
  });

  it("leaves URLs without a lang param alone", () => {
    expect(withLangParam("https://leaftech.co.th/#contact", "th")).toBeNull();
  });
});
