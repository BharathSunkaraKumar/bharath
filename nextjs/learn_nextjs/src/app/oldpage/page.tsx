import { redirect } from 'next/navigation'
import React from 'react'

const Oldpage = () => {
    redirect('/not-found')
  return (
    <div>Oldpage</div>
  )
}

export default Oldpage