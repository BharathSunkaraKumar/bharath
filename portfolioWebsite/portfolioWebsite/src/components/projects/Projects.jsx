import React, { useState } from 'react'
import './Project.css'
function Projects() {
  const[date, setDate] = useState([
    {
      title: 'project1',
      id: '1',
      discription: 'This project based on redux tool kit',
      tech: ['react', 'redux', 'react-routing']
    },
    {
      title: 'project2',
      id: '2',
      discription: 'This project based on redux tool kit',
      tech: ['react', 'redux', 'react-routing']
    },
    {
      title: 'project3',
      id: '3',
      discription: 'This project based on redux tool kit',
      tech: ['react', 'redux', 'react-routing']
    }
  ])
  return (
    <>
      <section className='project-cards'>
        {
            date.map((e) => {
              return <div className='project-card' key={e.id}>
                  <h1>{e.title}</h1>
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