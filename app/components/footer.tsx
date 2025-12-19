"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Footer() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // 量度 footer 高度並注入 CSS 變數，供 main 作底部間距（如果需要）
  useEffect(() => {
    const applyFooterHeightVar = () => {
      const el = containerRef.current;
      if (!el) return;
      const h = el.offsetHeight;
      document.documentElement.style.setProperty("--footer-h", `${h}px`);
    };
    applyFooterHeightVar();
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', applyFooterHeightVar);
      return () => window.removeEventListener('resize', applyFooterHeightVar);
    }
  }, []);

  return (
    <footer
      id="contact"
      className="relative w-full z-40"
    >
      <div ref={containerRef} className="bg-[#F2EFE9] pt-4 border-t border-[#D3CEC4] shadow-[0_-6px_20px_rgba(0,0,0,0.08)]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-start">
            {/* Logo and Company Name */}
            <div className="flex flex-col items-center space-x-2">
              <Image
                src="/images/logo.png"
                alt="星域迷你倉 Logo"
                width={150}
                height={150}
              />
              {/* <span className="text-[#483729] font-semibold">星域智空間</span>
              <span className="text-[#483729] text-sm">Spark Space</span> */}
              <div className="flex space-x-4 text-sm text-[#483729] mt-2">
                {/* <Link href="/resource-center" className="hover:underline">資源中心</Link> */}
                <Link href="/privacy" className="hover:underline">
                  隱私權條款
                </Link>
                <Link href="/terms" className="hover:underline">
                  服務條款
                </Link>
                {/* <Link href="/pricing" className="hover:underline">Pricing</Link>
              <Link href="/security" className="hover:underline">Security</Link>
              <Link href="/careers" className="hover:underline">Careers</Link> */}
              </div>
            </div>

            {/* Resource Center Links */}

            <div className="mt-0 text-left text-[#483729]">
              <h3 className="font-semibold mb-2">聯絡我們</h3>
              <p>電話: (02)8177-7085</p>
              <p>電子郵件: spark@sparklands.co</p>
              <p>地址: 台北市松山區延吉街7-1號B1(屈臣氏後方)</p>
            </div>

            {/* Social Media Links */}
            <div className="flex flex-col">
              {/* <Link href="#" aria-label="Line">
              <Image src="/images/line-icon.png" alt="Line" width={24} height={24} />
            </Link> */}
              <h3 className="font-semibold mb-2">社群連結</h3>
              <div className="flex space-x-2">
                <a
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=61563342058017"
                  aria-label="Facebook"
                >
                  <Image
                    src="/images/facebook.png"
                    alt="Facebook"
                    width={25}
                    height={25}
                  />
                </a>
                <a
                  target="_blank"
                  href="https://lin.ee/sDwC1pV"
                  aria-label="Line"
                >
                  <Image
                    src="/images/line.png"
                    alt="Line"
                    width={25}
                    height={25}
                  />
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/spark.space_storage/"
                  aria-label="IG"
                >
                  <Image
                    src="/images/ig-logo.png"
                    alt="IG"
                    width={25}
                    height={25}
                  />
                </a>
              </div>
              {/* <Link href="#" aria-label="Instagram">
              <Image src="/images/instagram-icon.png" alt="Instagram" width={24} height={24} />
            </Link> */}
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-[#ccc] mt-4 bg-[#483729] py-2">
          © 2024 - Spark Space
        </div>
      </div>
    </footer>
  );
}
