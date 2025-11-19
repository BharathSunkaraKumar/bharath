import React from 'react'
import Hero from '../components/demo1/Hero'
import Cards from '../components/cards/Cards'

const Homepage = () => {
  return (
    <div>
        <Hero/>
        <Cards isHome={true}/>
    </div>
  )
}

export default Homepage