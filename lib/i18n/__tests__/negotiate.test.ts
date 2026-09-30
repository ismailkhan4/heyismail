import { isBot, localeForCountry, primaryLanguage, redirectLocaleForRoot } from "../negotiate";

const CHROME = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0 Safari/537.36";

describe("primaryLanguage", () => {
  it.each([
    ["de-DE,de;q=0.9,en;q=0.8", "de"],
    ["en-US,en;q=0.9,de;q=0.8", "en"],
    ["it-IT", "it"],
    ["en;q=0.5,it;q=0.9", "it"],
    ["*", null],
    ["", null],
    [null, null],
  ])("%s → %s", (header, expected) => {
    expect(primaryLanguage(header)).toBe(expected);
  });
});

describe("localeForCountry", () => {
  it.each([
    ["DE", null, "de"],
    ["AT", null, "de"],
    ["IT", null, "it"],
    ["PK", null, null],
    ["US", null, null],
    [null, null, null],
    ["CH", "de-CH,fr;q=0.8", "de"],
    ["CH", "it-CH", "it"],
    ["CH", "fr-CH,en;q=0.5", null],
  ])("%s with %s → %s", (country, accept, expected) => {
    expect(localeForCountry(country, accept)).toBe(expected);
  });
});

describe("redirectLocaleForRoot", () => {
  it("redirects when the browser's top language is German or Italian", () => {
    expect(redirectLocaleForRoot({ userAgent: CHROME, acceptLanguage: "de-AT,de;q=0.9" })).toBe("de");
    expect(redirectLocaleForRoot({ userAgent: CHROME, acceptLanguage: "it-IT,it;q=0.9,en;q=0.8" })).toBe("it");
  });

  it("serves English to English and other browsers", () => {
    expect(redirectLocaleForRoot({ userAgent: CHROME, acceptLanguage: "en-US,de;q=0.9" })).toBeNull();
    expect(redirectLocaleForRoot({ userAgent: CHROME, acceptLanguage: "ur-PK,en;q=0.8" })).toBeNull();
    expect(redirectLocaleForRoot({ userAgent: CHROME })).toBeNull();
  });

  it("lets an explicit choice win over the browser language", () => {
    expect(redirectLocaleForRoot({ userAgent: CHROME, acceptLanguage: "de-DE", cookieLocale: "en" })).toBeNull();
    expect(redirectLocaleForRoot({ userAgent: CHROME, acceptLanguage: "en-US", cookieLocale: "it" })).toBe("it");
  });

  it("ignores an invalid cookie value", () => {
    expect(redirectLocaleForRoot({ userAgent: CHROME, acceptLanguage: "de-DE", cookieLocale: "fr" })).toBe("de");
  });

  it("never redirects internal navigation back to English", () => {
    expect(redirectLocaleForRoot({ userAgent: CHROME, acceptLanguage: "de-DE", internalReferer: true })).toBeNull();
  });

  it("never redirects crawlers", () => {
    for (const ua of [
      "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
      "Mozilla/5.0 (compatible; bingbot/2.0)",
      "LinkedInBot/1.0",
      "",
      null,
    ]) {
      expect(redirectLocaleForRoot({ userAgent: ua, acceptLanguage: "de-DE", cookieLocale: "de" })).toBeNull();
    }
  });
});

describe("isBot", () => {
  it("does not flag regular browsers", () => {
    expect(isBot(CHROME)).toBe(false);
  });
});
