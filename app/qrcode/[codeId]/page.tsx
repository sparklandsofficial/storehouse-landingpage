import { redirect } from "next/navigation";
import { resolveQrRedirect } from "@/lib/qrcode-redirects";

export default function QrCodePage({ params }: { params: { codeId: string } }) {
  const target = resolveQrRedirect(params.codeId);
  console.log(
    `[QR Scan] codeId=${params.codeId} → ${target} @ ${new Date().toISOString()}`
  );
  redirect(target);
}
