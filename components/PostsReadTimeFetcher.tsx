'use client'

import React, { useEffect, useState } from 'react'
import { getPostsByCategory } from '@/lib/sanity/queries'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity/sanityImage'

interface Props {
  category: string
}

const POSTS_PER_PAGE = 2;

const PostsReadTimeFetcher = ({ category }: Props) => {
  const [posts, setPosts] = useState<any[]>([])
  const [visiblePosts, setVisiblePosts] = useState<any[]>([])
  const [start, setStart] = useState(0)
  const [loading, setLoading] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const data = await getPostsByCategory(category)
      setPosts(data)
      setVisiblePosts(data.slice(0, POSTS_PER_PAGE))
      setStart(POSTS_PER_PAGE)
      setLoading(false)
    }
    fetchData()
  }, [category])

  const handleLoadMore = () => {
    setLoadingMore(true)
    const morePosts = posts.slice(start, start + POSTS_PER_PAGE)
    setVisiblePosts(prev => [...prev, ...morePosts])
    setStart(prev => prev + POSTS_PER_PAGE)
    setTimeout(() => setLoadingMore(false), 300) // simulate delay
  }

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
    <div className="mt-4">
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        {visiblePosts.map((post,index) => (
          <>
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
          {/* Insert banner after every 4 posts */}
          {(index + 1) % 2 === 0 && (
            <div className="col-span-full p-3 border border-gray-200 rounded-lg text-center h-[90px]">
              <h2 className="text-xl font-semibold mb-2">🚀 Check out our premium content!</h2>
              <p className="text-gray-700">Subscribe for more articles, tools, and exclusive insights.</p>
            </div>
          )}
          </>
          
        ))}
      </div>

      {start < posts.length && (
        <div className="text-center mt-6">
          <button
            onClick={handleLoadMore}
            disabled={loadingMore}
            className="bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-6 rounded-lg disabled:opacity-50"
          >
            {loadingMore ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
            ) : (
              'Load More'
            )}
          </button>
        </div>
      )}
    </div>
  )
}

export default PostsReadTimeFetcher
