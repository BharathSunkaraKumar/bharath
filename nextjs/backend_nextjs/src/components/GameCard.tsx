import React from 'react'
type GameProp = {
game: {
    title: string,
  image: string,
  id: string,
}
}
const GameCard = ({game}: GameProp) => {
  return (
    <div className='bg-gray-800 text-white p-4 rounded-lg shadow-md'>
      <img className='w-full h-32 object-cover rounded-md' src={game.image} alt={game.title} />
      <h3 className='mt-2 text-lg font-semibold'>{game.title}</h3>
    </div>
  )
}

export default GameCard