import * as React from "react"
import { Link } from "gatsby"
import 'animate.css'
import { StaticImage } from 'gatsby-plugin-image'

import { Mail, NavBar, SocialNetwork } from "../components"
import { useEffect } from "react"

const IndexPage = () => {

  const prueba = () => {
      const container = document.getElementById('letter-container');
      const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const numberOfLetters = 50;
  
      for (let i = 0; i < numberOfLetters; i++) {
          const letter = document.createElement('div');
          letter.className = 'letter';
          letter.innerText = letters[Math.floor(Math.random() * letters.length)];
          letter.style.left = `${Math.random() * 100}vw`;
          letter.style.top = `${Math.random() * 100}vh`;
          letter.style.animationDuration = `${Math.random() * 5 + 5}s`;
          letter.style.fontSize = `${Math.random() * 3 + 1}rem`;
  
          container.appendChild(letter);
      }

  }

  useEffect(() => {
    prueba()
  }, [])
  
  return (
    <main className="h-screen relative">
      <div className="letters" id="letter-container"></div>
      <SocialNetwork/>
      <Mail/>
      <NavBar />
      <div className="text-white min-h-screen lg:px-40 xl:px-72 lg:flex justify-between items-center">
          <div className=" flex flex-col justify-center pb-20">
            <p className='flex items-center text-teal-300 animate__animated animate__fadeInDown animate__slow'>Hola, Mi nombre es</p>
            <p className="mt-5 text-3xl sm:text-5xl xl:text-6xl font-bold text-slate-300 animate__animated animate__fadeInDown animate__slow"><span className="text-teal-300">D</span>aniel <span className="text-teal-300">G</span>orianz</p>
            {/* <p className='mt-5 text-4xl sm:text-6xl xl:text-7xl font-bold text-slate-300 animate__animated animate__fadeInDown animate__slow'><span className="">D</span>aniel Gorianz </p> */}
            <p className={` mt-5 text-3xl sm:text-4xl xl:text-4xl font-bold text-[#8892b0] animate__animated animate__fadeInDown animate__slow subtitle-animation`}>FullStack Developer</p>
            <p className="mt-10 max-w-[500px] animate__animated animate__fadeInDown animate__slow description-animation">I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.</p>
            <Link className="w-fit animate__animated animate__fadeInDown animate__slow description-animation" download href='https://drive.google.com/file/d/1RNVOjaeZqsgsP0m6jCvx5R9LqmTw5WRp/view?usp=sharing' target='_blank'>
                <div className='border-teal-300  text-teal-300 mt-10 rounded border-2 px-5 py-2 transition-all duration-300 shadow-hover hover:-translate-x-1 hover:-translate-y-1'>
                  Resume
                </div>
            </Link>
          </div>
          <StaticImage src="../images/dalle2.webp" alt="logo 2" class="w-[650px] animate__animated " />
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>DG / Daniel Gorianz</title>
