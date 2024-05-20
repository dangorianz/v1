import { Link } from 'gatsby'
import React from 'react'
import { IoLogoInstagram } from 'react-icons/io5'
import { RiGithubLine, RiLinkedinFill } from 'react-icons/ri'

export const SocialNetwork = () => {
  return (
    <div className="fixed hidden sm:block bottom-0 left-10 text-white font-bold social fade-in-info">
        <ul className="mb-5">
        <li className="mt-8 hover:text-teal-300 hover:-translate-y-2 duration-300 transition-all"><Link href="https://github.com/dangorianz" target="_blank"><RiGithubLine size={30}/></Link></li>
        <li className="mt-8 hover:text-teal-300 hover:-translate-y-2 duration-300 transition-all"><Link href="https://www.instagram.com/dan_gorianz/" target="_blank"><IoLogoInstagram size={30}/></Link></li>
        <li className="mt-8 hover:text-teal-300 hover:-translate-y-2 duration-300 transition-all"><Link href="https://www.linkedin.com/in/danielgorianz/" target="_blank"><RiLinkedinFill size={30}/></Link></li>
        </ul>
  </div>
  )
}
