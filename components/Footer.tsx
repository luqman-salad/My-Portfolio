import React from 'react'

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer className='my-10'>
      <div className='text-center border-t border-t-gray-300 py-5'>
        <p className='text-gray-600'>&copy; {year} Luqman Salad</p>
    </div>
    </footer>
    
  )
}

export default Footer;