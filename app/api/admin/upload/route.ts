import { type NextRequest, NextResponse } from "next/server"
import { writeFile } from "fs/promises"
import path from "path"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File
    const type = formData.get("type") as string

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Define upload directory based on type
    const uploadDir = type === "template" ? "templates" : "assets"
    const uploadPath = path.join(process.cwd(), "public", uploadDir, file.name)

    // Write file to public directory
    await writeFile(uploadPath, buffer)

    return NextResponse.json({
      success: true,
      message: "File uploaded successfully",
      path: `/${uploadDir}/${file.name}`,
    })
  } catch (error) {
    console.error("Upload error:", error)
    return NextResponse.json({ error: "Upload failed" }, { status: 500 })
  }
}
