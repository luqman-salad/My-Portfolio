import React from 'react'

const page = async ({params}: {params: Promise<{slug: string}>})  => {
    const {slug} = await params
  return (
    <div className='mt-25'>
        Blog Post: {slug}
    </div>
  )
}

export default page