import { redirect } from "next/navigation";

type Props = {
  searchParams: { code?: string };
};

/** 舊版帶語系前綴的 link → 統一導向固定路徑，避免 URL 被 middleware 改寫 */
export default function ChangeCardLocaleRedirect({ searchParams }: Props) {
  const qs = searchParams.code
    ? `?code=${encodeURIComponent(searchParams.code)}`
    : "";
  redirect(`/paylink/change-card${qs}`);
}
