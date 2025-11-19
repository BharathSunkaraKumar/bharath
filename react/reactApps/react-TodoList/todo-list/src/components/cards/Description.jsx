import React, { useEffect, useState } from 'react'
// import {jobs} from './jobs'
import Joblist from './Joblist'
import Spinner from '../Spinner'

const Description = ({isHome = false}) => {    

const [jobs, setJobs] = useState([])
const [loading, setLoading] = useState(true)

useEffect(() => {
    const fetchUrl = async() => {
        const apiUrl = isHome ? "http://localhost:8000/jobs?_limit=3" : "http://localhost:8000/jobs"
        try {
            const resp = await fetch(apiUrl);
            const data = await resp.json()
            // console.log(data)
            setJobs(data)
        } catch (error) {
            console.log("failed to fetch", error)
        } finally {
            setLoading(false)
        }
    }
    fetchUrl()
}, [])

  return (
    <section>
        
        <ul className='p-6 m-3 bg-gray-100 rounded-xl flex flex-col md:flex-row md:gap-3'>
            {
                loading ? (
                    <Spinner loading={loading}/>
                ) : (
                    <>
                        {
                            jobs.map((job) => {
                                // console.log(job)
                                return(
                                    <Joblist key={job.id} job={job} />
                                )
                            })
                        }
                    </>
                )
            }
            
        </ul>
    </section>
  )
}

export default Description