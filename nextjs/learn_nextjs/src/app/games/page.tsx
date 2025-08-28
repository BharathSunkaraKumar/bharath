import React from 'react'
import { games } from '../data/games'
import Link from 'next/link'
// console.log(games)

const Games = () => {
  return (
    <div className='max-h-screen mx-auto max-w-7xl px-6 my-5'>
        <h1 className='text-3xl font-semibold p-5'>Explore Games</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {
                games.map((game) => (
                    <Link
                    className='group relative bg-gray-900 p-5 rounded-xl shadow-lg transform transition hover:scale-105 hover:shadow-xl'
                     key={game.id} href={`/games/${game.category}/${game.slug}`}>
                        <div className='w-full'>
                            <img className='w-full h-52 object-cover rounded-lg group-hover:opacity-80 transition' src={game.image} alt={game.title} />
                            <div></div>
                        </div>
                        <h2 className='text-white text-2xl my-3'>{game.title}</h2>
                        <h2 className='text-gray-400 text-sm my-3'>{game.description}</h2>
                        <h2 className='text-yellow-200 text-sm'>{game.rating}/10</h2>
                    </Link>
                ))
            }
        </div>
    </div>
  )
}

export default Games