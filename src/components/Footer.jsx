import React from 'react'

export const Footer = () => {
  return (
    <footer className='w-full flex justify-center '>
        <div className='py-10 text-lg text-white font-semibold'>
            Daniel Gorianz © {new Date().getFullYear()}
        </div>
    </footer>
  )
}