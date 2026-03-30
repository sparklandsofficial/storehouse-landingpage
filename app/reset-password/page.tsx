 "use client";

import { Suspense, useState, FormEvent } from "react";
import { useSearchParams } from "next/navigation";

function ResetPasswordInner() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token") || "";
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!token) {
      setError("連結無效或缺少 token，請重新申請重設密碼信件。");
      return;
    }

    if (!password || password.length < 6) {
      setError("請輸入至少 6 碼的新密碼。");
      return;
    }

    if (password !== confirmPassword) {
      setError("兩次輸入的密碼不一致。");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/frontend/reset-password-by-link", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok || data?.message !== "success") {
        setError(data?.message || "重設密碼失敗，請稍後再試。");
        return;
      }

      setSuccess(true);
    } catch (err) {
      console.error(err);
      setError("系統發生錯誤，請稍後再試。");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f1eb] px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl px-6 py-8">
        <h1 className="text-2xl font-semibold text-[#35322B] mb-2 text-center">
          重設密碼
        </h1>
        <p className="text-sm text-gray-500 mb-6 text-center">
          請輸入新的登入密碼。
        </p>

        {!token && (
          <div className="mb-4 rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">
            連結缺少 token，請從最新的重設密碼連結開啟此頁面。
          </div>
        )}

        {success ? (
          <div className="space-y-4">
            <div className="rounded-md bg-green-50 px-3 py-3 text-sm text-green-700">
              密碼已成功變更，您現在可以使用新密碼登入。請關閉此頁面。
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-[#35322B] mb-1"
              >
                新密碼
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C7A97B] focus:border-transparent"
                placeholder="請輸入新密碼"
                autoComplete="new-password"
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-[#35322B] mb-1"
              >
                再次輸入新密碼
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C7A97B] focus:border-transparent"
                placeholder="請再次輸入新密碼"
                autoComplete="new-password"
              />
            </div>

            {error && (
              <div className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading || !token}
              className="w-full inline-flex items-center justify-center rounded-full bg-[#C7A97B] px-4 py-2.5 text-sm font-medium text-white shadow-md hover:bg-[#b19266] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? "送出中..." : "確認變更密碼"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#f4f1eb] px-4">
          <div className="w-full max-w-md bg-white shadow-xl rounded-2xl px-6 py-8 text-center text-sm text-gray-500">
            載入中...
          </div>
        </div>
      }
    >
      <ResetPasswordInner />
    </Suspense>
  );
}

