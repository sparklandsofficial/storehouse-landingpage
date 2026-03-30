import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const token = body?.token as string | undefined;
    const password = body?.password as string | undefined;

    if (!token || !password) {
      return NextResponse.json(
        { message: "token 和 password 為必填欄位" },
        { status: 400 }
      );
    }

    const backendUrl = process.env.BACKEND_URL;

    if (!backendUrl) {
      return NextResponse.json(
        { message: "後端環境變數 BACKEND_URL 未設定" },
        { status: 500 }
      );
    }

    const res = await fetch(
      `${backendUrl}/api/auth/reset-password-by-link`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token, password }),
      }
    );

    const data = await res.json().catch(() => ({}));

    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    console.error("reset-password-by-link proxy error:", error);
    return NextResponse.json(
      { message: "系統發生錯誤，請稍後再試。" },
      { status: 500 }
    );
  }
}
