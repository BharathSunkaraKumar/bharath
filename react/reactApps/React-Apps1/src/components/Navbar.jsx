import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
    const[show, setShow] = useState(false)
    const showToggle = () => {
        setShow(prev => !prev)
    }
  return (
    <nav className='nav'>
        <div className='logo'>
            My Nav
        </div>
        <ul className='nav-link'>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
        </ul>
        
        <div className='menu'>
            <div onClick={showToggle}>
                menu
            </div>
            {
                show && (
                    <ul className='nav-link-mob'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Contact</li>
                    </ul>
                )
            }
            <div>
                dark/lite
            </div>
        </div>
        
    </nav>
  )
}

export default Navbar