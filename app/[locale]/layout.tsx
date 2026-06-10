import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { routing } from "@/i18n/routing";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

const locales = routing.locales;
const BASE_URL = "https://www.sparkspace.com.tw";

/**
 * 語系代碼對應 hreflang 標準碼
 * zh-TW → zh-Hant-TW（繁體中文），zh-CN → zh-Hans-CN（簡體中文）
 */
const HREFLANG_MAP: Record<string, string> = {
  "zh-TW": "zh-Hant-TW",
  "zh-CN": "zh-Hans-CN",
  en: "en",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

/**
 * 為每個語系頁面產生 canonical + alternates（hreflang）
 *
 * canonical 指向當前語系自己的 URL，告訴 Google 各語系版本互為替代而非重複。
 * alternates.languages 讓 Google 知道同一頁有哪些語系版本，避免重複內容降權。
 *
 * 注意：這是 layout 層的 metadata，各子頁面如需覆蓋自己的 canonical，
 * 在子頁面的 generateMetadata 中再傳 alternates 即可（Next.js 會 merge）。
 */
export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params;

  // 建立所有語系的 alternates map，供 <link rel="alternate" hreflang="..."> 使用
  const languages: Record<string, string> = {};
  for (const loc of locales) {
    languages[HREFLANG_MAP[loc] ?? loc] = `${BASE_URL}/${loc}`;
  }
  // x-default 指向預設語系（英文）
  languages["x-default"] = `${BASE_URL}/en`;

  return {
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;
  if (!(locales as readonly string[]).includes(locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const messages = await getMessages();
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Navigation />
      <main className="relative w-full">{children}</main>
      <Footer />
    </NextIntlClientProvider>
  );
}
