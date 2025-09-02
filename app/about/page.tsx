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
              src="/images/about_img_1.png"
              alt="整潔的收納架"
              width={600}
              height={400}
              className=""
            />
          </div>
          <div className="w-full md:w-1/3 md:pl-12">
            <h3 className="text-3xl font-bold mb-6 text-[#FF9E18]">經營理念｜<br></br>以科技建立信任，以空間創造可能</h3>
            <p className="text-lg mb-6 text-[#483729]">
            星域智空間致力於打造全自助、全天候智慧倉儲服務，透過專屬 APP 實現租倉、簽約、付款、續租／退租等流程全程線上完成，開啟零接觸租倉時代。我們相信科技不只是工具，而是信任的橋梁；當用戶能隨時掌握倉內動態、彈性調整密碼、隨選櫃位，我們正在將「存放」轉化為「掌控」。在這裡，儲存不再是成本，而是彈性資產，讓每一平方公尺都成為資源延伸。
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center mb-16">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-end">
            <Image
              src="/images/about_img_2.jpg"
              alt="擴大空間，享受生活"
              width={600}
              height={400}
              className=""
            />
          </div>
          <div className="w-full md:w-1/3 md:pr-12">
            <h3 className="text-3xl font-bold mb-6 text-[#FF9E18]">三大核心｜<br/>安全 · 便利 · 即時，<br/>重塑城市收納新標準</h3>
            <p className="text-lg mb-6 text-[#483729]">
              <div className="font-bold mt-2">安全性</div>
              每個櫃位內建監控設備，用戶可於 APP 上即時查看櫃內影像，全方位保障物品安全與隱私權。<br />
              <div className="font-bold mt-2">便利性</div>
              數位密碼鎖免除鑰匙困擾，使用者隨時變更密碼或查看密碼記錄，完全自主管理進出流程。
              <div className="font-bold mt-2">即時性</div>
              租賃資訊、櫃位狀態 100 % 即時更新，不需現場查詢或客服介入，迅速完成租賃流程，省時又無縫接軌。
            </p>
          </div>
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
            <h3 className="text-3xl font-bold mb-6 text-[#FF9E18]">品牌使命｜<br/>成為台灣彈性空間的首選平台</h3>
            <p className="text-lg mb-6 text-[#483729]">
            我們的願景不僅在於一個據點，而是打造覆蓋全台灣都市生活節點的智慧倉儲網絡。未來，星域智空間將拓展至新北、桃園、台中，以企業倉儲、物流轉運、SaaS 平台等多元模式深耕發展。透過不斷優化 App 功能與硬體設備，我們期盼讓更多用戶感受到智慧租倉的效率與安心，並成為都市中靈活空間解決方案的第一選擇。            </p>
          </div>
        </div>
      </div>
    </>
  );
}
