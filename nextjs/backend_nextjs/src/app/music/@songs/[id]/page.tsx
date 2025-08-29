import React from 'react'

const Song = ({params}: {params: {id: string}}) => {
    const {id} = params
  return (
    <div className='text-2xl text-white'>
        Song: {id}
    </div>
  )
}

export default Song