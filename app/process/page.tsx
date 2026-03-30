import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "租倉流程 | Spark Space 星域智空間",
};

export default function Process() {
  return (
    <div className="pt-28 pb-24">
      {/* HERO */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center mb-20 be-1">
        <span className="font-label text-primary font-bold tracking-widest uppercase text-xs block mb-4">租倉流程</span>
        <h1 className="font-headline text-5xl md:text-6xl font-black tracking-tight text-on-surface leading-[1.05] mb-6">
          租倉流程四步驟
        </h1>
        <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          從下載 APP 到你的東西放進倉庫，最快 <strong className="text-on-surface">5 分鐘</strong>。
          <br />全程手機完成，不需要任何人工協助，不需要親自到場。
        </p>
      </div>

      {/* STEPS */}
      <section className="max-w-5xl mx-auto px-6 lg:px-12 mb-28 be-2">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
          {[
            {
              num: "01",
              icon: "smartphone",
              gradient: true,
              title: "下載 APP 並註冊",
              desc: "下載「Spark Space 星域智空間」APP，完成手機號碼驗證，開啟你的帳號。",
              extra: (
                <div className="flex gap-3 mt-4 items-center flex-wrap justify-center">
                  <a href="https://www.sparkspace.com.tw/iosdownload" target="_blank" rel="noopener" className="flex items-center gap-1 text-xs font-label font-bold text-primary hover:underline">
                    <Image
                      src="/images/ios-download.webp"
                      alt="Download on the App Store"
                      width={135}
                      height={40}
                      className="h-[28px] w-auto"
                    />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=terizac.intheblackworld.storehouseapp&pcampaignid=web_share" target="_blank" rel="noopener" className="flex items-center gap-1 text-xs font-label font-bold text-primary hover:underline">
                    <Image
                      src="/images/android-download.webp"
                      alt="Get it on Google Play"
                      width={152}
                      height={45}
                      className="h-[28px] w-auto"
                    />
                  </a>
                </div>
              ),
              last: false,
            },
            {
              num: "02",
              icon: "grid_view",
              gradient: false,
              title: "選擇倉位",
              desc: "瀏覽延吉店平面圖，即時查看可用倉位與尺寸，依需求選擇最適合的大小。",
              extra: (
                <Link href="/pricing" className="mt-4 text-xs font-label font-bold text-primary hover:underline flex items-center gap-1">
                  看各尺寸說明 <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </Link>
              ),
              last: false,
            },
            {
              num: "03",
              icon: "lock_open",
              gradient: false,
              title: "產生數位密碼",
              desc: "系統自動產生你的專屬動態密碼，用來開啟店面大門與個人倉位，安全且即時更新。",
              extra: null,
              last: false,
            },
            {
              num: "04",
              icon: "contract",
              gradient: false,
              title: "線上簽約完成租倉",
              desc: "線上完成電子合約簽署與信用卡付款，立即生效。你的東西今天就能搬進來。",
              extra: null,
              last: true,
            },
          ].map((step) => (
            <div key={step.num} className="flex flex-col items-center text-center">
              <div className={`relative mb-6 ${step.last ? "" : "step-line"}`}>
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center cloud-shadow ${step.gradient ? "butler-gradient" : "bg-surface-container-lowest border border-outline-variant/10"}`}>
                  <span className={`material-symbols-outlined text-3xl ${step.gradient ? "text-white" : "text-primary"}`}>{step.icon}</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-on-surface text-inverse-on-surface rounded-full flex items-center justify-center text-xs font-black font-label">
                  {step.num}
                </div>
              </div>
              <h3 className="font-headline font-black text-lg text-on-surface mb-2">{step.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{step.desc}</p>
              {step.extra}
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <div className="inline-flex items-center gap-3 bg-surface-container-lowest cloud-shadow rounded-2xl px-8 py-5 border border-outline-variant/5">
            <span className="material-symbols-outlined text-primary text-2xl">timer</span>
            <div>
              <div className="font-headline font-black text-on-surface text-lg">整個流程最快 5 分鐘</div>
              <div className="text-on-surface-variant text-sm font-label">不需到場、不需等待、不需任何人工協助</div>
            </div>
          </div>
        </div>
      </section>

      {/* APP FEATURES */}
      <section className="bg-surface-container-low py-24 px-6 lg:px-12 be-3">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-label text-primary font-bold tracking-widest uppercase text-xs block mb-4">智慧管理 APP</span>
              <h2 className="font-headline text-4xl md:text-5xl font-black text-on-surface tracking-tight leading-tight mb-4">
                一手掌握<br />你的倉儲空間
              </h2>
              <p className="text-on-surface-variant text-base leading-relaxed mb-10">
                這是我們自建的倉儲管理平台，不是第三方 APP。把租倉、開門、監控、支付全部整合在一起，讓你完全自主管理自己的空間。
              </p>
              <div className="space-y-6">
                {[
                  { icon: "videocam", bg: "bg-primary-fixed", color: "text-primary", title: "即時監控", desc: "24 小時高清即時影像，隨時查看倉位安全狀態。" },
                  { icon: "touch_app", bg: "bg-secondary-container", color: "text-secondary", title: "一鍵租倉", desc: "直覺介面，三分鐘內完成預約、租用與簽約。" },
                  { icon: "key", bg: "bg-tertiary-fixed", color: "text-tertiary", title: "動態密碼產生", desc: "即時產生專屬密碼，可授權親友臨時進出倉位。" },
                  { icon: "map", bg: "bg-primary-fixed", color: "text-primary", title: "店內導航", desc: "店內平面圖導航，精確引導至你租用的倉位地點。" },
                ].map((f) => (
                  <div key={f.title} className="flex items-start gap-4">
                    <div className={`w-10 h-10 ${f.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <span className={`material-symbols-outlined ${f.color} text-[20px]`}>{f.icon}</span>
                    </div>
                    <div>
                      <div className="font-bold text-on-surface mb-1">{f.title}</div>
                      <div className="text-on-surface-variant text-sm">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 flex flex-wrap gap-4 items-center">
                <a href="https://www.sparkspace.com.tw/iosdownload" target="_blank" rel="noopener" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="/images/ios-download.webp"
                    alt="Download on the App Store"
                    width={135}
                    height={40}
                    className="h-[40px] w-auto"
                  />
                </a>
                <a href="https://play.google.com/store/apps/details?id=terizac.intheblackworld.storehouseapp&pcampaignid=web_share" target="_blank" rel="noopener" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="/images/android-download.webp"
                    alt="Get it on Google Play"
                    width={152}
                    height={45}
                    className="h-[40px] w-auto"
                  />
                </a>
              </div>
            </div>

            {/* APP mockup (old design image) */}
            <div className="flex items-center justify-center lg:justify-end">
              <div className="w-[300px] md:w-[340px] lg:w-[400px]">
                <Image
                  src="/images/phone_app_capture.png"
                  alt="Spark Space App 畫面"
                  width={800}
                  height={1600}
                  className="w-full h-auto drop-shadow-[0_32px_64px_rgba(0,0,0,0.25)]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="max-w-4xl mx-auto px-6 lg:px-12 py-24 text-center">
        <h2 className="font-headline text-3xl font-black text-on-surface tracking-tight mb-4">準備好了嗎？</h2>
        <p className="text-on-surface-variant text-lg mb-8 max-w-md mx-auto">選一個倉位，今天就能開始用。</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/pricing" className="butler-gradient text-white px-8 py-4 rounded-xl font-bold text-base cloud-shadow flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform">
            <span className="material-symbols-outlined text-[20px]">grid_view</span>查看可用倉位
          </Link>
          <a href="https://lin.ee/zL7pC2r" target="_blank" rel="noopener" className="bg-surface-container-lowest border border-outline-variant/20 text-on-surface px-8 py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 hover:bg-surface-container transition-colors">
            <span className="material-symbols-outlined text-[20px]">chat_bubble</span>加 LINE 詢問
          </a>
        </div>
      </section>
    </div>
  );
}
