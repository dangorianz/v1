import * as React from "react"
import { createRoot } from "react-dom/client";
import { Link } from "gatsby"
import 'animate.css'
import { StaticImage } from 'gatsby-plugin-image'

import { BouncingIcon, Logo, Mail, NavBar, SocialNetwork } from "../components"
import { useEffect } from "react"
import { FaReact, FaDocker, FaNodeJs } from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssFill, RiFirebaseFill, RiFlutterFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiCsharp } from "react-icons/si";


const IndexPage = () => {

  const renderIcons = () => {
    const container = document.getElementById('letter-container');
    const languages = [FaReact, RiNextjsLine, RiTailwindCssFill, BiLogoPostgresql, FaDocker, FaNodeJs, SiCsharp, RiFirebaseFill, RiFlutterFill];
    const numberOfIcons = 50;
    
    const iconWrapper = document.createElement('div');
    iconWrapper.className = 'letter';
    
    for (let i = 0; i < languages.length; i++) {
      const iconWrapper = document.createElement('div');
      iconWrapper.className = 'letter';
      const IconComponent = languages[i];
      const root = createRoot(iconWrapper);
      const initialLeft = Math.random() * window.innerWidth;
      const initialTop = Math.random() * window.innerHeight;

      // const root = createRoot(iconWrapper);
      root.render(<BouncingIcon IconComponent={IconComponent} initialLeft={initialLeft} initialTop={initialTop} />);

      container.appendChild(iconWrapper);
      
    }
    
    
    for (let i = 0; i < numberOfIcons; i++) {
      const iconWrapper = document.createElement('div');
      iconWrapper.className = 'letter';
      const IconComponent = languages[Math.floor(Math.random() * languages.length)];
      const initialLeft = Math.random() * window.innerWidth;
      const initialTop = Math.random() * window.innerHeight;

      const root = createRoot(iconWrapper);
      root.render(<BouncingIcon IconComponent={IconComponent} initialLeft={initialLeft} initialTop={initialTop} />);

      container.appendChild(iconWrapper);
    }
  };

  useEffect(() => {
    renderIcons()
  }, [])
  
  return (
    <main className="h-screen relative">
      <div id="letter-container"></div>
      <SocialNetwork/>
      <Mail/>
      <NavBar />
      {/* <div className="text-white min-h-screen lg:px-40 xl:px-72 lg:flex justify-between items-center"> */}
      <div className="text-white min-h-screen pt-40 sm:pt-0 sm:flex md:justify-between 2xl:px-72 items-center px-5 sm:px-32 md:40">
          <div className="flex flex-col justify-center items-center md:items-start pb-20">
            <p className='text-teal-300 md:hidden animate__animated animate__fadeInDown animate__slow'><Logo/></p>
            <p className="mt-5 text-5xl xl:text-6xl font-bold text-slate-300 animate__animated animate__fadeInDown animate__slow"><span className="text-teal-300">D</span>aniel <span className="text-teal-300">G</span>orianz</p>
            <p className='mt-5 text-3xl sm:text-4xl xl:text-4xl font-bold text-[#8892b0] animate__animated animate__fadeInDown animate__slow subtitle-animation'>FullStack Developer</p>
            <p className="mt-10 text-center md:text-start max-w-[500px] animate__animated animate__fadeInDown animate__slow description-animation">I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.</p>
            <Link className="w-fit animate__animated animate__fadeInDown animate__slow description-animation" download href='https://drive.google.com/file/d/1RNVOjaeZqsgsP0m6jCvx5R9LqmTw5WRp/view?usp=sharing' target='_blank'>
                <div className='border-teal-300 bg-[#111827] text-teal-300 mt-10 rounded border-2 px-5 py-2 transition-all duration-300 shadow-hover hover:-translate-x-1 hover:-translate-y-1'>
                  Resume
                </div>
            </Link>
          </div>
          <div className="hidden custom:block bg-red">
            <StaticImage src="../images/dalle2.webp" alt="logo 2" class="w-full max-w-xl mx-auto animate__animated" />
          </div>
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>DG / Daniel Gorianz</title>
