import React from 'react'

const IconWrapper = ({Icon}) => {
  return (
    <div className='text-cyan-700 py-2 px-2 rounded-full border border-gray-200 cursor-pointer hover:bg-cyan-950 hover:text-white transition-all duration-200 hover:shadow-lg hover:scale-105 hover:-translate-y-1'>
        <Icon size={20} strokeWidth={2}/>
    </div>
  )
}

export default IconWrapper