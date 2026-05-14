import { NextRequest, NextResponse } from "next/server"
import { PrivyClient } from "@privy-io/server-auth"
import connectDB from "@/lib/db"
import { Article, User } from "@/models/all"
import { UploadBlobService } from "@/services/save-pdf"
import sharp from "sharp"

const WEBP_QUALITY = 80

const privyClient = new PrivyClient(
  process.env.NEXT_PUBLIC_PRIVY_APP_ID!,
  process.env.PRIVY_APP_SECRET!
)

async function requireAdmin(request: NextRequest) {
  const authHeader = request.headers.get("authorization")
  if (!authHeader?.startsWith("Bearer ")) {
    return { ok: false as const, response: NextResponse.json({ success: false, error: "未授權" }, { status: 401 }) }
  }
  const token = authHeader.slice(7)
  let verifiedUser: { userId: string }
  try {
    verifiedUser = await privyClient.verifyAuthToken(token)
  } catch {
    return { ok: false as const, response: NextResponse.json({ success: false, error: "無效的 token" }, { status: 401 }) }
  }
  await connectDB()
  const user = await User.findOne({ privy_user_id: verifiedUser.userId })
    .select("is_admin")
    .lean()
    .exec() as { is_admin?: boolean } | null
  if (!user?.is_admin) {
    return { ok: false as const, response: NextResponse.json({ success: false, error: "需要管理員權限" }, { status: 403 }) }
  }
  return { ok: true as const }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const adminCheck = await requireAdmin(request)
  if (!adminCheck.ok) return adminCheck.response

  const { id: articleId } = await params

  try {
    const exists = await Article.exists({ _id: articleId })
    if (!exists) {
      return NextResponse.json({ success: false, error: "Article not found" }, { status: 404 })
    }

    const formData = await request.formData()

    const tokensRaw = formData.get("tokens")
    if (typeof tokensRaw !== "string") {
      return NextResponse.json({ success: false, error: "Missing tokens" }, { status: 400 })
    }

    const tokens = JSON.parse(tokensRaw) as string[]
    if (!Array.isArray(tokens) || tokens.length === 0) {
      return NextResponse.json({ success: false, error: "Invalid tokens" }, { status: 400 })
    }

    const files = formData.getAll("images") as any[]
    if (!files || files.length !== tokens.length) {
      return NextResponse.json(
        { success: false, error: "Images count does not match tokens" },
        { status: 400 }
      )
    }

    const uploads = await Promise.all(
      files.map(async (file, idx) => {
        const token = tokens[idx]
        const fileName = `articles/${articleId}/${token}.webp`

        const arrayBuffer = await file.arrayBuffer()
        const buffer = Buffer.from(arrayBuffer)

        const webpBuffer = await sharp(buffer).webp({ quality: WEBP_QUALITY }).toBuffer()

        const result = await UploadBlobService.saveFile(fileName, webpBuffer)
        if (!result.success) {
          throw new Error(result.error || "Upload failed")
        }

        return { token, url: result.url }
      })
    )

    return NextResponse.json({ success: true, data: uploads })
  } catch (error) {
    console.error("POST /api/articles/[id]/upload-images failed:", error)
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 })
  }
}
