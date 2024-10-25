"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function IOSDownloadPage() {
  const router = useRouter();

  useEffect(() => {
    // 確保環境變量存在
    // if (process.env.NEXT_PUBLIC_ANDROID_APP_URL) {
    //   // 使用 window.location.href 進行跳轉
    //   window.location.href = process.env.NEXT_PUBLIC_ANDROID_APP_URL;
    // } else {
    //   // 如果環境變量不存在,可以跳轉到一個錯誤頁面或首頁
    //   console.error('Android Google Play URL 未設置');
    //   router.push('/'); // 跳轉到首頁
    // }
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen fixed top-0 left-0 w-full bg-white z-[1000]">
      <Image src="/images/logo.png" alt="Logo" width={300} height={300} className="mb-8" />
      <p className="mb-8 md:text-[1.4vw] text-[4vw] text-center text-[#89754A] font-semibold">
        Coming Soon...
        <br />
        11/1 開幕 敬請期待
      </p>
    </div>
  );
}
