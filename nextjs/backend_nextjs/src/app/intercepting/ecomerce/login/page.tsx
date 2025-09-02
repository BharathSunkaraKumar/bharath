import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col gap-3 justify-center h-screen w-screen items-center bg-gray-500'>
        <div>
        <input className='border p-3' type='text' placeholder='user id'/>

        </div>
        <div>
        <input className='border p-3' type='password' placeholder='password'/>

        </div>
        <div>
        <button className='bg-black text-white px-4 py-2 rounded-sm'>Login</button>
        </div>
    </div>
  )
}

export default Login