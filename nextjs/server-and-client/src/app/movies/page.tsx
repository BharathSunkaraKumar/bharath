'use client'

import { useEffect, useState } from "react"

const Movies = () => {
    const [movies, setMovies] = useState([])
    useEffect(() =>{
        console.log("use effect")
    }, [])
    console.log("this message comes from cilent component")
  return (
    <div onClick={()=>{alert('hi')}}>Movies</div>
  )
}

export default Movies