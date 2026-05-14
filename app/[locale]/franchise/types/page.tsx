import { getTranslations, setRequestLocale } from "next-intl/server";
import FranchiseTypesTables from "./FranchiseTypesTables";

type Props = { params: { locale: string } };

export async function generateMetadata({ params }: Props) {
  setRequestLocale(params.locale);
  const t = await getTranslations("Franchise");
  return { title: t("types.metaTitle") };
}

export default async function FranchiseTypes({ params }: Props) {
  setRequestLocale(params.locale);
  const t = await getTranslations("Franchise");

  return (
    <div className="container mx-auto px-4 py-8 max-md:p-0">
      <h1 className="text-3xl font-bold text-[#483729] mb-12">{t("types.h1")}</h1>
      <FranchiseTypesTables />
    </div>
  );
}
