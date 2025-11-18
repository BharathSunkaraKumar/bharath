import React from 'react'
import { jobs } from './jobs'
import Joblist from './Joblist'

const newJobs = jobs.slice(0, 3)

const Discription = () => {    
  return (
    <section>
        <ul className='p-6 m-3 bg-gray-100 rounded-xl flex flex-col md:flex-row md:gap-3'>
            {
                newJobs.map((job) => {
                    return(
                        <Joblist key={job.id} job={job} />
                    )
                })
            }
        </ul>
    </section>
  )
}

export default Discription