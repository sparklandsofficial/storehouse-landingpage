import { Link } from "@/i18n/navigation";
import LineIcon from "@/app/components/LineIcon";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = { params: { locale: string } };

export async function generateMetadata({ params }: Props) {
  setRequestLocale(params.locale);
  const t = await getTranslations("PricingPage");
  return { title: t("metaTitle") };
}

export default async function Pricing({ params }: Props) {
  setRequestLocale(params.locale);
  const t = await getTranslations("PricingPage");
  const coreItems = t.raw("coreItems") as { icon: string; label: string; sub: string }[];

  return (
    <div className="pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16 be-1">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <span className="font-label text-primary font-bold tracking-widest uppercase text-xs block mb-3">{t("kicker")}</span>
            <h1 className="font-headline text-5xl md:text-6xl font-black tracking-tight text-on-surface leading-[1.0] mb-4">{t("h1")}</h1>
            <p className="text-on-surface-variant text-lg max-w-lg leading-relaxed">{t("intro")}</p>
          </div>
          <div className="flex gap-4 flex-shrink-0">
            <div className="bg-surface-container-low rounded-xl p-5 text-center min-w-[120px] border border-outline-variant/5">
              <div className="font-label text-2xl font-black text-primary">24/7</div>
              <div className="text-xs text-on-surface-variant font-label mt-1 uppercase tracking-wide">{t("stat247")}</div>
            </div>
            <div className="bg-surface-container-low rounded-xl p-5 text-center min-w-[120px] border border-outline-variant/5">
              <div className="font-label text-2xl font-black text-primary">55%</div>
              <div className="text-xs text-on-surface-variant font-label mt-1 uppercase tracking-wide">{t("statHum")}</div>
            </div>
          </div>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24 be-2">
        <h2 className="font-headline text-2xl font-black text-on-surface mb-8 tracking-tight">{t("h2Sizes")}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="unit-card bg-surface-container-lowest cloud-shadow rounded-2xl border border-outline-variant/5 overflow-hidden flex flex-col">
            <div className="p-7 flex-1">
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 bg-secondary-container rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-secondary-container text-[22px]">inventory_2</span>
                </div>
                <span className="font-label text-xs font-bold text-on-surface-variant bg-surface-container px-3 py-1 rounded-full">{t("sBadge")}</span>
              </div>
              <h3 className="font-headline text-xl font-black text-on-surface mb-1">{t("sTitle")}</h3>
              <div className="font-label text-primary text-xs font-bold mb-4 tracking-wide">{t("sDims")}</div>
              <div className="mb-5">
                <div className="text-3xl font-black text-on-surface font-headline">{t("priceAsk")}</div>
                <div className="text-xs text-on-surface-variant font-label mt-1">{t("priceAskSub")}</div>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-5">{t("sDesc")}</p>
              <div className="space-y-2">
                {(t.raw("sBullets") as string[]).map((line) => (
                  <div key={line} className="flex items-center gap-2 text-xs font-label text-secondary">
                    <span className="material-symbols-outlined text-[15px] text-primary">check_circle</span>
                    {line}
                  </div>
                ))}
              </div>
            </div>
            <div className="p-5 border-t border-outline-variant/10">
              <a
                href="https://lin.ee/zL7pC2r"
                target="_blank"
                rel="noopener"
                className="w-full py-3 rounded-xl text-sm font-bold text-center flex items-center justify-center gap-2 bg-surface-container hover:bg-surface-container-high transition-colors text-on-surface"
              >
                <LineIcon className="h-[17px] w-[17px]" />
                {t("ctaS")}
              </a>
            </div>
          </div>

          <div className="unit-card bg-surface-container-lowest rounded-2xl border-2 border-primary/20 overflow-hidden flex flex-col shadow-[0_20px_50px_rgba(137,81,0,0.10)]">
            <div className="butler-gradient px-7 py-2.5 flex items-center gap-2">
              <span className="material-symbols-outlined text-white text-[15px]">star</span>
              <span className="text-white text-xs font-bold font-label tracking-wide">{t("mPopular")}</span>
            </div>
            <div className="p-7 flex-1">
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 bg-primary-fixed rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-[22px]">shelves</span>
                </div>
                <span className="font-label text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">{t("mBadge")}</span>
              </div>
              <h3 className="font-headline text-xl font-black text-on-surface mb-1">{t("mTitle")}</h3>
              <div className="font-label text-primary text-xs font-bold mb-4 tracking-wide">{t("mDims")}</div>
              <div className="mb-5">
                <div className="text-3xl font-black text-on-surface font-headline">{t("priceAsk")}</div>
                <div className="text-xs text-on-surface-variant font-label mt-1">{t("priceAskSub")}</div>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-5">{t("mDesc")}</p>
              <div className="space-y-2">
                {(t.raw("mBullets") as string[]).map((line) => (
                  <div key={line} className="flex items-center gap-2 text-xs font-label text-secondary">
                    <span className="material-symbols-outlined text-[15px] text-primary">check_circle</span>
                    {line}
                  </div>
                ))}
              </div>
            </div>
            <div className="p-5 border-t border-primary/10">
              <a
                href="https://lin.ee/zL7pC2r"
                target="_blank"
                rel="noopener"
                className="w-full py-3 rounded-xl text-sm font-bold text-center flex items-center justify-center gap-2 butler-gradient text-white cloud-shadow hover:scale-[1.01] active:scale-[0.99] transition-transform"
              >
                <LineIcon className="h-[17px] w-[17px]" />
                {t("ctaM")}
              </a>
            </div>
          </div>

          <div className="unit-card bg-surface-container-lowest cloud-shadow rounded-2xl border border-outline-variant/5 overflow-hidden flex flex-col">
            <div className="p-7 flex-1">
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 bg-tertiary-fixed rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-tertiary-container text-[22px]">warehouse</span>
                </div>
                <span className="font-label text-xs font-bold text-on-surface-variant bg-surface-container px-3 py-1 rounded-full">{t("lBadge")}</span>
              </div>
              <h3 className="font-headline text-xl font-black text-on-surface mb-1">{t("lTitle")}</h3>
              <div className="font-label text-primary text-xs font-bold mb-4 tracking-wide">{t("lDims")}</div>
              <div className="mb-5">
                <div className="text-3xl font-black text-on-surface font-headline">{t("priceAsk")}</div>
                <div className="text-xs text-on-surface-variant font-label mt-1">{t("priceAskSub")}</div>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-5">{t("lDesc")}</p>
              <div className="space-y-2">
                {(t.raw("lBullets") as string[]).map((line) => (
                  <div key={line} className="flex items-center gap-2 text-xs font-label text-secondary">
                    <span className="material-symbols-outlined text-[15px] text-primary">check_circle</span>
                    {line}
                  </div>
                ))}
              </div>
            </div>
            <div className="p-5 border-t border-outline-variant/10">
              <a
                href="https://lin.ee/zL7pC2r"
                target="_blank"
                rel="noopener"
                className="w-full py-3 rounded-xl text-sm font-bold text-center flex items-center justify-center gap-2 bg-surface-container hover:bg-surface-container-high transition-colors text-on-surface"
              >
                <LineIcon className="h-[17px] w-[17px]" />
                {t("ctaL")}
              </a>
            </div>
          </div>

          <div className="unit-card bg-surface-container-lowest cloud-shadow rounded-2xl border border-outline-variant/5 overflow-hidden flex flex-col">
            <div className="p-7 flex-1">
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 bg-secondary-container rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-secondary-container text-[22px]">domain</span>
                </div>
                <span className="font-label text-xs font-bold text-on-surface-variant bg-surface-container px-3 py-1 rounded-full">{t("xlBadge")}</span>
              </div>
              <h3 className="font-headline text-xl font-black text-on-surface mb-1">{t("xlTitle")}</h3>
              <div className="font-label text-primary text-xs font-bold mb-4 tracking-wide">{t("xlDims")}</div>
              <div className="mb-5">
                <div className="text-3xl font-black text-on-surface font-headline">{t("priceAsk")}</div>
                <div className="text-xs text-on-surface-variant font-label mt-1">{t("priceAskSub")}</div>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-5">{t("xlDesc")}</p>
              <div className="space-y-2">
                {(t.raw("xlBullets") as string[]).map((line) => (
                  <div key={line} className="flex items-center gap-2 text-xs font-label text-secondary">
                    <span className="material-symbols-outlined text-[15px] text-primary">check_circle</span>
                    {line}
                  </div>
                ))}
              </div>
            </div>
            <div className="p-5 border-t border-outline-variant/10">
              <a
                href="https://lin.ee/zL7pC2r"
                target="_blank"
                rel="noopener"
                className="w-full py-3 rounded-xl text-sm font-bold text-center flex items-center justify-center gap-2 bg-surface-container hover:bg-surface-container-high transition-colors text-on-surface"
              >
                <LineIcon className="h-[17px] w-[17px]" />
                {t("ctaXL")}
              </a>
            </div>
          </div>
        </div>
        <p className="text-xs text-on-surface-variant mt-6 font-label text-center">
          {t("footnote")}
          <a href="https://lin.ee/zL7pC2r" target="_blank" rel="noopener" className="inline-flex items-center gap-1 text-primary font-bold hover:underline">
            <LineIcon className="h-[14px] w-[14px]" />
            {t("footnoteLink")}
          </a>
          {t("footnoteClose")}
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24 be-3">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-1">
            <h2 className="font-headline text-3xl font-black text-on-surface tracking-tight mb-4">{t("plansH2")}</h2>
            <p className="text-on-surface-variant leading-relaxed mb-6">{t("plansIntro")}</p>
            <div className="bg-primary/6 rounded-xl p-5 border-l-4 border-primary">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-primary text-[20px]">credit_card</span>
                <span className="font-bold text-sm text-on-surface">{t("autoPayTitle")}</span>
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed">{t("autoPayDesc")}</p>
            </div>
            <div className="mt-6">
              <a
                href="https://lin.ee/zL7pC2r"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 text-primary font-bold font-label text-sm hover:gap-3 transition-all"
              >
                {t("askSlots")} <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
            </div>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="plan-card bg-surface-container-low rounded-2xl p-7 flex flex-col items-center text-center border border-outline-variant/5">
              <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-4 block">{t("planStd")}</span>
              <div className="font-headline text-3xl font-black text-on-surface mb-1">{t("planMonth")}</div>
              <div className="text-on-surface-variant text-sm mb-6 font-label">{t("planFlex")}</div>
              <div className="w-full h-px bg-outline-variant/20 mb-6" />
              <div className="text-on-surface font-bold text-lg mb-2 font-headline">{t("planOrig")}</div>
              <div className="text-on-surface-variant text-xs font-label">{t("planFlexSub")}</div>
            </div>
            <div className="plan-card bg-surface-container-lowest rounded-2xl p-7 flex flex-col items-center text-center border-2 border-primary/20 shadow-[0_10px_30px_rgba(137,81,0,0.08)] relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 butler-gradient text-white text-[10px] font-bold font-label px-3 py-1 rounded-full tracking-widest">
                {t("planHot")}
              </div>
              <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-4 block">{t("planValue")}</span>
              <div className="font-headline text-3xl font-black text-on-surface mb-1">{t("planQuarter")}</div>
              <div className="text-on-surface-variant text-sm mb-6 font-label">{t("planQOff")}</div>
              <div className="w-full h-px bg-outline-variant/20 mb-6" />
              <div className="text-primary font-black text-xl mb-1 font-headline">{t("planFive")}</div>
              <div className="text-on-surface-variant text-xs font-label">{t("planQSub")}</div>
            </div>
            <div className="plan-card bg-surface-container-low rounded-2xl p-7 flex flex-col items-center text-center border border-outline-variant/5">
              <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-4 block">{t("planBest")}</span>
              <div className="font-headline text-3xl font-black text-on-surface mb-1">{t("planYear")}</div>
              <div className="text-on-surface-variant text-sm mb-6 font-label">{t("planYOff")}</div>
              <div className="w-full h-px bg-outline-variant/20 mb-6" />
              <div className="text-primary font-black text-xl mb-1 font-headline">{t("planTwenty")}</div>
              <div className="text-on-surface-variant text-xs font-label">{t("planYSub")}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24 be-3">
        <div className="bg-surface-container-high/50 rounded-3xl p-12 md:p-16">
          <div className="text-center mb-14">
            <h2 className="font-headline text-2xl font-black text-on-surface tracking-tight mb-3 uppercase">{t("coreH2")}</h2>
            <div className="h-1 w-16 butler-gradient mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {coreItems.map((item) => (
              <div key={item.label} className="flex flex-col items-center text-center group">
                <div className="w-14 h-14 rounded-full bg-surface-container-lowest flex items-center justify-center mb-3 cloud-shadow group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary text-2xl">{item.icon}</span>
                </div>
                <span className="font-bold text-sm text-on-surface">{item.label}</span>
                <span className="text-xs text-on-surface-variant mt-1">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="font-headline text-3xl font-black text-on-surface tracking-tight mb-4">{t("bottomH2")}</h2>
        <p className="text-on-surface-variant text-lg mb-8 max-w-md mx-auto">{t("bottomP")}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://lin.ee/zL7pC2r"
            target="_blank"
            rel="noopener"
            className="butler-gradient text-white px-8 py-4 rounded-xl font-bold text-base cloud-shadow flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
          >
            <LineIcon className="h-5 w-5" />
            {t("ctaLine")}
          </a>
          <Link
            href="/process"
            className="bg-surface-container-lowest border border-outline-variant/20 text-on-surface px-8 py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 hover:bg-surface-container transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">play_circle</span>
            {t("ctaProcess")}
          </Link>
        </div>
      </section>
    </div>
  );
}
