'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function IOSDownloadPage() {
  const router = useRouter();

  useEffect(() => {
    // 確保環境變量存在
    if (process.env.NEXT_PUBLIC_IOS_APP_URL) {
      // 使用 window.location.href 進行跳轉
      window.location.href = process.env.NEXT_PUBLIC_IOS_APP_URL;
    } else {
      // 如果環境變量不存在,可以跳轉到一個錯誤頁面或首頁
      console.error('iOS App Store URL 未設置');
      router.push('/'); // 跳轉到首頁
    }
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen fixed top-0 left-0 w-full bg-white z-[1000]">
      <p className="text-xl">正在跳轉到 App Store，請稍候...</p>
    </div>
  );
}

