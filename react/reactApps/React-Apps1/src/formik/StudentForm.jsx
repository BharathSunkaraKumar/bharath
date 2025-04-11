import React, { useState } from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import './Form.css'
function StudentForm() {
    const [students, setStudents] = useState([])
    const Studentform = useFormik({
        initialValues : {
            firstname: '',
            lastname: '',
            age: '',     
        },
        validationSchema:Yup.object({
            firstname: Yup.string().required('First Name required').min(2, 'minimum 2 letters'),
            lastname: Yup.string().required('Last Name required'),
            password: Yup.string().required('password required').matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,'password must required @ a capital letter and number')
        }),
        onSubmit:(values)=>{
            console.log(values)
            setStudents([...students, values])
        }
    })
  return (
    <div>
        <h1>StudentForm</h1>
        {console.log(Studentform)}
        <form onSubmit={Studentform.handleSubmit} className='frm'>
            <input type='text' name='firstname' onBlur={Studentform.handleBlur} onChange={Studentform.handleChange} />
            <div className='inp'>First Name</div>
            <div>
                <small style={{color: 'tomato'}}>{Studentform.touched.firstname && Studentform.errors.firstname}</small>
            </div>
            <br/>
            <input type='text' name='lastname' onBlur={Studentform.handleBlur} onChange={Studentform.handleChange} placeholder='last name'/>
            <div>
                <small style={{color: 'tomato'}}>{Studentform.touched.lastname && Studentform.errors.lastname}</small>
            </div>
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
                    const {firstname, lastname, age} = student
                    return <li key={i}>
                        <p>{firstname}</p>
                        <p>{lastname}</p>
                        <p>{age}</p>
                    </li>
                })
            }
        </ul>
    </div>
  )
}

export default StudentForm