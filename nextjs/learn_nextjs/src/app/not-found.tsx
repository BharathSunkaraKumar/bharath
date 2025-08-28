import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-black flex-col gap-2'>
        <h1 className='font-bold text-4xl text-red-600'>404 - Page Not Found</h1>
        <p className='font-mono text-gray-500'>The page you're looking for does not exist</p>
        <Link href='/' className='text-blue-400 hover:text-blue-600 transition-colors'>Click Here To Home</Link>
    </div>
  )
}

export default NotFound