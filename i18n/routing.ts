import { defineRouting } from "next-intl/routing";

/**
 * - `localePrefix: "always"`：網址一律帶語系；無語系路徑由 middleware 依 Accept-Language 導向。
 * - `defaultLocale: "en"`：瀏覽器語言無法對應到 zh-TW / zh-CN 時（或非中文）預設英文。
 * - `localeDetection: true`：在 zh-TW、zh-CN、en 之間用 Accept-Language 協商（例如 zh-CN、zh-Hans → zh-CN；zh-TW、zh-HK、zh-Hant → zh-TW）。
 */
export const routing = defineRouting({
  locales: ["zh-TW", "zh-CN", "en"],
  defaultLocale: "en",
  localePrefix: "always",
  localeDetection: true,
});
