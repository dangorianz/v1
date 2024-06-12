import React from 'react'
import { Link } from 'gatsby'

export const NavBar = () => {
  return (
    <nav className='hidden sm:flex justify-center fixed w-full top-0 left-0 sm:px-14 z-10 '>
      <div className='text-sm sm:flex backdrop-blur-[5px] py-8 w-full flex justify-center'>
        <Link className='mx-6 text-white font-bold underline-animate' to='/'><span className='text-2xl'>E</span>xperience <span className='text-teal-300 text-2xl'>.</span></Link>
        <Link className='mx-6 text-white font-bold underline-animate' to='/'><span className='text-2xl'>T</span>echnologies <span className='text-teal-300 text-2xl'>.</span></Link>
        <Link className='mx-6 text-white font-bold underline-animate' to='/'><span className='text-2xl'>P</span>royects <span className='text-teal-300 text-2xl'>.</span></Link>
        <Link className='mx-6 text-white font-bold underline-animate' to='/'><span className='text-2xl'>C</span>ontact <span className='text-teal-300 text-2xl'>.</span></Link>
      </div>
    </nav>
  )
}
