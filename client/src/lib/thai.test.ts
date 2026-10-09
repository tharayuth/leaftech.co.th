import { describe, expect, it } from "vitest";
import { joinWord, keepWordsTogether, mapStrings } from "./thai";

const WJ = "\u2060";

describe("joinWord", () => {
  it("puts a word joiner between base characters", () => {
    expect(joinWord("แอป")).toBe(`แ${WJ}อ${WJ}ป`);
  });

  it("never puts a joiner before a combining vowel or tone mark", () => {
    const joined = joinWord("วิดเจ็ต");
    expect(joined).toBe(`วิ${WJ}ด${WJ}เ${WJ}จ็${WJ}ต`);
    expect(joined.replaceAll(WJ, "")).toBe("วิดเจ็ต");
  });
});

describe("keepWordsTogether", () => {
  it("protects listed words and leaves the rest alone", () => {
    const out = keepWordsTogether("มีวิดเจ็ต 14 ตัว", ["วิดเจ็ต"]);
    expect(out).toBe(`มี${joinWord("วิดเจ็ต")} 14 ตัว`);
  });

  it("prefers the longest match", () => {
    const out = keepWordsTogether("แดชบอร์ด", ["บอร์ด", "แดชบอร์ด"]);
    expect(out).toBe(joinWord("แดชบอร์ด"));
  });

  it("is a no-op for English text", () => {
    expect(keepWordsTogether("Live dashboards", ["แดชบอร์ด"])).toBe(
      "Live dashboards"
    );
  });
});

describe("mapStrings", () => {
  it("maps nested strings without mutating the input", () => {
    const input = { a: "x", b: ["y", { c: "z" }], n: 1 };
    const out = mapStrings(input, s => s.toUpperCase());
    expect(out).toEqual({ a: "X", b: ["Y", { c: "Z" }], n: 1 });
    expect(input).toEqual({ a: "x", b: ["y", { c: "z" }], n: 1 });
  });
});
