export default function FranchiseRequirements() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#483729] mb-12">加盟申請條件</h1>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* 一般加盟 */}
        <div className="bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-2xl font-bold text-[#8B7355] mb-6 text-center">
            一般加盟
          </h2>
          <ul className="space-y-4 list-disc pl-6">
            <li className="text-gray-700">店舖自有</li>
            <li className="text-gray-700">營業面積60坪以上</li>
            <li className="text-gray-700">年齡55歲以下</li>
            <li className="text-gray-700">無不良負債、信用良好</li>
          </ul>
        </div>

        {/* 特許加盟 */}
        <div className="bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-2xl font-bold text-[#8B7355] mb-6 text-center">
            特許加盟
          </h2>
          <ul className="space-y-4 list-disc pl-6">
            <li className="text-gray-700">店舖自有</li>
            <li className="text-gray-700">營業面積60坪以上</li>
            <li className="text-gray-700">無不良負債、信用良好</li>
          </ul>
        </div>
      </div>

      {/* 說明文字區塊 */}
      <div className="space-y-4 text-gray-700">
        <p>
          加盟辦法包括「一般加盟」與「特許加盟」兩種形式，
        </p>
        <p>
          一般加盟係指由加盟主資金準備量較為充足，擁有營運大部分主導權；
        </p>
        <p>
          特許加盟為由星域智空間協助營運，降低您創業的經營風險、享受穩定的經營保障。
        </p>
      </div>
    </div>
  );
} 