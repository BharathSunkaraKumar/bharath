import React from 'react'

const Hero = () => {
  return (
    <section className='bg-blue-800 h-56'>
        <div className='flex flex-col justify-center items-center h-full p-6 text-white gap-2'>
            <div>
                <h1 className='text-xl font-bold md:text-4xl'>This is React Hero component</h1>
            </div>
            <div>
                <p className='text-sm text-gray-100 md:text-lg'>React components for pages</p>
            </div>
        </div>
    </section>
  )
}

export default Hero