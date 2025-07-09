import React, { useState } from 'react'

export default function Form() {
    const initialValues = {
        userName: '',
        email: '',
        password: '',
    }
    const [formValues, setFormValues] = useState(initialValues);
    const handleChange = (e) => {
        const {name, value} = e.target;
        console.log(e)
        // setFormValues({...formValues, [name]: value})
        // console.log(formValues)
    }
  return (
    <div className='bg-gray-100'>
        <form className='flex flex-col gap-3 justify-center items-center align-middle h-screen'>
            <div className='flex flex-col gap-3'>
                <div>
                <label className='font-semibold'>User Name</label>
                <br/>
                <input className='border-2 p-2 w-full' type='text' placeholder='user name' 
                value={formValues.userName}
                onChange={handleChange}
                />
            </div>
            <div>
                <label className='font-semibold'>Eamil</label>
                <br/>
                <input className='border-2 p-2' type='email' placeholder='email' 
                value={formValues.email}
                onChange={handleChange}
                />
            </div>
            <div>
                <label className='font-semibold'>Password</label>
                <br/>
                <input className='border-2 p-2' type='password' placeholder='user name' 
                value={formValues.password}
                onChange={handleChange}
                />
            </div>
            <div>
                <button className='px-4 py-2 bg-blue-600 rounded-md text-white w-full'>Submit</button>
            </div>
            </div>
        </form>
    </div>
  )
}
