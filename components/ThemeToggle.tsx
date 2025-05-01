'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null // prevents hydration mismatch

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className='bg-white text-cyan-700 py-2 px-2 rounded-full border border-gray-200 cursor-pointer hover:bg-cyan-800 hover:text-white transition-all duration-200 hover:shadow-lg hover:scale-105 hover:-translate-y-1'
    >
      {theme === 'dark' ? <FaSun/> : <FaMoon/>}
    </button>
  )
}
