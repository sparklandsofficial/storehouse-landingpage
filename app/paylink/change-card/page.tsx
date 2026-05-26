import { redirect } from "next/navigation";
import { paylink } from "@/messages/blocks/misc";

const t = paylink["zh-TW"];

type Props = {
  searchParams: { code?: string };
};

export const metadata = { title: t.metaTitle };

function ErrorPage({ title, message }: { title: string; message: string }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f1eb] px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl px-6 py-8 text-center">
        <h1 className="text-xl font-semibold text-[#35322B] mb-3">{title}</h1>
        <p className="text-sm text-gray-600">{message}</p>
      </div>
    </div>
  );
}

export default async function ChangeCardPage({ searchParams }: Props) {
  const code = searchParams.code;

  if (!code) {
    return <ErrorPage title={t.invalidTitle} message={t.errNoCode} />;
  }

  const backendUrl = (process.env.BACKEND_URL || "").replace(/\/$/, "");
  if (!backendUrl) {
    return <ErrorPage title={t.invalidTitle} message={t.errConfig} />;
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
    return <ErrorPage title={t.invalidTitle} message={t.errSystem} />;
  }

  if (!memberId) {
    return <ErrorPage title={t.invalidTitle} message={t.errUsed} />;
  }

  redirect(`${backendUrl}/api/paylink/change-card?member_id=${encodeURIComponent(memberId)}`);
}
