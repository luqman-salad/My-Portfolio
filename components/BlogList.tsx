import React from 'react'
import SectionHeader from './SectionHeader'
import { MdArticle } from "react-icons/md";
import Link from 'next/link';
import { FaRegClock } from "react-icons/fa6";
import { FiCalendar } from "react-icons/fi";
import Image from 'next/image';




const BlogList = () => {

    const ArticleCategories = ["Tech", "Productivity", "AI", "Development"]

  return (
    <div>
        <SectionHeader title="Articles" Icon={MdArticle}/>
        <div className='text-center my-7'>
            {ArticleCategories.map((category, index) => (
                <Link href="/"><span className='border-2 border-gray-300 mr-3 py-1 px-5 rounded-lg  hover:border-cyan-700 transition'>{category}</span></Link>

            ))}
        </div>
        <div className='mt-5'>
            <div className='sm:flex border border-gray-300 rounded-lg p-3 mb-3'>
                <div>
                    <div className='flex gap-x-5 text-gray-500 px-5'>
                        <span className=''>Tech</span>
                        <span className='flex items-center gap-x-2'><FaRegClock/> 3 min read</span>
                        <span className='flex items-center gap-x-2'><FiCalendar/> April 23, 2025</span>
                    </div>
                    <h2 className='text-[22px] font-medium'>laqadaha oo lagaa rabo si aad u noqoto Data Scientist</h2>
                    <p className='text-[15px] text-gray-700'>DataSciece ka waa cilmiga ugu weeyn ee caalamka aan joogno muhiimadiisuna ee aad u sareeyso.....
                    </p>
                    <Link href='/' className='text-amber-600'>Read More</Link>
                </div>
                <div className='flex items-center'>
                    <Image
                        src="/techworld.png"
                        alt='articleThumnail'
                        width={200}
                        height={100}
                        className='my-2 rounded-lg w-full '
                        
                    />
                </div>
            </div>
            <div className='sm:flex border border-gray-300 rounded-lg p-3 mb-3'>
                <div>
                    <div className='flex gap-x-5 text-gray-500 px-5'>
                        <span className=''>Tech</span>
                        <span className='flex items-center gap-x-2'><FaRegClock/> 3 min read</span>
                        <span className='flex items-center gap-x-2'><FiCalendar/> April 23, 2025</span>
                    </div>
                    <h2 className='text-[22px] font-medium'>laqadaha oo lagaa rabo si aad u noqoto Data Scientist</h2>
                    <p className='text-[15px] text-gray-700'>DataSciece ka waa cilmiga ugu weeyn ee caalamka aan joogno muhiimadiisuna ee aad u sareeyso.....
                    </p>
                    <Link href='/' className='text-amber-600'>Read More</Link>
                </div>
                <div className='flex items-center'>
                    <Image
                        src="/techworld.png"
                        alt='articleThumnail'
                        width={200}
                        height={100}
                        className='my-2 rounded-lg w-full '
                        
                    />
                </div>
            </div>
            <div className='sm:flex border border-gray-300 rounded-lg p-3 mb-3'>
                <div>
                    <div className='flex gap-x-5 text-gray-500 px-5'>
                        <span className=''>Tech</span>
                        <span className='flex items-center gap-x-2'><FaRegClock/> 3 min read</span>
                        <span className='flex items-center gap-x-2'><FiCalendar/> April 23, 2025</span>
                    </div>
                    <h2 className='text-[22px] font-medium'>laqadaha oo lagaa rabo si aad u noqoto Data Scientist</h2>
                    <p className='text-[15px] text-gray-700'>DataSciece ka waa cilmiga ugu weeyn ee caalamka aan joogno muhiimadiisuna ee aad u sareeyso.....
                    </p>
                    <Link href='/' className='text-amber-600'>Read More</Link>
                </div>
                <div className='flex items-center'>
                    <Image
                        src="/techworld.png"
                        alt='articleThumnail'
                        width={200}
                        height={100}
                        className='my-2 rounded-lg w-full '
                        
                    />
                </div>
            </div>
            
            
            
        </div>
        <div>
            <Link href='/'>
                <p className='text-center text-lg text-cyan-700'>Load More...</p>
            </Link>
        </div>
    </div>
  )
}

export default BlogList