import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));

    const backendUrl = process.env.BACKEND_URL;
    if (!backendUrl) {
      return NextResponse.json(
        { success: false, message: "後端環境變數 BACKEND_URL 未設定" },
        { status: 500 }
      );
    }

    const res = await fetch(`${backendUrl}/api/landingpage/partners/submit`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json().catch(() => ({}));
    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    console.error("[proxy] landingpage-partners-submit error:", error);
    return NextResponse.json(
      { success: false, message: "系統發生錯誤，請稍後再試" },
      { status: 500 }
    );
  }
}
