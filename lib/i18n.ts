"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export type AppLocale = (typeof routing.locales)[number];

export function useSwitchLocale() {
  const router = useRouter();
  const pathname = usePathname();
  return (newLocale: AppLocale) => {
    router.replace(pathname, { locale: newLocale });
  };
}
