import React from 'react'
import IconWrapper from './IconWrapper'
import { FaFacebookF,FaLinkedin,FaXTwitter,FaGithub,FaBloggerB } from "react-icons/fa6";
import Link from 'next/link';

const LeftSidebar = () => {
  return (
    <div className='fixed w-[270px] z-50'>
        <div className='max-h-[450] p-2 mr-10 overflow-scroll'>
            <h1 className='text-2xl'>Table of Content</h1>
            <h3>Why do we use it?Why do we use it?Why do we use it?</h3>
            <h3>Why do we use it?</h3>
            <h3>Why do we use it?</h3>
            <h3>Why do we use it?</h3>
            <h3>Why do we use it?</h3>
            <h3>Why do we use it?</h3>
            <h3>Why do we use it?</h3>
            <h3>Why do we use it?</h3>
            <h3>Why do we use it?</h3>
            <h3>Why do we use it?</h3>
            <h3>Why do we use it?</h3>
            <h3>Why do we use it?</h3>
            <h3>Why do we use it?</h3>
            <h3>Why do we use it?</h3>
            <h3>Why do we use it?</h3>
            <h3>Why do we use it?</h3>
            <h3>Why do we use it?</h3>
            <h3>Why do we use it?</h3>
            <h3>Why do we use it?</h3>
        </div>
        <div className='mt-5'>
            <h1 className='text-2xl'>Share:</h1>
            <div className='mt-5 flex gap-3 text-lg text-gray-600 ml-4'>
                <Link href='/'><FaFacebookF/></Link>
                <Link href='/'><FaLinkedin/></Link>
                <Link href='/'><FaXTwitter/></Link>
                
            </div>
            
            
        </div>
    </div>
  )
}

export default LeftSidebar