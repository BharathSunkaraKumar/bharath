import Link from 'next/link'
import React from 'react'

const user = () => {
    const users = [
        {
            id: 1,
            name: "bharath",
            location: "tirupati"
        },
        {
            id: 2,
            name: "zendaya",
            location: "u.s.a"
        }
    ]
  return (
    <div>
        <h1 className='text-2xl text-center font-semibold mt-5 text-blue-600'>users</h1>
        <div>
            {
                users.map((user, index) => {
                    return <li key={index}>
                        <Link href={`/userinfo/${user.id}`}>user{index+1}</Link>
                    </li>
                })
            }
        </div>
    </div>
  )
}

export default user