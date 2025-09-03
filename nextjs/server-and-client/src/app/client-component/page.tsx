'use client'
import { add } from '@/utils'
import React from 'react'

const ClientComponent = () => {
    const result = add(1, 4)
    console.log(result)
  return (
    <div>ClientComponent</div>
  )
}

export default ClientComponent