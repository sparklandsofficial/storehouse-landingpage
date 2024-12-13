export default function FranchiseTypes() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#483729] mb-12">加盟型態</h1>

      {/* 第一個表格 - 一般加盟 */}
      <div className="overflow-x-auto mb-16">
        <table className="w-full border-collapse bg-white shadow-lg rounded-lg">
          {/* 表頭 */}
          <thead>
            <tr className="bg-[#F5F5F5]">
              <th className="border p-4 w-1/4"></th>
              <th className="border p-4 w-[37.5%] text-xl font-bold">
                一般加盟A
              </th>
              <th className="border p-4 w-[37.5%] text-xl font-bold">
                一般加盟B
              </th>
            </tr>
          </thead>

          {/* 表格內容 */}
          <tbody>
            <tr>
              <td className="border p-4 font-bold bg-[#F5F5F5]">加盟金</td>
              <td className="border p-4 text-center" colSpan={2}>
                35萬元起
                <br />
                (超過100坪每坪2,000元)
              </td>
            </tr>
            <tr>
              <td className="border p-4 font-bold bg-[#F5F5F5]">
                一次性裝修
                <br />
                設備費用
              </td>
              <td className="border p-4 text-center " colSpan={2}>
                250萬元起(依坪數大小而定)
                <br />
                加盟主100%
              </td>
            </tr>
            <tr>
              <td className="border p-4 font-bold bg-[#F5F5F5]">
                年度系統維運費
              </td>
              <td className="border p-4">
                2萬元起/月
                <br />
                (超過100坪每坪150元)
              </td>
              <td className="border p-4">-</td>
            </tr>
            <tr>
              <td className="border p-4 font-bold bg-[#F5F5F5]">履約擔保</td>
              <td className="border p-4 text-center" colSpan={2}>
                現金30萬元起
                <br />
                (超過100坪每50坪10萬元)
              </td>
            </tr>
            <tr>
              <td className="border p-4 font-bold bg-[#F5F5F5]">利潤分配</td>
              <td className="border p-4">95% / 5%</td>
              <td className="border p-4">80% / 20%</td>
            </tr>
            <tr>
              <td className="border p-4 font-bold bg-[#F5F5F5]">費用歸屬</td>
              <td className="border p-4 text-center" colSpan={2}>
                管銷費用、員工薪資、不動產維運費用、行銷費用
              </td>
            </tr>
            <tr>
              <td className="border p-4 font-bold bg-[#F5F5F5]">契約期間</td>
              <td className="border p-4 text-center" colSpan={2}>
                8年
              </td>
            </tr>
            <tr>
              <td className="border p-4 font-bold bg-[#F5F5F5]">備註</td>
              <td className="border p-4" colSpan={2}>
                <ul className="list-disc pl-5 space-y-2">
                  <li>以上費用皆為未稅金額。</li>
                  <li>
                    各加盟主須以不動產持有人進行加盟，但營運需要設立公司。
                  </li>
                  <li>
                    租金收入由星域智空間代收，於次月20日前匯入加盟主公司帳戶，押金部分保留於星域智空間代管。
                  </li>
                  <li>客戶發票開立須由加盟主之公司進行開立。</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 第二個表格 - 特許加盟 */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white shadow-lg rounded-lg">
          <thead>
            <tr className="bg-[#F5F5F5]">
              <th className="border p-4 w-1/4"></th>
              <th className="border p-4 w-[37.5%] text-xl font-bold">
                特許加盟A
              </th>
              <th className="border p-4 w-[37.5%] text-xl font-bold">
                特許加盟B
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border p-4 font-bold bg-[#F5F5F5]">加盟金</td>
              <td className="border p-4 text-center" colSpan={2}>
                25萬元起
                <br />
                (超過100坪每坪1,500元)
              </td>
            </tr>
            <tr>
              <td className="border p-4 font-bold bg-[#F5F5F5]">
                一次性裝修
                <br />
                設備費用
              </td>
              <td className="border p-4">
                250萬元起(依坪數大小而定)
                <br />
                加盟主50%
                <br />
                星域50%
              </td>
              <td className="border p-4">
                250萬元起(依坪數大小而定)
                <br />
                加盟主10%
                <br />
                星域90%
              </td>
            </tr>
            <tr>
              <td className="border p-4 font-bold bg-[#F5F5F5]">
                年度系統維運費
              </td>
              <td className="border p-4 text-center" colSpan={2}>
                -
              </td>
            </tr>
            <tr>
              <td className="border p-4 font-bold bg-[#F5F5F5]">履約擔保</td>
              <td className="border p-4">
                不動產抵押設定
                <br />
                300萬元起
                <br />
                (超過100坪每50坪150萬元)
              </td>
              <td className="border p-4">
                不動產抵押設定
                <br />
                500萬元起
                <br />
                (超過100坪每50坪250萬元)
              </td>
            </tr>
            <tr>
              <td className="border p-4 font-bold bg-[#F5F5F5]">利潤分配</td>
              <td className="border p-4">65% / 35%</td>
              <td className="border p-4">50% / 50%</td>
            </tr>
            <tr>
              <td className="border p-4 font-bold bg-[#F5F5F5]">費用歸屬</td>
              <td className="border p-4 text-center" colSpan={2}>
                管銷費用、員工薪資、不動產維運費用
              </td>
            </tr>
            <tr>
              <td className="border p-4 font-bold bg-[#F5F5F5]">契約期間</td>
              <td className="border p-4">10年</td>
              <td className="border p-4">12年</td>
            </tr>
            <tr>
              <td className="border p-4 font-bold bg-[#F5F5F5]">備註</td>
              <td className="border p-4" colSpan={2}>
                <ul className="list-disc pl-5 space-y-2">
                  <li>以上費用皆為未稅金額。</li>
                  <li>
                    各加盟主須以不動產持有人進行加盟，但營運需要設立公司。
                  </li>
                  <li>
                    租金收入由星域智空間代收，於次月20日前匯入加盟主公司帳戶，押金部分保留於星域智空間代管。
                  </li>
                  <li>客戶發票開立須由加盟主之公司進行開立。</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
