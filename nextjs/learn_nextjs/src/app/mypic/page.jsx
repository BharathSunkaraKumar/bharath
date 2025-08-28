import React from 'react'
import mypic from '../../../images/mypic.jpg'
import Image from 'next/image'
const MyPic = () => {
  return (
    <div>
        <Image src={mypic} alt='mypic' height={400} width={400}/>
        <Image src="https://images.unsplash.com/photo-1716354188820-8d917d680c4a?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={400} height={400} alt='rv'/>
    </div>
  )
}

export default MyPic