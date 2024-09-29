"use client";

import Image from "next/image";
import FAQSection from "./components/faq";

const indexToleft = (index: number) => {
  if (index === 0) {
    return "ml-0 md:ml-20";
  } else if (index === 1) {
    return "ml-0 md:ml-10";
  } else if (index === 2) {
    return "ml-0 md:-ml-0";
  } else if (index === 3) {
    return "ml-0 md:ml-10";
  } else if (index === 4) {
    return "ml-0 md:ml-20";
  }
  return "ml-0 md:ml-4";
};

export default function Home() {
  return (
    <div className="bg-[#f7f7f5]">
      <Image
        src="/images/hero-bg.png"
        alt="Hero Background"
        width={1920}
        height={1320}
        className="w-full h-[60vw] absolute top-[-70px] left-0 z-0 blur-sm opacity-70 md:opacity-100"
      />
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="relative z-[1] h-[calc(60vw-70px)]">
          <div className="container mx-auto h-full flex items-center relative z-10  justify-center md:justify-start">
            <div className="text-white md:mt-[-15vh] md:ml-[5vw] flex flex-col items-center">
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
            </div>
          </div>
        </section>

        {/* App Download Section */}
        <section className="relative py-16 z-[1]">
          <div className="container mx-auto text-center text-[#483729]">
            <h2 className="font-bold mb-0 md:text-[4vw] text-[10vw] relative inline-block">
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
                href="#"
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
                href="#"
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
        </section>
      </div>
      {/* Feature Section */}
      <section className="py-16 bg-[#f7f7f5]">
        <div className="container mx-auto px-4 max-w-[1280px]">
          <div className="flex flex-wrap justify-between items-center mb-16">
            {/* 左側手機圖片 */}
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-4xl font-bold text-center mb-4">
                5大即時 1機完成
              </h2>
              <img
                src="/images/phone-bg.png"
                alt="App Screenshot"
                className="mx-auto max-w-[400px]"
              />
            </div>

            {/* 右側功能列表 */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
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
          </div>

          {/* 底部功能卡片 */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { text: "無接觸\n租倉流程", key: "無接觸" },
              { text: "多元化\n櫃型選擇", key: "多元化" },
              { text: "高彈性\n租期合約", key: "高彈性" },
              { text: "24HR\n零死角監控", key: "24HR" },
              { text: "24HR\n進出取貨", key: "24HR" },
              { text: "24HR\n溫度控管", key: "24HR" },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <p className="text-lg font-semibold whitespace-pre-line text-[#8c734b]">
                  <span className="text-xl md:text-2xl block mb-1">
                    {feature.key}
                  </span>
                  <span className="text-sm md:text-base">
                    {feature.text.split("\n")[1]}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Image
        src="/images/feature-bg.png"
        alt="dots"
        width={1967}
        height={1312}
        className="w-full h-auto"
      />

      {/* Tutorial Section */}
      <section className="py-16 bg-[#f7f7f5]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            簡單操作4步驟 租倉只需5分鐘
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
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
                title: "點擊「產生臨時密碼」",
                description: "，確認空間大小",
              },
              {
                icon: "/images/step-4.png",
                step: "STEP 4",
                title: "點擊「我要租用」",
                description: "，完成簽約流程。",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="h-[200px] w-[200px] rounded-lg shadow-md mb-4 flex items-center justify-center">
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
        </div>
      </section>
      {/* FAQ Section */}
      <FAQSection isAll={false} />

      {/* CTA Section */}
      <section className="relative pt-16 bg-[#f7f7f5] overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 text-left text-[#483729] mb-8 md:mb-0">
            <h2 className="font-bold mb-4 text-4xl md:text-5xl">現在就下載</h2>
            <p className="mb-4 text-2xl md:text-3xl">星域智空間APP</p>
            <div className="flex justify-start space-x-4">
              <a
                href="#"
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
                href="#"
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
      </section>
    </div>
  );
}

function getFeatureText(index: number): string {
  const features = [
    "可租用櫃位及價錢",
    "進入分店臨時密碼",
    "個人櫃位電子鎖密碼",
    "簽約/退租/續租行政流程",
    "個人櫃位24小時監控",
  ];
  return features[index];
}
