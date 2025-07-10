import React, { useEffect, useState } from 'react'

export default function Form() {
    const initialValues = {
        userName: '',
        email: '',
        password: '',
    }
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const handleChange = (e) => {
        const {name, value} = e.target;
        // console.log(name)
        setFormValues({...formValues, [name]: value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validation(formValues))
        setIsSubmit(true)
    }
    const validation = (values) => {
        // console.log(values)
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!values.userName) {
            errors.userName = 'user name is required!'
        }
        if(!values.email) {
            errors.email = 'email is required'
        }else if(!regex.test(values.email)) {
            errors.email = 'This is not a valid email format!'
        }
        if(!values.password) {
            errors.password = 'password is required!'
        }else if(values.password.length < 4) {
            errors.password = 'password must be more than 4 characters'
        }else if(values.password.length > 10) {
            errors.password = 'password cannot exceeed more then 10 characters'
        }
        return errors;
    }
    useEffect(() => {
        // console.log(formErrors)
        if(Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues)
        }
    }, [formErrors])
  return (
    <div className='bg-gray-100'>
        {Object.keys(formErrors).length === 0 && isSubmit ? <div 
        className='bg-green-400 text-neutral-100  text-center font-bold text-xl px-10 py-5'>
            Siged in successfully
        </div> : (

        <pre className='flex justify-center  p-5'>{JSON.stringify(formValues, undefined, 2)}</pre>
        )}
        <form 
        className='flex flex-col gap-3 justify-center items-center align-middle h-screen'
        onSubmit={handleSubmit}
        >
            <div className='flex flex-col gap-3'>
                <div>
                <label className='font-semibold'>User Name</label>
                <br/>
                <input className='border-2 p-2 w-full' type='text' name='userName' placeholder='user name' 
                value={formValues.userName}
                onChange={handleChange}
                />
            </div>
            <p className='text-red-500 font-semibold'>
                {formErrors.userName}
            </p>
            <div>
                <label className='font-semibold'>Eamil</label>
                <br/>
                <input className='border-2 p-2' type='email' name='email' placeholder='email' 
                value={formValues.email}
                onChange={handleChange}
                />
            </div>
            <p className='text-red-500 font-semibold'>
                {formErrors.email}
            </p>
            <div>
                <label className='font-semibold'>Password</label>
                <br/>
                <input className='border-2 p-2' type='password' name='password' placeholder='user name' 
                value={formValues.password}
                onChange={handleChange}
                />
            </div>
            <p className='text-red-500 font-semibold'>
                {formErrors.password}
            </p>
            <div>
                <button  className='px-4 py-2 bg-blue-600 rounded-md text-white w-full'>Submit</button>
            </div>
            </div>
        </form>
    </div>
  )
}
