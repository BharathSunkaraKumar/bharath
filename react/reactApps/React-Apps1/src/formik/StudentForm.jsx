import React, { useState } from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import './Form.css'
import axios from 'axios'
function StudentForm() {
    const [students, setStudents] = useState([])
    const Studentform = useFormik({
        initialValues : {
            firstname: '',
            lastname: '',
            gender: '',
            age: '',   
            username: ''  
        },
        validationSchema:Yup.object({
            // firstname: Yup.string().required('First Name required').min(2, 'minimum 2 letters'),
            // lastname: Yup.string().required('Last Name required'),
            // password: Yup.string().required('password required').matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,'password must required @ a capital letter and number')
            // age: Yup.string().required('age is required').test({
            //     name:'genderbasedvalidation',
            //     message: 'your age not accepted',
            //     test: (value, a) => {
            //         //value < 18 ? false : true
            //         if(a.parent.gender === 'male' && value < 21) {
            //             return false
            //         }
            //         if(a.parent.gender === 'female' && value < 18) {
            //             return false
            //         }
            //         return true
            //     }
            // })
            username: Yup.string().required('username required').test({
                name: 'check user asynchronous',
                message: 'alreay user exist',
                test: (async(value, a) => {
                    let response = await axios.get(`http://jsonplaceholder.typicode.com/users?username=${value}`)
                    if(response.data.length !==0){
                        return a.createError({message: 'This user is already exist'})
                    }else{
                        return true
                    }
                    
                })
            })
        }),
        onSubmit:(values)=>{
            // console.log(values)
            setStudents([...students, values])
        }
    })
  return (
    <div>
        <h1>StudentForm</h1>
        {/* {console.log(Studentform)} */}
        <form onSubmit={Studentform.handleSubmit} className='frm'>
            <input type='text' name='username' onBlur={Studentform.handleBlur} onChange={Studentform.handleChange} placeholder='username'/>
            <div>
                <small style={{color: 'tomato'}}>{Studentform.touched.username && Studentform.errors.username}</small>
            </div>
            <br/>
            <input type='text' name='firstname' onBlur={Studentform.handleBlur} onChange={Studentform.handleChange} />
            <div>
                <small style={{color: 'tomato'}}>{Studentform.touched.firstname && Studentform.errors.firstname}</small>
            </div>
            <br/>
            <input type='text' name='lastname' onBlur={Studentform.handleBlur} onChange={Studentform.handleChange} placeholder='last name'/>
            <div>
                <small style={{color: 'tomato'}}>{Studentform.touched.lastname && Studentform.errors.lastname}</small>
            </div>
            <br/>
            <input type='radio' name='gender' value='male' onBlur={Studentform.handleBlur} onChange={Studentform.handleChange}/>male
            <input type='radio' name='gender' value='female' onBlur={Studentform.handleBlur} onChange={Studentform.handleChange}/>female
            <br/>
            <input type='text' name='age' onBlur={Studentform.handleBlur} onChange={Studentform.handleChange} placeholder='age'/>
            <div>
                <small style={{color: 'tomato'}}>{Studentform.touched.age && Studentform.errors.age}</small>
            </div>
            <br/>
            <input type='text' name='password' onBlur={Studentform.handleBlur}  onChange={Studentform.handleChange} placeholder='password'/>
            <div>
                <small style={{color: 'tomato'}}>{Studentform.touched.password && Studentform.errors.password}</small>
            </div>
            <br/>
            <button>Add student</button>
        </form>
        <hr/>
        <ul>
            {
                students.map((student, i) => {
                    const {firstname, lastname, age, gender} = student
                    return <li key={i}>
                        <p>{firstname}</p>
                        <p>{lastname}</p>
                        <i>{gender}</i>
                        <p>{age}</p>
                    </li>
                })
            }
        </ul>
    </div>
  )
}

export default StudentForm