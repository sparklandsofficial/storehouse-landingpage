import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "星域智空間 | 您的收納小管家",
  description: "星域智空間，您的收納小管家",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <head>
        {/* 新版：Google Tag Manager (head) */}
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-M54TX8XB');
          `,
          }}
        />
        {/* End Google Tag Manager */}

        {/* 舊版（已停用保留）：直插 gtag 與事件碼 */}
        {/**
         * 舊版：直插 gtag (Google Ads AW-528010636) 及三段事件碼
         * 已停用，避免與 GTM 重覆。保留作日後參考。
         *
         * <script async src="https://www.googletagmanager.com/gtag/js?id=AW-528010636" />
         * <script id="google-track">...</script>
         * <script> // iosdownload 轉換事件 ... </script>
         * <script> // androiddownload 轉換事件 ... </script>
         * <script> // line 按鈕 轉換事件 ... </script>
         */}
      </head>
      <body className={inter.className}>
        {/* 新版：Google Tag Manager (noscript) 放在 <body> 開頭後 */}
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M54TX8XB"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {/* 舊版（已停用保留）：Facebook Pixel 與 GoogleTrack */}
        {/**
         * <FacebookPixel />
         * <GoogleTrack />
         */}
        <Navigation />
        <main className="mt-[70px] relative max-w-[100vw]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
