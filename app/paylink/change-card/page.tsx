import { redirect } from "next/navigation";

interface Props {
  searchParams: { code?: string };
}

export default async function ChangeCardPage({ searchParams }: Props) {
  const code = searchParams.code;

  if (!code) {
    return <ErrorPage message="連結無效，缺少驗證碼。" />;
  }

  const backendUrl = (process.env.BACKEND_URL || "").replace(/\/$/, "");
  if (!backendUrl) {
    return <ErrorPage message="系統設定錯誤，請聯絡客服。" />;
  }

  let memberId: string | null = null;
  try {
    const res = await fetch(
      `${backendUrl}/api/changecard_code/validate-code?code=${encodeURIComponent(code)}`,
      { cache: "no-store" }
    );
    if (res.ok) {
      const data = await res.json();
      memberId = data?.member_id ?? null;
    }
  } catch {
    return <ErrorPage message="系統發生錯誤，請稍後再試。" />;
  }

  if (!memberId) {
    return <ErrorPage message="連結已失效或已使用，請聯絡客服重新取得付款連結。" />;
  }

  redirect(`${backendUrl}/api/paylink/change-card?member_id=${encodeURIComponent(memberId)}`);
}

function ErrorPage({ message }: { message: string }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f1eb] px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl px-6 py-8 text-center">
        <h1 className="text-xl font-semibold text-[#35322B] mb-3">付款連結無效</h1>
        <p className="text-sm text-gray-600">{message}</p>
      </div>
    </div>
  );
}
