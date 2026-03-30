"use client";

import Image from "next/image";
import Link from "next/link";
import cabinetsData from "@/app/data/cabinets.json";

export default function CabinetDetail({ 
  params 
}: { 
  params: { id: string; cabinetId: string } 
}) {
  // 先嘗試用 slug 查找，如果找不到再用 id
  const cabinet = cabinetsData.cabinets.find(
    (c) => c.slug === params.cabinetId || c.id.toString() === params.cabinetId
  );

  if (!cabinet) {
    return (
      <div className="min-h-screen bg-white p-8">
        <h1 className="text-3xl font-bold mb-4">找不到櫃子資料</h1>
        <Link href="/" className="text-blue-600 hover:underline">
          返回首頁
        </Link>
      </div>
    );
  }

  // 櫃位功能
  const features = [
    { image: "/images/cabinet_service/1.png", title: "24小時\n濕度控制" },
    { image: "/images/cabinet_service/2.png", title: "智能\n密碼門鎖" },
    { image: "/images/cabinet_service/3.png", title: "24小時\n櫃內監控" }
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] py-8 md:py-8 lg:py-12">
      <div className="max-w-6xl mx-auto ">
        {/* 返回按鈕 */}
        {/* <div className="md:px-8 mb-2 lg:mb-3">
          <Link 
            href={`/#cabnetchoosing`}
            className="inline-flex items-center gap-2 px-4 py-2 text-[#8C734B] bg-[#E3DACD] hover:bg-[#D4C5B5] hover:text-[#6B5A3F] rounded-lg transition-all duration-200 text-sm md:text-base font-medium group"
          >
            <span>返回首頁</span>
          </Link>
        </div> */}

        {/* 主容器 - 左右分欄佈局 */}
        <div className="lg:rounded-3xl lg:shadow-lg overflow-hidden lg:bg-white bg-[#FAF8F5]">
          <div className="p-6 md:p-12 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:mb-12">
              {/* A區：左邊 - 實境圖 / 示意圖 - 特別倉位時保留佔版但隱藏內容，手機版 hidden */}
                <div className={`flex justify-center md:justify-start md:items-start ${cabinet.isSpecial ? 'hidden md:flex' : ''}`}>
                  {cabinet.isSpecial ? (
                    <div className="md:w-[380px] w-full"></div>
                  ) : (
                    <div className="md:w-[380px] w-full relative overflow-hidden shadow-2xl shadow-[rgba(0,0,0,0.35)] border border-[#E3DACD] bg-white">
                      {cabinet.image1 && (
                        <Image
                          src={cabinet.image1}
                          alt={`${cabinet.name} 實境圖`}
                          width={800}
                          height={600}
                          className="w-full h-auto object-contain"
                        />
                      )}
                    </div>
                  )}
                </div>
              {/* 手機版分隔灰線 - 以上全白，以下區塊維持原設計 */}
              {!cabinet.isSpecial && (
              <div className="block md:hidden h-px w-screen bg-[#bfae96] my-6 -mx-6"></div>
              )}
              {/* B區：右邊 - 上下分區 */}
              <div className="flex flex-col gap-8 md:gap-12">
                {/* 右邊上：規格區塊 */}
                {!cabinet.isSpecial && (
                  <>
                    {/* 半格倉：上櫃 / 下櫃 各顯示一組 */}
                    {cabinet.slug === "s" && Array.isArray(cabinet.subCabinets) ? (
                      <div className="flex flex-col space-y-20 md:space-y-14">
                        {cabinet.subCabinets.map((sub, idx) => (
                          <div key={idx} className="flex flex-col space-y-6 lg:mb-10 max-md:mb-5">
                            {/* 標題與標籤 */}
                            <div className="flex flex-col space-y-4">
                              <h1 className="text-[#333333] text-2xl md:text-3xl font-black">
                                {sub.name || cabinet.name}
                              </h1>
                              {/* 每月租金和材積在同一行 */}
                              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                <div className="flex flex-col gap-1">
                                  <p className="text-[#333333] text-xs md:text-sm font-normal opacity-70">
                                    每月租金 <br />(此價格尚不含優惠)
                                  </p>
                                  {/* 金額：同色系、較大、較醒目 */}
                                  <p className="text-[#8C734B] text-2xl md:text-3xl font-semibold">
                                    {sub.monthlyRent || cabinet.monthlyRent || "1234"}{" "}
                                    <span className="text-sm md:text-base font-normal text-[#333333]">
                                      元 / 月
                                    </span>
                                  </p>
                                </div>
                                {/* 材積 Badge */}
                                <div className="px-4 py-2 bg-[#E3DACD] rounded-full inline-flex items-center self-start md:self-auto">
                                  <span className="text-[#333333] text-xs md:text-sm font-light">
                                    材積 {sub.volume || cabinet.volume || 0}
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* 尺寸卡片 - 水平排列 - 永遠一行3個 */}
                            <div className="grid grid-cols-3 gap-2 md:gap-4">
                              {/* 長 */}
                              <div className="bg-[#E3DACD] rounded-[20px] p-2 md:p-6 flex flex-col items-center justify-center shadow-[0_4px_8px_rgba(0,0,0,0.15)] min-w-0">
                                <span className="text-[#333333] text-sm md:text-xl font-medium mb-1 md:mb-2 whitespace-nowrap">
                                  長
                                </span>
                                <span className="text-[#333333] text-lg md:text-3xl font-bold whitespace-nowrap">
                                  {sub.width || cabinet.width || 0}cm
                                </span>
                              </div>
                              {/* 寬 */}
                              <div className="bg-[#E3DACD] rounded-[20px] p-2 md:p-6 flex flex-col items-center justify-center shadow-[0_4px_8px_rgba(0,0,0,0.15)] min-w-0">
                                <span className="text-[#333333] text-sm md:text-xl font-medium mb-1 md:mb-2 whitespace-nowrap">
                                  寬
                                </span>
                                <span className="text-[#333333] text-lg md:text-3xl font-bold whitespace-nowrap">
                                  {sub.depth || cabinet.depth || 0}cm
                                </span>
                              </div>
                              {/* 高 */}
                              <div className="bg-[#E3DACD] rounded-[20px] p-2 md:p-6 flex flex-col items-center justify-center shadow-[0_4px_8px_rgba(0,0,0,0.15)] min-w-0">
                                <span className="text-[#333333] text-sm md:text-xl font-medium mb-1 md:mb-2 whitespace-nowrap">
                                  高
                                </span>
                                <span className="text-[#333333] text-lg md:text-3xl font-bold whitespace-nowrap">
                                  {sub.height || cabinet.height || 0}cm
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      // 其他櫃型：維持單一組顯示
                      <div className="flex flex-col space-y-6">
                        {/* 標題與標籤 */}
                        <div className="flex flex-col space-y-4">
                          <h1 className="text-[#333333] text-3xl md:text-4xl font-black">
                            {cabinet.name}
                          </h1>
                          {/* 每月租金和材積在同一行 */}
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div className="flex flex-col gap-1">
                              <p className="text-[#333333] text-xs md:text-sm font-normal opacity-70">
                                每月租金 <br />(此價格尚不含優惠)
                              </p>
                              {/* 金額：同色系、較大、較醒目 */}
                              <p className="text-[#8C734B] text-2xl md:text-3xl font-semibold">
                                {cabinet.monthlyRent || "1234"}{" "}
                                <span className="text-sm md:text-base font-normal text-[#333333]">
                                  元 / 月
                                </span>
                              </p>
                            </div>
                            {/* 材積 Badge */}
                            <div className="px-4 py-2 bg-[#E3DACD] rounded-full inline-flex items-center self-start md:self-auto">
                              <span className="text-[#333333] text-sm md:text-base font-light">
                                材積 {cabinet.volume || 0}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* 尺寸卡片 - 水平排列 - 永遠一行3個 */}
                        <div className="grid grid-cols-3 gap-2 md:gap-4">
                          {/* 長 */}
                          <div className="bg-[#E3DACD] rounded-[20px] p-2 md:p-6 flex flex-col items-center justify-center shadow-[0_4px_8px_rgba(0,0,0,0.15)] min-w-0">
                            <span className="text-[#333333] text-sm md:text-xl font-medium mb-1 md:mb-2 whitespace-nowrap">
                              長
                            </span>
                            <span className="text-[#333333] text-lg md:text-3xl font-bold whitespace-nowrap">
                              {cabinet.width || 0}cm
                            </span>
                          </div>
                          {/* 寬 */}
                          <div className="bg-[#E3DACD] rounded-[20px] p-2 md:p-6 flex flex-col items-center justify-center shadow-[0_4px_8px_rgba(0,0,0,0.15)] min-w-0">
                            <span className="text-[#333333] text-sm md:text-xl font-medium mb-1 md:mb-2 whitespace-nowrap">
                              寬
                            </span>
                            <span className="text-[#333333] text-lg md:text-3xl font-bold whitespace-nowrap">
                              {cabinet.depth || 0}cm
                            </span>
                          </div>
                          {/* 高 */}
                          <div className="bg-[#E3DACD] rounded-[20px] p-2 md:p-6 flex flex-col items-center justify-center shadow-[0_4px_8px_rgba(0,0,0,0.15)] min-w-0">
                            <span className="text-[#333333] text-sm md:text-xl font-medium mb-1 md:mb-2 whitespace-nowrap">
                              高
                            </span>
                            <span className="text-[#333333] text-lg md:text-3xl font-bold whitespace-nowrap">
                              {cabinet.height || 0}cm
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                )}

                {/* 特別倉位 */}
                {cabinet.isSpecial && (
                  <div className="flex flex-col space-y-6">
                    <div className="flex flex-col space-y-4">
                      <h1 className="text-[#333333] text-3xl md:text-4xl font-black">
                        {cabinet.name}
                      </h1>
                      {/* 每月租金和材積在同一行 */}
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <p className="text-[#333333] text-xs md:text-sm font-normal opacity-70">
                          每月租金 <br/>(此價格尚不含優惠)
                        </p>
                        {/* 材積 Badge */}
                        <div className="px-4 py-2 bg-[#E3DACD] rounded-full inline-flex items-center self-start md:self-auto">
                          <span className="text-[#333333] text-sm md:text-base font-light">
                            材積 {cabinet.volume || 0}
                          </span>
                        </div>
                      </div>
                      <p className="text-red-500 text-xl md:text-xl font-semibold text-center">
                        {cabinet.description}
                      </p>
                    </div>

                    {/* 尺寸卡片 - 水平排列 - 永遠一行3個 */}
                    <div className="grid grid-cols-3 gap-2 md:gap-4">
                      {/* 長 */}
                      <div className="bg-[#E3DACD] rounded-[20px] p-2 md:p-6 flex flex-col items-center justify-center shadow-[0_4px_8px_rgba(0,0,0,0.15)] min-w-0">
                        <span className="text-[#333333] text-sm md:text-xl font-medium mb-1 md:mb-2 whitespace-nowrap">長</span>
                        <span className="text-[#333333] text-lg md:text-3xl font-bold whitespace-nowrap">{cabinet.width || "??"}cm</span>
                      </div>
                      {/* 寬 */}
                      <div className="bg-[#E3DACD] rounded-[20px] p-2 md:p-6 flex flex-col items-center justify-center shadow-[0_4px_8px_rgba(0,0,0,0.15)] min-w-0">
                        <span className="text-[#333333] text-sm md:text-xl font-medium mb-1 md:mb-2 whitespace-nowrap">寬</span>
                        <span className="text-[#333333] text-lg md:text-3xl font-bold whitespace-nowrap">{cabinet.depth || "??"}cm</span>
                      </div>
                      {/* 高 */}
                      <div className="bg-[#E3DACD] rounded-[20px] p-2 md:p-6 flex flex-col items-center justify-center shadow-[0_4px_8px_rgba(0,0,0,0.15)] min-w-0">
                        <span className="text-[#333333] text-sm md:text-xl font-medium mb-1 md:mb-2 whitespace-nowrap">高</span>
                        <span className="text-[#333333] text-lg md:text-3xl font-bold whitespace-nowrap">{cabinet.height || "??"}cm</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 右邊下：img2 + 櫃位功能 */}
                <div className="space-y-6">
                  {/* img2 - 特別倉位時隱藏 - 固定尺寸，明確設定上下左右尺寸 */}
                  {!cabinet.isSpecial && cabinet.image2 && (
                    <div className=" w-[320px] h-[320px] md:w-[380px] md:h-[380px] lg:w-[360px] lg:h-[300px] mx-auto relative rounded-[20px] overflow-hidden">
                      <Image
                        src={cabinet.image2}
                        alt={cabinet.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  {/* 櫃位功能區 */}
                  <div className="space-y-4">
                    <h2 className="text-[#333333] text-xl md:text-2xl font-bold">
                      櫃位功能
                    </h2>
                    
                    {/* 三欄式佈局 */}
                    <div className="grid grid-cols-3 gap-4 md:gap-6 max-md:pb-10">
                      {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center gap-3">
                          {/* 圖片容器 - 淺褐色、大圓角正方形容器 */}
                          <div className="w-16 h-16 md:w-20 md:h-20 bg-[#E3DACD] rounded-[20px] flex justify-center items-center shadow-md overflow-hidden p-2">
                            <Image
                              src={feature.image}
                              alt={feature.title}
                              width={48}
                              height={48}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          {/* 文字 - 水平置中 */}
                          <div className="text-center">
                            <div className="text-[#333333] text-xs md:text-sm font-normal leading-tight whitespace-pre-line">
                              {feature.title}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 注意事項區 */}
            <div className="pt-8 border-t border-[#E3DACD] px-6 md:px-0">
              <h2 className="text-[#333333] text-xl md:text-2xl font-bold mb-4">
                注意事項
              </h2>
              <div className="text-[#333333] text-sm md:text-base font-light leading-6 md:leading-7 tracking-wide">
                （一）櫃內禁止存放下列物包含：<br/>
                1.任何形式的活物（包括植物）與任何形式的遺體（包括動物）。<br/>
                2.食物、易腐壞或影響公共衛生之物品。<br/>
                3.油品、溶劑、化工原料等易燃物品。<br/>
                4.炮竹、火藥、瓦斯、武器等易爆裂物品。<br/>
                5.化學品、輻射物、生化物、有毒廢料等危害公眾安全物品。<br/>
                6.任何發出異味、噪音、震動之物品。<br/>
                7.非法取得、法律禁止或有違公序良俗之物品。<br/>
                一旦發現違規物品，我們將立即終止合約。<br/><br/>
                （二）簽約首月將收取二個月之保證金，並於退約時，經確認倉位原狀無損後，保證金會在十個工作日內全數返還客戶。<br/><br/>
                （三）APP中尺寸資訊僅供參考，因人員施工原因，現場空間尺寸誤差值正負5%屬正常範疇。
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
