import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'

const Navbar = () => {
    const[show, setShow] = useState(false)
    const menuRef = useRef()
    const btnRef = useRef()
    const [dark, setDark] = useState(false)

    useEffect(() => {
        const handleClickOutSide = (e) => {
            if(menuRef.current && !menuRef.current.contains(e.target) && btnRef.current && !btnRef.current.contains(e.target)) {
                setShow(false)
                // console.log(menuRef.current.contains(e.target))
            }
        }

        const saveMode = localStorage.getItem('theme')
        if(saveMode === 'dark') {
            setDark(true)
        }
        document.addEventListener('click', handleClickOutSide)

        // setTimeout((a, b) => {
        //     console.log(a+b)
        // }, 0, 1, 2, 13);

        return () => document.removeEventListener('click', handleClickOutSide)

    }, [])
    const toggleTheme = () => {
        setDark(!dark)
        localStorage.setItem('theme', !dark ? "dark" : 'lidht')
    }
    const showToggle = () => {
        setShow(prev => !prev)
    }
  return (
    <nav className={`nav ${dark ? 'dark' : ""}`}>
        <div className='logo'>
            <div style={{display: 'flex', gap: "10px", alignItems: "center"}}>
                <div>
                Nav Bar
            </div>
            <div style={{color: 'lightblue', fontSize: '20px'}}>
                <button onClick={toggleTheme} style={{borderRadius: "30px", padding: "5px", backgroundColor: "purple", color: "white", border: "none", fontSize: "13px", fontWeight: "bold", cursor: "pointer"}}>
                   {dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
                </button>
            </div>
            </div>
        </div>
        <ul className='nav-link'>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
        </ul>
        
        <div className='menu'>
            <button ref={btnRef} onClick={showToggle}>
                ☰
            </button>
            {
                show && (
                    <ul ref={menuRef} className='nav-link-mob'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Contact</li>
                    </ul>
                )
            }
            {/* <div>
                dark/lite
            </div> */}
        </div>
        
    </nav>
  )
}

export default Navbar