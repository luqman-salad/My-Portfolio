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
  

const PostsReadTimeFetcher = ({initialPosts} : {initialPosts : any[]}) => {
    const [posts, setPosts] = useState(initialPosts)

    useEffect(()=> {
        const subscription = client.listen(query).subscribe(() => {
            // Whenever Sanity content changes, re-fetch all posts
            client.fetch(query).then((newPosts) => setPosts(newPosts));
        });

        return () => subscription.unsubscribe(); // clean up
    }, []);

  return (
    <div className='mt-5 mx-5 sm:grid sm:grid-cols-2 gap-2'>
      {posts.map((post: any) => (
        <Link href={`/blog/${post.slug.current}`} key={post._id} className="bg-white rounded-lg overflow-hidden shadow p-4 flex flex-col justify-between h-full border border-gray-200">

          {/* Top Info */}
          <div className="text-gray-500 text-sm flex gap-4 text-center mb-2">
            <span>🕒 {post.readTime} min read</span>
            <span>📅 {new Date(post.publishedAt).toDateString()}</span>
          </div>

          {/* Title */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">{post.title}</h2>
          </div>

          {/* Excerpt */}
          <p className="text-gray-600 text-sm line-clamp-2">{post.excerpt}</p>

          {/* Image */}
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
  )
}

export default PostsReadTimeFetcher;