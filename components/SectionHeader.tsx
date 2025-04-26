import React from 'react'

const SectionHeader = ({title, Icon}) => {
  return (
    <div className='mt-15'>
      <div className='flex gap-5 items-center'>
        <Icon className='text-2xl text-[#0077b6]'/>
        <h1 className='text-2xl font-medium'>{title}</h1>
      </div>
      <div className='h-1 w-full mt-2 bg-gradient-to-r from-cyan-700 via-cyan-400/30 to-cyan-200/20 rounded-full'>
      </div>
    </div>
  )
}

export default SectionHeader