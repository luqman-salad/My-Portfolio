import About from '@/components/About'
import ContactMe from '@/components/ContactMe'
import LatestArticles from '@/components/LatestArticles'
import Projects from '@/components/Projects'
import Tools from '@/components/Tools'
import React from 'react'

const page = () => {
  return (
    <div>
      <About />
      <Projects/>
      <LatestArticles/>
      <Tools/>
      <ContactMe/>
    </div>
  )
}

export default page