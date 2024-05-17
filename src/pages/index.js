import * as React from "react"
import { Mail, NavBar, SocialNetwork } from "../components"
import 'animate.css'
const IndexPage = () => {
  return (
    <main className="h-screen">
      <SocialNetwork/>
      <Mail/>
      <NavBar />
      <div className="text-white lg:px-40 xl:px-72">
          <div className="min-h-screen flex flex-col justify-center pb-20">
            <p className={` text-teal-300 animate__animated animate__fadeInDown animate__slow`}>Hola, Mi nombre es</p>
            <p className={`mt-5 text-4xl sm:text-6xl xl:text-7xl font-bold text-slate-300 animate__animated animate__fadeInDown animate__slow`}>Daniel Gorianz.</p>
            <p className={` mt-5 text-3xl sm:text-5xl xl:text-6xl font-bold text-[#8892b0] animate__animated animate__fadeInDown animate__slow subtitle-animation`}>Soy FullStack Developer</p>
            <p className="mt-14 max-w-[500px] animate__animated animate__fadeInDown animate__slow description-animation">I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.</p>

          </div>
        </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>DG / Daniel Gorianz</title>
