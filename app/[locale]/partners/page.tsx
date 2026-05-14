import { getTranslations, setRequestLocale } from "next-intl/server";
import PartnersClient from "./PartnersClient";

type Props = { params: { locale: string } };

export async function generateMetadata({ params }: Props) {
  setRequestLocale(params.locale);
  const t = await getTranslations("PartnersPage");
  return { title: t("metaTitle") };
}

export default function PartnersPage() {
  return <PartnersClient />;
}
