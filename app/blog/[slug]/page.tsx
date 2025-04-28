import React from 'react'

const page = async ({params}: {params: Promise<{slug: string}>})  => {
    const {slug} = await params;
    
  return (
    <div className='mt-25'>
      <h1>Hello World</h1>
    </div>
  )
}

export default page;