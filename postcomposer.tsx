"use client";

import { useState } from "react";

export default function PostComposer({ onPosted }: { onPosted: () => void }) {
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const canPost = body.trim().length > 0 && !loading;

  async function submit() {
    if (!canPost) return;
    try {
      setLoading(true);
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          author: author.trim() || "Anonymous",
          body: body.trim(),
        }),
      });
      if (!res.ok) throw new Error("Failed to post");
      setAuthor("");
      setBody("");
      onPosted();
    } catch (err) {
      console.error(err);
      alert("Could not create post. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      submit();
    }
  }

  return (
    <div className="rounded-3xl bg-white shadow-[0_10px_30px_rgba(0,0,0,.08)] p-5">
      <div className="grid gap-3">
        <input
          placeholder="Your name (optional)"
          className="rounded-full border border-black/10 px-5 py-3"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <textarea
          placeholder="Share something with the Punto Azul community…"
          className="rounded-2xl border border-black/10 px-5 py-3 min-h-[120px]"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          onKeyDown={onKeyDown}
        />
        <div className="flex items-center justify-between text-xs text-stone/70">
          <span>Tip: Press ⌘/Ctrl + Enter to post</span>
          <button
            onClick={submit}
            disabled={!canPost}
            className="px-6 py-3 rounded-full bg-azul text-cream uppercase tracking-wider2 text-sm disabled:opacity-50"
            aria-busy={loading}
          >
            {loading ? "Posting…" : "Post"}
          </button>
        </div>
      </div>
    </div>
  );
}
