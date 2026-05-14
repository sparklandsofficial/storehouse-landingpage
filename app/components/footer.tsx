import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Facebook, Instagram, MessageCircle } from "lucide-react";
import { getTranslations, getLocale } from "next-intl/server";

export default async function Footer() {
  const [t, locale] = await Promise.all([getTranslations("footer"), getLocale()]);

  return (
    <footer className="bg-inverse-surface text-inverse-on-surface pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="mb-6">
              <Image
                src={locale === "en" ? "/images/logo-en.png" : "/images/logo.png"}
                alt={t("logoAlt")}
                width={locale === "en" ? 160 : 120}
                height={40}
                className="h-10 w-auto object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
            <p className="text-inverse-on-surface/60 text-sm leading-relaxed mb-5">{t("tagline")}</p>
            <div className="flex items-center gap-4">
              <a
                href="https://lin.ee/zL7pC2r"
                target="_blank"
                rel="noopener"
                className="text-inverse-on-surface/50 hover:text-inverse-on-surface transition-colors"
                aria-label="LINE"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61563342058017"
                target="_blank"
                rel="noopener"
                className="text-inverse-on-surface/50 hover:text-inverse-on-surface transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/spark.space_storage"
                target="_blank"
                rel="noopener"
                className="text-inverse-on-surface/50 hover:text-inverse-on-surface transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-label text-xs uppercase font-bold tracking-widest text-inverse-on-surface/50 mb-5">{t("sectionService")}</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/pricing" className="text-inverse-on-surface/70 hover:text-inverse-on-surface text-sm transition-colors">
                  {t("pricingSpecs")}
                </Link>
              </li>
              <li>
                <Link href="/process" className="text-inverse-on-surface/70 hover:text-inverse-on-surface text-sm transition-colors">
                  {t("processApp")}
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-inverse-on-surface/70 hover:text-inverse-on-surface text-sm transition-colors">
                  {t("locationYanji")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-label text-xs uppercase font-bold tracking-widest text-inverse-on-surface/50 mb-5">{t("sectionSupport")}</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/faq" className="text-inverse-on-surface/70 hover:text-inverse-on-surface text-sm transition-colors">
                  {t("faq")}
                </Link>
              </li>
              <li>
                <a
                  href="https://lin.ee/zL7pC2r"
                  target="_blank"
                  rel="noopener"
                  className="text-inverse-on-surface/70 hover:text-inverse-on-surface text-sm transition-colors"
                >
                  {t("lineSupport")}
                </a>
              </li>
              <li>
                <a href="tel:02-8177-7085" className="text-inverse-on-surface/70 hover:text-inverse-on-surface text-sm transition-colors">
                  (02) 8177-7085
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-label text-xs uppercase font-bold tracking-widest text-inverse-on-surface/50 mb-5">{t("sectionApp")}</h4>
            <div className="space-y-3 mb-6">
              <a
                href="https://www.sparkspace.com.tw/iosdownload"
                target="_blank"
                rel="noopener"
                className="inline-flex hover:opacity-80 transition-opacity"
                aria-label="Download on the App Store"
              >
                <Image
                  src="/images/ios-download.webp"
                  alt="Download on the App Store"
                  width={135}
                  height={40}
                  className="h-[40px] w-auto"
                />
              </a>
              <br />
              <a
                href="https://play.google.com/store/apps/details?id=terizac.intheblackworld.storehouseapp&pcampaignid=web_share"
                target="_blank"
                rel="noopener"
                className="inline-flex hover:opacity-80 transition-opacity"
                aria-label="Get it on Google Play"
              >
                <Image
                  src="/images/android-download.webp"
                  alt="Get it on Google Play"
                  width={152}
                  height={45}
                  className="h-[40px] w-auto"
                />
              </a>
            </div>
            <div className="space-y-2">
              <Link href="/partners" className="block text-inverse-on-surface/40 hover:text-inverse-on-surface/70 text-xs transition-colors">
                {t("partners")}
              </Link>
              <Link href="/privacy" className="block text-inverse-on-surface/40 hover:text-inverse-on-surface/70 text-xs transition-colors">
                {t("privacy")}
              </Link>
              <Link href="/terms" className="block text-inverse-on-surface/40 hover:text-inverse-on-surface/70 text-xs transition-colors">
                {t("terms")}
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-inverse-on-surface/10 pt-8">
          <p className="text-inverse-on-surface/30 text-[11px] font-label uppercase tracking-widest text-center">{t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
