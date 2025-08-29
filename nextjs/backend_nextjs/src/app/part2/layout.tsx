import React, { ReactNode } from 'react'

const layout = ({children, comments, members }: {children: ReactNode, comments: ReactNode, members: ReactNode}) => {
  return (
    <div>
        <main>{children}</main>
        <div className='flex'>
            {comments}
            {members}
        </div>
    </div> 
  )
}

export default layout