import React from 'react'
import { Logo } from './Logo'
import { Link } from 'gatsby'

export const NavBar = () => {
  return (
    <nav className='flex w-full justify-between fixed top-0 left-0 sm:px-14 py-8'>
        <div className="container flex items-center justify-between">
            <Logo />
            <div className={` text-sm hidden sm:flex`}>
            <Link className='sm:mr-5 md:mr-12 text-white hover:text-red-400 transition-all font-bold' href=''><span className='text-light text-lg'>A</span>bout</Link>
            <Link className='sm:mr-5 md:mr-12 text-white hover:text-light transition-all font-bold' href=''><span className='text-light text-lg'>W</span>ork</Link>
            <Link className='sm:mr-5 md:mr-12 text-white hover:text-light transition-all font-bold' href=''><span className='text-light text-lg'>C</span>ontact</Link>
            <Link className='sm:mr-5 md:mr-12 text-white hover:text-light transition-all font-bold' href=''><span className='text-light text-lg'>S</span>kills</Link>
            
            <div className='border-teal-300 h-fit text-teal-300 rounded border-2 px-5 py-2 transition-all duration-300 shadow-hover hover:-translate-x-1 hover:-translate-y-1'>
              <Link download 
                  href='https://drive.google.com/file/d/1RNVOjaeZqsgsP0m6jCvx5R9LqmTw5WRp/view?usp=sharing' target='_blank'
                  className=''>
                  Resume
              </Link>
            </div>
        </div>
        </div>
    </nav>
  )
}
