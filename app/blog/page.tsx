import BlogList from '@/components/BlogList'
import BlogShowCase from '@/components/BlogShowCase'
import React from 'react'

const page = () => {
  return (
    <div className='mt-30'>
        <BlogShowCase/>
        <BlogList/>
    </div>
  )
}

export default page