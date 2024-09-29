import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-[#483729]">隱私權政策</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#8C734B]">1. 資料蒐集</h2>
        <p className="mb-4">
          星域智空間重視您的隱私權，我們可能會收集以下類型的個人資料：
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>基本個人資料（如姓名、電話號碼、電子郵件地址等）</li>
          <li>使用我們服務時的相關資訊（如租用記錄、付款資訊等）</li>
          <li>網站和應用程式使用數據（如IP地址、瀏覽器類型、訪問時間等）</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#8C734B]">2. 資料使用</h2>
        <p className="mb-4">
          我們收集的資料將用於以下目的：
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>提供和改進我們的服務</li>
          <li>處理交易和付款</li>
          <li>與您溝通有關我們的服務和促銷活動</li>
          <li>分析和改進我們的網站和應用程式性能</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#8C734B]">3. 資料保護</h2>
        <p className="mb-4">
          我們採取適當的技術和組織措施來保護您的個人資料，防止未經授權的訪問、使用或披露。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#8C734B]">4. 資料分享</h2>
        <p className="mb-4">
          除非法律要求或您同意，否則我們不會與第三方分享您的個人資料。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#8C734B]">5. 您的權利</h2>
        <p className="mb-4">
          您有權訪問、更正或刪除您的個人資料。如果您有任何疑問或請求，請聯繫我們的客戶服務。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#8C734B]">6. 政策更新</h2>
        <p className="mb-4">
          我們可能會不時更新此隱私權政策。任何重大變更都會在我們的網站上公佈。
        </p>
      </section>

      <p className="text-sm text-gray-600">
        最後更新日期：{new Date().toLocaleDateString('zh-TW')}
      </p>
    </div>
  );
}