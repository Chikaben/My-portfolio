import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='w-full  bg-[#09172b] flex justify-center items-center p-4  py-[130px]'>
            <form method='POST' action="https://getform.io/f/ajjeoeea" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8 text-gray-300'>
                    <p className='text-4xl font-bold inline border-b-4 border-red-900 '>Contact</p>
                    <p className='py-4 text-blue-200'>// Submit the form below or shoot me an email - egedechika1997@gmail.com</p>
                </div>
                <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
                <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Massage'></textarea>
                <button className='text-gray-300 border-2 hover:bg-red-900 hover:border-red-900 px-4 py-3 my-8 mx-auto flex items-center'>Let's Colaborate</button>
            </form>
        </div>
    )
}

export default Contact