import { redirect } from "@/i18n/navigation";

type Props = { params: { locale: string } };

/** 分店列表頁暫時隱藏（延吉店），保留路徑但一律轉回首頁 */
export default function LocationsPage({ params }: Props) {
  redirect({ href: "/", locale: params.locale });
}
