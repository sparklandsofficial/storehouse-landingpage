"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react"; // 引入 Lucide 圖標

import { cabinetSizes } from "@/app/data/cabinetSizes";
import React from "react";

export default function BranchDetail({ params }: { params: { id: string } }) {
  // 這裡應該根據 id 獲取分店詳情
  // 為了示例，我們使用硬編碼的數據
  console.log(params);
  const branchInfo = {
    name: "松山延吉店",
    address: "台北市松山區延吉街7-1號B1",
    phone: "00000000",
    size: "寬160 深150 高215cm",
    hours: "24小時",
  };

  if (!branchInfo) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 md:pt-20 pt-10">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3">
          <Image
            src="/images/branch-1.png"
            alt={branchInfo.name}
            width={800}
            height={600}
            className="rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2 p-6">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">松山延吉店</h3>
          <div className="text-[#8C734B] text-lg md:text-xl">
            <p className="mb-2">
              <strong>地址：</strong>台北市松山區延吉街7-1號B1
            </p>
            <p className="mb-2">
              <strong>服務電話：</strong>00000000
            </p>
            <p className="mb-2">
              <strong>貨梯尺寸：</strong>寬160 深150 高215cm
            </p>
            <p className="mb-2">
              <strong>進出時間：</strong>24小時
            </p>
          </div>
          <div className="flex justify-start space-x-4 mt-8">
            <a
              href={process.env.NEXT_PUBLIC_IOS_APP_URL}
              target="_blank"
              className="hover:opacity-80 transition-opacity duration-300"
            >
              <Image
                src="/images/ios-download.png"
                alt="Download on the App Store"
                width={1214}
                height={407}
                className="h-[50px] sm:h-[75px] w-auto"
              />
            </a>
            <a
              href={process.env.NEXT_PUBLIC_ANDROID_APP_URL}
              target="_blank"
              className="hover:opacity-80 transition-opacity duration-300"
            >
              <Image
                src="/images/android-download.png"
                alt="GET IT ON Google Play"
                width={1342}
                height={398}
                className="h-[50px] sm:h-[75px] w-auto"
              />
            </a>
          </div>
        </div>
      </div>

      <h2 className="text-4xl font-bold my-20 text-center">倉庫尺寸</h2>
      <div className="mt-12">
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
          {cabinetSizes.map((cabinet, index) => (
            <div className="flex flex-col md:flex-row gap-8" key={index}>
              <div className="md:w-1/2">
                <Image
                  src={cabinet.image}
                  alt="倉庫尺寸圖"
                  width={400}
                  height={300}
                />
              </div>
              <div className="md:w-1/2">
                <table className="w-full border-collapse border border-[#8C734B] text-[#8C734B] text-md">
                  <React.Fragment key={index}>
                    <thead>
                      <tr className="bg-[#8C734B]">
                        <th
                          className="border border-[#8C734B] p-2 text-white"
                          colSpan={5}
                        >
                          型號
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
                          高
                        </th>
                        <th className="border border-[#8C734B] text-[#8C734B] p-2">
                          寬
                        </th>
                        <th className="border border-[#8C734B] text-[#8C734B] p-2">
                          深
                        </th>
                        <th className="border border-[#8C734B] text-[#8C734B] p-2">
                          材積
                        </th>
                        <th className="border border-[#8C734B] text-[#8C734B] p-2">
                          月租金
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
                <p className="mt-4 text-lg text-[#8C734B] text-left">
                  上表尺寸因施工因素，可能會有正負5％之施工誤差。
                  <br />
                  尺寸範例：
                  <br />
                  ・郵局包裹便利箱BOX3尺寸：長39.5 x 寬27.5 x 高23cm
                  <br />
                  ・7-11交貨便寄件箱(大)：長35 x 寬30 x 高30cm
                  <br />
                  ・一般通用大型紙箱：長45 x 寬30 x 高30cm
                  <br />
                  ・半車3.5頓貨車載貨量：約110材積
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <h2 className="text-4xl font-bold my-20 text-center">環境照片</h2>
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
              alt="松山延吉店"
              width={600}
              height={400}
              className="w-full h-auto"
            />
            <Image
              src="/images/slide-1.png"
              alt="松山延吉店"
              width={600}
              height={400}
              className="w-full h-auto"
            />
            <Image
              src="/images/slide-1.png"
              alt="松山延吉店"
              width={600}
              height={400}
              className="w-full h-auto"
            />
            <Image
              src="/images/slide-1.png"
              alt="松山延吉店"
              width={600}
              height={400}
              className="w-full h-auto"
            />
            {/* 可以添加更多照片 */}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
