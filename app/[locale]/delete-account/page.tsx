import { Link } from "@/i18n/navigation";
import { setRequestLocale } from "next-intl/server";

// ⬇️⬇️⬇️ 只需改這一行：把 Google 表單連結貼進來即可上線 ⬇️⬇️⬇️
const DELETE_ACCOUNT_FORM_URL = "https://forms.gle/125bAiav99xj8HA78";
// ⬆️⬆️⬆️ 只需改這一行 ⬆️⬆️⬆️

type Props = { params: { locale: string } };

export async function generateMetadata({ params }: Props) {
  setRequestLocale(params.locale);
  return { title: "刪除帳戶 | 星域智空間 Spark Space" };
}

// 「立即刪除／保留」的資料對照——內容與隱私政策「資料保存期限」一致
const DELETED_DATA = [
  "帳號基本資料：姓名、出生日期、手機號碼、電子郵件地址",
  "身份驗證資料：身分證字號、身分證影像",
  "聯絡地址及帳單資訊",
  "裝置識別碼、App 使用行為紀錄",
  "廣告識別碼（IDFA / AAID，僅用於改善服務，不與您的身分綁定，並可隨時於裝置設定中重置）",
];

const RETAINED_DATA: { item: string; period: string; reason: string }[] = [
  { item: "租倉合約與交易紀錄", period: "合約終止後 5 年", reason: "民法消滅時效" },
  { item: "發票與財務紀錄", period: "開立後 5 年", reason: "稅捐稽徵法" },
  { item: "門禁進出紀錄", period: "180 天", reason: "安全管理必要" },
  { item: "付款紀錄（信用卡末四碼）", period: "開立後 5 年", reason: "稅捐稽徵法" },
];

