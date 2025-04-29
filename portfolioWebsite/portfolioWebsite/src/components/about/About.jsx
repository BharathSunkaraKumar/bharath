import React from 'react'
import './About.css'
function About() {
  return (
    <div className='about-box wrapper'>
        <div className="about-container">
            <div className="about-left">
                <div className="about-left-hello">
                    <h1>Hey there,</h1>
                    <h2>I'm Bharath.</h2>
                </div>
                <div className="about-left-disc">
                    <p>
                    Hi, I'm Bharath Kumar Sunkara, a passionate and motivated learner currently pursuing my Master of Computer Applications (MCA) at RCR College. Alongside my studies, I have been working at Venous Geo Solutions for the past 2 years.

                    At present, I’m deeply focused on Frontend Web Development, sharpening my skills in HTML, CSS, JavaScript, React.js, React-routing, Formik and Redux Toolkit, . I enjoy creating responsive, user-friendly web interfaces and continuously strive to learn new technologies to build modern web applications.

                    I'm excited to grow as a developer and contribute to innovative tech solutions.
                    </p>
                </div>
            </div>
            <div className="about-right">
                <div className="about-img">
                    <img src='https://images.unsplash.com/photo-1457449940276-e8deed18bfff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About