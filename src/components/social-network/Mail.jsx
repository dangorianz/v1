
import React from 'react'
import { Link } from 'gatsby'

export const Mail = () => {
  return (
    <div className="fixed bottom-0 right-[-35px] text-white social fade-in-info hover:text-teal-300 transition-all">
        <p className={`rotate-90 mb-28 cursor-pointer`}><Link href={'mailto:dangorianz@gmail.com'}>dangorianz@gmail.com</Link></p>
  </div>
  )
}
