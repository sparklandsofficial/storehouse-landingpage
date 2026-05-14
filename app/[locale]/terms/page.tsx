import { Link } from "@/i18n/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import TermsDocZhTW from "@/app/components/legal/terms/TermsDocZhTW";

type Props = { params: { locale: string } };

export async function generateMetadata({ params }: Props) {
  setRequestLocale(params.locale);
  const t = await getTranslations("TermsPage");
  return { title: t("metaTitle") };
}

export default async function Terms({ params }: Props) {
  setRequestLocale(params.locale);
  const t = await getTranslations("TermsPage");
  const tocItems = t.raw("tocItems") as string[];

  return (
    <main className="pt-28 pb-24" lang="zh-Hant">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 mb-10 be-1">
        <span className="font-label text-primary font-bold tracking-widest uppercase text-xs block mb-3">{t("kicker")}</span>
        <h1 className="font-headline text-4xl md:text-5xl font-black tracking-tight text-on-surface leading-tight mb-4">{t("h1")}</h1>
        <p className="text-on-surface-variant text-base leading-relaxed max-w-2xl">{t("intro")}</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <div className="inline-flex items-center gap-2 bg-surface-container rounded-xl px-4 py-2 text-sm text-on-surface-variant font-label">
            <span className="material-symbols-outlined text-[15px] text-primary">calendar_today</span>
            {t("lastUpdated")}
          </div>
          <Link
            href="/privacy"
            className="inline-flex items-center gap-2 bg-surface-container rounded-xl px-4 py-2 text-sm text-on-surface-variant font-label hover:bg-surface-container-high transition-colors"
          >
            <span className="material-symbols-outlined text-[15px] text-primary">security</span>
            {t("linkPrivacy")}
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-12 be-2">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-28 bg-surface-container-lowest cloud-shadow rounded-2xl p-5 border border-outline-variant/5">
              <div className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4">{t("tocTitle")}</div>
              <nav className="space-y-0.5">
                {tocItems.map((label, i) => (
                  <a key={label} href={`#t${i + 1}`} className="toc-link">
                    {label}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          <div className="lg:col-span-3">
            <TermsDocZhTW />

            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-between items-center">
              <Link href="/privacy" className="text-sm text-primary font-bold font-label flex items-center gap-1.5 hover:underline">
                <span className="material-symbols-outlined text-[16px]">security</span>
                {t("footerPrivacy")}
              </Link>
              <div className="flex gap-3">
                <Link
                  href="/"
                  className="butler-gradient text-white px-6 py-2.5 rounded-xl text-sm font-bold cloud-shadow hover:scale-[1.02] transition-transform flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[16px]">home</span>
                  {t("footerHome")}
                </Link>
                <Link
                  href="/faq"
                  className="bg-surface-container border border-outline-variant/15 text-on-surface px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-surface-container-high transition-colors flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[16px]">help</span>
                  {t("footerFaq")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
