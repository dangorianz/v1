import React from 'react'

import UtepsaLogo from '../images/svgComponents/utepsaLogo.svg'
import QalltaLogo from '../images/svgComponents/qalltaLogo.svg'
import GanatechLogo from '../images/svgComponents/ganatechLogo.svg'
import LoyaltyLogo from '../images/svgComponents/loyaltyclubsboLogo.svg'
 
const experienceList = [
    {id:'exp-1', img: QalltaLogo, company:'Qallta Software', description:'Desarrollo, mantenimiento e integración soluciones tecnológicas', job:'FullStack Developer', techStack: ['React Js', 'Node Js', '.Net 7', 'SQL Server', 'API REST', 'Material UI', 'Jest', 'Vitest', 'Docker', 'Next js']},
    {id:'exp-2', img: GanatechLogo, company:'Ganatech', description:'Mantenimiento y actualización de la billetera Yolo Pago tanto de la aplicación móvil como para la página Web.', job:'FullStack Developer', techStack: ['React Js', 'React Native', 'Node Js', 'Express Js', 'PostgreSQL', 'knex', 'API REST', 'Material UI', 'Jest', 'Azure function', 'Docker']},
    {id:'exp-3', img: LoyaltyLogo, company:'Loyalty Clubs', description:'Desarrollo, mantenimiento e integración soluciones tecnológicas', job:'Analista de Desarrollo', techStack: ['Flutter', 'Node Js', 'Express Js', 'Heroku', 'Sequelize', 'API REST', 'Cpanel', 'MySql', 'S3', 'Cloudinary']},
    {id:'exp-4', img: UtepsaLogo, company:'UTEPSA', description:'Desarrollo de aplicaciones Web.', job:'Desarrollador, Aux. de Sistemas', techStack: ['Flutter', 'Node Js', 'Express Js', 'Heroku', 'Sequelize', 'API REST', 'Cpanel', 'MySql', 'S3', 'Cloudinary']}
]

export const Experience = () => {

    return (
        <div className="w-full flex justify-center bg-fondo">
        <div className="text-white px-5 min-h-screen sm:pt-0 sm:flex sm:flex-col sm:px-30 md:40 2xl:px-72">
            <p className="mt-5 text-4xl sm:text-5xl md:text-5xl text-center font-bold text-slate-100 mb-16">Experience<span className="text-teal-300">.</span></p>
            <div className="flex flex-wrap justify-evenly">
                {experienceList.map(exp => (
                    <div key={exp.id} className="shadow-sm shadow-teal-900 mb-6 inline-block border-teal-100 border-opacity-10 sm:w-[45%] md:w-[48%] hover:scale-105 transition duration-300 break-words rounded-lg p-4 font-sans text-sm font-normal text-blue-gray-500 focus:outline-none">
                        <div className="mb-2 flex flex-col items-start justify-center gap-3 left-0">
                            <div className="text-xl font-medium flex justify-center items-center">
                                <exp.img className="w-[50px] h-[50px] rounded-full"/> <span className='ml-5'> {exp.company}</span>
                            </div>
                            <div className="center relative inline-block select-none whitespace-nowrap rounded-md bg-teal-300 py-1 px-2 align-baseline font-sans text-xs font-medium capitalize leading-none tracking-wide text-black">
                                <div className="mt-px">{exp.job}</div>
                            </div>
                        </div>
                        <p className="block font-sans text-sm font-normal leading-normal text-gray-400 antialiased">
                            {exp.description}
                        </p>
                        <div className="mt-5 flex flex-wrap">
                            {exp.techStack.map(stack => (
                                <div key={`${exp.id}-${stack}`} className="circle px-2 py-1 mx-1 border mb-2 inline-block border-teal-100 border-opacity-10 rounded-md">
                                    {stack}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    )
}
