'use client'

import React, { useEffect, useState } from 'react'
import { getPostsByCategory } from '@/lib/sanity/queries'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity/sanityImage';

interface Props {
  category: string
}

const PostsReadTimeFetcher = ({ category }: Props) => {
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const data = await getPostsByCategory(category)
      setPosts(data)
      setLoading(false)
    }
    fetchData()
  }, [category])

  if (loading) {
    return (
      <div className="flex justify-center items-center py-10">
        <div className="w-8 h-8 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  if (!loading && posts.length === 0) {
    return <p className="text-center text-gray-600 italic py-6">No posts for this category.</p>
  }

  return (
    <div className='space-y-5 grid grid-cols-2 gap-3'>
      {posts.map((post) => (
        <Link
        href={`/blog/${post.slug.current}`}
        key={post._id}
        className="bg-white rounded-lg overflow-hidden shadow p-4 flex flex-col justify-between h-full border border-gray-200"
      >
        <div className="text-gray-500 text-sm flex gap-4 text-center mb-2">
          <span>🕒 {post.readTime} min read</span>
          <span>📅 {new Date(post.publishedAt).toDateString()}</span>
        </div>
        <h2 className="text-lg font-semibold text-gray-800">{post.title}</h2>
        <p className="text-gray-600 text-sm line-clamp-2">{post.excerpt}</p>
        {post.mainImage && (
          <div className="mt-2">
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
  )
}

export default PostsReadTimeFetcher
