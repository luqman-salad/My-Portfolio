"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/sanityImage";

const query = groq`*[_type == "post"] | order(publishedAt desc){
  _id,
  title,
  slug,
  mainImage,
  readTime,
  publishedAt,
  excerpt
}`;

const PostsReadTimeFetcher = ({ initialPosts }: { initialPosts: any[] }) => {
  const [posts, setPosts] = useState<any[]>(initialPosts);
  const [isLoading, setIsLoading] = useState(initialPosts.length === 0); // Only loading if no initialPosts

  useEffect(() => {
    async function fetchPosts() {
      try {
        setIsLoading(true);
        const data = await client.fetch(query);
        setPosts(data);
      } finally {
        setIsLoading(false);
      }
    }

    // Listen for real-time updates
    const subscription = client.listen(query).subscribe((update) => {
      fetchPosts();
    });

    // Clean up subscription
    return () => subscription.unsubscribe();
  }, []);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <div key={idx} className="h-48 bg-gray-200 animate-pulse rounded-lg"></div>
        ))}
      </div>
    );
  }

  return (
    <div className="mt-5 mx-5 sm:grid sm:grid-cols-2 gap-2">
      {posts.map((post: any) => (
        <Link
          href={`/blog/${post.slug.current}`}
          key={post._id}
          className="bg-white rounded-lg overflow-hidden shadow p-4 flex flex-col justify-between h-full border border-gray-200"
        >
          <div className="text-gray-500 text-sm flex gap-4 text-center mb-2">
            <span>🕒 {post.readTime} min read</span>
            <span>📅 {new Date(post.publishedAt).toDateString()}</span>
          </div>

          <h2 className="text-lg font-semibold text-gray-800 mb-2">{post.title}</h2>

          <p className="text-gray-600 text-sm line-clamp-2">{post.excerpt}</p>

          <div className="mt-4">
            <Image
              src={urlFor(post.mainImage).url()}
              alt={post.title}
              width={400}
              height={200}
              className="rounded-lg object-cover w-full h-48"
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PostsReadTimeFetcher;
