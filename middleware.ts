import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

// `app` covers every per-App 靜態支援／法律頁（/app/<name>/support 等）。這些頁面
// 不做多語系，必須繞過 next-intl，否則會被導向 /en/... 而 404。用整個 `app`
// 命名空間而非逐一列出，新增 App 時就不必再改這裡。
export const config = {
  matcher: ["/((?!api|_next|_vercel|qrcode|paylink|app|.*\\..*).*)"],
};
