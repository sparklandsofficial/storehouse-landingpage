import { redirect } from "next/navigation";

export default async function QrCodePage({ params }: { params: { codeId: string } }) {
  console.log(`[QR Scan] codeId: ${params.codeId} — ${new Date().toISOString()}`);
  redirect("/");
}
