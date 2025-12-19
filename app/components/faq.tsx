"use client";

import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "櫃位內不可放置哪些東西？",
    answer: [
      "1.任何形式的活物(包括植物)與任何形式的遺體(包括動物)。",
      "2.食物、易腐壞或影響公共衛生之物品。",
      "3.油品、溶劑、化工原料等易燃物品。",
      "4.炮竹、火藥、瓦斯、武器等易爆裂物品。",
      "5.化學品、輻射物、生化物、有毒廢料等危害公眾安全物品。",
      "6.任何發出異味、噪音、震動之物品。",
      "7.非法取得、法律禁止或有違公序良俗之物品。",
    ],
  },
  {
    question: "如何完成倉庫租賃？",
    answer: [
      "星域智空間採用24小時全自動化租賃系統，您需先在APP Store 或 Google Play下載「星域智空間APP」，並依照下列步驟完成租櫃。",
      "STEP 1: 下載「星域智空間」APP，完成註冊",
      "STEP 2: 選擇欲承租分店及櫃位尺寸",
      "STEP 3: 點擊「開啟櫃位」，確認空間大小",
      "STEP 4: 點擊「加入購物車，結帳」，完成簽約流程",
    ], // 請根據實際情況填寫
  },
  {
    question: "如何在承租前看櫃位實際大小？",
    answer: [
      "當您完成「櫃位尺寸選擇」後，系統會自動推薦給您合需求的櫃位編號，當您找到該櫃位編號後，再以APP內的「開啟櫃位」，於該櫃位電子所輸入該密碼，即可打開櫃位。",
      "若您認為該櫃位符合您的需求，則可點擊「確認無誤，我要租用」，並依照APP指示完成租賃流程。",
    ], // 請根據實際情況填寫
  },
  {
    question: "我找不到系統推薦我的「櫃位編號」",
    answer: [
      "在APP中及分店現場皆張貼全區平面圖，您可依照平面圖找到各櫃位編號。若您仍無法找到該櫃位編號，星域智空間分店中亦設有「倉運幫位機器人」，您可點擊機器人的螢幕，並輸入您欲承租之櫃位編號，機器人會帶您前往。",
    ], // 請根據實際情況填寫
  },
];

