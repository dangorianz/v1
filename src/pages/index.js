import * as React from "react"
import { Link } from "gatsby"
import 'animate.css'

import { Logo, Mail, NavBar, SocialNetwork } from "../components"

const IndexPage = () => {

  
  return (
    <main className="h-screen relative">
      <div id="letter-container"></div>
      <SocialNetwork/>
      <Mail/>
      <NavBar />
      <div className="text-white min-h-screen pt-40 sm:pt-0 sm:flex 2xl:px-72 items-cente justify-center px-5 sm:px-30 md:40">
          <div className="flex flex-col justify-center items-center pb-20">
            <p className='text-teal-300 animate__animated animate__fadeInDown animate__slow'><Logo/></p>
            <p className="mt-5 text-5xl sm:text-6xl md:text-7xl font-bold text-slate-300 animate__animated animate__fadeInDown animate__slow"><span className="text-teal-300">D</span>aniel <span className="text-teal-300">G</span>orianz</p>
            <p className='mt-5 text-3xl sm:text-4xl font-bold text-[#8892b0] animate__animated animate__fadeInDown animate__slow subtitle-animation'>FullStack Developer</p>
            <p className="mt-10 text-center max-w-[500px] animate__animated animate__fadeInDown animate__slow description-animation">I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.</p>
            <Link className="w-fit animate__animated animate__fadeInDown animate__slow description-animation" to='https://drive.google.com/file/d/1RNVOjaeZqsgsP0m6jCvx5R9LqmTw5WRp/view?usp=sharing' target='_blank'>
                <div className='border-teal-300 bg-[#111827] text-teal-300 mt-10 rounded border-2 px-5 py-2 transition-all duration-300 shadow-hover hover:-translate-x-1 hover:-translate-y-1'>
                  Check Resume
                </div>
            </Link>
          </div>
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>DG / Daniel Gorianz</title>
