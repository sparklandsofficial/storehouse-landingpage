import { getTranslations, setRequestLocale } from "next-intl/server";
import ResetPasswordClient from "./ResetPasswordClient";

type Props = { params: { locale: string } };

export async function generateMetadata({ params }: Props) {
  setRequestLocale(params.locale);
  const t = await getTranslations("ResetPasswordPage");
  return { title: t("metaTitle") };
}

export default function ResetPasswordPage() {
  return <ResetPasswordClient />;
}
