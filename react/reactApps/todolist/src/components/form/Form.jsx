import React, { useState } from 'react'

const Form = () => {
    const [form, setForm] = useState({
        fname: "",
        lname: "",
        email: "",
        isAgree: "",
        country: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const vlaidationErrors = validation();

        if(Object.keys(vlaidationErrors).length > 0) {
            setErrors(vlaidationErrors)
            console.log(errors)
        }else{
            setErrors({});
            alert("form sumbitted successfully!")
        }

        console.log(form)
    } 

    const validation = () => {
        const newErrors = {};

        if(!form.fname.trim()) {
            newErrors.fname = "name is required"
        }
        if(!form.lname.trim()) {
            newErrors.lname = "last name is required"
        }
        return newErrors;
    }
     
  return (
    <div className='box'>
        <h1>Form handling</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>first name</label>
                <input value={form.fname} onChange={handleChange} type="text" name="fname" id="fname" />
                {errors.fname && <p style={{color: "red"}}>{errors.fname}</p>}
            </div>
            <div>
                <label>last name</label>
                <input type="text" value={form.lname} onChange={handleChange} name="lname" id="lname" />
                {errors.lname && <p style={{color: "red"}}>{errors.lname}</p>}
            </div>
            <div>
                <label>Email</label>
                <input type="email" value={form.email} onChange={handleChange} name="email" id="email" />
            </div>
            <div>
                <label>your age is grater than 20?</label>
                <input type="checkbox" name="isAgree" id="isAgree" checked={form.isAgree} onChange={(e)=> setForm({...form, isAgree: e.target.checked})} />
            </div>
            <div>
                <select name="country" value={form.country} onChange={(e) => setForm({...form, country: e.target.value})}>
                    <option value="">select country</option>
                    <option value="india">india</option>
                    <option value="america">america</option>
                    <option value="russia">russia</option>
                </select>
            </div>
            <div>
                <button >Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Form