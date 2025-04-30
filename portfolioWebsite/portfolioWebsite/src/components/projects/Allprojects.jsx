import React, { useState } from 'react'
import projcets from '../../data/data.jsx'
import './Allprojects.css'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
function Allprojects() {
  const [data, setData] = useState(projcets)
  return (
    <div className='allProjects wrapper'>
        <div className="title">
            <h1>Projects</h1>
            <div className='bar'></div>
        </div>
        <hr/>
        <div className="projects-container">
          {
            data.map((project) => {
              return <div className='card' key={project.id}>
                          <div className="card-image">
                            <img src={project.image} width='100px'/>
                          </div>
                          <div className="card-title">
                            <h4>{project.title}</h4>
                          </div>
                          <div className="card-tech">
                            {
                              project.tech.map((e, i) => {
                                return <span key={i}>{e}</span>
                              })
                            }
                          </div>

                          <div className="links-ul">
                            <ul className="card-links">
                              {console.log(project.navLinks)}
                              {
                                project.navLinks.map((link, i) => {
                                  console.log(link)
                                  return <li className='li-link' key={i}>
                                    <p>{link}</p>
                                    <span>{link !== 'view' && <OpenInNewIcon/>}</span>
                                  </li>
                                })
                              }
                            </ul>
                          </div>
                          
                     </div>
            })
          }
        </div>
    </div>
  )
}

export default Allprojects