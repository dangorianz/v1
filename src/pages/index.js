import * as React from "react"
import 'animate.css'

import { Experience, Logo, Mail, NavBar, SocialNetwork, Technologies } from "../components"

const IndexPage = () => {

  return (
    <main className="h-screen relative">
      <SocialNetwork/>
      <Mail/>
      <NavBar />
      <div className="text-white min-h-screen pt-40 sm:pt-0 sm:flex 2xl:px-72 items-cente justify-center px-5 sm:px-30 md:40">
          <div className="flex flex-col justify-center items-center pb-20">
            <div className='text-teal-300 animate__animated animate__fadeInDown animate__slow'><Logo/></div>
            <p className="mt-5 text-5xl sm:text-6xl md:text-7xl font-bold text-slate-100 animate__animated animate__fadeInDown animate__slow"><span className="text-teal-300">D</span>aniel <span className="text-teal-300">G</span>orianz</p>
            <p className='mt-5 text-3xl sm:text-4xl font-bold text-[#b7bdcf] animate__animated animate__fadeInDown animate__slow subtitle-animation'>FullStack Developer</p>
            <p className="mt-10 text-center max-w-[500px] animate__animated animate__fadeInDown animate__slow description-animation">I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.</p>
            <a className="w-fit animate__animated animate__fadeInDown animate__slow description-animation cursor-pointer" href='https://drive.google.com/file/d/1g11N2-cxs_61qLIGUrEeuq8PTEFIrXub/view?usp=share_link' target='_blank' rel="noreferrer">
                <div className='border-teal-300 bg-[#111827] text-teal-300 mt-10 rounded border-2 px-5 py-2 transition-all duration-300 shadow-hover hover:-translate-x-1 hover:-translate-y-1'>
                  Check Resume
                </div>
            </a>
          </div>
      </div>
      <Experience />
      <Technologies/>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>DG / Daniel Gorianz</title>
