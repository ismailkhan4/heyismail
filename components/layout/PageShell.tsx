import type { Locale } from "@/lib/i18n/config";
import { localePath, localePaths } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/en";
import Header from "./Header";
import Footer from "./Footer";
import LanguageSuggestion from "./LanguageSuggestion";

interface PageShellProps {
  locale: Locale;
  dict: Dictionary;
  /** This page's path without the locale prefix, e.g. "/" or "/work/x". */
  path: string;
  children: React.ReactNode;
}

export default function PageShell({ locale, dict, path, children }: PageShellProps) {
  const homeHref = localePath(locale);
  const languagePaths = localePaths(path);

  return (
    <>
      <Header locale={locale} dict={dict} homeHref={homeHref} languagePaths={languagePaths} />
      <main id="main">{children}</main>
      <Footer locale={locale} dict={dict} homeHref={homeHref} languagePaths={languagePaths} />
      <LanguageSuggestion current={locale} paths={languagePaths} />
    </>
  );
}
