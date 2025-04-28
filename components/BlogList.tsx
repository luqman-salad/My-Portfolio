import React from 'react'
import { client } from '@/sanity/lib/client';
import { getAllPostsQuery } from '@/lib/sanity/queries';
import SectionHeader from './SectionHeader'
import { MdArticle } from "react-icons/md";
import Link from 'next/link';
import { FaRegClock } from "react-icons/fa6";
import { FiCalendar } from "react-icons/fi";
import Image from 'next/image';
import { urlFor } from '@/lib/sanity/sanityImage';
import { PortableText } from '@portabletext/react'






const BlogList = async () => {

    const posts = await client.fetch(getAllPostsQuery)


    const ArticleCategories = ["All","Tech", "Productivity", "AI", "Development"]

  return (
    <div>
        <SectionHeader title="Articles" Icon={MdArticle}/>
        <div className='text-center py-5 my-2 mx-2 overflow-auto scrollbar-hide'>
            {ArticleCategories.map((category, index) => (
                <Link href="/" key={index}><span className='border-2 border-gray-300 mr-3 py-1 px-5 rounded-lg  hover:border-cyan-700 transition'>{category}</span></Link>

            ))}
        </div>
        <div className='mt-5 mx-5 sm:grid sm:grid-cols-2 gap-2'>
            {posts.map((post:any) => (
                <div key={post._id} className="bg-white rounded-lg overflow-hidden shadow p-4 flex flex-col justify-between h-full border border-gray-200">
                
                {/* Top Info */}
                <div className="text-gray-500 text-sm flex gap-4 text-center mb-2">
                  <span>🕒 {post.readTime} min read</span>
                  <span>📅 {new Date(post.publishedAt).toDateString()}</span>
                </div>
          
                {/* Title */}
                <h2 className="text-lg font-semibold text-gray-800 mb-2">{post.title}</h2>
          
                {/* Excerpt */}
                <p className="text-gray-600 text-sm line-clamp-2">{post.excerpt}</p>
          
                {/* Read More */}
                <div className="mt-2">
                  <Link href={`/blog/${post.slug.current}`} className="text-amber-600 text-sm font-medium hover:underline">
                    Read More
                  </Link>
                </div>

                
          
                {/* Image */}
                <div className="mt-4">
                  <Image 
                    src={urlFor(post.mainImage).url()} 
                    alt={"title"} 
                    width={400} 
                    height={200} 
                    className="rounded-lg object-cover w-full h-48"
                  />
                </div>
              </div>
              
            ))}
           
        </div>
        
    </div>
  )
}

export default BlogList