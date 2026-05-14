const zhTW = {
  testimonialLoading: "載入評論中…",
  testimonialQuote: "「{quote}」",
} as const;

export const misc = {
  "zh-TW": zhTW,
  "zh-CN": {
    testimonialLoading: "加载评论中…",
    testimonialQuote: "「{quote}」",
  },
  en: {
    testimonialLoading: "Loading reviews…",
    testimonialQuote: "“{quote}”",
  },
} as const;

const rTW = {
  metaTitle: "重設密碼 | Spark Space 星域智空間",
  h1: "重設密碼",
  sub: "請輸入新的登入密碼。",
  errNoToken: "連結缺少 token，請從最新的重設密碼連結開啟此頁面。",
  success: "密碼已成功變更，您現在可以使用新密碼登入。請關閉此頁面。",
  labelNew: "新密碼",
  labelConfirm: "再次輸入新密碼",
  phNew: "請輸入新密碼",
  phConfirm: "請再次輸入新密碼",
  submit: "確認變更密碼",
  submitting: "送出中...",
  fallback: "載入中...",
  errToken: "連結無效或缺少 token，請重新申請重設密碼信件。",
  errLen: "請輸入至少 6 碼的新密碼。",
  errMatch: "兩次輸入的密碼不一致。",
  errFail: "重設密碼失敗，請稍後再試。",
  errSystem: "系統發生錯誤，請稍後再試。",
} as const;

const rCN = {
  metaTitle: "重设密码 | Spark Space 星域智空间",
  h1: "重设密码",
  sub: "请输入新的登录密码。",
  errNoToken: "链接缺少 token，请从最新的重设密码链接打开此页面。",
  success: "密码已成功变更，你现在可以使用新密码登录。请关闭此页面。",
  labelNew: "新密码",
  labelConfirm: "再次输入新密码",
  phNew: "请输入新密码",
  phConfirm: "请再次输入新密码",
  submit: "确认变更密码",
  submitting: "提交中...",
  fallback: "加载中...",
  errToken: "链接无效或缺少 token，请重新申请重设密码邮件。",
  errLen: "请输入至少 6 位的新密码。",
  errMatch: "两次输入的密码不一致。",
  errFail: "重设密码失败，请稍后再试。",
  errSystem: "系统发生错误，请稍后再试。",
} as const;

const rEn = {
  metaTitle: "Reset password | Spark Space",
  h1: "Reset password",
  sub: "Choose a new sign-in password.",
  errNoToken: "This link is missing a token. Open the page from the latest reset email.",
  success: "Your password was updated. You can sign in with the new password. You may close this tab.",
  labelNew: "New password",
  labelConfirm: "Confirm new password",
  phNew: "Enter a new password",
  phConfirm: "Re-enter the new password",
  submit: "Update password",
  submitting: "Saving…",
  fallback: "Loading…",
  errToken: "This link is invalid or missing a token. Request a new reset email.",
  errLen: "Use at least 6 characters.",
  errMatch: "The two passwords do not match.",
  errFail: "We couldn’t reset the password. Try again shortly.",
  errSystem: "Something went wrong. Try again shortly.",
} as const;

export const resetPassword = {
  "zh-TW": rTW,
  "zh-CN": rCN,
  en: rEn,
} as const;

const pTW = {
  metaTitle: "更新付款方式 | Spark Space",
  errNoCode: "連結無效，缺少驗證碼。",
  errConfig: "系統設定錯誤，請聯絡客服。",
  errSystem: "系統發生錯誤，請稍後再試。",
  errUsed: "連結已失效或已使用，請聯絡客服重新取得付款連結。",
  invalidTitle: "付款連結無效",
} as const;

const pCN = {
  metaTitle: "更新付款方式 | Spark Space",
  errNoCode: "链接无效，缺少验证码。",
  errConfig: "系统设定错误，请联系客服。",
  errSystem: "系统发生错误，请稍后再试。",
  errUsed: "链接已失效或已使用，请联系客服重新取得付款链接。",
  invalidTitle: "付款链接无效",
} as const;

const pEn = {
  metaTitle: "Update payment method | Spark Space",
  errNoCode: "This link is missing a verification code.",
  errConfig: "Service is misconfigured. Please contact support.",
  errSystem: "Something went wrong. Please try again shortly.",
  errUsed: "This link expired or was already used. Ask support for a new payment link.",
  invalidTitle: "Payment link invalid",
} as const;

export const paylink = {
  "zh-TW": pTW,
  "zh-CN": pCN,
  en: pEn,
} as const;

const dTW = {
  iosRedirect: "正在跳轉到 App Store，請稍候...",
  androidRedirect: "正在跳轉到 Google Play，請稍候...",
  errIos: "iOS App Store URL 未設置",
  errAndroid: "Android Google Play URL 未設置",
} as const;

const dCN = {
  iosRedirect: "正在跳转到 App Store，请稍候...",
  androidRedirect: "正在跳转到 Google Play，请稍候...",
  errIos: "未设置 iOS App Store URL",
  errAndroid: "未设置 Android Google Play URL",
} as const;

const dEn = {
  iosRedirect: "Redirecting to the App Store…",
  androidRedirect: "Redirecting to Google Play…",
  errIos: "iOS App Store URL is not configured",
  errAndroid: "Google Play URL is not configured",
} as const;

export const downloads = {
  "zh-TW": dTW,
  "zh-CN": dCN,
  en: dEn,
} as const;
