import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = { params: { locale: string } };

export async function generateMetadata({ params }: Props) {
  setRequestLocale(params.locale);
  const t = await getTranslations("Franchise");
  return { title: t("process.metaTitle") };
}

export default async function FranchiseProcess({ params }: Props) {
  setRequestLocale(params.locale);
  const t = await getTranslations("Franchise");

  return (
    <div className="container mx-auto px-4 py-8 max-md:p-0">
      <h1 className="text-3xl font-bold text-[#483729] mb-12 max-md:mb-4">{t("process.h1")}</h1>

      <div className="grid grid-cols-1 gap-6">
        <Image className="" src="/images/process.png" alt={t("process.imgAlt")} width={779} height={1067} />
      </div>
    </div>
  );
}
