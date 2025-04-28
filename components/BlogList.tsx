import React from 'react'
import { client } from '@/sanity/lib/client';
import { getAllPostsQuery } from '@/lib/sanity/queries';
import SectionHeader from './SectionHeader'
import { MdArticle } from "react-icons/md";
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity/sanityImage';
import PostsReadTimeFetcher from './PostsReadTimeFetcher';


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
        
        <PostsReadTimeFetcher initialPosts={posts}/>
         
        
    </div>
  )
}

export default BlogList;