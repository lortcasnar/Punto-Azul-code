import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

// POST /api/comments  -> add a comment to a post
export async function POST(req: Request) {
  try {
    const { postId, author, body } = await req.json();
    if (!postId || !body) {
      return NextResponse.json({ error: "Missing postId or body" }, { status: 400 });
    }
    const comment = await prisma.comment.create({
      data: {
        postId: Number(postId),
        author: (author || "Anonymous").toString(),
        body: body.toString().trim(),
      },
    });
    return NextResponse.json({ comment }, { status: 201 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}