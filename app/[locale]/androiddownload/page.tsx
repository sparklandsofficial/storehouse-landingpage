"use client";

import { useEffect } from "react";
import { useRouter } from "@/i18n/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function AndroidDownloadPage() {
  const router = useRouter();
  const t = useTranslations("DownloadsPage");

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_ANDROID_APP_URL) {
      window.location.href = process.env.NEXT_PUBLIC_ANDROID_APP_URL;
    } else {
      console.error(t("errAndroid"));
      router.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- mount-only redirect; `t` tied to locale from layout
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen fixed top-0 left-0 w-full bg-white z-[1000]">
      <Image src="/images/logo.png" alt="Logo" width={300} height={300} className="mb-8" />
      <p className="text-xl">{t("androidRedirect")}</p>
    </div>
  );
}
