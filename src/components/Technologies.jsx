import React from 'react'
 
export const Technologies = () => {
    
    const skills = ['nodejs', 'bootstrap', 'tailwind', 'docker', 'dotnet', 'express', 
        'firebase', 'flutter', 'gatsby', 'git', 'heroku', 
        'html', 'css', 'js', 'ts', 'react', 'redis', 'redux', 'jest', 'vitest', 'sequelize', 'mongodb', 'postgres', 'prisma',  'netlify', 'nextjs']
    return (
        <div className="w-full flex justify-center">
            <div className="text-white px-5 min-h-[70vh] sm:pt-0 sm:flex sm:flex-col sm:px-30 md:px-24 lg:px-40 2xl:px-72">
                <p className="mt-5 text-4xl sm:text-5xl md:text-5xl text-center font-bold text-slate-100 mb-16">Technologies<span className="text-teal-300">.</span></p>
                <div className="flex flex-wrap justify-center">
                    {skills.map( skill =>(
                        <div className='min-w-3 md:min-w-16 m-2 md:m-4 hover:scale-110 ease-linear duration-100' key={skill}>
                            <img className='w-full' src={`https://skillicons.dev/icons?i=${skill}`} alt={skill} />
                        </div>
                    ))}
                </div>
            </div>
    </div>
    )
}