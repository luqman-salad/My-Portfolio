
"use client";

import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/sanityImage";
import SectionHeader from "./SectionHeader";
import { MdArticle } from "react-icons/md";
import Spinner from "@/components/Spinner";

const POSTS_PER_PAGE = 2;

const getPostsQuery = (start: number, end: number) => groq`
  *[_type == "post"] | order(publishedAt desc) [${start}...${end}] {
    _id,
    title,
    slug,
    mainImage,
    readTime,
    publishedAt,
    excerpt
  }
`;

const PostsLoadMore = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [start, setStart] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    setLoading(true);
    const newPosts = await client.fetch(getPostsQuery(start, start + POSTS_PER_PAGE));
    setPosts((prevPosts) => {
      const existingIds = new Set(prevPosts.map((p) => p._id));
      const filteredNewPosts = newPosts.filter((post) => !existingIds.has(post._id));
      return [...prevPosts, ...filteredNewPosts];
    });
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, [start]);


  return (
    <div className="mt-5 mx-5">
      <SectionHeader Icon={MdArticle} title="Latest Articles" />
      <div className="mt-5 sm:grid sm:grid-cols-2 gap-4">
        {posts.map((post) => (
          <Link
            href={`/blog/${post.slug.current}`}
            key={post._id}
            className="bg-white rounded-lg overflow-hidden shadow p-4 flex flex-col justify-between h-full border border-gray-200 mb-5 dark:border-cyan-900"
          >
            <div className="text-gray-500 text-sm flex gap-4 text-center mb-2">
              <span>🕒 {post.readTime} min read</span>
              <span>📅 {new Date(post.publishedAt).toDateString()}</span>
            </div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">{post.title}</h2>
            <p className="text-gray-600 text-sm line-clamp-2">{post.excerpt}</p>
            {post.mainImage && (
              <div className="mt-4">
                <Image
                  src={urlFor(post.mainImage).url()}
                  alt={post.title}
                  width={400}
                  height={200}
                  className="rounded-lg object-cover w-full h-48"
                />
              </div>
            )}
          </Link>
        ))}
      </div>

      {/* See More Articles */}
      <div className="text-center mt-6">
        <Link
          href='/blog'
          className={`bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-6 rounded-lg ${
            loading ? "pointer-events-none opacity-60" : ""
          }`}
        >
          {loading ? <Spinner /> : "See More"}
        </Link>
      </div>
    </div>
  );
};

export default PostsLoadMore;
