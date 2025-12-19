"use client";

import Image from "next/image";
import Link from "next/link";
// import AutoImageCarousel from "@/components/ui/AutoImageCarousel";
import FAQSection from "./components/faq";
import FadeInSection from "@/components/ui/FadeInSection";
import cabinetsData from "./data/cabinets.json";

// const indexToleft = (index: number) => {
//   if (index === 0) {
//     return "ml-0 md:ml-20";
//   } else if (index === 1) {
//     return "ml-0 md:ml-10";
//   } else if (index === 2) {
//     return "ml-0 md:-ml-0";
//   } else if (index === 3) {
//     return "ml-0 md:ml-10";
//   } else if (index === 4) {
//     return "ml-0 md:ml-20";
//   }
//   return "ml-0 md:ml-4";
// };

export default function Home() {
  const carouselImages = Array.from({ length: 9 }, (_, i) => ({
    src: `/images/image_group_1/${i + 1}.jpg`,
    alt: `image ${i + 1}`,
  }));
  console.log("[Home] carouselImages", carouselImages);


  return (
    <div>
      {/* 第一區：左圖右文 - 白色底 */}
      <div className="bg-white w-full py-16 relative">
      <FadeInSection>
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* 左邊：正方形封面圖片 */}
            <div className="flex justify-center lg:justify-start relative">
              {/* 垂直文字 - 在圖片左側 */}
              <div className="absolute left-0 top-1/2 -translate-y-[220pt] -translate-x-full hidden lg:block pr-4">
                <p
                  className="text-gray-500 text-base font-extralight tracking-widest"
                  style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
                >
                  Unlock your smart storage life
                </p>
              </div>
              <div className="rounded-xl mt-16  max-md:mt-1 md:rounded-none w-80 h-80 md:w-80 md:h-80 lg:w-[30rem] lg:h-[30rem] relative overflow-hidden shadow-2xl">
                <Image
                  src="/images/202510/cover1.png"
                  alt="星域智空間"
                  fill
                  className="object-cover "
                />
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-start h-full relative">
              <div className="flex flex-col">
                <h1 className="font-mantou text-6xl text-gray-800 leading-tight">24小時</h1>
                <h1 className="font-mantou text-6xl text-gray-800 leading-tight lg:ml-10">智能迷你倉</h1>
                <div className="mt-10 text-gray-600 font-light text-sm md:text-base leading-relaxed lg:ml-20">
                  <p className="mb-2">「小空間，大自由」</p>
                  <p className="mb-2">智慧倉儲系統，全天候守護。</p>
                  <p className="mb-2">工業級 24hr 除濕 與 360° 倉內監控</p>
                  <p>讓每件物品，都擁有最安心的歸屬。</p>
                </div>
              </div>
              {/* 垂直文字 - 右側偏下 */}
              <div className="absolute right-0 bottom-0 hidden lg:block pl-4">
                <p
                  className="text-gray-500 text-base font-extralight tracking-widest"
                  style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
                >
                  Smart Space, Easy Life
                </p>
              </div>
            </div>
          </div>
        </div>
        </FadeInSection>

        {/* 垂直文字 - 手機版：左上 / 右下 */}
        <div className="absolute inset-0 lg:hidden pointer-events-none">
          <div className="absolute left-4 top-4">
            <p
              className="text-gray-500 text-base font-extralight tracking-widest"
              style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
            >
              Unlock your smart storage life
            </p>
          </div>
          <div className="absolute right-4 bottom-4">
            <p
              className="text-gray-500 text-base font-extralight tracking-widest"
              style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
            >
              Smart Space, Easy Life
            </p>
          </div>
        </div>
      </div>

      {/* 橫線 */}
      <div className="w-full">
        <div className="max-w-6xl mx-auto h-px bg-gray-300"></div>
      </div>

      {/* 第二區：櫃型選擇 - 橘色底 */}
      <div id="cabnetchoosing" className="bg-[#FAF8F4] w-full py-16">
        <div className="max-w-6xl mx-auto px-8">
          <FadeInSection>
            {/* 標題 */}
            <h2 className="font-mantou text-6xl text-center text-gray-800 mb-12">
              櫃型選擇
            </h2>
          </FadeInSection>

          {/* 櫃子卡片 - 從 JSON 讀取 */}
          <FadeInSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cabinetsData.cabinets.map((cabinet) => (
                cabinet.isSpecial ? (
                  // 特別倉位卡片 - 可點擊進入詳細頁
                  <Link
                    key={cabinet.id}
                    href={`/branches/1/cabinet/${cabinet.slug || cabinet.id}`}
                    className="block"
                  >
                    <div className="bg-[#EBDFCF] rounded-[20px] shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer max-md:h-[170px] h-[170px]">
                      <div className="flex flex-row h-full  p-2">

                        <div className="w-full  p-3 md:p-6 flex flex-col">
                          <h3 className="font-bold text-2xl text-gray-800 mb-6 text-left">{cabinet.name}</h3>
                          <p className="text-gray-600 text-sm text-center">
                            {cabinet.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ) : (
                  // 一般櫃子卡片 - 可點擊進入詳細頁
                  <Link
                    key={cabinet.id}
                    href={`/branches/1/cabinet/${cabinet.slug || cabinet.id}`}
                    className="block"
                  >
                    <div className="bg-[#EBDFCF] rounded-[20px] shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer max-md:h-[170px]">
                      <div className="flex flex-row h-full">
                        <div className="w-full md:w-1/2">
                          <Image
                            src={cabinet.image!}
                            alt={cabinet.name}
                            width={200}
                            height={200}
                            className="w-full h-32 md:h-48 object-contain"
                          />
                        </div>
                        <div className="w-full md:w-1/2 p-3 md:p-6 flex flex-col justify-center">
                          <h3 className="font-bold text-2xl text-gray-800 mb-2">{cabinet.name}</h3>
                          <p className="text-gray-600 text-sm mb-3">{cabinet.dimensions}</p>
                          <p className="text-sm">{cabinet.price}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              ))}
            </div>
          </FadeInSection>
        </div>
      </div>



      {/* 功能特色區 */}
      <div className="bg-[#FAF8F4] w-full py-16">
        <div className="max-w-6xl mx-auto px-8">
          <FadeInSection>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {[
                { text: "無接觸\n租倉流程", key: "無接觸" },
                { text: "多元化\n櫃型選擇", key: "多元化" },
                { text: "高彈性\n租期合約", key: "高彈性" },
                { text: "零死角\n櫃內監控", key: "零死角" },
                { text: "免鑰匙\n進出取貨", key: "免鑰匙" },
                { text: "55%\n濕度管控", key: "55%" },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-4 md:p-6 rounded-[20px] shadow-xl text-center"
                >
                  <p className="text-lg font-semibold whitespace-pre-line text-[#8c734b]">
                    <span className="text-xl md:text-2xl block mb-1 font-bold">
                      {feature.key}
                    </span>
                    <span className="text-sm md:text-base">
                      {feature.text.split("\n")[1]}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </div>

      {/* 橫線 */}
      <div className="w-full">
        <div className="max-w-6xl mx-auto h-px bg-gray-300"></div>
      </div>

      {/* 第三區：租倉操作 */}
      <div className="bg-[#f4f1eb] w-full py-16">
        <div className="max-w-6xl mx-auto px-8">
          <FadeInSection>
            {/* 標題 */}
            <h2 className="font-mantou text-6xl text-center text-gray-800 mb-12 ">
              租倉操作
            </h2>
          </FadeInSection>

          <FadeInSection>
            {/* 4個橫放的正方形圖片 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 ">
              {[
                {
                  icon: "/images/step-1.png",
                  step: "STEP 1",
                  title: "下載「星域智空間」",
                  description: "APP，完成註冊",
                },
                {
                  icon: "/images/step-2.png",
                  step: "STEP 2",
                  title: "選擇欲承租分店",
                  description: "及櫃位尺寸",
                },
                {
                  icon: "/images/step-3.png",
                  step: "STEP 3",
                  title: "點擊「開啟櫃位」",
                  description: "確認空間大小",
                },
                {
                  icon: "/images/step-4.png",
                  step: "STEP 4",
                  title: "點擊「加入購物車，結帳」",
                  description: "完成簽約流程",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center "
                >
                  <div className="h-[200px] w-[200px] rounded-lg bg-white shadow-md mb-4 flex items-center justify-center">
                    <img
                      src={item.icon}
                      alt={`Step ${index + 1}`}
                      className="w-16 mx-auto"
                    />
                  </div>
                  <p className="font-semibold mb-2 text-xl">{item.step}</p>
                  <p className="text-xl text-[#8C734B]">
                    {item.title}
                    <br />
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </div>

      {/* 橫線 */}
      <div className="w-full">
        <div className="max-w-6xl mx-auto h-px bg-gray-300"></div>
      </div>

      {/* 第四區：下載區塊 - 與第二區同色 */}
      <div className="bg-[#FAF8F4] w-full py-16">
        <div className="max-w-6xl mx-auto px-8">
          <FadeInSection>
            {/* 標題 */}
            <h2 className="font-mantou text-4xl text-center text-gray-800 mb-8">
              立刻下載<br />星域智空間APP
            </h2>

            {/* 下載按鈕 - 左右排列 */}
            <div className="flex justify-center gap-8 mb-12">
              {/* Google Play */}
              <a href="/androiddownload" className="block">
                <Image
                  src="/images/android-download.png"
                  alt="Google Play 下載"
                  width={200}
                  height={60}
                  className="hover:opacity-80 transition-opacity"
                />
              </a>

              {/* App Store */}
              <a href="/iosdownload" className="block">
                <Image
                  src="/images/ios-download.png"
                  alt="App Store 下載"
                  width={200}
                  height={60}
                  className="hover:opacity-80 transition-opacity"
                />
              </a>
            </div>

            {/* 手機畫面 - 置中 */}
            <div className="flex justify-center">
              <Image
                src="/images/phone-bg.png"
                alt="手機畫面"
                width={300}
                height={600}
                className="max-w-xs"
              />
            </div>
          </FadeInSection>
        </div>
      </div>
      {/* 橫線 */}
      <div className="w-full">
        <div className="max-w-6xl mx-auto h-px bg-gray-300"></div>
      </div>
      {/* 舊有內容區 */}
      <div className="max-w-6xl mx-auto px-8">
        {/* Hero Section */}
        {/* <section className="relative z-[1] h-[calc(60vw-70px)]">
          <div className="h-full flex items-center relative z-10  justify-center md:justify-start"> */}
        {/* <div className="text-white md:mt-[-15vh] md:ml-[5vw] flex flex-col items-center">
              <h1 className="md:text-[4vw] text-[8vw] font-bold mb-2 text-[#483729]">
                開幕優惠
              </h1>
              <p className="md:text-[2.6vw] text-[6vw] text-[#8C734B] text-center">
                首月租金半價
              </p>
              <div className="flex justify-center">
                <a
                  href={process.env.NEXT_PUBLIC_IOS_DOWNLOAD_URL}
                  target="_blank"
                  className="md:mt-12 mt-4 md:px-8 md:py-3 px-4 py-2 bg-[#FF9E18] text-white md:text-2xl text-[3vw] rounded-full hover:bg-orange-500 md:w-[200px] w-[150px] transition duration-300 ease-in-out text-center"
                >
                  APP下載
                </a>
              </div>
            </div> */}
        {/* </div>
        </section> */}

        {/* App Download Section */}
        {/* <section className="relative py-16 z-[1]">
          <div className="text-center text-[#483729]">
            <h2 className="mb-0 md:text-[4vw] text-[10vw] relative inline-block">
              <Image
                src="/images/dots.png"
                alt="左引號"
                width={40}
                height={40}
                className="absolute -left-12 top-0 w-[7vw] md:w-[3vw] xl:w-auto"
              />
              立即下載
              <Image
                src="/images/dots.png"
                alt="右引號"
                width={40}
                height={40}
                className="absolute -right-12 top-0 w-[7vw] md:w-[3vw] xl:w-auto"
              />
            </h2>
            <p className="mb-2 md:text-[3vw] text-[8vw]">星域智空間APP</p>
            <p className="mb-8 md:text-[1.4vw] text-[4vw]">
              租倉只需5分鐘 | 快速便利免等待
            </p>
            <div className="flex justify-center space-x-4">
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
        </section> */}
      </div>
      {/* Feature Section */}
      {/* <section className="py-16 bg-[#f7f7f5] relative z-10">
        <div>
          <div className="flex flex-wrap justify-between items-center mb-16">
            {/* 左側手機圖片 */}
      {/* <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-4xl font-bold text-center mb-4">
                5大即時 1機完成
              </h2>
              <img
                src="/images/phone-bg.png"
                alt="App Screenshot"
                className="mx-auto max-w-[100%] md:max-w-[400px]"
              />
            </div> */}

      {/* 右側功能列表 */}
      {/* <div className="w-full md:w-1/2 flex flex-col justify-center">
              {["查詢", "獲取", "完成", "查看", "修改"].map((action, index) => (
                <div key={index} className="flex items-center mb-6">
                  <div
                    className={`bg-[#483729] text-white rounded-full mr-4 w-16 h-16 flex items-center justify-center ${indexToleft(
                      index
                    )}`}
                  >
                    <span className="text-md">
                      即時
                      <br />
                      {action}
                    </span>
                  </div>
                  <Image
                    src="/images/check.png"
                    alt="check"
                    width={40}
                    height={40}
                    className="w-[15px] md:w-[24px] mr-2"
                  />
                  <p className="text-lg">{getFeatureText(index)}</p>
                </div>
              ))}
            </div>
          </div> */}


      {/* </section> */}

      {/* <section className="pb-8 bg-[#f7f7f5] -mt-16 pt-16">
        <AutoImageCarousel
          images={carouselImages}
          intervalMs={3500}
          effect="fade"
        />
      </section> */}

      {/* Tutorial Section */}
      {/* <section className="py-16 bg-[#f7f7f5]">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-12 md:block hidden">
            簡單操作4步驟 租倉只需5分鐘
          </h2>

          <h2 className="text-4xl font-bold text-center mb-12 md:hidden block">
            簡單操作4步驟<br />租倉只需5分鐘
          </h2>


        </div>
      </section> */}
      {/* FAQ Section（第六區，與第二區同色） */}
      <div className="bg-[#f4f1eb] w-full">
        <FadeInSection>
          <FAQSection isAll={false} />
        </FadeInSection>
      </div>

      {/* CTA Section */}
      {/* <section className="relative pt-16 bg-[#f7f7f5] overflow-hidden">
        <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 text-left text-[#483729] mb-8 md:mb-0">
            <h2 className="font-bold mb-4 text-4xl md:text-5xl text-center md:text-left">現在就下載</h2>
            <p className="mb-4 text-2xl md:text-3xl text-center md:text-left">星域智空間APP</p>
            <div className="flex justify-center md:justify-start space-x-4">
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
          <div className="w-full md:w-1/2 relative -mb-12">
            <Image
              src="/images/phone-bg.png"
              alt="App Screenshot"
              width={400}
              height={800}
              className="mx-auto"
            />
          </div>
        </div>
      </section> */}
    </div>
  );
}

// function getFeatureText(index: number): string {
//   const features = [
//     "可租用櫃位及價錢",
//     "進入分店臨時密碼",
//     "個人櫃位電子鎖密碼",
//     "簽約/退租/續租行政流程",
//     "個人櫃位24小時監控",
//   ];
//   return features[index];
// }
