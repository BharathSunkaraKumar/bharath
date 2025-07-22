import React, { useContext } from 'react'
import ThemeContext from './context/ThemeContext'

export default function Theme() {
    const {toggle, isDark} = useContext(ThemeContext)
  return (
    <div 
    className='flex justify-center items-center h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-500 '>
        <button 
        className='bg-blue-700 text-white dark:bg-blue-600 dark:text-white px-4 py-2 rounded-md'
        onClick={toggle}
        >theme {isDark? 'dark' : 'light'}</button>
    </div>
  )
}

// --bg-color: #ffff;
    // --text-color: #0000;
    // --button: #007bff;
    // --button-text: #fffff;