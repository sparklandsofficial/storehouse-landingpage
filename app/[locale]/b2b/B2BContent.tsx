"use client";

/**
 * B2BContent — full B2B pitch deck for Spark Space.
 *
 * Language logic:
 *   zh = locale !== 'en'  →  show Chinese primary, English secondary
 *   en = locale === 'en'  →  show English primary, Chinese hidden
 *
 * Animations handled via IntersectionObserver (no GSAP dependency):
 *   - .animate → .visible  (fade-up)
 *   - .count-up            (count-up via data-target / data-suffix / data-decimal)
 *   - #b2b-scroll-progress (scroll progress bar)
 */

import { useEffect, useState } from "react";
import "./b2b.css";
import reviewsFallback from "@/data/reviews.json";

interface Review {
  name: string;
  quote: string;
  avatar: string;
  rating: number;
}

const FALLBACK_3: Review[] = ((reviewsFallback.reviews ?? []) as Review[]).slice(0, 3);

interface Props {
  locale: string;
}

export default function B2BContent({ locale }: Props) {
  /* zh = true for zh-TW and zh-CN; false for en */
  const zh = locale !== "en";

  /* ── Google reviews (3 most recent 5-star); starts with local fallback like homepage ── */
  const [reviews, setReviews] = useState<Review[]>(FALLBACK_3);
  useEffect(() => {
    fetch("/api/reviews")
      .then((r) => r.json())
      .then((data) => {
        const top3: Review[] = (data.reviews ?? []).slice(0, 3);
        if (top3.length > 0) setReviews(top3);
      })
      .catch(() => {/* keep fallback */});
  }, []);

  /* ── Hash scroll: Next.js App Router doesn't guarantee hash scroll timing for client components ── */
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  /* ── Intersection Observer for fade-up animations ──
     reviews 在 API 回傳後才渲染，必須把 reviews 加入依賴，
     讓 observer 在 card 出現後重新掃描，否則新增的 .animate 元素永遠不可見 */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".b2b-page .animate").forEach((el) =>
      observer.observe(el)
    );
    return () => observer.disconnect();
  }, [reviews]);

  /* ── Count-up animation ── */
  useEffect(() => {
    function animateCountUp(el: HTMLElement) {
      const target = parseFloat(el.dataset.target ?? "0");
      const decimal = parseInt(el.dataset.decimal ?? "0", 10);
      const suffix = el.dataset.suffix ?? "";
      const duration = 1500;
      const startTime = performance.now();

      function update(currentTime: number) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        const current = target * eased;
        el.textContent =
          decimal > 0
            ? current.toFixed(decimal) + suffix
            : Math.round(current) + suffix;
        if (progress < 1) requestAnimationFrame(update);
      }
      requestAnimationFrame(update);
    }

    const countObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCountUp(entry.target as HTMLElement);
            countObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    document.querySelectorAll(".b2b-page .count-up").forEach((el) =>
      countObserver.observe(el)
    );
    return () => countObserver.disconnect();
  }, []);

  /* ── Scroll progress bar ── */
  useEffect(() => {
    const bar = document.getElementById("b2b-scroll-progress");
    if (!bar) return;
    const handler = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      bar.style.width = ((scrollTop / scrollHeight) * 100).toFixed(2) + "%";
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      {/* Fixed scroll progress bar — rendered outside .b2b-page intentionally */}
      <div id="b2b-scroll-progress" />

      <div className="b2b-page">
        {/* ==================== HERO ==================== */}
        <section className="hero" id="hero">
          <div className="hero-photo" />
          <div className="hero-duotone-tint" />
          <div className="hero-grid-overlay" />
          <div className="hero-gradient" />
          <div className="hero-inner">
            <div className="hero-badge">
              {zh ? "商務合作 · 品牌加盟 · 共同投資" : "Business · Partnership · Investment"}
            </div>

            {zh ? (
              <h1 className="animate">
                一套被<span className="gold">日常驗證</span>過的系統<span className="hidden md:inline">，</span>
                <br />
                一個還未被<span className="gold">認真打開</span>的市場
              </h1>
            ) : (
              <>
                <h1 className="animate">
                  A system tempered by <span className="gold">daily use</span>.
                  <br />
                  A market not yet <span className="gold">fully opened</span>.
                </h1>
                <div className="hero-en-title animate delay-1">
                  A proposition built deliberately — now opened to capital,
                  brand, and operating partners.
                </div>
              </>
            )}

            <div className="proof-strip animate delay-2">
              <div className="proof-chip">
                <span className="dot" />
                {zh
                  ? "LIVE · 延吉旗艦店實營運中"
                  : "LIVE · Yanji flagship operating"}
              </div>
              <div className="proof-chip">{zh ? "100% 自建技術" : "100% IN-HOUSE TECH"}</div>
              <div className="proof-chip">{zh ? "零現場人力" : "ZERO ON-SITE STAFF"}</div>
              <div className="proof-chip">{zh ? "★ 4.9 / Google 評分" : "★ 4.9 / GOOGLE REVIEWS"}</div>
            </div>

            {zh ? (
              <p className="desc-zh animate delay-2">
                一個 APP、手機智慧鎖、無人現場 —
                這三件事讀起來簡單，背後的整合卻走了三年。Spark Space
                在台北延吉旗艦店讓這套系統成為日常，現以三種合作型態開放：品牌加盟、系統授權、共同投資。適合對亞洲都會及其隱性需求有長期判斷的伙伴。
              </p>
            ) : (
              <p className="desc-en animate delay-2">
                An app, a smart lock, an unmanned floor — simple on the surface,
                three years of integration underneath. At our Yanji flagship in
                Taipei, this system has become routine. We are now opening three
                structured ways to participate: brand franchise, system license,
                co-investment — for partners with a considered view on Asia&apos;s
                urban future.
              </p>
            )}

            <div className="hero-actions animate delay-3">
              <a href="#traction" className="btn-gold">
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
                  verified
                </span>
                {zh ? "看實際營運" : "Review Operating Metrics"}
              </a>
              <a
                href="https://lin.ee/zL7pC2r"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light"
              >
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
                  chat
                </span>
                {zh ? "洽談合作" : "Initiate a Conversation"}
              </a>
              <a
                href="https://www.sparkspace.com.tw"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light"
                style={{ fontSize: 13, padding: "10px 20px", borderColor: "rgba(255,255,255,0.1)" }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
                  open_in_new
                </span>
                {zh ? "查看線上場館" : "Visit the Flagship"}
              </a>
            </div>

            <div className="hero-stats animate delay-4">
              <div className="hero-stat">
                <div className="stat-num">
                  <span className="count-up" data-target="0" data-suffix="" />
                </div>
                <div className="stat-label-zh">{zh ? "現場人力" : ""}</div>
                <div className="stat-label-en">{!zh ? "Zero on-site staff" : ""}</div>
              </div>
              <div className="hero-stat">
                <div className="stat-num">
                  <span className="count-up" data-target="24" data-suffix="/7" />
                </div>
                <div className="stat-label-zh">{zh ? "不打烊運營" : ""}</div>
                <div className="stat-label-en">{!zh ? "Always open" : ""}</div>
              </div>
              <div className="hero-stat">
                <div className="stat-num">
                  <span className="count-up" data-target="5" data-suffix="min" />
                </div>
                <div className="stat-label-zh">{zh ? "線上租倉全流程" : ""}</div>
                <div className="stat-label-en">{!zh ? "Lease to access" : ""}</div>
              </div>
              <div className="hero-stat">
                <div className="stat-num">
                  <span className="count-up" data-target="55" data-suffix="–65%" />
                </div>
                <div className="stat-label-zh">{zh ? "穩定期營業利潤率" : ""}</div>
                <div className="stat-label-en">{!zh ? "Steady-state op margin" : ""}</div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== WHY NOW ==================== */}
        <section className="dark-section" id="market">
          <div className="section-inner">
            <div className="section-label animate">
              {zh ? "為何是現在" : "Why Now"}
            </div>
            {zh ? (
              <div className="section-title animate delay-1">
                三條曲線，<span className="gold-text">同時走到拐點</span>
              </div>
            ) : (
              <div className="section-title-en animate delay-1">
                Three Macro Curves Converging at One Inflection
              </div>
            )}
            {zh ? (
              <p className="section-sub animate delay-2">
                需求不是被我們製造出來的。它一直都在 —
                只是過去被電梯間、小貨倉、朋友家對付著。當住宅面積、電商零售、亞太市場成熟度這三條曲線走到一個交集點，這個類別才真正被「看見」。
              </p>
            ) : (
              <p className="section-sub-en animate delay-2">
                Latent demand has long been displaced — to stairwells, makeshift
                rooms, and informal arrangements. Today, three macro curves are
                converging: declining housing footprints, the rise of
                micro-commerce, and APAC penetration catching up to mature
                markets.
              </p>
            )}

            <div className="why-now-grid">
              <article className="force-card animate">
                <div className="force-num">FORCE 01</div>
                {zh ? (
                  <h3>住宅正在變身</h3>
                ) : (
                  <div className="force-en">Housing Footprints Are Compressing</div>
                )}
                {zh ? (
                  <p>
                    台北市新建住宅每戶均坪數十年間縮水超過一成五，走入 25
                    坪以下的微型住宅時代。生活不會因為坪數變小而簡化，反而讓「需要被好好收起來」的東西，成為都市人生活裡說不出口的補註。
                  </p>
                ) : (
                  <div className="force-en-desc">
                    New housing in Taipei has contracted by more than 15% per
                    unit over the past decade. Household possessions did not
                    contract with it — the surplus is the latent demand we serve.
                  </div>
                )}
                <div className="force-source">
                  {zh
                    ? "SOURCE · 內政部不動產資訊平台"
                    : "SOURCE · MOI Real Estate Info Platform"}
                </div>
              </article>

              <article className="force-card animate delay-1">
                <div className="force-num">FORCE 02</div>
                {zh ? (
                  <h3>微型品牌的靜默增長</h3>
                ) : (
                  <div className="force-en">The Emergence of Solo Operators</div>
                )}
                {zh ? (
                  <p>
                    蝦皮、Shopify、IG
                    賣場個人賣家數五年內全數翻了四倍。他們不需要倉管人員，也不會去租一個整體的倉庫。他們要的是一個「可說是自己的」、又能深夜補貨的空間。
                  </p>
                ) : (
                  <div className="force-en-desc">
                    Solo sellers on Shopee, Shopify, and IG commerce have grown
                    five-fold in five years. None will hire warehouse staff; none
                    want inventory in their living room. They require flexible,
                    ambient storage at SME pricing.
                  </div>
                )}
                <div className="force-source">
                  {zh
                    ? "SOURCE · 公開財報與平台官方推估"
                    : "SOURCE · Public filings & platform disclosures"}
                </div>
              </article>

              <article className="force-card animate delay-2">
                <div className="force-num">FORCE 03</div>
                {zh ? (
                  <h3>亞太已走過這條路</h3>
                ) : (
                  <div className="force-en">APAC Has Already Walked the Curve</div>
                )}
                {zh ? (
                  <p>
                    美國 11%、新加坡 7%、日本 5%、香港 4% —
                    都是在都市化成熟到某個閾值後，「自助倉儲」這個類別才一步步浮現。台灣仍不到
                    1%，不是因為需求不在，而是這條路我們才剛走上。
                  </p>
                ) : (
                  <div className="force-en-desc">
                    US: 11%. Singapore: 7.2%. Japan: 5%. Hong Kong: 4%. Each
                    mature market crossed this same urbanisation threshold before
                    the category took hold. Taiwan at &lt;1% reflects timing —
                    not absence of demand.
                  </div>
                )}
                <div className="force-source">
                  SOURCE · SSAA 2024 / JSSA 2024 / Mordor Intelligence APAC 2024
                </div>
              </article>
            </div>

            {/* Penetration bar chart */}
            <div className="penetration-chart animate delay-3">
              <div className="chart-header">
                <div>
                  <div className="chart-title">
                    {zh ? "滲透率對照" : "SELF-STORAGE PENETRATION"}
                  </div>
                  {!zh && (
                    <div className="chart-sub" style={{ marginTop: 6 }}>
                      % of urban households using self-storage · 2024 estimates
                    </div>
                  )}
                </div>
                <div
                  className="chart-sub"
                  style={{ color: "var(--gold)", fontFamily: "'DM Mono', monospace" }}
                >
                  SSAA 2024 · JSSA 2024 · MORDOR INTEL. APAC 2024
                </div>
              </div>
              {[
                { label: "USA", pct: "11.0%", width: "100%" },
                { label: "Singapore", pct: "7.2%", width: "65%" },
                { label: "Japan", pct: "5.0%", width: "45%" },
                { label: "Hong Kong", pct: "4.0%", width: "36%" },
                { label: "South Korea", pct: "2.0%", width: "18%" },
                { label: "Taiwan", pct: "0.8%", width: "8%", spark: true },
              ].map(({ label, pct, width, spark }) => (
                <div key={label} className={`bar-row${spark ? " spark" : ""}`}>
                  <div className="bar-label">{label}</div>
                  <div className="bar-track">
                    <div className="bar-fill" style={{ width }}>
                      <span>{pct}</span>
                    </div>
                  </div>
                </div>
              ))}
              <div className="chart-foot">
                {zh
                  ? "→ 亞太區年複合成長 17.3%。台灣不是路途上的插曲，是這條主路上最晚進場的車口"
                  : "→ APAC CAGR 17.3%. Taiwan is not a detour from this curve. It is the latest entry onto the same road APAC has already taken."}
              </div>
            </div>
          </div>
        </section>

        {/* ==================== LIVE TRACTION ==================== */}
        <section className="traction" id="traction">
          <div className="section-inner">
            <div className="section-label animate">
              {zh ? "營運實績" : "Live Traction"}
            </div>
            {zh ? (
              <div className="section-title animate delay-1" />
            ) : (
              <div className="section-title-en animate delay-1">
                Operating Before Pitching
              </div>
            )}
            {zh ? (
              <p className="section-sub animate delay-2">
                這份頁面上的每一個數字，都不是專為說服你而設計的指標 —
                它們是延吉旗艦店每天的營運紀錄，由系統自行寫入。任何有興趣往下談的合作方，後台可以打開來看。
              </p>
            ) : (
              <p className="section-sub-en animate delay-2">
                The figures below are written by the platform itself, in
                continuous operation at our Taipei flagship. Operating-system
                access is available to qualified counterparties on request.
              </p>
            )}

            <div className="traction-grid">
              <div className="traction-stat animate">
                <div className="live-pulse">LIVE</div>
                <div className="ts-label">{zh ? "平均出租率" : "Occupancy"}</div>
                <div className="ts-num">
                  <span className="count-up" data-target="90" data-suffix="" />
                  <span className="ts-unit">%</span>
                </div>
                <div className="ts-desc">
                  {zh ? "穩定期單店出租率指標" : "Steady-state occupancy rate"}
                </div>
              </div>
              <div className="traction-stat animate delay-1">
                <div className="live-pulse">LIVE</div>
                <div className="ts-label">{zh ? "Google 評分" : "Google Rating"}</div>
                <div className="ts-num">
                  <span className="count-up" data-target="4.9" data-suffix="" data-decimal="1" />
                  <span className="ts-unit">★</span>
                </div>
                <div className="ts-desc">
                  {zh ? "真實用戶評論累積" : "Verified Google reviews"}
                </div>
              </div>
              <div className="traction-stat animate delay-2">
                <div className="live-pulse">LIVE</div>
                <div className="ts-label">{zh ? "客戶留存率" : "Retention"}</div>
                <div className="ts-num">
                  <span className="count-up" data-target="85" data-suffix="" />
                  <span className="ts-unit">%</span>
                </div>
                <div className="ts-desc">
                  {zh ? "租滿首月後自動續約比例" : "Auto-renew after month 1"}
                </div>
              </div>
            </div>

            <div className="traction-quote animate delay-4">
              <div className="quote-mark">「</div>
              <div className="quote-body">
                {zh ? (
                  <p>
                    每一個數字背後，都是一支 APP、一把密碼鎖、一台攝影機所記錄的真實事件。
                    <br className="hidden md:block" />
                    我們不需要去推算它 — 只需要把這套已經在發生的事，搬到下一條街、下一個城市。
                  </p>
                ) : (
                  <div className="quote-en">
                    Every figure here is a real event logged by an app, a smart
                    lock, a camera. We do not need to forecast — we need only to
                    repeat what already happens, on the next street, in the next
                    city.
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ==================== CORE SYSTEM ==================== */}
        <section className="dark-section" id="system">
          <div className="section-inner">
            <div className="section-label animate">
              {zh ? "核心系統" : "Core System"}
            </div>
            {zh ? (
              <div className="section-title animate delay-1">
                六大模組，構成一座<br className="md:hidden" />
                <span className="gold-text">完整的無人化個人倉儲</span>
              </div>
            ) : (
              <div className="section-title-en animate delay-1">
                Six modules — one complete unmanned facility
              </div>
            )}
            {zh ? (
              <p className="section-sub animate delay-2">
                傳統業者把六個模組外包給六個供應商；我們把六個模組做成同一套系統。
                <br className="hidden md:block" />
                穩定性、迭代速度、客製化深度，全部自己掌握
                <br className="hidden md:block" />
                — 這也是「無人化」之所以能成立的根本。
              </p>
            ) : (
              <p className="section-sub-en animate delay-2">
                Traditional operators outsource six modules to six vendors. We
                built all six as one system. Stability, iteration speed,
                customization — fully owned, which is why &quot;unmanned&quot; actually
                works.
              </p>
            )}

            <div className="system-grid">
              {[
                {
                  num: "01",
                  zh: "APP 自動化參觀",
                  en: "Automated Virtual Tours",
                  descZh: "用戶透過 APP 即可瀏覽場館與倉位，結合實景空間導覽，無需現場人員接待。",
                  descEn:
                    "Browse facilities and units via app with real-scene imagery — no on-site staff needed for tours.",
                },
                {
                  num: "02",
                  zh: "線上選位與訂倉",
                  en: "Online Unit Selection & Booking",
                  descZh:
                    "即時顯示可用倉位、尺寸、價格，用戶線上自助完成選位與預訂，系統自動鎖定倉位。",
                  descEn:
                    "Real-time availability with sizes and pricing. Users self-select and book; the system auto-locks the unit.",
                },
                {
                  num: "03",
                  zh: "電子合約簽署",
                  en: "Digital Contract Signing",
                  descZh:
                    "線上完成合約簽署，具法律效力，自動歸檔與通知，免去紙本與面對面流程。",
                  descEn:
                    "Legally binding e-contracts with auto-filing and notifications — eliminating paperwork.",
                },
                {
                  num: "04",
                  zh: "線上支付與自動續約",
                  en: "Online Payment & Auto-Renewal",
                  descZh:
                    "整合多元支付管道，支援自動扣款續約，逾期自動提醒與處理，零人工催繳。",
                  descEn:
                    "Multi-channel payment with auto-debit renewal. Overdue reminders and handling — zero manual follow-up.",
                },
                {
                  num: "05",
                  zh: "智慧門禁控制",
                  en: "Smart Access Control",
                  descZh:
                    "數位密碼鎖搭配 APP 遠端開鎖，即時記錄進出紀錄，非授權存取自動告警。",
                  descEn:
                    "Digital PIN locks with app-based remote unlocking. Real-time access logs and automatic alerts.",
                },
                {
                  num: "06",
                  zh: "即時監控與遠端管理",
                  en: "Real-Time Monitoring & Remote Management",
                  descZh:
                    "櫃內攝影機 24H 即時串流，用戶可隨時查看物品狀態，管理者可遠端監控全場。",
                  descEn:
                    "24H in-unit camera streaming — users check belongings anytime, managers monitor all facilities remotely.",
                },
              ].map(({ num, zh: titleZh, en: titleEn, descZh, descEn }, i) => (
                <div
                  key={num}
                  className={`system-card animate${i > 0 ? ` delay-${i}` : ""}`}
                >
                  <div className="card-num">{num}</div>
                  <h3>{zh ? titleZh : titleEn}</h3>
                  {zh ? (
                    <>
                      <div className="card-en-title">{titleEn}</div>
                      <p>{descZh}</p>
                      <div className="card-en-desc">{descEn}</div>
                    </>
                  ) : (
                    <p>{descEn}</p>
                  )}
                </div>
              ))}
            </div>

            {/* App Store / Google Play — 置中兩行：標題 + badge（連結同全站 footer） */}
            <div
              className="animate delay-3"
              style={{
                marginTop: 48,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: 16,
              }}
            >
              <p style={{ margin: 0, fontSize: 14, color: "rgba(255,255,255,0.55)" }}>
                {zh ? "下載我們的 APP" : "Download Our App"}
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 16,
                }}
              >
                <a
                  href={process.env.NEXT_PUBLIC_IOS_DOWNLOAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download on the App Store"
                  style={{ display: "inline-flex" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/ios-download.webp"
                    alt="Download on the App Store"
                    style={{ height: 48, width: "auto" }}
                  />
                </a>
                <a
                  href={process.env.NEXT_PUBLIC_ANDROID_DOWNLOAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get it on Google Play"
                  style={{ display: "inline-flex" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/android-download.webp"
                    alt="Get it on Google Play"
                    style={{ height: 48, width: "auto" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== USER JOURNEY ==================== */}
        <section className="journey" id="process">
          <div className="section-inner">
            <div className="section-label animate">
              {zh ? "使用者旅程" : "User Journey"}
            </div>
            {zh ? (
              <div className="section-title animate delay-1">
                從看到廣告到放進倉庫<br className="md:hidden" />全程不需要任何人工
              </div>
            ) : (
              <div className="section-title-en animate delay-1">
                From ad to move-in — zero human interaction needed
              </div>
            )}

            <div className="journey-grid">
              {[
                {
                  num: "01",
                  zh: "看到廣告 / 搜尋",
                  en: "See Ad / Search",
                  descZh: "用戶透過 Google、社群廣告或口碑推薦找到 Spark Space，進入 APP 或網站。",
                  descEn: "Users find Spark Space through Google, social ads, or referrals and enter the app or website.",
                },
                {
                  num: "02",
                  zh: "APP 參觀選位",
                  en: "Virtual Tour & Unit Selection",
                  descZh: "透過 APP 瀏覽場館實景、選擇合適倉位大小，即時查看價格與可用狀態。",
                  descEn: "Browse facility tours, select unit size, and check real-time pricing and availability via the app.",
                },
                {
                  num: "03",
                  zh: "線上簽約付款",
                  en: "Sign & Pay Online",
                  descZh: "電子合約線上簽署，選擇付款方式完成首期繳費，全程 5 分鐘內完成。",
                  descEn: "Sign digital contracts and complete first payment online — entire process done in 5 minutes.",
                },
                {
                  num: "04",
                  zh: "取得門禁密碼",
                  en: "Receive Access Code",
                  descZh: "付款完成後系統自動發送數位門禁密碼，可立即使用，無需等待人工配發。",
                  descEn: "Digital access code auto-sent upon payment. Immediate use — no waiting for manual assignment.",
                },
                {
                  num: "05",
                  zh: "進場放置物品",
                  en: "Move In",
                  descZh: "用密碼進入場館與倉位，放置物品。全程有攝影機記錄，安全無虞。",
                  descEn: "Enter facility and unit with PIN code to store items. Full camera coverage ensures security.",
                },
                {
                  num: "06",
                  zh: "APP 隨時管理",
                  en: "Manage Anytime via App",
                  descZh: "隨時透過 APP 查看監控、管理合約、自動續約或退租，完全自主。",
                  descEn: "Monitor, manage contracts, auto-renew, or cancel anytime through the app — fully autonomous.",
                },
              ].map(({ num, zh: titleZh, en: titleEn, descZh, descEn }, i) => (
                <div
                  key={num}
                  className={`journey-step animate${i > 0 ? ` delay-${i}` : ""}`}
                >
                  <div className="step-num">{num}</div>
                  <h4>{zh ? titleZh : titleEn}</h4>
                  {zh ? (
                    <>
                      <div className="step-en-title">{titleEn}</div>
                      <p>{descZh}</p>
                      <div className="step-en-desc">{descEn}</div>
                    </>
                  ) : (
                    <p>{descEn}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== TARGET CUSTOMERS ==================== */}
        <section className="dark-section" id="customers">
          <div className="section-inner">
            <div className="section-label animate">
              {zh ? "你的租客" : "Your Tenants"}
            </div>
            {zh ? (
              <div className="section-title animate delay-1">
                需求結構<span className="gold-text">分散且穩定</span><br className="md:hidden" /> — 不是一個族群的生意
              </div>
            ) : (
              <div className="section-title-en animate delay-1">
                Diversified, durable demand — not a one-segment bet
              </div>
            )}
            {zh ? (
              <p className="section-sub animate delay-2">
                延吉旗艦店的實際用戶組成顯示，四類需求佔比相對均衡 — 沒有任何一類超過 35%。
                <br className="hidden md:block" />
                這意味著單一市場波動（房市、電商、季節）不會擊垮營收
                <br className="hidden md:block" />
                — 對投資人來說，就是更低的尾端風險。
              </p>
            ) : (
              <p className="section-sub-en animate delay-2">
                Real tenant mix at Yanji shows no segment over ~35%. Diversified
                demand = lower tail risk against any single market swing.
              </p>
            )}

            <div className="customer-grid">
              {[
                {
                  icon: "home_work",
                  zh: "裝修過渡",
                  en: "Home Renovation",
                  descZh: "家具暫存剛好幾個月，裝好再搬回去。",
                  descEn: "Temporary furniture storage during renovation — move back when done.",
                },
                {
                  icon: "local_shipping",
                  zh: "電商備貨",
                  en: "E-commerce Inventory",
                  descZh: "庫存不再佔滿家裡，24 小時隨時進出補貨。",
                  descEn: "Inventory off-site, 24H access for restocking anytime.",
                },
                {
                  icon: "checkroom",
                  zh: "換季收納",
                  en: "Seasonal Storage",
                  descZh: "行李箱、棉被、不捨得丟的東西，都有地方好好放。",
                  descEn: "Luggage, bedding, things you can't part with — all safely stored.",
                },
                {
                  icon: "business_center",
                  zh: "小公司存貨與帳冊",
                  en: "Small Business · Inventory & Records",
                  descZh:
                    "不用租整個倉庫，按需彈性租倉。會計憑證、合約檔案、節慶物資與少量庫存，都能在合規期內被妥善保存。",
                  descEn:
                    "No need for a full warehouse. Inventory, accounting records, and contracts kept safely within their retention period.",
                },
              ].map(({ icon, zh: titleZh, en: titleEn, descZh, descEn }, i) => (
                <div
                  key={icon}
                  className={`customer-card animate${i > 0 ? ` delay-${i}` : ""}`}
                >
                  <div className="customer-icon">
                    <span className="material-symbols-outlined">{icon}</span>
                  </div>
                  <h4>{zh ? titleZh : titleEn}</h4>
                  {zh && <div className="customer-en">{titleEn}</div>}
                  <p>{zh ? descZh : descEn}</p>
                  {zh && <div className="customer-en-desc">{descEn}</div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== HARDWARE ==================== */}
        <section className="hardware" id="hardware">
          <div className="section-inner">
            <div className="section-label animate">
              {zh ? "硬體架構" : "Infrastructure"}
            </div>
            {zh ? (
              <div className="section-title animate delay-1">
                軟體之外，硬體同樣自主掌控
              </div>
            ) : (
              <div className="section-title-en animate delay-1">
                Beyond Software — Hardware We Control Too
              </div>
            )}

            <div className="hardware-layout">
              <div className="hw-list">
                {[
                  {
                    icon: "lock",
                    zh: "數位密碼鎖",
                    en: "Digital PIN Locks",
                    descZh:
                      "每個倉位獨立數位密碼鎖，支援遠端重設、即時更換密碼，告別實體鑰匙管理。",
                    descEn:
                      "Individual digital lock per unit with remote reset and instant PIN change — no physical keys.",
                  },
                  {
                    icon: "videocam",
                    zh: "櫃內監視攝影機",
                    en: "In-Unit Surveillance Cameras (Opt-in)",
                    descZh:
                      "提供租戶可選的櫃內攝影機服務（簽約時明確同意），24H 即時串流影像由本人於 APP 中查看。",
                    descEn:
                      "Opt-in in-unit cameras with 24H live streaming, visible only to the tenant via their own app.",
                  },
                  {
                    icon: "water_drop",
                    zh: "工業級除濕系統",
                    en: "Industrial Dehumidification System",
                    descZh:
                      "維持場館 55% 恆定濕度，保護衣物、文件、精品等敏感物品。",
                    descEn:
                      "Maintains constant 55% humidity to protect clothing, documents, and valuables.",
                  },
                  {
                    icon: "door_sliding",
                    zh: "智慧大樓門禁",
                    en: "Smart Building Access Control",
                    descZh:
                      "大樓入口同步整合智慧門禁，非租戶無法進入，雙重安全保障。",
                    descEn:
                      "Building entrance integrated with smart access — non-tenants cannot enter. Dual-layer security.",
                  },
                  {
                    icon: "router",
                    zh: "IoT 中控系統",
                    en: "IoT Central Control Hub",
                    descZh:
                      "所有硬體設備透過 IoT 中控串連雲端平台，實現統一管理與遠端操控。",
                    descEn:
                      "All hardware connected via IoT hub to the cloud platform for unified management and remote control.",
                  },
                ].map(({ icon, zh: titleZh, en: titleEn, descZh, descEn }, i) => (
                  <div
                    key={icon}
                    className={`hw-item animate${i > 0 ? ` delay-${i}` : ""}`}
                  >
                    <div className="hw-icon">
                      <span className="material-symbols-outlined">{icon}</span>
                    </div>
                    <div>
                      <h4>{zh ? titleZh : titleEn}</h4>
                      {zh && <div className="hw-en-title">{titleEn}</div>}
                      <p>{zh ? descZh : descEn}</p>
                      {zh && <div className="hw-en-desc">{descEn}</div>}
                    </div>
                  </div>
                ))}
              </div>

              {/* Sticky spec card */}
              <div className="spec-card animate delay-2">
                <h3>{zh ? "場館規格" : "Facility Specifications"}</h3>
                <div className="spec-en-title">
                  {zh ? "Facility Specifications" : ""}
                </div>
                {[
                  { zh: "倉位尺寸", en: "Unit Sizes", val: "S — XXL" },
                  { zh: "恆定濕度", en: "Humidity", val: "55%" },
                  { zh: "門禁系統", en: "Access System", val: "Digital PIN" },
                  { zh: "監控覆蓋", en: "CCTV Coverage", val: "360°" },
                  { zh: "現場人力", en: "On-Site Staff", val: "0" },
                  { zh: "營運時間", en: "Operating Hours", val: "24 / 7" },
                ].map(({ zh: labelZh, en: labelEn, val }) => (
                  <div className="spec-row" key={labelEn}>
                    <div>
                      <div className="spec-label">{zh ? labelZh : labelEn}</div>
                      {zh && <div className="spec-label-en">{labelEn}</div>}
                    </div>
                    <div className="spec-value">{val}</div>
                  </div>
                ))}
                {/* Unit size grid */}
                <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 12 }}>
                    {zh ? "倉位規格" : "Available Units"}
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                    {[
                      { size: "S", dim: "92×107×110cm" },
                      { size: "M", dim: "123×107×213cm" },
                      { size: "L", dim: "167.5×107×213cm" },
                      { size: "XL", dim: "245×107×213cm" },
                    ].map(({ size, dim }) => (
                      <div
                        key={size}
                        style={{
                          background: "rgba(0,212,200,0.08)",
                          padding: 10,
                          borderRadius: 2,
                          textAlign: "center",
                        }}
                      >
                        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 16, color: "var(--teal)", fontWeight: 500 }}>
                          {size}
                        </div>
                        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)" }}>
                          {dim}
                        </div>
                      </div>
                    ))}
                  </div>
                  <a
                    href="https://www.sparkspace.com.tw/pricing"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "block", marginTop: 12, textAlign: "center",
                      fontSize: 12, color: "var(--gold)", textDecoration: "none", letterSpacing: 1,
                    }}
                  >
                    {zh ? "查看完整方案 →" : "View Plans →"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== COMPARISON ==================== */}
        <section className="comparison" id="compare">
          <div className="section-inner">
            <div className="section-label animate">
              {zh ? "效率對比" : "Comparison"}
            </div>
            {zh ? (
              <div className="section-title animate delay-1">
                傳統倉儲 vs Spark Space
              </div>
            ) : (
              <div className="section-title-en animate delay-1">
                Traditional Storage vs Spark Space
              </div>
            )}

            <div className="compare-table animate delay-2">
              <div className="compare-header">
                <div className="compare-metric">
                  {zh ? "指標" : "Metric"}
                </div>
                <div className="compare-traditional">
                  {zh ? "傳統倉儲" : "Traditional"}
                </div>
                <div className="compare-spark">Spark Space</div>
              </div>
              {[
                {
                  metric: { zh: "現場人力", en: "On-site Staff" },
                  trad: { zh: "1–3 人", en: "1–3 staff" },
                  spark: { zh: "0 人", en: "0 staff" },
                },
                {
                  metric: { zh: "租約流程", en: "Lease Process" },
                  trad: { zh: "1–3 天", en: "1–3 days" },
                  spark: { zh: "5 分鐘", en: "5 minutes" },
                },
                {
                  metric: { zh: "營業時間", en: "Operating Hours" },
                  trad: { zh: "10:00–18:00", en: "10:00–18:00" },
                  spark: { zh: "24 / 7", en: "24 / 7" },
                },
                {
                  metric: { zh: "鑰匙管理", en: "Key Management" },
                  trad: { zh: "實體鑰匙 / 人工配發", en: "Physical keys / manual" },
                  spark: { zh: "數位密碼 / 自動下發", en: "Digital PIN / auto-issued" },
                },
                {
                  metric: { zh: "收款方式", en: "Payment Collection" },
                  trad: { zh: "人工催繳 / 現金轉帳", en: "Manual reminders / cash" },
                  spark: { zh: "自動扣款 / 線上支付", en: "Auto-debit / online" },
                },
                {
                  metric: { zh: "監控查看", en: "Monitoring Access" },
                  trad: { zh: "僅管理端", en: "Manager only" },
                  spark: { zh: "租客 + 管理端 APP", en: "Tenant + admin app" },
                },
                {
                  metric: { zh: "合約管理", en: "Contract Management" },
                  trad: { zh: "紙本合約 / 人工歸檔", en: "Paper / manual filing" },
                  spark: { zh: "電子簽約 / 自動歸檔", en: "E-signature / auto-filed" },
                },
              ].map(({ metric, trad, spark }, i) => (
                <div className="compare-row" key={i}>
                  <div className="compare-metric">
                    {zh ? metric.zh : metric.en}
                  </div>
                  <div className="compare-traditional">
                    {zh ? trad.zh : trad.en}
                  </div>
                  <div className="compare-spark highlight">
                    {zh ? spark.zh : spark.en}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== COMPETITIVE POSITIONING ==================== */}
        <section className="competitive" id="positioning">
          <div className="section-inner">
            <div className="section-label animate">
              {zh ? "競爭定位" : "Competitive Positioning"}
            </div>
            {zh ? (
              <div className="section-title animate delay-1">
                我們在這張地圖上的位置 —{" "}
                <span style={{ color: "var(--gold)" }}>沒有正面交鋒的對手</span>
              </div>
            ) : (
              <div className="section-title-en animate delay-1">
                A category position with no direct counterpart
              </div>
            )}
            {zh ? (
              <p className="section-sub animate delay-2">
                市場上不缺倉儲業者，缺的是「都市型 × 無人化 ×
                自建技術」這個組合。我們把行業內主要型態放在同一張二維地圖上 —
                不是比較誰好誰壞，而是讓投資人看清楚這四象限的競爭結構。
              </p>
            ) : (
              <p className="section-sub-en animate delay-2">
                Asia is well-served by storage operators. What remains
                uncontested is the intersection of urban cabinet format, unmanned
                operation, and in-house technology. The matrix below maps the
                competitive terrain — not to rank operators, but to identify our
                position.
              </p>
            )}

            <div className="competitive-layout">
              <div className="matrix-card animate delay-3">
                <div className="ramp-title">
                  {zh ? "行業定位矩陣" : "INDUSTRY POSITIONING MATRIX"}
                </div>
                <div className="ramp-sub">
                  {zh
                    ? "X 軸：技術整合度 · Y 軸：場館型態（坪倉 vs 櫃倉）"
                    : "X-axis: Tech integration · Y-axis: Venue format (room vs cabinet)"}
                </div>
                <svg className="matrix-svg" viewBox="0 0 600 440" preserveAspectRatio="xMidYMid meet">
                  <rect className="quad" x="60" y="40" width="240" height="160" />
                  <rect className="quad us" x="300" y="40" width="240" height="160" />
                  <rect className="quad" x="60" y="200" width="240" height="160" />
                  <rect className="quad" x="300" y="200" width="240" height="160" />
                  <text className="axis-text" x="70" y="58">
                    {zh ? "Q2 · 櫃倉 + 傳統運營" : "Q2 · Cabinet + Manned"}
                  </text>
                  <text className="axis-text" x="310" y="58" fill="var(--gold)">
                    {zh ? "Q1 · 櫃倉 + 智慧無人化" : "Q1 · Cabinet + Unmanned"}
                  </text>
                  <text className="axis-text" x="70" y="218">
                    {zh ? "Q3 · 坪倉 + 傳統運營" : "Q3 · Room + Manned"}
                  </text>
                  <text className="axis-text" x="310" y="218">
                    {zh ? "Q4 · 坪倉 + 數位化" : "Q4 · Room + Digital"}
                  </text>
                  <line className="axis-line" x1="60" y1="200" x2="540" y2="200" />
                  <line className="axis-line" x1="300" y1="40" x2="300" y2="360" />
                  <text className="axis-text bold" x="60" y="395">
                    {zh ? "坪倉型態" : "Room-style"}
                  </text>
                  <text className="axis-text bold" x="540" y="395" textAnchor="end">
                    {zh ? "櫃倉型態" : "Cabinet-style"}
                  </text>
                  <text className="axis-text bold" transform="rotate(-90 30 220)" x="30" y="220" textAnchor="middle">
                    {zh ? "傳統運營" : "Manned"}
                  </text>
                  <text className="axis-text bold" transform="rotate(-90 30 100)" x="30" y="100" textAnchor="middle">
                    {zh ? "智慧無人化" : "Unmanned"}
                  </text>
                  <text className="axis-text" x="60" y="412">{zh ? "有人值守 · 大坪倉" : "Manned · Larger units"}</text>
                  <text className="axis-text" x="540" y="412" textAnchor="end">{zh ? "技術驅動 · 模組倉" : "Tech-driven · Modular units"}</text>
                  <circle className="competitor-dot" cx="120" cy="280" r="9" />
                  <text className="competitor-label" x="135" y="284">
                    {zh ? "傳統倉儲" : "Traditional"}
                  </text>
                  <text className="competitor-label" x="135" y="297" fontSize="10" fill="rgba(10,15,30,0.45)">
                    Forklift, large units
                  </text>
                  <circle className="competitor-dot" cx="380" cy="270" r="9" />
                  <text className="competitor-label" x="395" y="274">
                    {zh ? "Storage King 類" : "Storage King-type"}
                  </text>
                  <text className="competitor-label" x="395" y="287" fontSize="10" fill="rgba(10,15,30,0.45)">
                    Manned, room-based
                  </text>
                  <circle className="competitor-dot" cx="220" cy="130" r="9" />
                  <text className="competitor-label" x="235" y="134">
                    {zh ? "樂億 / Mini Storage 類" : "Lai-Yi / Mini Storage"}
                  </text>
                  <text className="competitor-label" x="235" y="147" fontSize="10" fill="rgba(10,15,30,0.45)">
                    Cabinet, on-site staff
                  </text>
                  <circle className="us-pulse" cx="445" cy="105" r="18" />
                  <circle className="us-pulse" cx="445" cy="105" r="26" opacity="0.2" />
                  <circle className="us-dot" cx="445" cy="105" r="12" />
                  <text className="us-label" x="464" y="103">Spark Space</text>
                  <text className="competitor-label" x="464" y="118" fontSize="11" fill="var(--gold)">
                    Cabinet · Unmanned · In-house tech
                  </text>
                </svg>
              </div>

              <div className="position-takeaway animate delay-4">
                {[
                  {
                    num: zh ? "Q1 · 我們的位置" : "Q1 · Where We Sit",
                    title: zh ? "櫃倉 × 無人化 × 自建技術" : "Cabinet × Unmanned × In-House Tech",
                    desc: zh
                      ? "把三件事疊在一起。少了任何一件，這個象限就有別人；少了兩件，就回到擁擠的傳統市場。我們是這個象限目前唯一一家完整覆蓋三項的業者。"
                      : "Stack three capabilities together. Miss one — others occupy this quadrant; miss two — and you're back in the crowded traditional market.",
                  },
                  {
                    num: zh ? "Q2 · 鄰近型態" : "Q2 · Adjacent Form",
                    title: `Mini Storage ${zh ? "模型" : "Model"}`,
                    desc: zh
                      ? "同樣使用櫃倉，但仍以現場人員營運。客戶體驗良好但人事結構限制了規模化速度。"
                      : "Same cabinet format but staffed on-site. Customer experience is good, but headcount caps scale velocity — and 24/7 access.",
                  },
                  {
                    num: zh ? "Q3–Q4 · 傳統與半數位" : "Q3–Q4 · Traditional & Semi-digital",
                    title: zh ? "傳統倉儲與大型品牌" : "Traditional & Large-format Brands",
                    desc: zh
                      ? "主要服務搬遷與大宗收納。坪倉單價低、坪效低，與我們服務的小型/微型需求不直接重疊。"
                      : "Mostly serves moves and enterprise inventory. Room-format with low unit price; little overlap with the micro demand we serve.",
                  },
                  {
                    num: zh ? "→ 結論" : "→ Bottom Line",
                    title: zh ? "我們不是「另一家倉儲」" : "Not \"Another Storage Operator\"",
                    desc: zh
                      ? "我們是這個產業的下一個型態：把都市最稀缺資源的限制反過來變成優勢。從這個位置出發，我們以三種合作結構與不同類型的夥伴共同擴張。"
                      : "We are the next form of this industry: turning urban scarcity — underground space, late-night labour — from constraint into advantage.",
                  },
                ].map(({ num, title, desc }) => (
                  <div className="takeaway-card" key={num}>
                    <div className="t-num">{num}</div>
                    <h5>{title}</h5>
                    <p>{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ==================== PARTNERSHIP ==================== */}
        <section id="partnership">
          <div className="section-inner">
            <div className="section-label animate">
              {zh ? "合作結構" : "Partnership"}
            </div>
            {zh ? (
              <div className="section-title animate delay-1">
                三種進場方式，
                <span style={{ color: "var(--gold)" }}>對應三種資產結構</span>
              </div>
            ) : (
              <div className="section-title-en animate delay-1">
                Three Entry Structures, Mapped to Three Forms of Capital
              </div>
            )}
            {zh ? (
              <p className="section-sub animate delay-2">
                手上是空間、是品牌、還是現金？我們提供的不是固定方案，而是三種可組合、可分階段、可協商的合作結構。每一種都從同一份模型出發，路徑不同、節奏不同。
              </p>
            ) : (
              <p className="section-sub-en animate delay-2">
                We structure partnerships around what you bring — physical space,
                an established brand, or capital. Three deal architectures share
                one operating model and differ in cadence, exposure, and path.
              </p>
            )}

            <div className="partner-grid">
              {[
                {
                  icon: "storefront",
                  zh: "品牌加盟",
                  en: "FRANCHISE",
                  subZh: "FRANCHISE · 適合空間持有者",
                  subEn: "FRANCHISE · For space holders",
                  descZh:
                    "你出資、出空間，我們把整套品牌、系統、硬體與運營 SOP 全部交付到位。最低人力投入，最快回收路徑。",
                  descEn:
                    "You contribute the venue and capital; we deliver brand licensing, full technology stack, hardware sourcing, and the operating playbook.",
                  items: [
                    { zh: "Spark Space 品牌與商標授權", en: "Full brand & trademark license" },
                    { zh: "智能櫃體 + IoT 硬體採購支援", en: "Smart-cabinet + IoT hardware sourcing" },
                    { zh: "選址評估 / 動線設計 / 開幕 SOP", en: "Site eval, layout, opening playbook" },
                    { zh: "系統持續更新與遠端維運", en: "Ongoing system updates & remote ops" },
                  ],
                },
                {
                  icon: "developer_board",
                  zh: "系統授權",
                  en: "SYSTEM LICENSE",
                  subZh: "SYSTEM LICENSE · 適合既有品牌",
                  subEn: "SYSTEM LICENSE · For existing brands",
                  descZh:
                    "你已有自己的品牌、場地或客群？導入 Spark Space 整套無人化技術核心，用自己的 logo 上線。",
                  descEn:
                    "For operators with an existing brand, venue, or customer base, we license the full unmanned technology stack under your own identity.",
                  items: [
                    { zh: "管理平台 + 智慧門禁 API", en: "Management platform + access API" },
                    { zh: "白牌 APP 客製化部署", en: "White-label app deployment" },
                    { zh: "IoT 硬體整合方案", en: "IoT hardware integration" },
                    { zh: "專屬技術顧問與訓練", en: "Dedicated tech consulting & training" },
                  ],
                },
                {
                  icon: "handshake",
                  zh: "共同投資",
                  en: "CO-INVESTMENT",
                  subZh: "CO-INVESTMENT · 適合資本方",
                  subEn: "CO-INVESTMENT · For capital partners",
                  descZh:
                    "你有資金、有判斷、有耐心。我們一起出資開新據點，按比例分潤；也可參與 Spark Space 母公司 (Sparklands) 後續輪次。",
                  descEn:
                    "Co-fund individual venues on a per-unit basis or participate in upcoming Sparklands corporate rounds.",
                  items: [
                    { zh: "單店共同出資模式", en: "Per-venue co-funding" },
                    { zh: "母公司股權投資機會", en: "Parent-company equity opportunity" },
                    { zh: "完整財務模型與盡職調查支援", en: "Full model & due diligence support" },
                    { zh: "季度營運與財務透明回報", en: "Quarterly ops + financial reporting" },
                  ],
                },
              ].map(({ icon, zh: titleZh, en: titleEn, subZh, subEn, descZh, descEn, items }, i) => (
                <div
                  key={icon}
                  className={`partner-card animate${i > 0 ? ` delay-${i}` : ""}`}
                >
                  <div className="card-icon gold-bg">
                    <span className="material-symbols-outlined">{icon}</span>
                  </div>
                  <h3>{zh ? titleZh : titleEn}</h3>
                  <div className="card-en-title">{zh ? subZh : subEn}</div>
                  <p>{zh ? descZh : descEn}</p>
                  <ul>
                    {items.map((item) => (
                      <li key={item.en}>
                        <span className="material-symbols-outlined">check_circle</span>
                        <span>{zh ? item.zh : item.en}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== INVESTORS ==================== */}
        <section className="investors" id="investors">
          <div className="section-inner">
            <div className="section-label animate">
              {zh ? "給投資人" : "For Investors"}
            </div>
            {zh ? (
              <div className="section-title animate delay-1">
                這不是一次風口押注 —{" "}
                <span className="gold-text">而是一段可以慢慢看的旅程</span>
              </div>
            ) : (
              <div className="section-title-en animate delay-1">
                Not a Trend to Chase — A Compounding Position Worth Holding
              </div>
            )}
            {zh ? (
              <p className="section-sub animate delay-2">
                許多人會用「成長最快的資產類別」來描述這個賽道。我們更想說的是：它的成長之所以穩定，是因為它由都市生活的基本盤撐起來。如果你的資本願意給時間，這裡有五個值得放在心上的事實。
              </p>
            ) : (
              <p className="section-sub-en animate delay-2">
                This category is often described as the fastest-growing in real
                estate. We frame it differently: its growth compounds because it
                rests on durable structural conditions of urban life. If your
                capital is long-duration, five considerations warrant attention.
              </p>
            )}

            <div className="investor-points">
              {[
                {
                  icon: "trending_up",
                  zh: "成長速度建立在生活基本盤上",
                  en: "Growth Built on Daily Life",
                  subEn: "A growth steady because its foundation does not fade.",
                  descZh:
                    "自助倉儲在亞洲年成長率超過 15%。重點不只是「快」，而是這個成長背後撐著它的，是住宅、電商與都市化這些不容易消退的常數。",
                  descEn:
                    "Asia's self-storage grows at 15%+ annually. What matters isn't the pace itself but what supports it — housing, e-commerce, urbanisation. Constants that don't fade.",
                },
                {
                  icon: "precision_manufacturing",
                  zh: "無人化讓利潤結構更乾淨",
                  en: "Cleaner Margin by Design",
                  subEn: "An operating model where math becomes simpler.",
                  descZh:
                    "取消現場人力之後，營運成本結構顯著精簡。穩定期的營業利潤率落在 55–65%，比傳統倉儲的同樣指標高出兩到三倍。",
                  descEn:
                    "With no on-site staff, the cost structure simplifies dramatically. Steady-state operating margin sits at 55–65% — two to three times the equivalent metric for traditional storage.",
                },
                {
                  icon: "shield",
                  zh: "技術不是外包，是長在公司裡的",
                  en: "Technology Grown In-House",
                  subEn: "Not bought from a vendor — built within.",
                  descZh:
                    "從 APP 到 IoT 韌體都由我們自己寫成。這意味著我們不被 SaaS 廠商綁住，也意味著新據點的部署成本與時間，會隨著我們而非別人的節奏走。",
                  descEn:
                    "From mobile app to IoT firmware, we wrote it all ourselves. That means no SaaS vendor lock-in — and new venue deployment runs on our timeline, not someone else's.",
                },
                {
                  icon: "hub",
                  zh: "輕資產複製，重結構穩固",
                  en: "Light to Scale, Heavy to Hold",
                  subEn: "Asset-light replication without losing the rails.",
                  descZh:
                    "用加盟與系統授權兩種結構複製據點，總部資本壓力可控；但每一家分店在後台仍是同一套系統，所以擴張不會稀釋掌控力。",
                  descEn:
                    "Replicating venues through franchise and system-license keeps headquarter capital burden manageable. Yet every venue runs the same backend — so scale does not dilute control.",
                },
                {
                  icon: "explore",
                  zh: "台灣的位置，是時間，不是空缺",
                  en: "Taiwan's Position Is Timing, Not Vacancy",
                  subEn: "A gap that looks empty is, in fact, simply early.",
                  descZh:
                    "滲透率不到 1%，看似缺口，其實是時間。美國、日本、新加坡都是從這個位置一步步走上來的 — 我們現在站的，正是那條曲線的入口。",
                  descEn:
                    "Penetration below 1% looks like a gap. It is, in fact, timing. The US, Japan, and Singapore all walked the same curve from this exact starting point — and we are standing at its entrance.",
                },
              ].map(({ icon, zh: titleZh, en: titleEn, subEn, descZh, descEn }, i) => (
                <div
                  key={icon}
                  className={`investor-point animate${i > 0 ? ` delay-${i}` : ""}`}
                >
                  <span className="material-symbols-outlined">{icon}</span>
                  <div>
                    <h4>{zh ? titleZh : titleEn}</h4>
                    {!zh && <div className="inv-en">{subEn}</div>}
                    <p>{zh ? descZh : descEn}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: "center" }}>
              <a
                href="https://lin.ee/zL7pC2r"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold animate delay-5"
              >
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
                  account_balance
                </span>
                {zh ? "投資洽詢" : "Investor Inquiry"}
              </a>
            </div>
          </div>
        </section>

        {/* ==================== COMPETITIVE MOAT ==================== */}
        <section className="dark-section" id="moat">
          <div className="section-inner">
            <div className="section-label animate">
              {zh ? "護城河" : "Competitive Moat"}
            </div>
            {zh ? (
              <div className="section-title animate delay-1">
                四層厚度，<span className="gold-text">無法以單一捷徑跨越</span>
              </div>
            ) : (
              <div className="section-title-en animate delay-1">
                Four layers — none of them shortcutable.
              </div>
            )}
            {zh ? (
              <p className="section-sub animate delay-2">
                護城河不是口號，而是四種能力疊在彼此之上。少了任何一層，這個生意都會退回「傳統倉儲，再塗一層
                APP」的水準。我們把這四層從最深層到最表層依序展開。
              </p>
            ) : (
              <p className="section-sub-en animate delay-2">
                A real moat is not a slogan. It is four capabilities stacked
                together — strip any one and you fall back to &quot;old storage with
                an app on top.&quot; We unfold them here, from foundation to surface.
              </p>
            )}

            <div className="moat-layers">
              {[
                {
                  num: "LAYER 01",
                  zh: "自建的工程底層",
                  en: "In-House Engineering",
                  descZh:
                    "從 APP、後端、IoT 韌體到雲端平台，這套系統的每一行程式碼都由我們自己寫成。市面 SaaS 無法處理的場館型態與客製需求，我們可以用三天的時間迭代上線。",
                  descEn:
                    "App, backend, IoT firmware, cloud — written by us. Custom-venue requirements that off-the-shelf SaaS cannot answer ship in seventy-two hours.",
                },
                {
                  num: "LAYER 02",
                  zh: "軟硬之間，跨領域的工程修練",
                  en: "Where Software Meets Hardware",
                  descZh:
                    "櫃內攝影機、密碼鎖、IoT 中控、雲端與行動端 —每一塊單獨拿出來都容易。讓它們在無人化的條件下「同時運作、同時可信」，這之間的工程修練才是真正進場門檻。",
                  descEn:
                    "Cameras, locks, IoT hub, cloud, mobile — each piece is easy alone. Holding them together under unmanned conditions is the discipline that defines the moat.",
                },
                {
                  num: "LAYER 03",
                  zh: "持續累積的營運數據",
                  en: "A Quiet Compounding of Data",
                  descZh:
                    "每一次租倉、每一次開鎖、每一筆扣款 — 都是系統自行寫入的真實事件。每多開一家分店，定價會更精準、出租率爬升會更快、異常會更早被看見。後進者沒有這些事件可以學。",
                  descEn:
                    "Every rental, every access, every charge is written into the system as a real event. Each new venue makes pricing sharper and ramps faster — a body of evidence latecomers cannot inherit.",
                },
                {
                  num: "LAYER 04",
                  zh: "已被信任的那個名字",
                  en: "A Name Already Trusted",
                  descZh:
                    "在台北，「自助倉儲」與「Spark Space」之間，搜尋流量、口碑與評論早已穩定連在一起。新據點繼承的不是 LOGO，而是這份已建立的信任 — 初期出租率爬升曲線得以縮短約三成。",
                  descEn:
                    "In Taipei, \"self-storage\" and \"Spark Space\" are already linked in search and word of mouth. A new venue inherits not a logo, but that trust — shortening the occupancy ramp by roughly thirty percent.",
                },
              ].map(({ num, zh: titleZh, en: titleEn, descZh, descEn }, i) => (
                <div
                  key={num}
                  className={`moat-layer animate${i > 0 ? ` delay-${i}` : ""}`}
                >
                  <div className="moat-num">{num}</div>
                  <h4>{zh ? titleZh : titleEn}</h4>
                  <div className="moat-en">{zh ? titleEn : ""}</div>
                  <p>{zh ? descZh : descEn}</p>
                  {zh && <div className="moat-en-desc">{descEn}</div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== ROADMAP ==================== */}
        <section className="roadmap-section" id="roadmap">
          <div className="section-inner">
            <div className="section-label animate">
              {zh ? "推進節奏" : "Roadmap"}
            </div>
            {zh ? (
              <div className="section-title animate delay-1">
                從一個據點，
                <span style={{ color: "var(--gold)" }}>慢慢長成一張網</span>
              </div>
            ) : (
              <div className="section-title-en animate delay-1">
                From a Single Venue Toward a Distributed Network
              </div>
            )}
            {zh ? (
              <p className="section-sub animate delay-2">
                我們不急著佈點。先把延吉店做透 —
                把每一個能踩到的坑都先踩過。然後用「同一套系統 +
                不同合作結構」，依序複製到下一條街、下一個城市、下一個國家。每一步都有清楚的可行性門檻與資金安排。
              </p>
            ) : (
              <p className="section-sub-en animate delay-2">
                Expansion is not optimised for velocity. The Taipei flagship is
                stress-tested first, every operational edge case resolved. The
                same platform — adapted via different deal structures — then
                propagates to the next location, city, and market.
              </p>
            )}

            <div className="journey-cards">
              {[
                {
                  num: "01",
                  active: true,
                  status: { zh: "✓ 已完成", en: "✓ Shipped" },
                  title: { zh: "模型驗證", en: "Model Validation" },
                  desc: {
                    zh: "延吉旗艦店開幕，完成系統、硬體、商業模式三線實戰驗證。出租率達穩定期，平均租期 12+ 月、自動續約率穩定。",
                    en: "Yanji flagship opened; system, hardware, and business model validated in parallel. Occupancy reached steady-state with average tenancy of 12+ months and stable auto-renewal.",
                  },
                },
                {
                  num: "02",
                  active: true,
                  status: { zh: "◔ 接洽中", en: "◔ Active" },
                  title: { zh: "大台北擴張", en: "Greater Taipei Rollout" },
                  desc: {
                    zh: "正與雙北物件持有方、加盟意向方進行多組選址與合作洽談；驗證跨地段一致性與不同合作結構的實際運作。具體進度於 NDA 後分享。",
                    en: "Multiple site evaluations and partnership talks underway with property holders and prospective franchisees across greater Taipei. Details shared post-NDA.",
                  },
                },
                {
                  num: "03",
                  active: false,
                  status: { zh: "→ 下一階段", en: "→ Next" },
                  title: { zh: "全台網絡", en: "Nationwide Network" },
                  desc: {
                    zh: "加盟模式全面開放，建立全台第一個無人化倉儲品牌網絡與標準作業 SOP。",
                    en: "Franchise model fully opened; building Taiwan's first unmanned-storage brand network and standardised operating playbook.",
                  },
                },
                {
                  num: "04",
                  active: false,
                  status: { zh: "◇ 願景", en: "◇ Vision" },
                  title: { zh: "亞太佈局", en: "APAC Expansion" },
                  desc: {
                    zh: "系統授權進入東南亞高密度都市市場 — 新加坡、馬來西亞、越南、菲律賓 — 從台灣品牌升級為亞太基礎建設。",
                    en: "System licensing enters high-density urban markets across Southeast Asia — Singapore, Malaysia, Vietnam, the Philippines — graduating from a Taiwan brand into APAC infrastructure.",
                  },
                },
              ].map(({ num, active, status, title, desc }, i) => (
                <div
                  key={num}
                  className={`j-card${active ? " active" : ""} animate${i > 0 ? ` delay-${i}` : ""}`}
                >
                  <div className="j-mark">
                    <span className="j-num">{num}</span>
                    <span className="j-of">/ 04</span>
                  </div>
                  <div className="j-status">{zh ? status.zh : status.en}</div>
                  <h4>{zh ? title.zh : title.en}</h4>
                  <div className="j-en">{zh ? title.en : ""}</div>
                  <p>{zh ? desc.zh : desc.en}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== TESTIMONIALS ==================== */}
        <section className="testimonials">
          <div className="section-inner">
            <div className="section-label animate" style={{ textAlign: "center" }}>
              {zh ? "用戶心聲" : "User Reviews"}
            </div>
            {zh ? (
              <div className="section-title animate delay-1" style={{ textAlign: "center" }}>
                用戶怎麼說
              </div>
            ) : (
              <div className="section-title-en animate delay-1" style={{ textAlign: "center" }}>
                What Our Users Say
              </div>
            )}

            <div className="testimonial-grid">
              {reviews.map((r, i) => (
                <div key={r.name} className={`testimonial-card animate delay-${i + 2}`}>
                  <div className="stars">★★★★★</div>
                  <p>「{r.quote}」</p>
                  <div className="testimonial-author">
                    <div className="author-avatar">{r.avatar}</div>
                    <div>
                      <div className="author-name">{r.name}</div>
                      <div className="author-source">
                        {zh ? "Google 評論" : "Google Review"}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>


          </div>
        </section>

        {/* ==================== APP DOWNLOAD ==================== */}
        <section style={{ padding: "72px 24px", textAlign: "center", background: "var(--surface)" }}>
          <div className="section-label animate">
            {zh ? "立即體驗" : "Experience It Now"}
          </div>
          <div className="section-title animate delay-1" style={{ marginBottom: 8 }}>
            {zh ? "下載我們的 APP" : "Download Our App"}
          </div>
          <p className="section-sub animate delay-2" style={{ marginBottom: 36 }}>
            {zh
              ? "租倉、開門、監控，全程手機操作。"
              : "Rent, unlock, monitor — entirely from your phone."}
          </p>
          <div className="animate delay-3" style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href={process.env.NEXT_PUBLIC_IOS_DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download on the App Store"
              style={{ display: "inline-flex" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/ios-download.webp" alt="Download on the App Store" style={{ height: 48, width: "auto" }} />
            </a>
            <a
              href={process.env.NEXT_PUBLIC_ANDROID_DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get it on Google Play"
              style={{ display: "inline-flex" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/android-download.webp" alt="Get it on Google Play" style={{ height: 48, width: "auto" }} />
            </a>
          </div>
        </section>

        {/* ==================== CTA / CONTACT ==================== */}
        <section className="cta-section" id="contact">
          <div className="section-inner">
            <div className="section-label animate">
              {zh ? "下一步" : "Next Step"}
            </div>
            {zh ? (
              <div className="section-title animate delay-1">
                或許，我們應該見面談談
              </div>
            ) : (
              <div className="section-title-en animate delay-1">
                If This Has Held Your Attention, a Conversation Is Due
              </div>
            )}
            {zh ? (
              <p className="cta-sub animate delay-2">
                無論你關心的是品牌加盟、系統授權、還是共同投資 —
                第一步都一樣：我們約一杯咖啡的時間，了解模型、把問題問完，剩下的判斷留給你。
              </p>
            ) : (
              <p className="cta-sub-en animate delay-2">
                Whether the path is franchise, system license, or co-investment,
                the first step is identical: a meeting, the full model on the
                table, every question answered. Judgement remains entirely yours.
              </p>
            )}

            <div className="cta-buttons animate delay-3">
              <a
                href="https://lin.ee/zL7pC2r"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
                  chat
                </span>
                {zh ? "LINE 聯繫" : "Contact via LINE"}
              </a>
              <a href="mailto:spark@sparklands.co" className="btn-outline-light">
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
                  email
                </span>
                {zh ? "Email 洽詢" : "Email Us"}
              </a>
            </div>

            <div className="cta-info animate delay-4">
              <div className="cta-info-item">
                <div className="info-label">{zh ? "電話" : "Phone"}</div>
                <div className="info-value">
                  <a href="tel:+886281777085">(02) 8177-7085</a>
                </div>
              </div>
              <div className="cta-info-item">
                <div className="info-label">Email</div>
                <div className="info-value">
                  <a href="mailto:spark@sparklands.co">spark@sparklands.co</a>
                </div>
              </div>
              <div className="cta-info-item">
                <div className="info-label">{zh ? "總部" : "Headquarters"}</div>
                <div className="info-value">
                  {zh
                    ? "台北市信義區信義路五段 7 號 37 樓"
                    : "37F., No. 7, Sec. 5, Xinyi Rd., Xinyi Dist., Taipei"}
                </div>
              </div>
              <div className="cta-info-item">
                <div className="info-label">
                  {zh ? "旗艦場館" : "Flagship Venue"}
                </div>
                <div className="info-value">
                  {zh
                    ? "台北市松山區延吉街 7-1 號 B1"
                    : "B1, No. 7-1, Yanji St., Songshan Dist., Taipei"}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
