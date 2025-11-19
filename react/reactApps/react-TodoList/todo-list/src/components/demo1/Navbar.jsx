import React from 'react'
import { FaReact } from "react-icons/fa6";
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='flex justify-between h-12 items-center p-3 bg-blue-800 text-white shadow-zinc-100 shadow-sm sticky top-0'>
        <div className='flex items-center'>
            <p className='inline mr-1.5 font-bold text-xl'>React Dev</p>
            <div>
              <FaReact className='font-bold text-3xl text-blue-900 bg-white rounded-full inline p-0.5'/>
            </div>
        </div>
        <div>
            <ul className='flex gap-x-6'>
                <NavLink to='/' className={({isActive}) => isActive ? 'bg-black px-2 pt-0.5 pb-1.5 rounded-lg text-white' : 'px-2 pt-0.5 pb-1.5 rounded-lg text-white hover:bg-blue-900'}>home</NavLink>
                <NavLink to='jobs' className={({isActive}) => isActive ? 'bg-black px-2 pt-0.5 pb-1.5 rounded-lg text-white' : 'px-2 pt-0.5 pb-1.5 rounded-lg text-white hover:bg-blue-900'}>Jobs</NavLink>
                <NavLink to='/about' className={({isActive}) => isActive ? 'bg-black px-2 pt-0.5 pb-1.5 rounded-lg text-white' : 'px-2 pt-0.5 pb-1.5 rounded-lg text-white hover:bg-blue-900'}>about</NavLink>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar