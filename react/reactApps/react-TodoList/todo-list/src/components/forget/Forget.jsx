import React, { useEffect, useState } from 'react'
import { Users } from './User'

const Forget = () => {

    const [users, setUsers] = useState(Users)
    const [userInfo, setUSerInfo] = useState({
        username: "",
        password: ""
    })
    const [formErrors, setFormErros] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const [forget, setForgot] = useState(false)

    const [updateUser, setUpdateUSer] = useState({
        username:"",
        password: "",
        confirmPassword: ""
    })

    

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUSerInfo({...userInfo, [name]: value}) 
        // console.log(userInfo)
        // alert("hi")
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const findUSer = users.find((each) => each.username === userInfo.username)
        // if(findUSer.password === userInfo.password) {
        //     console.log("password is correct")
        // }else{
        //     console.log("password is wrong")
        // }
        // console.log(findUSer)
        setFormErros(validation(findUSer))
        setIsSubmit(true)
    }
    const validation = (findUSer) => {
        const errors = {}
        if(findUSer.password !== userInfo.password) {
            errors.password = "Password is wrong"
        }
        return errors
    }
    const showForget = () => {
        console.log(forget)
        setForgot(!forget)
    }


    const handleChange1 = (e) => {
        const {name, value} = e.target;
        setUpdateUSer({...updateUser, [name]: value})
        console.log(updateUser)
        
    }

    const updateUserPassword = (findUSer1) => {

        const errors = {}
        if(updateUser.password !== updateUser.confirmPassword) {
            errors.password = "Password is not matcing"
        }else{
            const updateUsers = users.map((each) => each.username === updateUser.username ? {...each, password: updateUser.confirmPassword} : each)
            setUsers(updateUsers)
        }
        return errors
    }

    const updatePassword = (e) => {
        e.preventDefault()
        const findUSer1 = users.find((each) => each.username === updateUser.username)
        console.log(findUSer1)
        setFormErros(updateUserPassword(findUSer1))
        setIsSubmit(true)

    }
    
    useEffect(() => {
        console.log(formErrors)
        if(Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(userInfo)
        }
    }, [formErrors])
  return (
    <div className='h-screen flex flex-col justify-center items-center border-2 p-5'>
        <div>
            {
            users.map((user, i)=>{
                // console.log(user)
                return(
                    <div key={i} className='border-2 border-black m-3 list-none p-3'>
                        <li className='font-bold'>Username{i+1}: {user.username}</li>
                        <li>Password: {user.password}</li>
                    </div>
                )
            })
        }
        </div>
        {
            forget ? (
                <div>
                    <form className='border-2 border-black flex  flex-col items-center p-5 gap-3 w-fit rounded-lg'>
                        <div>
                            <input className='border-2 border-black p-3 rounded-lg' type="text" value={updateUser.username} onChange={handleChange1} placeholder='username' name='username' id='username'/>
                        </div>
                        <div>
                            <input className='border-2 border-black p-3 rounded-lg' type="password" value={updateUser.password} onChange={handleChange1} placeholder='password' name='password' id='password'/>
                        </div>
                        <div>
                            <input className='border-2 border-black p-3 rounded-lg' type="password" placeholder='confirm password' value={updateUser.confirmPassword} onChange={handleChange1} name="confirmPassword" id="confirmPassword" />
                            <p className='text-red-500 pt-1 font-bold text-center'>{formErrors.password}</p>
                        </div>
                        <div className='w-full'>
                            <button onClick={updatePassword} className='bg-black text-white px-4 py-2 rounded-lg w-full hover:bg-gray-900 transition-colors'>Update password</button>
                        </div>
                    </form>
                </div>
            ): (
                <div>
                    <form className='border-2 border-black flex  flex-col items-center p-5 gap-3 w-fit rounded-lg'>
                        <div>
                            <input className='border-2 border-black p-3 rounded-lg' type="text" value={userInfo.username} onChange={handleChange} placeholder='username' name='username' id='username'/>
                        </div>
                        <div>
                            <input className='border-2 border-black p-3 rounded-lg' type="password" placeholder='password' value={userInfo.password} onChange={handleChange} name="password" id="password" />
                            <p className='text-red-500 pt-1 font-bold text-center'>{formErrors.password}</p>
                        </div>
                        <div className='w-full'>
                            <button onClick={handleSubmit} className='bg-black text-white px-4 py-2 rounded-lg w-full hover:bg-gray-900 transition-colors'>Login</button>
                        </div>
                        <button onClick={showForget} className='text-blue-600 hover:underline'>forgot password</button>
                    </form>
                </div>
            )
        }
        
    </div>
  )
}

export default Forget