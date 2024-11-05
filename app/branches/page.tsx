"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react"; // 引入 Lucide 圖標
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";

export default function Home() {
  const [city, setCity] = useState("台北市");
  const [district, setDistrict] = useState("松山區");

  return (
    <div className="bg-[#f7f7f5]">
      {/* Hero Background Carousel */}
      <div className="absolute w-full left-0 z-0">
        <Carousel
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          transitionTime={500}
          showIndicators={false}
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
            src="/images/promotion-1.png"
            alt="Hero Background 1"
            width={4000}
            height={2250}
            className="w-full md:mt-[-70px]"
          />
          <Image
            src="/images/promotion-2.png"
            alt="Hero Background 2"
            width={4000}
            height={2250}
            className="w-full md:mt-[-70px]"
          />
        </Carousel>
      </div>
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="relative z-[1] h-[calc(60vw-70px)]">
          <div className="container mx-auto h-full flex items-center relative z-10  justify-center md:justify-start">
            {/* <div className="text-white md:mt-[-15vh] md:ml-[5vw] flex flex-col items-center">
              <h1 className="md:text-[4vw] text-[8vw] font-bold mb-2 text-[#483729]">
                開幕優惠
              </h1>
              <p className="md:text-[2.6vw] text-[6vw] text-[#8C734B] text-center">
                首月租金半價
              </p>
              <div className="flex justify-center">
                <button className="md:mt-12 mt-4 md:px-8 md:py-3 px-4 py-2 bg-[#FF9E18] text-white md:text-2xl text-[3vw] rounded-full hover:bg-orange-500 md:w-[200px] w-[150px] transition duration-300 ease-in-out">
                  see more
                </button>
              </div>
            </div> */}
          </div>
        </section>

        {/* Stores Section */}
        <section className="py-16">
          <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0 mb-8">
            <div className="flex flex-col space-y-4 md:flex-row md:items-center md:space-x-4 md:space-y-0">
              <div className="text-xl font-bold">快速篩選</div>
              <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                <Select defaultValue={city} onValueChange={setCity}>
                  <SelectTrigger className="w-full md:w-[250px]">
                    <SelectValue placeholder="請選擇縣市" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="台北市">台北市</SelectItem>
                    {/* <SelectItem value="新北市">新北市</SelectItem> */}
                    {/* 添加更多城市選項 */}
                  </SelectContent>
                </Select>
                <Select defaultValue={district} onValueChange={setDistrict}>
                  <SelectTrigger className="w-full md:w-[250px]">
                    <SelectValue placeholder="請選擇行政區" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="松山區">松山區</SelectItem>
                    {/* <SelectItem value="信義區">信義區</SelectItem> */}
                    {/* 添加更多行政區選項 */}
                  </SelectContent>
                </Select>
              </div>
              <Button
                variant="default"
                className="w-full md:w-auto px-8 bg-[#FF9E18] hover:bg-orange-500"
              >
                Go
              </Button>
            </div>
            <div className="flex justify-start space-x-4">
              <a
                href={process.env.NEXT_PUBLIC_IOS_DOWNLOAD_URL}
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
                href={process.env.NEXT_PUBLIC_ANDROID_DOWNLOAD_URL}
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
          <Link href="/branches/1">
            <div className="flex flex-col md:flex-row md:space-x-20">
              <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <Carousel
                  showArrows={true}
                  showThumbs={false}
                  infiniteLoop
                  // renderArrowPrev={(onClickHandler, hasPrev, label) =>
                  //   hasPrev && (
                  //     <button
                  //       type="button"
                  //       onClick={onClickHandler}
                  //       title={label}
                  //       className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-black bg-opacity-50 hover:bg-opacity-75 transition-all duration-300 rounded-r-md"
                  //     >
                  //       <ChevronLeft className="w-8 h-8 text-white" />
                  //     </button>
                  //   )
                  // }
                  // renderArrowNext={(onClickHandler, hasNext, label) =>
                  //   hasNext && (
                  //     <button
                  //       type="button"
                  //       onClick={onClickHandler}
                  //       title={label}
                  //       className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-black bg-opacity-50 hover:bg-opacity-75 transition-all duration-300 rounded-l-md"
                  //     >
                  //       <ChevronRight className="w-8 h-8 text-white" />
                  //     </button>
                  //   )
                  // }
                >
                  <Image
                    src="/images/slide-1.png"
                    alt="台北延吉店"
                    width={600}
                    height={400}
                    className="w-full h-auto md:max-h-[500px] max-h-[250px] object-cover"
                  />
                  <Image
                    src="/images/slide-2.jpg"
                    alt="台北延吉店"
                    width={600}
                    height={400}
                    className="w-full h-auto md:max-h-[500px] max-h-[250px] object-cover"
                  />
                  <Image
                    src="/images/slide-3.jpg"
                    alt="台北延吉店"
                    width={600}
                    height={400}
                    className="w-full h-auto md:max-h-[500px] max-h-[250px] object-cover"
                  />
                  <Image
                    src="/images/slide-4.jpg"
                    alt="台北延吉店"
                    width={600}
                    height={400}
                    className="w-full h-auto md:max-h-[500px] max-h-[250px] object-cover"
                  />
                  <Image
                    src="/images/slide-5.jpg"
                    alt="台北延吉店"
                    width={600}
                    height={400}
                    className="w-full h-auto md:max-h-[500px] max-h-[250px] object-cover"
                  />
                </Carousel>
              </div>
              <div className="w-full md:w-1/2 p-6">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  台北延吉店
                </h3>
                <div className="text-[#8C734B] text-lg md:text-xl">
                  <p className="mb-2">
                    <strong>地址：</strong>
                    台北市松山區延吉街7-1號B1（屈臣氏後方）
                  </p>
                  <p className="mb-2">
                    <strong>服務電話：</strong>(02)8177-7085
                  </p>
                  <p className="mb-2">
                    <strong>進出時間：</strong>24小時
                  </p>
                  <Link href="/branches/1" passHref>
                    <div className="bg-[#FF9E18] text-white text-center px-6 py-2 rounded-full hover:bg-orange-500 transition-colors duration-300 ease-in-out mt-8 inline-block">
                      查看更多
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </Link>
        </section>
      </div>
    </div>
  );
}
