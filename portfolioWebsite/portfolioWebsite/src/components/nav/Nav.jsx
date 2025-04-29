import React, { useEffect, useState } from 'react'
import './nav.css'
import logo from './logo.png'
import AdsClickIcon from '@mui/icons-material/AdsClick';
import { Link, Outlet } from 'react-router-dom';
import LandingPage from '../landing/LandingPage';

function Nav() {
  const [animationClass, setAnimationClass] = useState('');
  const [time, setTime] = useState(new Date());


  const handleMouseEnter = () => {
    setAnimationClass('expand'); // Expand animation
    
  };

  const handleMouseLeave = () => {
    setAnimationClass('shrink'); // Shrink animation
    
  };

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(scrollPercent);
    };
    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  useEffect(() => {
    const interval = setInterval(()=>{
      setTime(new Date())
    }, 1000);
    return () => clearInterval(interval);
  },[])

  const formaTime = (date) => {
    return date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
  }

  const radius = 12;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div>
      <div className="nav-container wrapper">
        <div className="nav-items">
          <div className="nav-item">
            <div className="main-logo">
              
              <img src={logo}/>
            </div>
          </div>
          <div className="nav-item">
            <div className="dynamic-container">
            <div className={`dynamic-nav-bar ${animationClass} `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
                <div className="logo-left">
                  <AdsClickIcon fontSize='large'></AdsClickIcon>
                  {/* <img src={touch} alt='let-logo'/> */}
                  {/* <img src='touch.webp' alt='left-logo'/> */}
                </div>
                <ul className="nav-links">
                  <li><a href='./'>work</a></li>
                  <li><Link to='/about'>about</Link></li>
                  <li><a href='/projects'>projects</a></li>
                </ul>
                <div className="logo-right">
                  <div className="scroll-ring-container">
                    <svg width="30" height="30">
                      {/* Background ring (gray) */}
                      <circle
                        className="ring-bg"
                        stroke="gray"
                        strokeWidth="4"
                        fill="transparent"
                        r={radius}
                        cx="15"
                        cy="15"
                      />
                      {/* Foreground ring (white progress) */}
                      <circle
                        className="ring-progress"
                        stroke="darkgray"
                        strokeWidth="4"
                        fill="transparent"
                        r={radius}
                        cx="15"
                        cy="15"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                      />
                    </svg>
                </div>
              </div>
            </div>
            </div>
          </div>
          <div className="nav-item">
            <p className="time">
            {formaTime(time)}
            </p>
          </div>
        </div>
      </div>
        
        <div className="scroll">
          <Outlet/>
        </div>
    </div>
  )
}

export default Nav