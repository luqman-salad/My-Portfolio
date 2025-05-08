import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';

const Project = ({MiniTitle, Title, Tools, ProjectPic, siteLink, githubRepoLink}) => {

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
    <div className=' mt-5 border border-gray-300 rounded-2xl overflow-hidden bg-white shadow'>
            <div className='p-4'>
                <h3 className='text-md font-medium'>{MiniTitle}</h3>
                <h1 className='text-2xl text-cyan-800 font-bold'>{Title}</h1>
                <div className='my-5'>
                  <Image
                    src={ProjectPic}
                    alt='nextjsweb'
                    width={300}
                    height={200}
                    className='w-full h-[200px] rounded-lg'
                  />
                </div>
                <div className='flex flex-wrap gap-3 text-3xl justify-center'>
                  {Tools.map((tool, index) => (
                    <p className={`${styles[index]}`} key={index}>{tool}</p>
                  ))}
                </div>
                <div className='flex gap-x-1 justify-center'>
                  <Link 
                    href={siteLink}
                    className='w-full justify-center bg-cyan-900 border border-cyan-900 text-white px-5 py-2 flex rounded-lg cursor-pointer mt-4 hover:bg-white hover:text-black hover:border hover:border-gray-300 transition'
                  >Live Site <FiArrowUpRight/>
                  </Link>
                  <Link 
                    href={githubRepoLink}
                    className=' w-full justify-center hover:bg-cyan-900 border-gray-300 border hover:text-white  flex items-center rounded-lg cursor-pointer mt-4 bg-white  hover:border hover:border-gray-300 transition gap-x-1'
                  ><FaGithub/>Github
                  </Link>

                </div>
                
            </div>
            
    </div>
  )
}

export default Project;