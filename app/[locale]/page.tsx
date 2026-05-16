import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Smartphone, Key, CreditCard, Eye } from "lucide-react";
import TestimonialCarousel from "../components/TestimonialCarousel";
import LineIcon from "../components/LineIcon";

type Props = { params: { locale: string } };

export async function generateMetadata({ params }: Props) {
  setRequestLocale(params.locale);
  const t = await getTranslations("HomePage");
  return { title: t("metaTitle") };
}

type SceneCard = { icon: string; title: string; desc: string; bg: string };
type TechFeat = { icon: string; bg: string; color: string; title: string; desc: string };
type StatItem = { stat: string; label: string; sub: string; highlight: boolean };
type StoryItem = { num: string; title: string; desc: string };

export default async function Home({ params }: Props) {
  setRequestLocale(params.locale);
  const t = await getTranslations("HomePage");
  const HERO_DIM = 0.2;

  const sceneCards = t.raw("sceneCards") as SceneCard[];
  const techFeats = t.raw("techFeats") as TechFeat[];
  const statGrid = t.raw("statGrid") as StatItem[];
  const storyItems = t.raw("storyItems") as StoryItem[];

  return (
    <div className="pt-[61px]">
      <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="hero-overlay absolute inset-0 z-10" />
          <div className="absolute inset-0 z-10 bg-black" style={{ opacity: HERO_DIM }} aria-hidden="true" />
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/image_group_1/1.jpg')",
            }}
          />
        </div>
        <div className="relative z-20 text-center max-w-4xl px-6 be-1">
          <h1 className="text-white font-headline font-black leading-[1.05] tracking-tight mb-6">
            <span className="text-5xl md:text-7xl block">{t("heroH1a")}</span>
            <span className="text-5xl md:text-7xl block text-primary-container">{t("heroH1b")}</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-normal mb-4 max-w-xl mx-auto leading-relaxed">
            {t("heroLead1")}
            <br className="hidden sm:block" />
            {t("heroLead2")}
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <span className="tech-chip text-white/90 text-xs font-label px-4 py-2 rounded-full flex items-center gap-2 transition-all hover:bg-white/20 hover:scale-105 cursor-default">
              <Smartphone size={14} className="text-primary-container" />
              {t("chipApp")}
            </span>
            <span className="tech-chip text-white/90 text-xs font-label px-4 py-2 rounded-full flex items-center gap-2 transition-all hover:bg-white/20 hover:scale-105 cursor-default">
              <Key size={14} className="text-primary-container" />
              {t("chipKey")}
            </span>
            <span className="tech-chip text-white/90 text-xs font-label px-4 py-2 rounded-full flex items-center gap-2 transition-all hover:bg-white/20 hover:scale-105 cursor-default">
              <CreditCard size={14} className="text-primary-container" />
              {t("chipPay")}
            </span>
            <span className="tech-chip text-white/90 text-xs font-label px-4 py-2 rounded-full flex items-center gap-2 transition-all hover:bg-white/20 hover:scale-105 cursor-default">
              <Eye size={14} className="text-primary-container" />
              {t("chipEye")}
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="butler-gradient text-white px-8 py-4 rounded-xl text-base font-bold cloud-shadow flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-transform"
            >
              <span className="material-symbols-outlined text-[20px]">grid_view</span>
              {t("ctaPricing")}
            </Link>
            <a
              href="https://lin.ee/zL7pC2r"
              target="_blank"
              rel="noopener"
              className="bg-white/10 backdrop-blur-md border border-white/25 text-white px-8 py-4 rounded-xl text-base font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              <LineIcon className="h-5 w-5" />
              {t("ctaLine")}
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-surface be-2">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="font-label text-primary font-bold tracking-widest uppercase text-xs block mb-3">{t("sceneKicker")}</span>
            <h2 className="font-headline text-3xl md:text-4xl font-black text-on-surface tracking-tight">{t("sceneH2")}</h2>
            <p className="text-on-surface-variant mt-3 text-base">{t("sceneSub")}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sceneCards.map((item) => (
              <Link
                key={item.title}
                href="/pricing"
                className="scene-card group bg-surface-container-lowest cloud-shadow rounded-2xl p-7 flex flex-col gap-4 hover:-translate-y-1 transition-all border border-outline-variant/5"
              >
                <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center`}>
                  <span className="material-symbols-outlined text-[24px] text-primary">{item.icon}</span>
                </div>
                <div>
                  <h3 className="font-headline font-bold text-lg text-on-surface mb-1">{item.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
                </div>
                <div className="mt-auto flex items-center gap-1 text-primary text-sm font-bold font-label">
                  {t("sceneCta")}{" "}
                  <span className="material-symbols-outlined text-[16px] sa">arrow_forward</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-surface-container-low be-3">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-label text-primary font-bold tracking-widest uppercase text-xs block mb-4">{t("techKicker")}</span>
              <h2 className="font-headline text-4xl md:text-5xl font-black text-on-surface tracking-tight leading-tight mb-6">
                {t("techH2a")}
                <br />
                <span className="text-primary">{t("techH2b")}</span>
              </h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-10">{t("techIntro")}</p>
              <div className="space-y-5">
                {techFeats.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className={`w-10 h-10 ${item.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <span className={`material-symbols-outlined ${item.color} text-[20px]`}>{item.icon}</span>
                    </div>
                    <div>
                      <div className="font-bold text-on-surface mb-1">{item.title}</div>
                      <div className="text-on-surface-variant text-sm">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 flex flex-wrap gap-4 items-center">
                <Link
                  href="/process"
                  className="butler-gradient text-white px-6 py-3 rounded-xl text-sm font-bold flex items-center gap-2 cloud-shadow hover:scale-[1.02] transition-transform h-[48px]"
                >
                  <span className="material-symbols-outlined text-[18px]">play_circle</span>
                  {t("techCtaProcess")}
                </Link>
                <a href={process.env.NEXT_PUBLIC_IOS_DOWNLOAD_URL} target="_blank" rel="noopener" className="hover:opacity-80 transition-opacity">
                  <Image src="/images/ios-download.webp" alt={t("iosAlt")} width={135} height={40} className="h-[40px] w-auto" />
                </a>
                <a
                  href={process.env.NEXT_PUBLIC_ANDROID_DOWNLOAD_URL}
                  target="_blank"
                  rel="noopener"
                  className="hover:opacity-80 transition-opacity"
                >
                  <Image src="/images/android-download.webp" alt={t("playAlt")} width={152} height={45} className="h-[40px] w-auto" />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {statGrid.map((item) => (
                <div
                  key={item.stat}
                  className={`rounded-2xl p-8 flex flex-col gap-2 ${
                    item.highlight
                      ? "bg-primary text-white shadow-[0_20px_40px_rgba(137,81,0,0.20)]"
                      : "bg-surface-container-lowest cloud-shadow border border-outline-variant/5"
                  }`}
                >
                  <span
                    className={`font-label text-3xl font-black ${item.highlight ? "text-primary-container" : "text-primary"}`}
                  >
                    {item.stat}
                  </span>
                  <span className={`font-bold ${item.highlight ? "text-white" : "text-on-surface"}`}>{item.label}</span>
                  <span className={`text-sm ${item.highlight ? "text-white/80" : "text-on-surface-variant"}`}>{item.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-surface be-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div
                className="aspect-square rounded-2xl bg-cover bg-center cloud-shadow"
                style={{
                  backgroundImage: "url('/images/image_group_1/1.jpg')",
                }}
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 butler-gradient rounded-2xl opacity-15 -z-10" />
            </div>
            <div>
              <span className="font-label text-primary font-bold tracking-widest uppercase text-xs block mb-4">{t("storyKicker")}</span>
              <h2 className="font-headline text-4xl md:text-5xl font-black text-on-surface tracking-tight leading-tight mb-10">
                {t("storyH2a")}
                <br />
                {t("storyH2b")}
              </h2>
              <div className="space-y-8">
                {storyItems.map((item) => (
                  <div key={item.num} className="flex gap-5">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary font-bold font-label text-sm">
                      {item.num}
                    </div>
                    <div>
                      <h4 className="font-bold text-on-surface mb-2">{item.title}</h4>
                      <p className="text-on-surface-variant leading-relaxed text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link href="/locations" className="inline-flex items-center gap-2 text-primary font-bold font-label text-sm hover:gap-3 transition-all">
                  {t("storyLink")} <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-surface-container-low relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
          <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/10 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <span className="font-label text-primary font-bold tracking-widest uppercase text-xs block mb-3">{t("testimonialKicker")}</span>
            <h2 className="font-headline text-3xl md:text-5xl font-black text-on-surface tracking-tight">{t("testimonialH2")}</h2>
            <p className="text-on-surface-variant mt-4 text-lg max-w-xl mx-auto">{t("testimonialSub")}</p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="butler-gradient rounded-3xl p-12 md:p-16 text-center shadow-[0_30px_60px_rgba(137,81,0,0.20)]">
            <h2 className="font-headline text-3xl md:text-5xl font-black text-white leading-tight mb-4">
              {t("finalH2a")}
              <br />
              {t("finalH2b")}
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-lg mx-auto">{t("finalP")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="bg-white text-primary px-8 py-4 rounded-xl font-black text-base hover:bg-surface-container-lowest transition-colors flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[20px]">grid_view</span>
                {t("finalCtaPricing")}
              </Link>
              <a
                href="https://lin.ee/zL7pC2r"
                target="_blank"
                rel="noopener"
                className="bg-white/15 border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-white/25 transition-colors flex items-center justify-center gap-2"
              >
                <LineIcon className="h-5 w-5" />
                {t("finalCtaLine")}
              </a>
            </div>
            <div className="mt-8 flex justify-center gap-4 items-center flex-wrap">
              <a href={process.env.NEXT_PUBLIC_IOS_DOWNLOAD_URL} target="_blank" rel="noopener" className="hover:opacity-80 transition-opacity">
                <Image src="/images/ios-download.webp" alt={t("iosAlt")} width={135} height={40} className="h-[40px] w-auto" />
              </a>
              <a
                href={process.env.NEXT_PUBLIC_ANDROID_DOWNLOAD_URL}
                target="_blank"
                rel="noopener"
                className="hover:opacity-80 transition-opacity"
              >
                <Image src="/images/android-download.webp" alt={t("playAlt")} width={152} height={45} className="h-[40px] w-auto" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
