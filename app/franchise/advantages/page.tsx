import Link from "next/link";

export default function FranchiseAdvantages() {
  return (
    <div className="container mx-auto px-4 py-8 max-md:p-0">
      <h1 className="text-3xl font-bold text-[#483729] mb-6">加盟優勢</h1>
      
      {/* 副標題 */}
      <h2 className="text-2xl text-[#FF9E18] font-semibold mb-12 text-center">
        輕鬆管理，快速獲利，智能化的全新迷你倉經營方案
      </h2>

      {/* 第一部分：為什麼選擇我們？ */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-[#483729] mb-8">一、為什麼選擇我們？</h3>
        
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-bold text-[#483729] mb-4">1. 智能化管理，無需人力負擔</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>我們採用自己研發的自動化系統，全面支持遠端操作，無需現場人員管理。</li>
              <li>智能門禁、電子鎖、24/7監控設備，讓加盟主輕鬆掌握倉儲狀況。</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-bold text-[#483729] mb-4">2. 快速上手，效率至上</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>提供完整的加盟指導與技術支持，從裝修設計到營運訓練，全程無縫對接。</li>
              <li>我們的高效規劃方案，幫助您在最短時間內開啟經營之路。</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-bold text-[#483729] mb-4">3. 多元方案，靈活選擇</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>針對各種場地需求，我們提供「一般加盟」與「特許加盟」等多元方案，讓您選擇最適合的合作模式。</li>
              <li>無論是小型物業還是大型不動產，我們都能量身打造最佳解決方案。</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-bold text-[#483729] mb-4">4. 超高安全性，客戶信賴</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>全方位的安全監控，包括電子鎖控、監控系統及入侵警報，讓您的迷你倉始終保持安全。</li>
              <li>可靠的後端管理與數據系統，確保資產與用戶信息的雙重安全。</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-bold text-[#483729] mb-4">5. 智慧運營，收益穩健</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>提供精準的市場數據與行銷策略，提升倉位出租率。</li>
              <li>降低管理成本，實現收益最大化。</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-bold text-[#483729] mb-4">6. 強力支持，降低風險</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>從商圈分析到裝修工程，我們提供全面支援，讓加盟主無後顧之憂。</li>
              <li>我們的經驗與專業，將助您穩定創造長期回報。</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 第二部分：適合誰？ */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-[#483729] mb-8">二、適合誰？</h3>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="mb-4">我們的迷你倉加盟方案特別適合：</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>臺灣城市中心的閒置不動產資產持有人，希望將空間快速轉化為穩定現金流。</li>
            <li>有興趣投入低風險、高回報產業的創業者。</li>
          </ul>
        </div>
      </div>

      {/* 呼籲行動區塊 */}
      <div className="text-center bg-[#FF9E18] text-white p-8 rounded-lg">
        <h3 className="text-2xl font-bold mb-4">立即加盟，掌握市場先機！</h3>
        <p className="mb-4">現在就加入我們，成為迷你倉智能化經營的一部分，讓您的不動產價值最大化。</p>
        <Link href="/franchise/contact" className="bg-white text-[#FF9E18] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300 inline-block">
          聯繫我們，了解更多加盟方案！
        </Link>
      </div>
    </div>
  );
} 