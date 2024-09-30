import React from 'react';

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-[#483729]">服務條款</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#8C734B]">1. 服務使用</h2>
        <p className="mb-4">
          歡迎使用星域智空間的服務。使用我們的服務即表示您同意遵守以下條款和條件。請仔細閱讀。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#8C734B]">2. 帳戶責任</h2>
        <p className="mb-4">
          您需要創建一個帳戶來使用我們的某些服務。您有責任維護您的帳戶安全，並對所有使用您帳戶的活動負責。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#8C734B]">3. 服務變更</h2>
        <p className="mb-4">
          星域智空間保留隨時修改或終止服務的權利，恕不另行通知。我們不對任何服務修改、暫停或終止負責。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#8C734B]">4. 用戶行為</h2>
        <p className="mb-4">
          您同意不會使用我們的服務進行任何非法或未經授權的目的。您必須遵守所有適用的法律和法規。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#8C734B]">5. 知識產權</h2>
        <p className="mb-4">
          我們的服務和相關內容受版權、商標和其他知識產權法律保護。您不得未經授權使用這些材料。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#8C734B]">6. 免責聲明</h2>
        <p className="mb-4">
          我們的服務按原樣提供，不提供任何明示或暗示的保證。星域智空間不對任何直接、間接、附帶、特殊或後果性損害負責。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#8C734B]">7. 條款變更</h2>
        <p className="mb-4">
          我們保留隨時修改這些服務條款的權利。修改後的條款將在網站上公佈。繼續使用我們的服務即表示您接受修改後的條款。
        </p>
      </section>

      <p className="text-sm text-gray-600">
        最後更新日期：{new Date().toLocaleDateString('zh-TW')}
      </p>
    </div>
  );
}