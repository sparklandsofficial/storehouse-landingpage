/** QR 轉跳表：codeId → 目標 URL（可 absolute 或站內 path） */
export const QR_CODE_REDIRECTS: Record<string, string> = {
  ios: "https://apps.apple.com/tw/app/星域智空間/id6670202079",
  android:
    "https://play.google.com/store/apps/details?id=terizac.intheblackworld.storehouseapp",
  signboard_1_ios: "https://apps.apple.com/tw/app/星域智空間/id6670202079",
  signboard_1_android:
    "https://play.google.com/store/apps/details?id=terizac.intheblackworld.storehouseapp",
  // 範例：站內 path 亦可
  // pricing: "/zh-TW/pricing",
};

export const QR_CODE_DEFAULT_REDIRECT = "/";

export function resolveQrRedirect(codeId: string): string {
  const target = QR_CODE_REDIRECTS[codeId.trim()];
  if (!target) return QR_CODE_DEFAULT_REDIRECT;
  if (target.startsWith("/") || /^https?:\/\//i.test(target)) return target;
  return QR_CODE_DEFAULT_REDIRECT;
}
