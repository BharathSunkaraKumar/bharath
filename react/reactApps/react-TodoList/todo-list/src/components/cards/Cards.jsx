import React from 'react'
import Card from './Card'
import Description from './Description'

const Cards = () => {
  return (
    <section>
        <Card bg='bg-orange-100'>
            <h3 className='font-bold text-xl mb-3 text-orange-600'>Iphone 17</h3>
            <div>
                <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum provident vel, nobis optio esse ea amet mollitia odio atque quidem.</p>
            </div>
        </Card>

        
            <Card bg='bg-green-100'>
                <h3 className='font-bold text-xl mb-3 text-green-600'>samsung </h3>
                <div>
                    <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum provident vel, nobis optio esse ea amet mollitia odio atque quidem.</p>
                </div>
            </Card>
            <Description/>
    </section>
  )
}

export default Cards