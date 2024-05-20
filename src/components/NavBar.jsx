import React from 'react'
import { Link } from 'gatsby'

export const NavBar = () => {
  return (
    <nav className='hidden sm:flex justify-center fixed w-full top-0 left-0 sm:px-14 py-8'>
        <div className="flex items-center justify-center">
          <div className={`text-sm sm:flex`}>
            <Link className='sm:mr-5 md:mr-12 text-white font-bold underline-animate' href=''><span className='text-2xl'>A</span>bout <span className='text-teal-300 text-2xl'>.</span></Link>
            <Link className='sm:mr-5 md:mr-12 text-white font-bold underline-animate' href=''><span className='text-2xl'>W</span>ork <span className='text-teal-300 text-2xl'>.</span></Link>
            <Link className='sm:mr-5 md:mr-12 text-white font-bold underline-animate' href=''><span className='text-2xl'>C</span>ontact <span className='text-teal-300 text-2xl'>.</span></Link>
            <Link className='sm:mr-5 md:mr-12 text-white font-bold underline-animate' href=''><span className='text-2xl'>S</span>kills <span className='text-teal-300 text-2xl'>.</span></Link>
          </div>
        </div>
    </nav>
  )
}
