"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react"; // 引入 Lucide 圖標
import { useTranslations } from "next-intl";

import cabinetsData from "@/app/data/cabinets.json";
import React from "react";

export default function BranchDetail({ params }: { params: { id: string } }) {
  void params.id;
  const t = useTranslations("BranchDetailPage");
  const branchInfo = {
    name: t("storeName"),
    address: t("addrValue"),
    phone: t("phoneValue"),
    hours: t("hoursValue"),
  };

  if (!branchInfo) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 md:pt-20 pt-10">
      <div className="h-[100vh] hidden" id="show_size">
        <h2 className="md:text-6xl text-4xl font-bold my-20 text-center">{t("sizesHeroTitle")}</h2>
        <div className="mt-12 md:w-1/2 mx-auto">
          <Carousel
            dynamicHeight={false}
            showArrows={true}
            showThumbs={false}
            infiniteLoop
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  className="absolute left-0 top-1/3 -translate-y-1/2 z-10 p-2 bg-black bg-opacity-50 hover:bg-opacity-75 transition-all duration-300 rounded-r-md"
                >
                  <ChevronLeft className="w-8 h-8 text-white" />
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  className="absolute right-0 top-1/3 -translate-y-1/2 z-10 p-2 bg-black bg-opacity-50 hover:bg-opacity-75 transition-all duration-300 rounded-l-md"
                >
                  <ChevronRight className="w-8 h-8 text-white" />
                </button>
              )
            }
          >
            {cabinetsData.cabinetSizes.map((cabinet, index) => (
              <div className="flex flex-col md:flex-col gap-8" key={index}>
                <div className="h-[320px] md:h-[420px] flex items-center justify-center">
                  <Image
                    src={cabinet.image}
                    alt={t("cabinetImageAlt")}
                    width={400}
                    height={300}
                    className="max-h-full w-auto object-contain"
                  />
                </div>
                <div className="">
                  <table className="w-full border-collapse border border-[#8C734B] text-[#8C734B] text-md">
                  <React.Fragment key={index}>
                    <thead>
                      <tr className="bg-[#8C734B]">
                        <th
                          className="border border-[#8C734B] p-2 text-white"
                          colSpan={5}
                        >
                          {t("thModel")}
                        </th>
                      </tr>
                      <tr className="bg-white">
                        <th
                          className="border border-[#8C734B] text-[#8C734B] p-2"
                          colSpan={5}
                        >
                          {cabinet.type}
                        </th>
                      </tr>
                      <tr className="bg-white">
                        <th className="border border-[#8C734B] text-[#8C734B] p-2">
                          {t("thHeight")}
                        </th>
                        <th className="border border-[#8C734B] text-[#8C734B] p-2">
                          {t("thWidth")}
                        </th>
                        <th className="border border-[#8C734B] text-[#8C734B] p-2">
                          {t("thDepth")}
                        </th>
                        <th className="border border-[#8C734B] text-[#8C734B] p-2">
                          {t("thVolume")}
                        </th>
                        <th className="border border-[#8C734B] text-[#8C734B] p-2">
                          {t("thMonthlyRent")}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {cabinet.sizes.map((size, sizeIndex) => (
                        <tr key={sizeIndex}>
                          <td className="border border-[#8C734B] text-[#8C734B] p-2 text-center">
                            {size.height}
                          </td>
                          <td className="border border-[#8C734B] text-[#8C734B] p-2 text-center">
                            {size.width}
                          </td>
                          <td className="border border-[#8C734B] text-[#8C734B] p-2 text-center">
                            {size.depth}
                          </td>
                          <td className="border border-[#8C734B] text-[#8C734B] p-2 text-center">
                            {size.volume}
                          </td>
                          <td className="border border-[#8C734B] text-[#8C734B] p-2 text-center">
                            {size.monthlyRent}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </React.Fragment>
                </table>
                  <p className="mt-4 text-lg text-[#8C734B] text-left whitespace-pre-line">{t("sizeFootnote")}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-2/3">
          <Image
            src="/images/slide-1.png"
            alt={branchInfo.name}
            width={800}
            height={600}
            className="rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2 p-6">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">{branchInfo.name}</h3>
          <div className="text-[#8C734B] text-lg md:text-xl">
            <p className="mb-2">
              <strong>{t("addrLabel")}</strong>
              {branchInfo.address}
            </p>
            <p className="mb-2">
              <strong>{t("phoneLabel")}</strong>
              {branchInfo.phone}
            </p>
            <p className="mb-2">
              <strong>{t("hoursLabel")}</strong>
              {branchInfo.hours}
            </p>
            <div className="mt-8 w-full h-[370px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.6050493595785!2d121.55111207631066!3d25.047473977807748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ab4af68a3cf9%3A0xa127da4fc4f19a1d!2z5Y-w5YyX5p2-5bGx6L-35L2g5YCJ772c5pif5Z-f5pm656m66ZaTMjTlsI_mmYLlhajmmbrog73lgInluqvvvIjlu7blkInlupfvvIk!5e0!3m2!1szh-TW!2stw!4v1747468541748!5m2!1szh-TW!2stw"
                width="100%"
                height="100%"
                className="w-full h-full md:max-h-[370px] max-h-[250px] object-cover"
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className="flex justify-start space-x-4 mt-8">
            <a
              href={process.env.NEXT_PUBLIC_IOS_DOWNLOAD_URL}
              target="_blank"
              className="hover:opacity-80 transition-opacity duration-300"
            >
              <Image
                src="/images/ios-download.webp"
                alt="Download on the App Store"
                width={1214}
                height={407}
                className="h-[50px] sm:h-[75px] w-auto"
              />
            </a>
            <a
              href={process.env.NEXT_PUBLIC_ANDROID_DOWNLOAD_URL}
              target="_blank"
              className="hover:opacity-80 transition-opacity duration-300"
            >
              <Image
                src="/images/android-download.webp"
                alt="GET IT ON Google Play"
                width={1342}
                height={398}
                className="h-[50px] sm:h-[75px] w-auto"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6 bg-white rounded-lg p-6 shadow-sm my-8 mt-20">
        <a
          href="https://lin.ee/90nYGUR"
          target="_blank"
          rel="noopener noreferrer"
          className="w-32 md:w-40 hover:opacity-90 transition-opacity"
        >
          <img
            src="https://qr-official.line.me/gs/M_125negus_GW.png?oat_content=qr"
            alt="Line QR Code"
            className="w-full h-auto"
          />
        </a>
        <div className="text-2xl md:text-[72px] text-green-500 font-bold">{t("lineCta")}</div>
      </div>

      <div className="container mx-auto px-4 my-40">
        <h2 className="md:text-6xl text-4xl font-bold text-center mb-10">{t("innovationTitle")}</h2>
        <div className="w-full md:px-40 xl:px-80 mt-16">
          <img
            src="https://hd7872mjgdymyoov.public.blob.vercel-storage.com/6%20%E5%9C%88-nxlwt4ngqgmOxTbyHucXAG4LivLWHj.png"
            alt={t("innovationAlt")}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      <h2 className="md:text-6xl text-4xl font-bold my-20 text-center">{t("galleryTitle")}</h2>
      <div className="my-12">
        <div className="md:w-1/2 mx-auto">
          <Carousel
            showArrows={true}
            showThumbs={false}
            infiniteLoop
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-black bg-opacity-50 hover:bg-opacity-75 transition-all duration-300 rounded-r-md"
                >
                  <ChevronLeft className="w-8 h-8 text-white" />
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-black bg-opacity-50 hover:bg-opacity-75 transition-all duration-300 rounded-l-md"
                >
                  <ChevronRight className="w-8 h-8 text-white" />
                </button>
              )
            }
          >
            <Image
              src="/images/slide-1.png"
              alt={t("slideAlt")}
              width={600}
              height={400}
              className="w-full h-auto md:max-h-[500px] max-h-[250px] object-cover"
            />
            <Image
              src="/images/slide-2.jpg"
              alt={t("slideAlt")}
              width={600}
              height={400}
              className="w-full h-auto md:max-h-[500px] max-h-[250px] object-cover"
            />
            <Image
              src="/images/slide-3.jpg"
              alt={t("slideAlt")}
              width={600}
              height={400}
              className="w-full h-auto md:max-h-[500px] max-h-[250px] object-cover"
            />
            <Image
              src="/images/slide-4.jpg"
              alt={t("slideAlt")}
              width={600}
              height={400}
              className="w-full h-auto md:max-h-[500px] max-h-[250px] object-cover"
            />
            <Image
              src="/images/slide-5.jpg"
              alt={t("slideAlt")}
              width={600}
              height={400}
              className="w-full h-auto md:max-h-[500px] max-h-[250px] object-cover"
            />
            {/* 可以添加更多照片 */}
          </Carousel>
        </div>
      </div>

      <div className="container mx-auto px-4 my-40">
        <h2 className="md:text-6xl text-4xl font-bold text-center mb-10">{t("downloadAppTitle")}</h2>
        <div className="w-full md:px-40 xl:px-80 mt-16">
          <div className="flex justify-center space-x-4">
            <a
              href={process.env.NEXT_PUBLIC_IOS_DOWNLOAD_URL}
              target="_blank"
              className="hover:opacity-80 transition-opacity duration-300"
            >
              <Image
                src="/images/ios-download.webp"
                alt="Download on the App Store"
                width={1214}
                height={407}
                className="h-[50px] sm:h-[75px] w-auto"
              />
            </a>
            <a
              href={process.env.NEXT_PUBLIC_ANDROID_DOWNLOAD_URL}
              target="_blank"
              className="hover:opacity-80 transition-opacity duration-300"
            >
              <Image
                src="/images/android-download.webp"
                alt="GET IT ON Google Play"
                width={1342}
                height={398}
                className="h-[50px] sm:h-[75px] w-auto"
              />
            </a>
          </div>
        </div>
      </div>



      <div className="flex flex-col md:flex-row justify-center items-center gap-6 bg-white rounded-lg p-6 shadow-sm my-8 mt-20">
        <a
          href="https://lin.ee/90nYGUR"
          target="_blank"
          rel="noopener noreferrer"
          className="w-32 md:w-40 hover:opacity-90 transition-opacity"
        >
          <img
            src="https://qr-official.line.me/gs/M_125negus_GW.png?oat_content=qr"
            alt="Line QR Code"
            className="w-full h-auto"
          />
        </a>
        <div className="text-2xl md:text-[72px] text-green-500 font-bold">{t("lineCta")}</div>
      </div>
    </div>
  );
}
