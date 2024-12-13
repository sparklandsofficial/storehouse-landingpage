export default function FranchiseInvestment() {
  return (
    <div className="container mx-auto px-4 py-8 max-md:p-0">
      <h1 className="text-3xl font-bold text-[#483729] mb-12">雙方投資 & 資源</h1>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white shadow-lg rounded-lg">
          <thead>
            <tr className="bg-[#F5F5F5]">
              <th className="border p-4 w-1/4 text-lg font-bold">對象</th>
              <th className="border p-4 text-lg font-bold">項目</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border p-4 font-bold bg-[#F5F5F5] align-top" rowSpan={1}>星域</td>
              <td className="border p-4">
                <ul className="list-disc pl-5 space-y-3">
                  <li>經營技術(專業KNOW-HOW)</li>
                  <li>市場定位</li>
                  <li>平面圖繪製</li>
                  <li>商品開發更新</li>
                  <li>銷控後台系統</li>
                  <li>前端系統</li>
                  <li>後台客服</li>
                  <li>教育訓練</li>
                  <li>帳務報表</li>
                  <li>營運輔導支援</li>
                  <li>特許加盟店舖裝潢：除濕設備、招牌、省電模組、POE設備、電子鎖設備、監控設備、機房建制</li>
                  <li>特許加盟店：行銷策略、廣告、每週清潔</li>
                  <li>一般加盟店舖裝潢溝通：水電設備、電子設備</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td className="border p-4 font-bold bg-[#F5F5F5]">一般加盟</td>
              <td className="border p-4">
                <ul className="list-disc pl-5 space-y-3">
                  <li>加盟金</li>
                  <li>裝修、設備工程</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td className="border p-4 font-bold bg-[#F5F5F5]">特許加盟</td>
              <td className="border p-4">
                <ul className="list-disc pl-5 space-y-3">
                  <li>加盟金</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
} 