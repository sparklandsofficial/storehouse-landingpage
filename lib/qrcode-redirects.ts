/** 讀 env 並去掉 .env 可能帶嘅引號 */
function readEnv(name: string): string | undefined {
  const raw = process.env[name]?.trim();
  if (!raw) return undefined;
  return raw.replace(/^["']|["']$/g, "");
}

/** .env 入面嘅 URL（對應 storehouse-landingpage/.env） */
export const env = {
  NEXT_PUBLIC_IOS_APP_URL: readEnv("NEXT_PUBLIC_IOS_APP_URL"),
  NEXT_PUBLIC_ANDROID_APP_URL: readEnv("NEXT_PUBLIC_ANDROID_APP_URL"),
  NEXT_PUBLIC_IOS_DOWNLOAD_URL: readEnv("NEXT_PUBLIC_IOS_DOWNLOAD_URL"),
  NEXT_PUBLIC_ANDROID_DOWNLOAD_URL: readEnv("NEXT_PUBLIC_ANDROID_DOWNLOAD_URL"),
} as const;

/**
 * QR 轉跳對照表（codeId → 目標 URL）
 *
 * 掃描 https://sparkspace.com.tw/qrcode/{codeId} 時轉跳。
 * 新增 QR：加一行，value 用 env.xxxx 指向 .env 變數。
 */
export const QR_CODE_REDIRECT_MAP = {
  ios: env.NEXT_PUBLIC_IOS_APP_URL,
  android: env.NEXT_PUBLIC_ANDROID_APP_URL,
  signboard_1_ios: env.NEXT_PUBLIC_IOS_APP_URL,
  signboard_1_android: env.NEXT_PUBLIC_ANDROID_APP_URL,
  iosdownload: env.NEXT_PUBLIC_IOS_DOWNLOAD_URL,
  androiddownload: env.NEXT_PUBLIC_ANDROID_DOWNLOAD_URL,
} as const;

export type QrCodeRedirectMap = typeof QR_CODE_REDIRECT_MAP;

export const QR_CODE_DEFAULT_REDIRECT = "/";

/** Next.js redirect Location header 必須 ASCII；含中文的 URL 需 encode */
function normalizeRedirectTarget(target: string): string {
  if (target.startsWith("/")) return target;
  if (!/^https?:\/\//i.test(target)) return QR_CODE_DEFAULT_REDIRECT;
  try {
    return new URL(target).href;
  } catch {
    return QR_CODE_DEFAULT_REDIRECT;
  }
}

export function resolveQrRedirect(codeId: string): string {
  const target = QR_CODE_REDIRECT_MAP[codeId.trim() as keyof QrCodeRedirectMap];
  if (!target) return QR_CODE_DEFAULT_REDIRECT;
  return normalizeRedirectTarget(target);
}
