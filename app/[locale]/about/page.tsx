import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = { params: { locale: string } };

export async function generateMetadata({ params }: Props) {
  setRequestLocale(params.locale);
  const t = await getTranslations("AboutPage");
  return { title: t("metaTitle") };
}

export default async function About({ params }: Props) {
  setRequestLocale(params.locale);
  const t = await getTranslations("AboutPage");

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-[#483729]">{t("h1")}</h1>
        <h2 className="text-2xl md:text-3xl text-[#8C734B]">{t("h2")}</h2>
      </div>

      <div className="flex flex-col md:flex-row items-center mb-16">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <Image src="/images/about_img_1.png" alt={t("img1Alt")} width={600} height={400} className="" />
        </div>
        <div className="w-full md:w-1/3 md:pl-12">
          <h3 className="text-3xl font-bold mb-6 text-[#FF9E18] whitespace-pre-line">{t("s1Title")}</h3>
          <p className="text-lg mb-6 text-[#483729]">{t("s1Body")}</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse items-center mb-16">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-end">
          <Image src="/images/about_img_2.jpg" alt={t("img2Alt")} width={600} height={400} className="" />
        </div>
        <div className="w-full md:w-1/3 md:pr-12">
          <h3 className="text-3xl font-bold mb-6 text-[#FF9E18] whitespace-pre-line">{t("s2Title")}</h3>
          <p className="text-lg mb-6 text-[#483729]">
            <span className="font-bold block mt-2">{t("s2Safety")}</span>
            {t("s2SafetyBody")}
            <br />
            <span className="font-bold block mt-2">{t("s2Convenience")}</span>
            {t("s2ConvenienceBody")}
            <span className="font-bold block mt-2">{t("s2Realtime")}</span>
            {t("s2RealtimeBody")}
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center mb-16">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <Image src="/images/about-bg-2.jpg" alt={t("img3Alt")} width={600} height={400} className="" />
        </div>
        <div className="w-full md:w-1/3 md:pl-12">
          <h3 className="text-3xl font-bold mb-6 text-[#FF9E18] whitespace-pre-line">{t("s3Title")}</h3>
          <p className="text-lg mb-6 text-[#483729]">{t("s3Body")}</p>
        </div>
      </div>
    </div>
  );
}
