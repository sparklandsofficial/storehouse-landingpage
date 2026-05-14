import { getTranslations, setRequestLocale } from "next-intl/server";
import LocationsClient from "./LocationsClient";

type Props = { params: { locale: string } };

export async function generateMetadata({ params }: Props) {
  setRequestLocale(params.locale);
  const t = await getTranslations("LocationsPage");
  return { title: t("metaTitle") };
}

export default async function LocationsPage({ params }: Props) {
  setRequestLocale(params.locale);
  return <LocationsClient />;
}
