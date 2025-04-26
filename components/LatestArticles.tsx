import React from 'react'
import SectionHeader from './SectionHeader'
import { MdArticle } from "react-icons/md";
import Link from 'next/link';


const LatestArticles = () => {
  return (
    <>
        <SectionHeader title='Latest Articles' Icon={MdArticle}/>
        <div className='mt-5'>
            <div className='border border-gray-300 rounded-lg p-3 mb-3'>
                <h2 className='text-2xl font-medium'>laqadaha oo lagaa rabo si aad u noqoto Data Scientist</h2>
                <p className=''>DataSciece ka waa cilmiga ugu weeyn ee caalamka aan joogno muhiimadiisuna ee aad u sareeyso.....
                </p>
                <Link href='/' className='text-amber-600'>Read More</Link>
            </div>
            <div className='border border-gray-300 rounded-lg p-3 mb-3'>
                <h2 className='text-2xl font-medium'>laqadaha oo lagaa rabo si aad u noqoto Data Scientist</h2>
                <p className=''>DataSciece ka waa cilmiga ugu weeyn ee caalamka aan joogno muhiimadiisuna ee aad u sareeyso.....
                </p>
                <Link href='/' className='text-amber-600'>Read More</Link>
            </div>
            <div className='border border-gray-300 rounded-lg p-3 mb-3'>
                <h2 className='text-2xl font-medium'>laqadaha oo lagaa rabo si aad u noqoto Data Scientist</h2>
                <p className=''>DataSciece ka waa cilmiga ugu weeyn ee caalamka aan joogno muhiimadiisuna ee aad u sareeyso.....
                </p>
                <Link href='/' className='text-amber-600'>Read More</Link>
            </div>
        </div>
    </>
  )
}

export default LatestArticles