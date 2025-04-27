import React from 'react'
import './Landing.css'
import profile from './profile.jpeg'
import Projects from '../projects/Projects.jsx'
function LandingPage() {
  return (
    <>
        <div className='landing-container wrapper'>
            <div className="linding-items ">
                <div className="titles">
                    <div className="titile">
                        <h1>bhatath kumar sunkara</h1>
                    </div>
                    <div className="tag">
                        <p>Designing through a different lens.</p>
                    </div>
                </div>
            </div>
            <div className="linding-box">
                <div className="profile-img">
                    <img src={profile} alt="profile" />
                </div>
                <div className="profile-info">
                    <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, hic!</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam unde illum eveniet, ea dolor tempore minus, at quaerat id sapiente fugiat hic, blanditiis facilis consequatur reprehenderit sunt amet atque in? Voluptatibus, praesentium pariatur! Laborum distinctio, id totam ipsum adipisci atque!</p>
                </div>
            </div>
        </div>
        <div className="work wrapper">
            <Projects/>
        </div>
    </>
  )
}

export default LandingPage