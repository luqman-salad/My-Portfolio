'use client'

import React, { useState } from 'react'
import SectionHeader from './SectionHeader'
import { MdArticle } from "react-icons/md"
import PostsReadTimeFetcher from './PostsReadTimeFetcher'

const BlogList = () => {
  const ArticleCategories = ["All", "Tech", "Productivity", "AI", "Development"]
  const [selectedCategory, setSelectedCategory] = useState("All")

  return (
    <div>
      <SectionHeader title="Articles" Icon={MdArticle} />
      
      <div className='flex text-center py-5 my-2 mx-2 overflow-scroll sm:justify-center scrollbar-hide'>
        {ArticleCategories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`border-2 mr-3 py-1 px-5 rounded-full transition cursor-pointer ${
              selectedCategory === category ? 'border-cyan-700 text-cyan-700' : 'border-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <PostsReadTimeFetcher category={selectedCategory} />
    </div>
  )
}

export default BlogList
