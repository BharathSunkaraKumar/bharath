import React from 'react'

const Newpage = async() => {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve('content loading...')
        }, 4000);
    })
    if(2<5) {
        throw new Error('somting went woring')
    }
  return (
    <div>Newpage</div>
  )
}

export default Newpage