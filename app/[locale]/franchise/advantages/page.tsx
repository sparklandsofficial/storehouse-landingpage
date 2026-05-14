import { Link } from "@/i18n/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = { params: { locale: string } };

export async function generateMetadata({ params }: Props) {
  setRequestLocale(params.locale);
  const t = await getTranslations("Franchise");
  return { title: t("advantages.metaTitle") };
}

type AdvCard = { title: string; items: string[] };

export default async function FranchiseAdvantages({ params }: Props) {
  setRequestLocale(params.locale);
  const t = await getTranslations("Franchise");
  const cards = t.raw("advantages.cards") as AdvCard[];

  return (
    <div className="container mx-auto px-4 py-8 max-md:p-0">
      <h1 className="text-3xl font-bold text-[#483729] mb-6">{t("advantages.h1")}</h1>

      <h2 className="text-2xl text-[#FF9E18] font-semibold mb-12 text-center">{t("advantages.sub")}</h2>

      <div className="mb-16">
        <h3 className="text-2xl font-bold text-[#483729] mb-8">{t("advantages.s1")}</h3>

        <div className="space-y-8">
          {cards.map((card) => (
            <div key={card.title} className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-[#483729] mb-4">{card.title}</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {card.items.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h3 className="text-2xl font-bold text-[#483729] mb-8">{t("advantages.s2")}</h3>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="mb-4">{t("advantages.fitIntro")}</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {(t.raw("advantages.fitLi") as string[]).map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="text-center bg-[#FF9E18] text-white p-8 rounded-lg">
        <h3 className="text-2xl font-bold mb-4">{t("advantages.ctaTitle")}</h3>
        <p className="mb-4">{t("advantages.ctaP")}</p>
        <Link
          href="/franchise/contact"
          className="bg-white text-[#FF9E18] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300 inline-block"
        >
          {t("advantages.ctaBtn")}
        </Link>
      </div>
    </div>
  );
}
