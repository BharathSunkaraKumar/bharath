// "server-only"
import { add, sub } from '@/utils'
import React from 'react'

const ServerComponent = () => {
    const result = sub(7, 6)
    console.log(result)
  return (
    <div>ServerComponent</div>
  )
}

export default ServerComponent