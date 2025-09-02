import React, { ReactNode } from 'react'

const Layout = ({children, product}: {children: ReactNode; product: ReactNode}) => {
  return (
    <div>
      {children}
      {product}
    </div>
  )
}

export default Layout