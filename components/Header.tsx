"use client"

import Link from 'next/link'
import React from 'react'
import IconWrapper from './IconWrapper'
import { Moon } from 'lucide-react'
const Header = () => {
  return (
    <div className='max-w-6xl m-auto sm:flex justify-around items-center py-3'>
    <div>
        <IconWrapper Icon={Moon}/>
    </div>
    <div className='hidden sm:flex justify-center gap-x-10 w-lg py-3 font-medium border border-gray-300 rounded-full bg-white shadow'>
        <Link href='/' className='hover:text-cyan-700 transition'>About</Link>
        <Link href='/' className='hover:text-cyan-700 transition'>Blog</Link>
        <Link href='/' className='hover:text-cyan-700 transition'>Contact</Link>
    </div>
    <div>
    </div>
    </div>
        
    
  )
}

export default Header