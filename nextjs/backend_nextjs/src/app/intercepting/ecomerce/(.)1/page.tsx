import { X } from 'lucide-react'
import React from 'react'

const InterceptedProductOne = () => {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-30'>
        <div className=' bg-white p-8 rounded-lg shadow-lg text-center relative'>
            <button className='absolute top-4 right-4 text-gray-500 hover:text-gray-800'>
                <X size={24}/>
            </button>
            <h1 className='text-3xl mb-4'>mac book m1</h1>
            <img src="https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/thumbnail.webp" alt="InterceptedProductOne" className='w-[40rem] mx-auto rounded-lg' />
            <p className='text-2xl mt-4'>
                $1000
            </p>
        </div>
    </div>
  )
}

export default InterceptedProductOne