const faqsAll = [
  {
    question: "櫃位內不可放置哪些東西？",
    answer: [
      "1.任何形式的活物(包括植物)與任何形式的遺體(包括動物)。",
      "2.食物、易腐壞或影響公共衛生之物品。",
      "3.油品、溶劑、化工原料等易燃物品。",
      "4.炮竹、火藥、瓦斯、武器等易爆裂物品。",
      "5.化學品、輻射物、生化物、有毒廢料等危害公眾安全物品。",
      "6.任何發出異味、噪音、震動之物品。",
      "7.非法取得、法律禁止或有違公序良俗之物品。",
    ],
  },
  {
    question: "如何完成倉庫租賃？",
    answer: [
      "星域智空間採用24小時全自動化租賃系統，您需先在APP Store 或 Google Play下載「星域智空間APP」，並依照下列步驟完成租櫃。",
      "STEP 1: 下載「星域智空間」APP，完成註冊",
      "STEP 2: 選擇欲承租分店及櫃位尺寸",
      "STEP 3: 掃描「產生倉庫密碼」，開啟空間大小",
      "STEP 4: 點選「我要租用」，完成簽約與付款",
    ], // 請根據實際情況填寫
  },
  {
    question: "如何在承租前看櫃位實際大小？",
    answer: [
      "當您完成「櫃位尺寸選擇」後，系統會自動推薦給您合需求的櫃位編號，當您找到該櫃位編號後，再以APP內的「產生臨時密碼」，於該櫃位電子所輸入該密碼，即可打開櫃位。",
      "若您認為該櫃位符合您的需求，則可點擊「確認無誤，我要租用」，並依照APP指示完成租賃流程。",
    ], // 請根據實際情況填寫
  },
  {
    question: "我找不到系統推薦我的「櫃位編號」",
    answer: [
      "在APP中及分店現場皆張貼全區平面圖，您可依照平面圖找到各櫃位編號。若您仍無法找到該櫃位編號，星域智空間分店中亦設有「倉運幫位機器人」，您可點擊機器人的螢幕，並輸入您欲承租之櫃位編號，機器人會帶您前往。",
    ], // 請根據實際情況填寫
  },
  {
    question: "承租櫃位該攜帶哪些東西？可以打統編嗎？",
    answer: [
      "星域智空間採用APP租賃流程，請您進入分店前，先完成APP Store 或 Google Play下載「星域智空間APP」，租櫃所有的流程皆需使用APP完成。",
      "星域智空間租櫃資以「個人戶」為單位，請攜帶悠遊會員帳戶之身分證，於簽約時APP會要求拍上傳身分證正反面以完成簽約流程。",
      "若您需開立公司發票，請於簽約付款結束後，至電子發票系統中輸入您的「統一編號」及「公司抬頭」，APP中亦有詳細的Email，FB並盡速將您的發票寄至您的信箱。",
    ], // 請根據實際情況填寫
  },
  {
    question: "可進入分店參觀時間？需要跟專人預約嗎？",
    answer: [
      "星域智空間原則上營業24小時營業，各分店營業時間請至Google 商家查看。您不需要與任何專員進行預約，如有保全人員、領約、租賃、續租等需求，皆可使用APP完成。",
    ], // 請根據實際情況填寫
  },
  {
    question: "該如何進入分店？",
    answer: [
      "欲進入星域智空間分店，您需先在APP Store 或 GooglePlay下載「星域智空間APP」，並完成會員註冊及登入。",
      "您可於APP中選擇欲進入分店，您抵達該分店後，點擊「顯示大門密碼」，並於大門輸入該臨時密碼，您即可進入分店。",
    ], // 請根據實際情況填寫
  },
  {
    question: "租金及押金該如何繳納？",
    answer: [
      "租賃櫃位與租賃房屋相同，繳納費用包含「押金」及「租金」。",
      "押金：星域智空間不論租期長短，押金皆為「兩個月租金」作為計算，並於簽約時透過信用卡支付押金，押金將於完成退租後返還。",
      "租金：本公司租金皆使用「信用卡自動扣款」，系統將會依照您的租賃時間，每個月固定扣款，例如：1月1號為您起租日，下一期扣款時間為2月1號，依此類推至您租期結束。",
    ], // 請根據實際情況填寫
  },
  {
    question: "退租後，押金該如何退還？",
    answer: [
      "於APP中點選「我的倉庫」，您可看到櫃位剩餘的租期，請務必於租賃截止日前，至現場清空櫃位，並完成退租流程。",
      "當您清空櫃位後，APP會請您提交「押金退還帳戶」，完成提交後約10個工作天，公司會將押金退還給您。",
    ],
  },
  {
    question: "忘記退租怎麼辦？",
    answer: [
      "若您因素忙無法於租賃期間到期前完成退租流程，系統將再自動續約一個月，您可於到期日前再完成退租，自動續約並不會影響您的押金退款金額。",
    ],
  },
  {
    question: "提早解約相關事宜",
    answer: [
      "若您於租期前申請「退租」，將視為提早解約，提早解約公司會退還您1個月的押金，及該月未使用天數，進行等比例租金退款。",
      "例如：王小明承租櫃位於113.01.01至113.06.30，自動扣款將會每個月1號，倘若王小明於113.03.05完成清空櫃位並提早退租，後續113.04.01、113.05.01、113.06.01將會暫停自動扣款；113.03.01自動扣款之租金，將按照未使用天數，依照租金比例進行退款。而因王小明未能完成租賃合約，故公司將僅會退還1個月押金。",
    ],
  },
];

export default function FAQSection({ isAll }: { isAll: boolean }) {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const faqsToShow = isAll ? faqsAll : faqs;

  return (
    <section
      className={`py-16 ${
        isAll ? "min-h-[calc(100vh-70px)] " : ""
      } flex flex-col `}
    >
      <div className="container mx-auto px-4 ">
        <h2 className="font-mantou text-6xl text-center text-gray-800 mb-12 ">常見問題</h2> {/*text-4xl font-bold text-center mb-12*/}

        {faqsToShow.map((faq, index) => (
          <Collapsible
            key={index}
            open={openItems.includes(index)}
            onOpenChange={() => toggleItem(index)}
            className="mb-4 w-full max-w-2xl mx-auto "
          >
            <CollapsibleTrigger className="flex justify-between items-center w-full p-4 bg-[#E3D7C4] text-black rounded-t-lg transition-all duration-300 ease-in-out">
              <span>{faq.question}</span>
              <ChevronDown
                className={`transform transition-transform duration-300 ${
                  openItems.includes(index) ? "rotate-180" : ""
                }`}
              />
            </CollapsibleTrigger>
            <CollapsibleContent className="bg-[#CCC1B0] bg-white rounded-b-lg overflow-hidden transition-all duration-300 ease-in-out">
              <div className="p-4">
                {faq.answer.map((line, i) => (
                  <p key={i} className="mb-2">
                    {line}
                  </p>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
        ))}

        {!isAll && (
          <div className="text-center mt-8">
            <Link href="/faq">
              <button className="text-[#8C734B] text-2xl border-b-2 border-[#8C734B] px-2 py-1 transition duration-300 ease-in-out w-1/2 mx-auto block">
                更多常見問題
              </button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
