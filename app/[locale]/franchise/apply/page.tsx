import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = { params: { locale: string } };

export async function generateMetadata({ params }: Props) {
  setRequestLocale(params.locale);
  const t = await getTranslations("Franchise");
  return { title: t("apply.metaTitle") };
}

export default async function FranchiseApply({ params }: Props) {
  setRequestLocale(params.locale);
  const t = await getTranslations("Franchise");
  return (
    <div>
      <h1 className="text-3xl font-bold text-[#483729] mb-6">{t("apply.h1")}</h1>
      <iframe
        title={t("apply.h1")}
        src="https://docs.google.com/forms/d/e/1FAIpQLSc4hrxHETcHrgwI8-cS4Tvu6i1WteClhGa6eTyK3wfkxl4Kyg/viewform?embedded=true"
        width="100%"
        height={700}
      >
        {t("apply.iframe")}
      </iframe>
    </div>
  );
}
