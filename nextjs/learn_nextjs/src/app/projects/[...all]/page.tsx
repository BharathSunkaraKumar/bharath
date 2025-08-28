import React from 'react'

const Project = async ({params}: {params: {all: string[]}}) => {
    const {all} = await params
    console.log(all)
  return (
    <div>
      <h1>Project</h1>
      {
        all.map((each, i) => (
          <li key={i}>{each}</li>
        ))
      }
    </div>
  )
}

export default Project