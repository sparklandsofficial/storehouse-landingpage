"use client"

import { useState } from 'react'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown } from 'lucide-react'

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
      "7.非法取得、法律禁止或有違公序良俗之物品。"
    ]
  },
  {
    question: "租金及押金該如何繳納？",
    answer: ["租金及押金繳納相關信息..."] // 請根據實際情況填寫
  },
  {
    question: "押金該如何退還？",
    answer: ["押金退還相關信息..."] // 請根據實際情況填寫
  },
  {
    question: "該如何進入分店？",
    answer: ["進入分店的方法..."] // 請根據實際情況填寫
  }
]

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
      "7.非法取得、法律禁止或有違公序良俗之物品。"
    ]
  },
  {
    question: "租金及押金該如何繳納？",
    answer: ["租金及押金繳納相關信息..."] // 請根據實際情況填寫
  },
  {
    question: "押金該如何退還？",
    answer: ["押金退還相關信息..."] // 請根據實際情況填寫
  },
  {
    question: "該如何進入分店？",
    answer: ["進入分店的方法..."] // 請根據實際情況填寫
  },
  {
    question: "櫃位內不可放置哪些東西？",
    answer: [
      "1.任何形式的活物(包括植物)與任何形式的遺體(包括動物)。",
      "2.食物、易腐壞或影響公共衛生之物品。",
      "3.油品、溶劑、化工原料等易燃物品。",
      "4.炮竹、火藥、瓦斯、武器等易爆裂物品。",
      "5.化學品、輻射物、生化物、有毒廢料等危害公眾安全物品。",
      "6.任何發出異味、噪音、震動之物品。",
      "7.非法取得、法律禁止或有違公序良俗之物品。"
    ]
  },
  {
    question: "租金及押金該如何繳納？",
    answer: ["租金及押金繳納相關信息..."] // 請根據實際情況填寫
  },
  {
    question: "押金該如何退還？",
    answer: ["押金退還相關信息..."] // 請根據實際情況填寫
  },
  {
    question: "該如何進入分店？",
    answer: ["進入分店的方法..."] // 請根據實際情況填寫
  },
]

export default function FAQSection({ isAll }: { isAll: boolean }) {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    )
  }

  const faqsToShow = isAll ? faqsAll : faqs

  return (
    <section className={`py-16 ${isAll ? 'min-h-[calc(100vh-70px)]' : ''} flex flex-col `}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">常見問題</h2>
        
        {faqsToShow.map((faq, index) => (
          <Collapsible
            key={index}
            open={openItems.includes(index)}
            onOpenChange={() => toggleItem(index)}
            className="mb-4"
          >
            <CollapsibleTrigger className="flex justify-between items-center w-full p-4 bg-[#483729] text-white rounded-t-lg transition-all duration-300 ease-in-out">
              <span>{faq.question}</span>
              <ChevronDown className={`transform transition-transform duration-300 ${openItems.includes(index) ? 'rotate-180' : ''}`} />
            </CollapsibleTrigger>
            <CollapsibleContent className="bg-white rounded-b-lg overflow-hidden transition-all duration-300 ease-in-out">
              <div className="p-4">
                {faq.answer.map((line, i) => (
                  <p key={i} className="mb-2">{line}</p>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
        ))}

        {
          !isAll && (
            <div className="text-center mt-8">
              <button className="text-[#8C734B] text-2xl border-b-2 border-[#8C734B] px-2 py-1 hover:underline transition duration-300 ease-in-out">
                查看更多常見問題
              </button>
            </div>
          )
        }
      </div>
    </section>
  )
}