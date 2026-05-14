import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = { params: { locale: string } };

export async function generateMetadata({ params }: Props) {
  setRequestLocale(params.locale);
  const t = await getTranslations("Franchise");
  return { title: t("requirements.metaTitle") };
}

export default async function FranchiseRequirements({ params }: Props) {
  setRequestLocale(params.locale);
  const t = await getTranslations("Franchise");
  const stdLi = t.raw("requirements.stdLi") as string[];
  const exLi = t.raw("requirements.exLi") as string[];

  return (
    <div className="container mx-auto px-4 py-8 max-md:p-0">
      <h1 className="text-3xl font-bold text-[#483729] mb-12">{t("requirements.h1")}</h1>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-2xl font-bold text-[#8B7355] mb-6 text-center">{t("requirements.standardTitle")}</h2>
          <ul className="space-y-4 list-disc pl-6">
            {stdLi.map((line) => (
              <li key={line} className="text-gray-700">
                {line}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-2xl font-bold text-[#8B7355] mb-6 text-center">{t("requirements.exclusiveTitle")}</h2>
          <ul className="space-y-4 list-disc pl-6">
            {exLi.map((line) => (
              <li key={line} className="text-gray-700">
                {line}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="space-y-4 text-gray-700">
        <p>{t("requirements.p1")}</p>
        <p>{t("requirements.p2")}</p>
        <p>{t("requirements.p3")}</p>
      </div>
    </div>
  );
}
