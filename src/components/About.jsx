import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

export const About = () => {
  return (
    <div className="w-full flex justify-center">
        <div className="text-white px-5 min-h-[70vh] sm:pt-0 sm:flex sm:flex-col sm:px-28 lg:px-40 2xl:px-72 mb-20">
            <p className="mt-5 text-4xl sm:text-5xl md:text-5xl text-center font-bold text-slate-100 mb-24">About me<span className="text-teal-300">.</span></p>
            <div className="flex flex-col md:flex-row justify-center items-center">
                <div className='mb-20 md:mb-0 md:flex-[0.5_1_0%] lg:flex-[0.4_1_0%] w-[50%] md:w-full relative justify-center'>
                    <StaticImage className='rounded-full shadow-md shadow-teal-200 relative' alt='dan' src='../images/danFoto.jpeg'/>
                    <div className='w-full h-full bg-teal-600 rounded-full absolute top-0 left-0 opacity-55 hover:opacity-0 duration-200 ease-in'></div>
                </div>
                <div className='flex-1 md:pl-10 lg:pl-20'>
                    <p className='text-teal-200 text-4xl text-center md:text-start'>What's up?</p>
                    <br />
                    <p className='text-xl text-center md:text-start'> 
                        I'm passionate about development 👨‍💻, always learning something new and testing new technologies ready to implement them 🚀 <br/> Eager to belong to a company with innovative and technological development 💪.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
