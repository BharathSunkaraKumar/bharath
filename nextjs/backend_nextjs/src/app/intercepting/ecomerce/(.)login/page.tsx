import React from 'react'

const InterceptedLogin = () => {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-30 container mx-auto'>
        <div className=' bg-white p-8 rounded-lg shadow-lg text-center relative'>
        <div className='flex flex-col gap-3 justify-center h-screen w-screen items-center bg-blue-500'>
        <div>
        <input className='border p-3' type='text' placeholder='user id'/>

        </div>
        <div>
        <input className='border p-3' type='text' placeholder='password'/>

        </div>
        <div>
        <button className='bg-black text-white px-4 py-2 rounded-sm'>Login</button>
        </div>
    </div>
        </div>
    </div>
  )
}

export default InterceptedLogin