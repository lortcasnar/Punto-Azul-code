"use client";

import { useState } from "react";

type Comment = {
  id: number;
  author: string;
  body: string;
  createdAt: string;
};

export type Post = {
  id: number;
  author: string;
  body: string;
  createdAt: string;
  comments: Comment[];
};

export default function PostList({
  posts,
  onChanged,
}: {
  posts: Post[];
  onChanged: () => void;
}) {
  if (!posts?.length) {
    return <p className="text-stone/70">No posts yet. Be the first!</p>;
  }

  return (
    <div className="grid gap-6">
      {posts.map((p) => (
        <PostItem key={p.id} post={p} onChanged={onChanged} />
      ))}
      </div>
    </article> 
  );
}

function PostItem({
  post,
  onChanged,
}: {
  post: Post;
  onChanged: () => void;
}) {
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);

  async function addComment() {
    if (!body.trim()) return;
    try {
      setLoading(true);
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          postId: post.id,
          author: author.trim() || "Anonymous",
          body: body.trim(),
        }),
      });
      if (!res.ok) throw new Error("Failed to comment");
      setAuthor("");
      setBody("");
      onChanged();
    } catch (e) {
      console.error(e);
      alert("Could not add comment. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      addComment();
    }
  }

  return (
    <article className="rounded-3xl bg-white shadow-[0_10px_30px_rgba(0,0,0,.08)] p-5">
      <div className="text-sm text-stone/60">
        {new Date(post.createdAt).toLocaleString()}
      </div>
      <div className="mt-1 font-medium">{post.author}</div>
      <p className="mt-2">{post.body}</p>

      {/* CComments */}
      <div className="mt-4">
        {post.comments.map((c) => (
          <div key={c.id} className="border-b border-stone/200 py-2">
            <div className="text-sm text-stone/60">
              {new Date(c.createdAt).toLocaleString()}
            </div>
            <div className="mt-1 font-medium">{c.author}</div>
            <p className="mt-2">{c.body}</p>
          </div>
        ))}
      </div>
