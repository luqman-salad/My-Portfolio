import Image from 'next/image'
import React from 'react'
import IconWrapper from './IconWrapper'
import { FaFacebookF,FaLinkedin,FaXTwitter,FaGithub,FaBloggerB } from "react-icons/fa6";
import Link from 'next/link';


const About = () => {
  return (
    <div id='about' className='relative mt-25 flex flex-col justify-center items-center max-w-lg px-3 m-auto'>
        <Image 
            src='/profilePic.jpg' alt='profilePic'
            width={100}
            height={100}
            className='rounded-full ring-3 ring-[#0077b6] shadow-lg shadow-[#016094] w-fit'
        />

       
        {/* Online Status */}
        <div className='relative flex flex-row-reverse gap-1 bg-cyan-950 py-1 px-3 rounded-md text-white items-center'>
          <p>Available for new projects</p>
          <div className="relative inline-block">
            <span className=" bottom-0 right-0 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 border border-green-500"></span>
            </span>
          </div>
        </div>
        
        <h1 className='mt-5 text-3xl font-medium'>Luqman Salad</h1>
        <p className='mt-4 text-center text-gray-600'>
        I'm a software engineer and content creator focused on AI and tech. I build tools, write tutorials, and share insights to make technology more accessible and inspiring for others.
        </p>
        <div className='mt-5 flex gap-3'>
            <Link href='https://www.linkedin.com/in/luqman-salad'><IconWrapper Icon={FaLinkedin}/></Link>
            <Link href='https://x.com/luqman_salad'><IconWrapper Icon={FaXTwitter}/></Link>
            <Link href='https://www.facebook.com/luqmansalad00/'><IconWrapper Icon={FaFacebookF}/></Link>
            <Link href='https://github.com/luqman-salad'><IconWrapper Icon={FaGithub}/></Link>
            <Link href='/blog'><IconWrapper Icon={FaBloggerB}/></Link>
            
        </div>
        
    </div>
  )
}

export default About