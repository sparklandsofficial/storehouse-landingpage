"use client";

export default function LocaleError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[40vh] flex flex-col items-center justify-center gap-4 px-6 py-24 text-on-surface">
      <p className="text-lg font-semibold">頁面載入時發生錯誤</p>
      <pre className="max-w-2xl w-full overflow-auto rounded-lg bg-surface-container-low p-4 text-left text-xs text-on-surface-variant whitespace-pre-wrap">
        {error.message}
        {error.digest ? `\n(digest: ${error.digest})` : ""}
      </pre>
      <button
        type="button"
        onClick={() => reset()}
        className="butler-gradient text-white px-6 py-3 rounded-xl text-sm font-bold"
      >
        重試
      </button>
    </div>
  );
}
