import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-inverse-surface text-inverse-on-surface pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="mb-6">
              <Image
                src="/images/logo.png"
                alt="Spark Space 星域智空間"
                width={120}
                height={96}
                className="h-10 w-auto object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
            <p className="text-inverse-on-surface/60 text-sm leading-relaxed mb-5">
              台北松山區智能倉儲，全程手機操作，24 小時進出。
            </p>
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
                href="https://www.facebook.com/SparkSpace.tw"
                target="_blank"
                rel="noopener"
                className="text-inverse-on-surface/50 hover:text-inverse-on-surface transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/sparkspace.tw"
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
            <h4 className="font-label text-xs uppercase font-bold tracking-widest text-inverse-on-surface/50 mb-5">
              租倉服務
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/pricing" className="text-inverse-on-surface/70 hover:text-inverse-on-surface text-sm transition-colors">
                  倉位規格與方案
                </Link>
              </li>
              <li>
                <Link href="/process" className="text-inverse-on-surface/70 hover:text-inverse-on-surface text-sm transition-colors">
                  租倉流程 &amp; APP
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-inverse-on-surface/70 hover:text-inverse-on-surface text-sm transition-colors">
                  台北延吉店
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-label text-xs uppercase font-bold tracking-widest text-inverse-on-surface/50 mb-5">
              支援
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/faq" className="text-inverse-on-surface/70 hover:text-inverse-on-surface text-sm transition-colors">
                  常見問題
                </Link>
              </li>
              <li>
                <a href="https://lin.ee/zL7pC2r" target="_blank" rel="noopener" className="text-inverse-on-surface/70 hover:text-inverse-on-surface text-sm transition-colors">
                  LINE 客服
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
            <h4 className="font-label text-xs uppercase font-bold tracking-widest text-inverse-on-surface/50 mb-5">
              下載 APP
            </h4>
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
                加盟合作
              </Link>
              <Link href="/privacy" className="block text-inverse-on-surface/40 hover:text-inverse-on-surface/70 text-xs transition-colors">
                隱私權條款
              </Link>
              <Link href="/terms" className="block text-inverse-on-surface/40 hover:text-inverse-on-surface/70 text-xs transition-colors">
                服務條款
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-inverse-on-surface/10 pt-8">
          <p className="text-inverse-on-surface/30 text-[11px] font-label uppercase tracking-widest text-center">
            © 2026 Spark Space 星域智空間. All rights reserved. · 105臺北市松山區延吉街7-1號 B1
          </p>
        </div>
      </div>
    </footer>
  );
}