export default async function DeleteAccount({ params }: Props) {
  setRequestLocale(params.locale);

  return (
    <main className="pt-28 pb-24" lang="zh-Hant">
      {/* 標題區 —— 明確提及商店顯示的 App 名稱與開發者名稱（Google 要求） */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12 mb-10">
        <span className="font-label text-primary font-bold tracking-widest uppercase text-xs block mb-3">
          帳戶與資料
        </span>
        <h1 className="font-headline text-4xl md:text-5xl font-black tracking-tight text-on-surface leading-tight mb-4">
          刪除帳戶與相關資料
        </h1>
        <p className="text-on-surface-variant text-base leading-relaxed max-w-2xl">
          本頁說明如何要求刪除您在
          <strong className="text-on-surface">「星域智空間 Spark Space」</strong>
          App 中的帳戶及相關個人資料。本 App 由
          <strong className="text-on-surface">星域智慧科技股份有限公司</strong>
          開發及營運。
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-12 space-y-10">
        {/* 步驟區 —— 顯眼列出要求刪除的步驟（Google 要求） */}
        <section>
          <h2 className="font-headline text-2xl font-black text-on-surface mb-5">如何要求刪除帳戶</h2>
          <ol className="space-y-4">
            {[
              {
                t: "填寫刪除申請表單",
                d: "點擊下方按鈕開啟線上表單，填寫您註冊時使用的姓名、手機號碼與電子郵件地址，以供核對身份。",
              },
              {
                t: "我們核對您的身份",
                d: "為保護您的帳戶安全，我們會以表單所填資料與帳號紀錄比對，確認申請人為本人。",
              },
              {
                t: "完成刪除（30 天內）",
                d: "身份核對無誤後，我們將於 30 天內刪除您的帳號基本資料，並以電子郵件通知您處理結果。",
              },
            ].map((step, i) => (
              <li key={step.t} className="flex gap-4">
                <span className="flex-none w-8 h-8 rounded-full butler-gradient text-white font-bold flex items-center justify-center text-sm">
                  {i + 1}
                </span>
                <div>
                  <div className="font-bold text-on-surface">{step.t}</div>
                  <p className="text-sm text-on-surface-variant leading-relaxed mt-0.5">{step.d}</p>
                </div>
              </li>
            ))}
          </ol>

          {/* 未完成服務的暫緩說明 —— 措辭為「暫緩後主動刪除」而非「拒絕」，
              符合 Google 帳號刪除政策（用戶最終有權被刪），與 Google 表單說明一致 */}
          <div className="mt-6 flex gap-3 items-start bg-surface-container rounded-xl p-4 border border-outline-variant/10">
            <span className="material-symbols-outlined text-primary text-[20px] flex-none mt-0.5">info</span>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              <strong className="text-on-surface">若帳戶仍有未完成之服務或義務</strong>
              （例如櫃位租約生效中、款項或押金尚未結清），我們將
              <strong className="text-on-surface">暫緩處理</strong>
              您的申請，並於服務結束、款項結清後
              <strong className="text-on-surface">主動為您完成刪除</strong>
              ；期間我們會與您保持聯繫說明狀況。
            </p>
          </div>

          <div className="mt-7">
            <a
              href={DELETE_ACCOUNT_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="butler-gradient text-white px-7 py-3.5 rounded-xl text-base font-bold cloud-shadow hover:scale-[1.02] transition-transform inline-flex items-center gap-2"
            >
              前往刪除帳戶申請表單
            </a>
            <p className="text-xs text-on-surface-variant mt-3">
              無法開啟表單？請來信
              <a href="mailto:spark@sparklands.co" className="text-primary font-bold mx-1">
                spark@sparklands.co
              </a>
              或致電
              <a href="tel:02-8177-7085" className="text-primary font-bold ml-1">
                (02) 8177-7085
              </a>
              ，並註明「申請刪除帳戶」。
            </p>
          </div>
        </section>

        {/* 將被刪除的資料 —— 指明刪除的資料類型（Google 要求） */}
        <section>
          <h2 className="font-headline text-2xl font-black text-on-surface mb-4">將會刪除的資料</h2>
          <p className="text-sm text-on-surface-variant mb-4">
            完成刪除後，以下與您帳號直接相關的個人資料將被移除：
          </p>
          <ul className="space-y-2">
            {DELETED_DATA.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-[18px] flex-none">check_circle</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* 依法保留的資料 —— 指明保留的資料類型與保留期限（Google 要求） */}
        <section>
          <h2 className="font-headline text-2xl font-black text-on-surface mb-4">依法須保留的資料</h2>
          <p className="text-sm text-on-surface-variant mb-4">
            依中華民國相關法令，部分交易與財務紀錄即使在帳號刪除後仍須保留一段期間，屆滿後即會刪除：
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-surface-container">
                  <th className="text-left px-4 py-3 font-bold text-on-surface border border-outline-variant/20">資料類別</th>
                  <th className="text-left px-4 py-3 font-bold text-on-surface border border-outline-variant/20">保留期間</th>
                  <th className="text-left px-4 py-3 font-bold text-on-surface border border-outline-variant/20">法令依據</th>
                </tr>
              </thead>
              <tbody>
                {RETAINED_DATA.map((row) => (
                  <tr key={row.item}>
                    <td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">{row.item}</td>
                    <td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">{row.period}</td>
                    <td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">{row.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* 釐清：依法保留的合約／交易紀錄本身內嵌個資，故帳號基本資料雖已刪除，
              這些個資仍會隨紀錄保留至法定期限屆滿——避免與「基本資料 30 天刪除」看似矛盾 */}
          <p className="text-sm text-on-surface-variant mt-4 bg-surface-container rounded-xl p-4">
            上述依法保留之合約與交易紀錄中，可能包含您的姓名、身分證字號、地址及簽章等個人資料。
            即使您的帳號基本資料已於 30 天內刪除，該等資料仍會隨紀錄保留至上述法定期限；
            期間僅供履行會計、稅務及法律義務，不作其他用途，屆滿後即刪除。
          </p>
          <p className="text-xs text-on-surface-variant mt-4">
            關於資料蒐集與處理的完整說明，請參閱我們的
            <Link href="/privacy" className="text-primary font-bold mx-1 hover:underline">
              隱私權政策
            </Link>
            。
          </p>
        </section>

        {/* 底部導覽 */}
        <div className="flex flex-col sm:flex-row gap-3 justify-between items-center pt-4 border-t border-outline-variant/10">
          <Link href="/privacy" className="text-sm text-primary font-bold font-label flex items-center gap-1.5 hover:underline">
            <span className="material-symbols-outlined text-[16px]">shield</span>
            隱私權政策
          </Link>
          <Link
            href="/"
            className="butler-gradient text-white px-6 py-2.5 rounded-xl text-sm font-bold cloud-shadow hover:scale-[1.02] transition-transform flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[16px]">home</span>
            返回首頁
          </Link>
        </div>
      </div>
    </main>
  );
}
