import { Link } from "@/i18n/navigation";
import LineIcon from "@/app/components/LineIcon";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = { params: { locale: string } };

export async function generateMetadata({ params }: Props) {
  setRequestLocale(params.locale);
  const t = await getTranslations("ProcessPage");
  return { title: t("metaTitle") };
}

export default async function Process({ params }: Props) {
  setRequestLocale(params.locale);
  const t = await getTranslations("ProcessPage");

  const steps = [
    { num: "01", icon: "smartphone", gradient: true, last: false },
    { num: "02", icon: "grid_view", gradient: false, last: false },
    { num: "03", icon: "lock_open", gradient: false, last: false },
    { num: "04", icon: "contract", gradient: false, last: true },
  ] as const;

  const titles = [t("step1t"), t("step2t"), t("step3t"), t("step4t")];
  const descs = [t("step1d"), t("step2d"), t("step3d"), t("step4d")];

  const appFeats = [
    { icon: "videocam", bg: "bg-primary-fixed", color: "text-primary", title: t("f1t"), desc: t("f1d") },
    { icon: "touch_app", bg: "bg-secondary-container", color: "text-secondary", title: t("f2t"), desc: t("f2d") },
    { icon: "key", bg: "bg-tertiary-fixed", color: "text-tertiary", title: t("f3t"), desc: t("f3d") },
    { icon: "map", bg: "bg-primary-fixed", color: "text-primary", title: t("f4t"), desc: t("f4d") },
  ];

  return (
    <div className="pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center mb-20 be-1">
        <span className="font-label text-primary font-bold tracking-widest uppercase text-xs block mb-4">{t("kicker")}</span>
        <h1 className="font-headline text-5xl md:text-6xl font-black tracking-tight text-on-surface leading-[1.05] mb-6">{t("h1")}</h1>
        <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          {t("introLead")} <strong className="text-on-surface">{t("introStrong")}</strong>
          {t("introAfterStrong")}
          <br className="hidden sm:block" />
          {t("introRest")}
        </p>
      </div>

      <section className="max-w-5xl mx-auto px-6 lg:px-12 mb-28 be-2">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
          {steps.map((step, i) => (
            <div key={step.num} className="flex flex-col items-center text-center">
              <div className={`relative mb-6 ${step.last ? "" : "step-line"}`}>
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center cloud-shadow ${
                    step.gradient ? "butler-gradient" : "bg-surface-container-lowest border border-outline-variant/10"
                  }`}
                >
                  <span className={`material-symbols-outlined text-3xl ${step.gradient ? "text-white" : "text-primary"}`}>
                    {step.icon}
                  </span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-on-surface text-inverse-on-surface rounded-full flex items-center justify-center text-xs font-black font-label">
                  {step.num}
                </div>
              </div>
              <h3 className="font-headline font-black text-lg text-on-surface mb-2">{titles[i]}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{descs[i]}</p>
              {i === 0 ? (
                <div className="flex gap-3 mt-4 items-center flex-wrap justify-center">
                  <a href={process.env.NEXT_PUBLIC_IOS_DOWNLOAD_URL} target="_blank" rel="noopener" className="flex items-center gap-1 text-xs font-label font-bold text-primary hover:underline">
                    <Image src="/images/ios-download.webp" alt={t("iosAlt")} width={135} height={40} className="h-[28px] w-auto" />
                  </a>
                  <a
                    href={process.env.NEXT_PUBLIC_ANDROID_DOWNLOAD_URL}
                    target="_blank"
                    rel="noopener"
                    className="flex items-center gap-1 text-xs font-label font-bold text-primary hover:underline"
                  >
                    <Image src="/images/android-download.webp" alt={t("playAlt")} width={152} height={45} className="h-[28px] w-auto" />
                  </a>
                </div>
              ) : null}
              {i === 1 ? (
                <Link href="/pricing" className="mt-4 text-xs font-label font-bold text-primary hover:underline flex items-center gap-1">
                  {t("step2link")} <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </Link>
              ) : null}
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <div className="inline-flex items-center gap-3 bg-surface-container-lowest cloud-shadow rounded-2xl px-8 py-5 border border-outline-variant/5">
            <span className="material-symbols-outlined text-primary text-2xl">timer</span>
            <div>
              <div className="font-headline font-black text-on-surface text-lg">{t("timerTitle")}</div>
              <div className="text-on-surface-variant text-sm font-label">{t("timerSub")}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-24 px-6 lg:px-12 be-3">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-label text-primary font-bold tracking-widest uppercase text-xs block mb-4">{t("appKicker")}</span>
              <h2 className="font-headline text-4xl md:text-5xl font-black text-on-surface tracking-tight leading-tight mb-4">
                {t("appH2a")}
                <br />
                {t("appH2b")}
              </h2>
              <p className="text-on-surface-variant text-base leading-relaxed mb-10">{t("appIntro")}</p>
              <div className="space-y-6">
                {appFeats.map((f) => (
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

            <div className="flex items-center justify-center lg:justify-end">
              <div className="w-[300px] md:w-[340px] lg:w-[400px]">
                <Image
                  src="/images/phone_app_capture.png"
                  alt={t("appImgAlt")}
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

      <section className="max-w-4xl mx-auto px-6 lg:px-12 py-24 text-center">
        <h2 className="font-headline text-3xl font-black text-on-surface tracking-tight mb-4">{t("ctaH2")}</h2>
        <p className="text-on-surface-variant text-lg mb-8 max-w-md mx-auto">{t("ctaP")}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/pricing" className="butler-gradient text-white px-8 py-4 rounded-xl font-bold text-base cloud-shadow flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform">
            <span className="material-symbols-outlined text-[20px]">grid_view</span>
            {t("ctaPricing")}
          </Link>
          <a
            href="https://lin.ee/zL7pC2r"
            target="_blank"
            rel="noopener"
            className="bg-surface-container-lowest border border-outline-variant/20 text-on-surface px-8 py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 hover:bg-surface-container transition-colors"
          >
            <LineIcon className="h-5 w-5" />
            {t("ctaLine")}
          </a>
        </div>
      </section>
    </div>
  );
}
