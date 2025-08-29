import Link from 'next/link'
import React from 'react'

const Comments = () => {
  // if(2<5) {
  //   throw new Error("soming new error")
  // }
  return (
    <div className='border p-[10rem] w-[30rem]'>
      <h1>Comments</h1>
      <Link href='/part2/single'>single memeber</Link>
    </div>
  )
}

export default Comments