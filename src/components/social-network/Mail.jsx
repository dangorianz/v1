
import React from 'react'
import { Link } from 'gatsby'

export const Mail = () => {
  return (
    <div className="fixed top-0 right-[-35px] text-white email fade-in-email hover:text-teal-300 transition-all">
        <p className={`rotate-90 mt-24 cursor-pointer`}><Link href={'mailto:dangorianz@gmail.com'}>dangorianz@gmail.com</Link></p>
  </div>
  )
}
