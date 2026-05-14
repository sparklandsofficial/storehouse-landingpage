"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import cabinetsData from "@/app/data/cabinets.json";

const FEATURE_IMAGES = [
  "/images/cabinet_service/1.png",
  "/images/cabinet_service/2.png",
  "/images/cabinet_service/3.png",
];

export default function CabinetDetail({ params }: { params: { id: string; cabinetId: string } }) {
  const t = useTranslations("CabinetPage");
  const { cabinetId } = params;
  const cabinet = cabinetsData.cabinets.find((c) => c.slug === cabinetId || c.id.toString() === cabinetId);

  const featureTitles = t.raw("featureTitles") as string[];
  const features = FEATURE_IMAGES.map((image, index) => ({
    image,
    title: featureTitles[index] ?? "",
  }));

  if (!cabinet) {
    return (
      <div className="min-h-screen bg-white p-8">
        <h1 className="text-3xl font-bold mb-4">{t("notFoundTitle")}</h1>
        <Link href="/" className="text-blue-600 hover:underline">
          {t("backHome")}
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF8F5] py-8 md:py-8 lg:py-12">
      <div className="max-w-6xl mx-auto ">
        <div className="lg:rounded-3xl lg:shadow-lg overflow-hidden lg:bg-white bg-[#FAF8F5]">
          <div className="p-6 md:p-12 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:mb-12">
              <div className={`flex justify-center md:justify-start md:items-start ${cabinet.isSpecial ? "hidden md:flex" : ""}`}>
                {cabinet.isSpecial ? (
                  <div className="md:w-[380px] w-full"></div>
                ) : (
                  <div className="md:w-[380px] w-full relative overflow-hidden shadow-2xl shadow-[rgba(0,0,0,0.35)] border border-[#E3DACD] bg-white">
                    {cabinet.image1 && (
                      <Image
                        src={cabinet.image1}
                        alt={t("realPhotoAlt", { name: cabinet.name })}
                        width={800}
                        height={600}
                        className="w-full h-auto object-contain"
                      />
                    )}
                  </div>
                )}
              </div>
              {!cabinet.isSpecial && <div className="block md:hidden h-px w-screen bg-[#bfae96] my-6 -mx-6"></div>}
              <div className="flex flex-col gap-8 md:gap-12">
                {!cabinet.isSpecial && (
                  <>
                    {cabinet.slug === "s" && Array.isArray(cabinet.subCabinets) ? (
                      <div className="flex flex-col space-y-20 md:space-y-14">
                        {cabinet.subCabinets.map((sub, idx) => (
                          <div key={idx} className="flex flex-col space-y-6 lg:mb-10 max-md:mb-5">
                            <div className="flex flex-col space-y-4">
                              <h1 className="text-[#333333] text-2xl md:text-3xl font-black">{sub.name || cabinet.name}</h1>
                              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                <div className="flex flex-col gap-1">
                                  <p className="text-[#333333] text-xs md:text-sm font-normal opacity-70">
                                    {t("monthlyRent")} <br />
                                    {t("priceNote")}
                                  </p>
                                  <p className="text-[#8C734B] text-2xl md:text-3xl font-semibold">
                                    {sub.monthlyRent || cabinet.monthlyRent || "1234"}{" "}
                                    <span className="text-sm md:text-base font-normal text-[#333333]">{t("perMonth")}</span>
                                  </p>
                                </div>
                                <div className="px-4 py-2 bg-[#E3DACD] rounded-full inline-flex items-center self-start md:self-auto">
                                  <span className="text-[#333333] text-xs md:text-sm font-light">
                                    {t("volume")} {sub.volume || cabinet.volume || 0}
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="grid grid-cols-3 gap-2 md:gap-4">
                              <div className="bg-[#E3DACD] rounded-[20px] p-2 md:p-6 flex flex-col items-center justify-center shadow-[0_4px_8px_rgba(0,0,0,0.15)] min-w-0">
                                <span className="text-[#333333] text-sm md:text-xl font-medium mb-1 md:mb-2 whitespace-nowrap">{t("len")}</span>
                                <span className="text-[#333333] text-lg md:text-3xl font-bold whitespace-nowrap">
                                  {sub.width || cabinet.width || 0}cm
                                </span>
                              </div>
                              <div className="bg-[#E3DACD] rounded-[20px] p-2 md:p-6 flex flex-col items-center justify-center shadow-[0_4px_8px_rgba(0,0,0,0.15)] min-w-0">
                                <span className="text-[#333333] text-sm md:text-xl font-medium mb-1 md:mb-2 whitespace-nowrap">{t("wid")}</span>
                                <span className="text-[#333333] text-lg md:text-3xl font-bold whitespace-nowrap">
                                  {sub.depth || cabinet.depth || 0}cm
                                </span>
                              </div>
                              <div className="bg-[#E3DACD] rounded-[20px] p-2 md:p-6 flex flex-col items-center justify-center shadow-[0_4px_8px_rgba(0,0,0,0.15)] min-w-0">
                                <span className="text-[#333333] text-sm md:text-xl font-medium mb-1 md:mb-2 whitespace-nowrap">{t("hgt")}</span>
                                <span className="text-[#333333] text-lg md:text-3xl font-bold whitespace-nowrap">
                                  {sub.height || cabinet.height || 0}cm
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-col space-y-6">
                        <div className="flex flex-col space-y-4">
                          <h1 className="text-[#333333] text-3xl md:text-4xl font-black">{cabinet.name}</h1>
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div className="flex flex-col gap-1">
                              <p className="text-[#333333] text-xs md:text-sm font-normal opacity-70">
                                {t("monthlyRent")} <br />
                                {t("priceNote")}
                              </p>
                              <p className="text-[#8C734B] text-2xl md:text-3xl font-semibold">
                                {cabinet.monthlyRent || "1234"}{" "}
                                <span className="text-sm md:text-base font-normal text-[#333333]">{t("perMonth")}</span>
                              </p>
                            </div>
                            <div className="px-4 py-2 bg-[#E3DACD] rounded-full inline-flex items-center self-start md:self-auto">
                              <span className="text-[#333333] text-sm md:text-base font-light">
                                {t("volume")} {cabinet.volume || 0}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-2 md:gap-4">
                          <div className="bg-[#E3DACD] rounded-[20px] p-2 md:p-6 flex flex-col items-center justify-center shadow-[0_4px_8px_rgba(0,0,0,0.15)] min-w-0">
                            <span className="text-[#333333] text-sm md:text-xl font-medium mb-1 md:mb-2 whitespace-nowrap">{t("len")}</span>
                            <span className="text-[#333333] text-lg md:text-3xl font-bold whitespace-nowrap">{cabinet.width || 0}cm</span>
                          </div>
                          <div className="bg-[#E3DACD] rounded-[20px] p-2 md:p-6 flex flex-col items-center justify-center shadow-[0_4px_8px_rgba(0,0,0,0.15)] min-w-0">
                            <span className="text-[#333333] text-sm md:text-xl font-medium mb-1 md:mb-2 whitespace-nowrap">{t("wid")}</span>
                            <span className="text-[#333333] text-lg md:text-3xl font-bold whitespace-nowrap">{cabinet.depth || 0}cm</span>
                          </div>
                          <div className="bg-[#E3DACD] rounded-[20px] p-2 md:p-6 flex flex-col items-center justify-center shadow-[0_4px_8px_rgba(0,0,0,0.15)] min-w-0">
                            <span className="text-[#333333] text-sm md:text-xl font-medium mb-1 md:mb-2 whitespace-nowrap">{t("hgt")}</span>
                            <span className="text-[#333333] text-lg md:text-3xl font-bold whitespace-nowrap">{cabinet.height || 0}cm</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                )}

                {cabinet.isSpecial && (
                  <div className="flex flex-col space-y-6">
                    <div className="flex flex-col space-y-4">
                      <h1 className="text-[#333333] text-3xl md:text-4xl font-black">{cabinet.name}</h1>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <p className="text-[#333333] text-xs md:text-sm font-normal opacity-70">
                          {t("monthlyRent")} <br />
                          {t("priceNote")}
                        </p>
                        <div className="px-4 py-2 bg-[#E3DACD] rounded-full inline-flex items-center self-start md:self-auto">
                          <span className="text-[#333333] text-sm md:text-base font-light">
                            {t("volume")} {cabinet.volume || 0}
                          </span>
                        </div>
                      </div>
                      <p className="text-red-500 text-xl md:text-xl font-semibold text-center">{cabinet.description}</p>
                    </div>

                    <div className="grid grid-cols-3 gap-2 md:gap-4">
                      <div className="bg-[#E3DACD] rounded-[20px] p-2 md:p-6 flex flex-col items-center justify-center shadow-[0_4px_8px_rgba(0,0,0,0.15)] min-w-0">
                        <span className="text-[#333333] text-sm md:text-xl font-medium mb-1 md:mb-2 whitespace-nowrap">{t("len")}</span>
                        <span className="text-[#333333] text-lg md:text-3xl font-bold whitespace-nowrap">{cabinet.width || "??"}cm</span>
                      </div>
                      <div className="bg-[#E3DACD] rounded-[20px] p-2 md:p-6 flex flex-col items-center justify-center shadow-[0_4px_8px_rgba(0,0,0,0.15)] min-w-0">
                        <span className="text-[#333333] text-sm md:text-xl font-medium mb-1 md:mb-2 whitespace-nowrap">{t("wid")}</span>
                        <span className="text-[#333333] text-lg md:text-3xl font-bold whitespace-nowrap">{cabinet.depth || "??"}cm</span>
                      </div>
                      <div className="bg-[#E3DACD] rounded-[20px] p-2 md:p-6 flex flex-col items-center justify-center shadow-[0_4px_8px_rgba(0,0,0,0.15)] min-w-0">
                        <span className="text-[#333333] text-sm md:text-xl font-medium mb-1 md:mb-2 whitespace-nowrap">{t("hgt")}</span>
                        <span className="text-[#333333] text-lg md:text-3xl font-bold whitespace-nowrap">{cabinet.height || "??"}cm</span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="space-y-6">
                  {!cabinet.isSpecial && cabinet.image2 && (
                    <div className=" w-[320px] h-[320px] md:w-[380px] md:h-[380px] lg:w-[360px] lg:h-[300px] mx-auto relative rounded-[20px] overflow-hidden">
                      <Image src={cabinet.image2} alt={cabinet.name} fill className="object-cover" />
                    </div>
                  )}

                  <div className="space-y-4">
                    <h2 className="text-[#333333] text-xl md:text-2xl font-bold">{t("featuresTitle")}</h2>

                    <div className="grid grid-cols-3 gap-4 md:gap-6 max-md:pb-10">
                      {features.map((feature) => (
                        <div key={feature.image} className="flex flex-col items-center gap-3">
                          <div className="w-16 h-16 md:w-20 md:h-20 bg-[#E3DACD] rounded-[20px] flex justify-center items-center shadow-md overflow-hidden p-2">
                            <Image
                              src={feature.image}
                              alt={feature.title}
                              width={48}
                              height={48}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div className="text-center">
                            <div className="text-[#333333] text-xs md:text-sm font-normal leading-tight whitespace-pre-line">{feature.title}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-[#E3DACD] px-6 md:px-0">
              <h2 className="text-[#333333] text-xl md:text-2xl font-bold mb-4">{t("noticeTitle")}</h2>
              <div className="text-[#333333] text-sm md:text-base font-light leading-6 md:leading-7 tracking-wide whitespace-pre-line">
                {t("noticeBody")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
