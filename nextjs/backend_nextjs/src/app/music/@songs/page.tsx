import { li } from 'framer-motion/client'
import { Clock, Heart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Songs = async() => {
    await new Promise((resolve) => setTimeout(() => {
        resolve('loding songs...')
    }, 500))
    const songsList = [
    {
        id:1,
        artist: "Anirudh",
        title: "coolie Disco",
        time: "2:09"
    },
    {
        id:2,
        artist: "Anirudh",
        title: "I am the danger",
        time: "3:34"
    },
    {
        id:3,
        artist: "D.S.P",
        title: "violin song",
        time: "4:23"
    },
    ]
  return (
    <div className='w-[96%] mx-auto px-4'>
        <h2 className='text-3xl text-white mt-8 font-bold mb-6'>Songs Collection</h2>

        <ul className='space-y-4'>
            {
                songsList.map((song) => (
                    <Link href={`/music/${song.id}`} key={song.id}>
                    <li key={song.id} className='flex items-center justify-between p-3 hover:bg-[#2A2929] rounded-md cursor-pointer transition-all duration-200 ease-in-out transform hover:scale-105'>
                        <div className='flex items-center gap-5'>
                            <img className='h-16 w-16 bg-gray-700 rounded-md flex-shrink-0' src="https://media.istockphoto.com/id/1000952454/photo/retro-music-background-poster.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZmivaTJmTwYDgvC-vQz553kKNVU2iqIyMOnreLQL-qA=" alt={song.artist} />
                        <div>
                            <p className='text-white font-medium'>{song.artist}</p>
                            <p className='text-gray-400 text-sm'>{song.title}</p>
                        </div>
                        </div>
                        <div className='flex items-center gap-6 text-gray-400'>
                            <div className='flex items-center gap-1'>
                                <Clock size={16}/>
                                <span>{song.time}</span>
                            </div>
                            <Heart size={16} className='cursor-pointer hover:text-red-500'/>
                            <button className='text-lg font-bold'>⫶</button>
                        </div>
                    </li>
                    </Link>
                ))
            }
        </ul>
    </div>
  )
}

export default Songs