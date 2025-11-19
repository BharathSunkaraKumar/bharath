import React, { useState }  from 'react'
import {NavLink} from 'react-router-dom'

const Joblist = ({job}) => {
    const [showFullDescription, setShowFullDesciption] = useState(false)
    // console.log(job)
    let description = job.description
    if(!showFullDescription) {
        description = description.substring(0, 50) + "...";
    }

  return (
    <div className='bg-gray-200 rounded-xl p-3 my-3 w-full h-full flex flex-col gap-0.5 md:w-1/3 '>
        <h1 className='font-bold text-xl h-20 flex items-center'>{job.title}</h1>
        <div className='text-gray-700 flex flex-col gap-y-2 mt-3'>
            <p>{job.company.name}</p>
            <div>
                <span className='text-sm'>{description}</span>
                <span onClick={() => setShowFullDesciption((prev) => !prev)} className='text-indigo-500 hover:cursor-pointer mt-5 hover:text-indigo-600'>
                    {showFullDescription ? "Less" : "More"}
                </span>
            </div>
            <p>{job.location}</p>
            <p>{job.salary}</p>
            <div className='bg-indigo-600 w-fit text-white px-2.5 py-1.5 hover:bg-indigo-700 rounded-lg font-semibold'>
                 <NavLink to={`/job/${job.id}`}>Read more</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Joblist