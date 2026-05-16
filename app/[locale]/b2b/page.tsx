/**
 * B2B page server component.
 * Route: /[locale]/b2b
 *
 * Renders metadata + passes the locale to the client component B2BContent.
 * The site-wide Navigation and Footer are already provided by the parent layout,
 * so this page only needs to return the content component.
 */

import { setRequestLocale } from "next-intl/server";
import B2BContent from "./B2BContent";

type Props = { params: { locale: string } };

export async function generateMetadata({ params }: Props) {
  setRequestLocale(params.locale);
  const locale = params.locale;
  return {
    title:
      locale === "en"
        ? "B2B Partnership | Spark Space"
        : "商務合作 | Spark Space 星域智空間",
    description:
      locale === "en"
        ? "Franchise, system license, and co-investment opportunities with Spark Space — Asia's unmanned self-storage platform."
        : "Spark Space 加盟授權、系統整合、投資合作，全自動化倉儲管理平台。",
  };
}

export default async function B2BPage({ params }: Props) {
  setRequestLocale(params.locale);
  return <B2BContent locale={params.locale} />;
}
