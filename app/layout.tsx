import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import FacebookPixel from "./components/FacebookPixel";
import GoogleTrack from "./components/GoogleTrack";
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
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-528010636"
        />
        <script
          id="google-track"
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-528010636');
        `,
          }}
        />
        {/* Event snippet for apple store 下載 conversion page */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.addEventListener("load", function (event) {
              document.querySelectorAll("a[href*='https://www.sparkspace.com.tw/iosdownload']").forEach(function (e) {
                e.addEventListener('click', function () {
                  gtag('event', 'conversion', { 'send_to': 'AW-17048583243/WvncCPTcuNcaEMv4ssE_' });
                });
              });
            });
          `,
          }}
        />

        {/* Event snippet for googlepay conversion page */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.addEventListener("load", function (event) {
              document.querySelectorAll("a[href*='https://www.sparkspace.com.tw/androiddownload']").forEach(function (e) {
                e.addEventListener('click', function () {
                  gtag('event', 'conversion', { 'send_to': 'AW-17048583243/-BReCPfcuNcaEMv4ssE_' });
                });
              });
            });
          `,
          }}
        />

        {/* Event snippet for line 按鈕 conversion page */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.addEventListener("load", function (event) {
              document.querySelectorAll("a[href*='https://lin.ee/']").forEach(function (e) {
                e.addEventListener('click', function () {
                  gtag('event', 'conversion', { 'send_to': 'AW-17048583243/cyeECPrcuNcaEMv4ssE_' });
                });
              });
            });
          `,
          }}
        />
      </head>
      <body className={inter.className}>
        <FacebookPixel />
        <GoogleTrack />
        <Navigation />
        <main className="mt-[70px] relative max-w-[100vw] overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
