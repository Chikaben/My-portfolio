import React from 'react'

import Logo1 from "../Assets/p-1-removebg-preview (6).png"
import Logo2 from "../Assets/p-2-removebg-preview (1).png"
import Logo3 from "../Assets/P-3-removebg-preview (1).png"
import Logo4 from "../Assets/p-4-removebg-preview.png"
import Logo5 from "../Assets/p-5-removebg-preview (1).png"
import Logo6 from "../Assets/p-6-removebg-preview.png"
import Logo7 from "../Assets/p-7-removebg-preview.png"
import Logo8 from "../Assets/p-8-removebg-preview.png"




const Skills = () => {
    return (
        <div name='skills' className='w-full bg-[#09172b] text-gray-300 '>
            {/* container */}
            <div className='max-w-[1000px] mx-auto flex flex-col p-4 justify-center w-full h-full py-[130px]'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-red-900'>Skills</p>
                    <p className='py-4 text-blue-200'>//These are the technologies I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Logo1} alt="HTML icon" />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Logo2} alt="CSS icon" />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Logo3} alt="Javascript icon" />
                        <p className='my-4'>JAVASCRIPT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Logo4} alt="React icon" />
                        <p className='my-4'>REACT JS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Logo5} alt="Github icon" />
                        <p className='my-4'>GITHUB</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Logo6} alt="Node icon" />
                        <p className='my-4'>NODE JS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Logo7} alt="Tailwind icon" />
                        <p className='my-4'>TAILWIND</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Logo8} alt="Bootswap icon" />
                        <p className='my-4'>BOOTSWAP</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills