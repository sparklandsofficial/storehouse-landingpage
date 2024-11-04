import Image from "next/image";

export default function About() {
  return (
    <>
      {/* <Image
        src="/images/about-bg-2.jpg"
        alt="擴大空間，享受生活"
        width={5600}
        height={4500}
        className="w-full relative top-[-70px] left-0"
      /> */}
      {/* <div className="container mx-auto px-4 py-16 relative z-10 -mt-[30vw] md:-mt-[10vw]">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 md:pl-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#483729] text-center md:text-left -ml-20 md:ml-0">
              擴大空間
            </h1>
            <h2 className="text-5xl md:text-7xl font-semibold mb-8 text-[#8B7E74] text-center md:text-left ml-20 md:ml-40">
              享受生活
            </h2>
          </div>
        </div>
      </div> */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-[#483729]">
            關於星域智空間
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#8C734B]">
            About Spark Space
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/images/about-bg-2.jpg"
              alt="整潔的收納架"
              width={600}
              height={400}
              className=""
            />
          </div>
          <div className="w-full md:w-1/3 md:pl-12">
            <h3 className="text-3xl font-bold mb-6 text-[#FF9E18]">經營理念</h3>
            <p className="text-lg mb-6 text-[#483729]">
              星域智空間主打「24小時全智能租櫃體驗」，可於APP(星域智空間)
              中完成櫃位租賃、合約簽署、線上付款、續租/退租等事宜，您不再
              需要再與客服人員預約參觀，隨時可以透過APP進入店內參觀。
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-end">
            <Image
              src="/images/about-bg-2.jpg"
              alt="擴大空間，享受生活"
              width={600}
              height={400}
              className=""
            />
          </div>
          <div className="w-full md:w-1/3 md:pr-12">
            <h3 className="text-3xl font-bold mb-6 text-[#FF9E18]">三大核心</h3>
            <p className="text-lg mb-6 text-[#483729]">
              <div className="font-bold mt-2">安全性</div>
              星域最為重視所有客戶的貨品安全性，每個櫃位中我們都安裝了「櫃內監控設備」，您可以在APP中隨時查看櫃內狀況。<br />
              <div className="font-bold mt-2">便利性</div>
              傳統個人倉儲的鎖頭鑰匙找不到？鑰匙遺失還要開鎖費？<br />
              在星域您不必再擔心此問題，您隨時可以透過APP查看密碼/變更密碼，不再需要因為鑰匙交接的問題感到麻煩。<br />
              <div className="font-bold mt-2">即時性</div>
              在APP(星域智空間)中，所有櫃位的出租資訊皆即時更新，在家裡就可以查看可承租的櫃位，讓您省下更多的租櫃時間。
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
