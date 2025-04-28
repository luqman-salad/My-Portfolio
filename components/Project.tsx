import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";
import Link from 'next/link';
import Image from 'next/image';

const Project = ({MiniTitle, Title, Tools, ProjectPic}) => {

    const styles = [
        'hover:text-[#E34F26] transition',
        'hover:text-[#1572B6] transition',
        'hover:text-[#61DAFB] transition',
        'hover:text-[#339933] transition',
        'hover:text-[#38BDF8] transition',
        'hover:text-[#47A248] transition',
        'hover:text-[#000000] transition',
    ]


  return (
    <div className='mt-5 sm:flex border border-gray-300 rounded-2xl overflow-hidden'>
            <div className='basis-1/2 shrink-0 py-5 px-5 sm:pl-10'>
                <h3 className='text-md font-medium'>{MiniTitle}</h3>
                <h1 className='text-2xl text-cyan-800 font-bold'>{Title}</h1>
                <hr className='my-5 text-gray-300'/>
                <div className='flex flex-wrap gap-3 text-3xl justify-center'>
                  {Tools.map((tool, index) => (
                    <p className={`${styles[index]}`} key={index}>{tool}</p>
                  ))}
                </div>
                <Link 
                  href='/'
                  className='justify-center bg-cyan-900 border border-cyan-900 text-white px-5 py-2 flex rounded-lg cursor-pointer mt-4 hover:bg-white hover:text-black hover:border hover:border-gray-300 transition'
                >Visit Live Site <FiArrowUpRight/>
                </Link>
            </div>
            <div className='relative basis-1/2 shrink-0'>
              <Image
                src={ProjectPic}
                alt='nextjsweb'
                width={710}
                height={500}
                className='sm:absolute sm:bottom-[-10] sm:right-[-50]'
              />
            </div>
    </div>
  )
}

export default Project