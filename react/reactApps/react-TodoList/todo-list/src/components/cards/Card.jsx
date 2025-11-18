import React from 'react'

const Card = ({children, bg= "bg-gray-100"}) => {
  return <div className={`${bg} p-6 m-3 rounded-lg shadow-sm`}>
    {children}
  </div>
}

export default Card