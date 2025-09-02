"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

const interceptedLoginPage = () => {
    const router = useRouter()
    const [isOpen, setIsopen] = useState(true)


  return (
    <>
        {
            isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/95">
                    <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md relative">
                        <button onClick={()=>{router.push('/games')}} className="absolute top-3 right-3 text-gray-500 font-bold hover:text-gray-700">&#10005;</button>
                        <h2>Login</h2>
                        <form>
                            <div>
                                <label className='block text-sm font-medium text-gray-700'>Email</label>
                                <input className='w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:border-blue-300' type="email" placeholder='Enter your email'/>
                            </div>
                            <div>
                                <label className='block text-sm font-medium text-gray-700'>Passworkd</label>
                                <input className='w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:border-blue-300'  type="passworkd" placeholder='Enter your password'/>
                            </div>
                            <button className='w-full px-4 py-2 text-white bg-gray-900 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-blue-300 mt-3' type='submit'>Login</button>
                        </form>
                    </div>
                </div>
            )
        }
    </>
  )
}

export default interceptedLoginPage