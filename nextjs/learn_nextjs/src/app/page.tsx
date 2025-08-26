import Link from 'next/link';
import React from 'react'

const Home = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-6'>
      <h1 className='text-5xl font-bold text-gray-800 mb-6'>Welcome to the dashboard app</h1>
      <p className='text-lg text-gray-600 mb-8'>Manage your tasks, track analytics, and stay organized with our powerful dashboard</p>
      <Link
      href='/dashboard'
      className='inline-flex items-center justify-center text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 bg-blue-600 transition-colors shadow-lg hover:shadow-xl'
      >
      Go To Dashboard
      </Link>
    </div>
  )
}

export default Home;