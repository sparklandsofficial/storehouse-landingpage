import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = { params: { locale: string } };

export async function generateMetadata({ params }: Props) {
  setRequestLocale(params.locale);
  const t = await getTranslations("Franchise");
  return { title: t("investment.metaTitle") };
}

export default async function FranchiseInvestment({ params }: Props) {
  setRequestLocale(params.locale);
  const t = await getTranslations("Franchise");
  const sparkItems = t.raw("investment.sparkItems") as string[];
  const standardItems = t.raw("investment.standardItems") as string[];
  const exclusiveItems = t.raw("investment.exclusiveItems") as string[];

  return (
    <div className="container mx-auto px-4 py-8 max-md:p-0">
      <h1 className="text-3xl font-bold text-[#483729] mb-12">{t("investment.h1")}</h1>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white shadow-lg rounded-lg">
          <thead>
            <tr className="bg-[#F5F5F5]">
              <th className="border p-4 w-1/4 text-lg font-bold">{t("investment.colTarget")}</th>
              <th className="border p-4 text-lg font-bold">{t("investment.colItem")}</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border p-4 font-bold bg-[#F5F5F5] align-top">{t("investment.spark")}</td>
              <td className="border p-4">
                <ul className="list-disc pl-5 space-y-3">
                  {sparkItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </td>
            </tr>

            <tr>
              <td className="border p-4 font-bold bg-[#F5F5F5]">{t("investment.standard")}</td>
              <td className="border p-4">
                <ul className="list-disc pl-5 space-y-3">
                  {standardItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </td>
            </tr>

            <tr>
              <td className="border p-4 font-bold bg-[#F5F5F5]">{t("investment.exclusive")}</td>
              <td className="border p-4">
                <ul className="list-disc pl-5 space-y-3">
                  {exclusiveItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
