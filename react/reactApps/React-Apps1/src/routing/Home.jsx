import React, { useState } from 'react'
import { Link } from 'react-router'
import { Outlet } from 'react-router'


function Home() {
  return (
    <div style={{border: '1px solid'}} >
        <h1>Home</h1>
        <Link to={'/countries'}>countries</Link>
        <Outlet/>
    </div>
  )
}

export default Home