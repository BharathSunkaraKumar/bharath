import React, { useState }  from 'react'

const Joblist = ({job}) => {
    const [showFullDescription, setShowFullDesciption] = useState(false)

    let description = job.description
    if(!showFullDescription) {
        description = description.substring(0, 50) + "...";
    }

  return (
    <div className='bg-gray-200 rounded-xl p-3 my-3 w-full h-full flex flex-col gap-0.5 md:w-1/3 '>
        <h1 className='font-bold text-xl'>{job.title}</h1>
        <div className='text-gray-700 flex flex-col gap-y-2 mt-3'>
            <p>{job.company}</p>
            <div>
                <span className='text-sm'>{description}</span>
                <span onClick={() => setShowFullDesciption((prev) => !prev)} className='text-indigo-500 hover:cursor-pointer mt-2 hover:text-indigo-600'>
                    {showFullDescription ? "Less" : "More"}
                </span>
            </div>
            <p>{job.location}</p>
            <p>{job.salary}</p>
        </div>
    </div>
  )
}

export default Joblist