"use client";
import useSWR from "swr";
import PostComposer from "../components/PostComposer";
import PostList from "../components/PostList";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function CommunityPage() {
  const { data, mutate } = useSWR("/api/posts", fetcher);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="font-serif text-4xl">Community</h1>
      <p className="text-stone/80 mt-2">Share outfits, sessions, and stories.</p>

      <div className="mt-6">
        <PostComposer onPosted={() => mutate()} />
      </div>

      <div className="mt-10">
        <PostList posts={data?.posts ?? []} onChanged={() => mutate()} />
      </div>
    </div>
  );
}
