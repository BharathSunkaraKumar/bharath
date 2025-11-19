import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/demo1/Navbar'

const MainLayout = () => {
  return (
    <div className='bg-gray-200 h-screen'>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default MainLayout