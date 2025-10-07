import React from 'react'
import Content from './Content'

const Hero = ({contactRef}) => {
  return (
    <div style={{
        padding: "10px"
    }}>
        <div style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center"
        }}>
            <h1>Hero</h1>
            <div style={{
                border: "1px solid", backgroundColor: "lightblue", height: "100px", width: "50vw", borderRadius: "10px"
            }}>

            </div>
        </div>
        <Content contactRef={contactRef}/>
    </div>
  )
}

export default Hero