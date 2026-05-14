"use client";

import { Suspense, useState, FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";

function ResetPasswordFallback() {
  const t = useTranslations("ResetPasswordPage");
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f1eb] px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl px-6 py-8 text-center text-sm text-gray-500">{t("fallback")}</div>
    </div>
  );
}

function ResetPasswordInner() {
  const t = useTranslations("ResetPasswordPage");
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
      setError(t("errToken"));
      return;
    }

    if (!password || password.length < 6) {
      setError(t("errLen"));
      return;
    }

    if (password !== confirmPassword) {
      setError(t("errMatch"));
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/frontend/reset-password-by-link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      });

      const data = await res.json();

      if (!res.ok || data?.message !== "success") {
        setError(data?.message || t("errFail"));
        return;
      }

      setSuccess(true);
    } catch (err) {
      console.error(err);
      setError(t("errSystem"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f1eb] px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl px-6 py-8">
        <h1 className="text-2xl font-semibold text-[#35322B] mb-2 text-center">{t("h1")}</h1>
        <p className="text-sm text-gray-500 mb-6 text-center">{t("sub")}</p>

        {!token && <div className="mb-4 rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">{t("errNoToken")}</div>}

        {success ? (
          <div className="space-y-4">
            <div className="rounded-md bg-green-50 px-3 py-3 text-sm text-green-700">{t("success")}</div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[#35322B] mb-1">
                {t("labelNew")}
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C7A97B] focus:border-transparent"
                placeholder={t("phNew")}
                autoComplete="new-password"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#35322B] mb-1">
                {t("labelConfirm")}
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C7A97B] focus:border-transparent"
                placeholder={t("phConfirm")}
                autoComplete="new-password"
              />
            </div>

            {error && <div className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">{error}</div>}

            <button
              type="submit"
              disabled={loading || !token}
              className="w-full inline-flex items-center justify-center rounded-full bg-[#C7A97B] px-4 py-2.5 text-sm font-medium text-white shadow-md hover:bg-[#b19266] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? t("submitting") : t("submit")}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default function ResetPasswordClient() {
  return (
    <Suspense fallback={<ResetPasswordFallback />}>
      <ResetPasswordInner />
    </Suspense>
  );
}
