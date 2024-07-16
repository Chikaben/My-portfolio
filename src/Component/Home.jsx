import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#09172b]'>
      {/* container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <h3 className='text-red-900 sm:text-2xl'>Hi!</h3>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>I Am <span>Chika Ben,</span> </h2>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#5db9ee]'>A Front-End Developer.</h1>
        <p className='text-[#5db9ee] py-4 max-w-[700px]'>I enjoy building websites from small business sites to rich interactive pages.
          currently, I'm focused on building responsive frontend web applications.
          If you are into business seeking a web presence or an employer looking to hire
          , you can get intouch with me here.</p>
        <div>
          <button className='text-gray-300 group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-900 hover:border-red-900'>View Work 
            <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3' />
            </span>
            </button>
        </div>
      </div>


    </div>
  )
}

export default Home