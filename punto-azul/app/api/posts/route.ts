import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

// GET /api/posts  -> list posts (newest first) including comments
export async function GET() {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
    include: { comments: { orderBy: { createdAt: "asc" } } },
  });
  return NextResponse.json({ posts });
}

// POST /api/posts  -> create a post
export async function POST(req: Request) {
  try {
    const { author, body } = await req.json();
    if (!body || typeof body !== "string") {
      return NextResponse.json({ error: "Missing post body" }, { status: 400 });
    }
    const post = await prisma.post.create({
      data: { author: (author || "Anonymous").toString(), body: body.trim() },
    });
    return NextResponse.json({ post }, { status: 201 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}