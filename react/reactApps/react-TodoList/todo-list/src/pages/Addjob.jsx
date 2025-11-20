import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
const Addjob = ({addJobSubmit}) => {

    const [type, setType] = useState("Full-Time")
    const [title, setTitle] = useState("")
    const [location, setLocation] = useState("")
    const [description, setDescription] = useState("")
    const [salary, setSalary] = useState("")
    const [companyEmail, setCompanyEmail] = useState("")
    const [companyName, setCompanyName] = useState("")
    const [companyDescription, setCompanyDescription] = useState("")
    const [contactPhone, setContactPhone] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(title)
        let newJob = {
            title,
            type,
            location,
            description,
            salary,
            company: {
                name: companyName,
                description: companyDescription,
                companyEmail,
                contactPhone
            }
        }


        addJobSubmit(newJob)
        toast.success("job added successfully")
        return navigate('/jobs')
    }


  return (
    <section className='bg-indigo-100'>

        <div className='container m-auto max-w-2xl py-24'>
            <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col items-center gap-2 justify-center'>
                <div className='p-3 w-full'>
                    <label htmlFor="title" className='font-semibold text-l md:text-xl'>Title</label>
                    <div>
                        <input className='w-full border-2 border-indigo-600 rounded-md px-2 py-1' value={title} onChange={(e)=>setTitle(e.target.value)} type="text" name="title" placeholder='title'/>
                    </div>
                </div>

                <div className='p-3 w-full'>
                <label htmlFor="type" className='block font-semibold text-l md:text-xl'>Type</label>
                    <select className='border-2 border-indigo-600 rounded-md w-full px-2 py-1' name="type" value={type} onChange={(e)=>setType(e.target.value)}>
                        <option value="Full-Time">Full-Time</option>
                        <option value="Part-Time">Part-Time</option>
                        <option value="Remote">Remote</option>
                        <option value="Internship">Internship</option>
                    </select>
                </div>


                    <div className='p-3 w-full'>
                        <label className='font-semibold text-l md:text-xl' htmlFor="location">location</label>
                        <div>
                            <input className='border-2 border-indigo-600 rounded-md w-full px-2 py-1' value={location} onChange={(e)=>setLocation(e.target.value)} type="text" name="location" placeholder='location'/>
                        </div>
                    </div>

                    <div className='p-3 w-full'>
                        <label className='font-semibold text-l md:text-xl' htmlFor="description">Description</label>
                        <div>
                            <input className='border-2 border-indigo-600 rounded-md w-full px-2 py-1' value={description} onChange={(e)=>setDescription(e.target.value)} type="text" name="description" placeholder='description'/>
                        </div>
                    </div>

                    <div className='p-3 w-full'>
                        <label className='font-semibold text-l md:text-xl' htmlFor="salary">Salary</label>
                        <div>
                            <input className='border-2 border-indigo-600 rounded-md w-full px-2 py-1' value={salary} onChange={(e)=>setSalary(e.target.value)} type="text" name="salary" placeholder='salary'/>
                        </div>
                    </div>

                    <div className='p-3 w-full'>
                        <label className='font-semibold text-l md:text-xl' htmlFor="companyName">Company Name</label>
                        <div>
                            <input className='border-2 border-indigo-600 rounded-md w-full px-2 py-1' value={companyName} onChange={(e)=>setCompanyName(e.target.value)} type="text" name="companyName" placeholder='company name'/>
                        </div>
                    </div>

                <div className='p-3 w-full'>
                    <label className='font-semibold text-l md:text-xl' htmlFor="companyDescription">Company Description</label>
                    <div>
                        <input className='border-2 border-indigo-600 rounded-md w-full px-2 py-1' value={companyDescription} onChange={(e)=>setCompanyDescription(e.target.value)} type="text" name="companyDescription" placeholder='companyDescription'/>
                    </div>
                </div>

                <div className='p-3 w-full'>
                    <label className='font-semibold text-l md:text-xl' htmlFor="companyEmail">CompanyEmail</label>
                    <div>
                        <input className='border-2 border-indigo-600 rounded-md w-full px-2 py-1' value={companyEmail} onChange={(e)=>setCompanyEmail(e.target.value)} type="text" name="companyEmail" placeholder='companyEmail'/>
                    </div>
                </div>

                <div className='p-3 w-full'>
                    <label className='font-semibold text-l md:text-xl' htmlFor="contactPhone">ContactPhone</label>
                    <div>
                        <input className='border-2 border-indigo-600 rounded-md w-full px-2 py-1' value={contactPhone} onChange={(e)=>setContactPhone(e.target.value)} type="text" name="contactPhone" placeholder='contactPhone'/>
                    </div>
                </div>

                <div className='p-3 w-full'>
                    <button className='bg-indigo-600 text-white w-full py-2 rounded-lg'>add job</button>
                </div>
                </div>
            </form>

            </div>
        </div>
    
    </section>
  )
}

export default Addjob