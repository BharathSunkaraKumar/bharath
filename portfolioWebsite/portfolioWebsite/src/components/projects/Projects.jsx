import React, { useState } from 'react'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import './Project.css'
import img1  from './assets/Futuristic Virtual Reality Experience.jpeg';
import img2  from './assets/Futuristic VR Scene.jpeg';
import img3  from './assets/Virtual Reality Encounter.jpeg';
function Projects() {
  const[date, setDate] = useState([
    {
      title: 'project1',
      tag: 'tag name',
      id: '1',
      img: img1,
      tech: ['react', 'redux', 'react-routing'],
      discription:' Lorem ipsum dolor, sit amet consectetur adipisicing'
    },
    {
      title: 'project2',
      tag: 'tag name',
      id: '2',
      img: img2,
      tech: ['react', 'redux', 'react-routing'],
      discription:' Lorem ipsum dolor, sit amet consectetur adipisicing'
    },
    {
      title: 'project3',
      tag: 'tag name',
      id: '3',
      img: img3,
      tech: ['react', 'redux', 'react-routing'],
      discription:' Lorem ipsum dolor, sit amet consectetur adipisicing'
    }
  ])
  return (
    <>
      <section className='project-cards'>
        <div className="projects-heading">
          <p>Featured Projects</p>
        </div>
        {
            date.map((e) => {
              return <div className='project-card' key={e.id}>
                  <div className="card-top">
                    <div className="card-top-title">
                      <p>{e.id} | {e.title}</p>
                    </div>
                    <div className="card-top-logo">
                      <AccountBalanceIcon/>
                    </div>
                  </div>
                  <div className="card-bottom">
                    <div className="card-bottom-img">
                      <img src={e.img} alt='img' />
                    </div>
                    <div className="card-bottom-details">
                      <div className="card-bottom-tag">
                        <p>{e.tag}</p>
                      </div>
                      <div className="card-bottom-discription">
                        <p>{e.discription}</p>
                      </div>
                    </div>
                  </div>
              </div>
            })
        }
      </section>
      <div className="footer">
        
      </div>
    </>
  )
}

export default Projects