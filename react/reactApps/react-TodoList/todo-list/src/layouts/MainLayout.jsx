import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/demo1/Navbar'
import {ToastContainer} from 'react-toastify'

const MainLayout = () => {
  return (
    <div className='bg-gray-200 h-screen'>
        <Navbar/>
        <Outlet/>
        <ToastContainer/>
    </div>
  )
}

export default MainLayout