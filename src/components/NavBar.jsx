import React from 'react'
import { Link } from 'gatsby'

export const NavBar = () => {
  return (
    <nav className='flex justify-center fixed w-full top-0 left-0 sm:px-14 py-8'>
        <div className="flex items-center justify-center">
          <div className={` text-sm hidden sm:flex`}>
            <Link className='sm:mr-5 md:mr-12 text-white font-bold underline-animate' href=''><span className='text-2xl'>A</span>bout</Link>
            <Link className='sm:mr-5 md:mr-12 text-white font-bold underline-animate' href=''><span className='text-2xl'>W</span>ork</Link>
            <Link className='sm:mr-5 md:mr-12 text-white font-bold underline-animate' href=''><span className='text-2xl'>C</span>ontact</Link>
            <Link className='sm:mr-5 md:mr-12 text-white font-bold underline-animate' href=''><span className='text-2xl'>S</span>kills</Link>
            
          </div>
        </div>
    </nav>
  )
}
