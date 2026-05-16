import { Link } from "@/i18n/navigation";
import FAQSidebar from "@/app/components/FAQSidebar";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";

type Props = { params: { locale: string } };

export async function generateMetadata({ params }: Props) {
  setRequestLocale(params.locale);
  const t = await getTranslations("FaqPage");
  return { title: t("metaTitle") };
}

type FaqPair = { q: string; a: string };

function FaqBlock({ items, firstOpen }: { items: FaqPair[]; firstOpen?: boolean }) {
  return (
    <div className="bg-surface-container-lowest cloud-shadow rounded-2xl border border-outline-variant/5 overflow-hidden divide-y divide-outline-variant/10">
      {items.map((item, i) => (
        <details key={item.q} className="group" {...(firstOpen && i === 0 ? { open: true } : {})}>
          <summary className="flex items-center justify-between px-7 py-5 font-bold text-on-surface hover:text-primary transition-colors cursor-pointer">
            {item.q}
            <span className="material-symbols-outlined faq-icon text-primary text-[22px] flex-shrink-0" aria-hidden="true">
              add
            </span>
          </summary>
          <div className="px-7 pb-6 text-on-surface-variant leading-relaxed text-sm">{item.a}</div>
        </details>
      ))}
    </div>
  );
}

export default async function FAQ({ params }: Props) {
  setRequestLocale(params.locale);
  const t = await getTranslations("FaqPage");
  const locale = await getLocale();
  const rental = t.raw("rental") as FaqPair[];
  const trust = t.raw("trust") as FaqPair[];
  const access = t.raw("access") as FaqPair[];
  const billing = t.raw("billing") as FaqPair[];

  const lineAddSrc =
    locale === "en"
      ? "https://scdn.line-apps.com/n/line_add_friends/btn/en.png"
      : locale === "zh-CN"
        ? "https://scdn.line-apps.com/n/line_add_friends/btn/zh-Hans.png"
        : "https://scdn.line-apps.com/n/line_add_friends/btn/zh-Hant.png";

  return (
    <div className="pt-28 pb-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center mb-16 be-1">
        <span className="font-label text-primary font-bold tracking-widest uppercase text-xs block mb-4">{t("kicker")}</span>
        <h1 className="font-headline text-5xl md:text-6xl font-black tracking-tight text-on-surface leading-[1.05] mb-6">{t("h1")}</h1>
        <p className="text-on-surface-variant text-lg">{t("sub")}</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 be-2">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1 hidden lg:block lg:sticky lg:top-28 lg:self-start">
            <FAQSidebar />
          </div>

          <div className="lg:col-span-3 space-y-10">
            <div id="rental" className="scroll-mt-28">
              <h2 className="font-headline text-xl font-black text-on-surface mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[22px]">home_storage</span>
                {t("rentalH")}
              </h2>
              <FaqBlock items={rental} />
            </div>

            <div id="trust" className="scroll-mt-28">
              <h2 className="font-headline text-xl font-black text-on-surface mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[22px]">verified_user</span>
                {t("trustH")}
              </h2>
              <FaqBlock items={trust} />
            </div>

            <div id="access" className="scroll-mt-28">
              <h2 className="font-headline text-xl font-black text-on-surface mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[22px]">lock_open</span>
                {t("accessH")}
              </h2>
              <FaqBlock items={access} firstOpen />
            </div>

            <div id="billing" className="scroll-mt-28">
              <h2 className="font-headline text-xl font-black text-on-surface mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[22px]">receipt_long</span>
                {t("billingH")}
              </h2>
              <FaqBlock items={billing} />
            </div>
          </div>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-6 lg:px-12 mt-20 be-3">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-surface-container-lowest cloud-shadow rounded-2xl p-8 border border-outline-variant/5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary-fixed rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-[20px]">support_agent</span>
              </div>
              <div>
                <div className="font-bold text-on-surface">{t("moreQ")}</div>
                <div className="text-sm text-on-surface-variant font-label">{t("moreSub")}</div>
              </div>
            </div>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-[18px]">location_on</span>
                {t("addr")}
              </div>
              <div className="flex items-center gap-3 text-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-[18px]">call</span>
                <a href="tel:02-8177-7085" className="text-primary font-bold hover:underline">
                  {t("phone")}
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-[18px]">mail</span>
                <a href={`mailto:${t("email")}`} className="text-primary font-bold hover:underline">
                  {t("email")}
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-[18px]">schedule</span>
                {t("lineHours")}
              </div>
            </div>
            <a href="https://lin.ee/zL7pC2r" target="_blank" rel="noopener">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={lineAddSrc} alt={t("lineAddAlt")} height="36" className="h-9" referrerPolicy="no-referrer" />
            </a>
          </div>

          <div className="bg-surface-container-lowest cloud-shadow rounded-2xl p-8 border border-outline-variant/5">
            <div className="font-bold text-on-surface mb-6">{t("quickH")}</div>
            <div className="space-y-3">
              {[
                { href: "/pricing", icon: "grid_view", title: t("quick1t"), sub: t("quick1s") },
                { href: "/process", icon: "play_circle", title: t("quick2t"), sub: t("quick2s") },
                { href: "/locations", icon: "location_on", title: t("quick3t"), sub: t("quick3s") },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl hover:bg-surface-container transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-[20px]">{l.icon}</span>
                    <div>
                      <div className="font-bold text-sm text-on-surface">{l.title}</div>
                      <div className="text-xs text-on-surface-variant font-label">{l.sub}</div>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-[18px]">
                    arrow_forward
                  </span>
                </Link>
              ))}
              <a
                href={process.env.NEXT_PUBLIC_IOS_DOWNLOAD_URL}
                target="_blank"
                rel="noopener"
                className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl hover:bg-surface-container transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[20px]">download</span>
                  <div>
                    <div className="font-bold text-sm text-on-surface">{t("dlApp")}</div>
                    <div className="text-xs text-on-surface-variant font-label">{t("dlSub")}</div>
                  </div>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-[18px]">
                  open_in_new
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
