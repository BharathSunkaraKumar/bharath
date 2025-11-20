import React, { useEffect, useState } from 'react'
import { useParams, useLoaderData, NavLink } from 'react-router-dom'
import { FaLocationDot } from "react-icons/fa6";
import { IoMdArrowRoundBack } from "react-icons/io";



const JobPage = () => {
    // const {id} = useParams()
    const job = useLoaderData()
    // console.log(job)
   
  return (
    <section>
        <div className='bg-white w-full py-3 flex items-center justify-start px-3 text-indigo-600 hover:text-indigo-800'>
            <IoMdArrowRoundBack className='text-sm mt-0.5'/>
            <NavLink className='' to='/jobs'>Back to Job listings</NavLink>
        </div>
    <div className=' m-auto px-6 py-6'>
        <div className='p-6'>
            <div className='bg-white p-6 flex flex-col gap-3 rounded-md shadow-md shadow-slate-500'>
                <p className='text-sm text-gray-500'>{job.type}</p>
                <div>
                    <h1 className='text-3xl md:text-4xl font-bold'>{job.title}</h1>
                    <div className='flex gap-1 mt-0.5'>
                        <FaLocationDot className='text-orange-600' />
                        <p className='text-orange-600 text-xs font-semibold'>{job.location}</p>
                    </div>
                </div>
            </div>

            <div className='bg-white p-6 mt-6 flex flex-col gap-3 rounded-md shadow-md shadow-slate-500'>
                <div>
                    <p className='text-indigo-600 text-sm font-semibold'>Job Description</p>
                </div>
                <div>
                    <p className='text-gray-900'>{job.description}</p>
                </div>
                <div>
                    <p className='text-indigo-600 text-sm font-semibold'>Salary</p>
                    <p>{job.salary}/Year</p>

                </div>
            </div>
        </div>
        {/* <div>
            <div>
                <p>{job.company.name}</p>
            </div>
        </div> */}
    </div>

    </section>
  )
}

const jobLoader = async({params}) => {
    const res= await fetch(`http://localhost:8000/jobs/${params.id}`)
    const data = await res.json()
    return data
} 

export  {JobPage as default, jobLoader}