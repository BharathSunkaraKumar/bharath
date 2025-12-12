import React, { useState } from 'react'

const FormRef = () => {
    const [list, setList] = useState([]);
    const [isHover, setIsHover] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const obj = Object.fromEntries(formData.entries());
        console.log(obj)
        setList([...list, obj])
        e.target.reset();
    } 
    if(list.length>0) {
        console.log(list)
    }
  return (
    <div>
        <h1>FormRef</h1>
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <h3>First name</h3>
                    <input type="text" name="fname"/>
                </div>
                <div>
                    <h3>Last name</h3>
                    <input type="text" name="lname"/>
                </div>
                <div>
                    <h3>Email</h3>
                    <input type="text" name="email"/>
                </div>
                <div>
                    <button
                    onMouseEnter={() => setIsHover(!isHover)}
                    onMouseLeave={() => setIsHover(!isHover)}
                     style={{
                        backgroundColor: isHover ? "darkblue" : "dodgerblue",
                        fontWeight: "bold",
                        padding: "6px 8px",
                        border: "none",
                        borderRadius: "8px",
                        color: "white",
                        margin: '5px 0px 5px 0px',
                        cursor: 'pointer'
                    }}>Submit</button>
                </div>
            </form>
            {
                list.length>0&& list.map((each, index) => {
                    return<div key={index} style={{
                        border: '1px solid',
                        margin: "3px",
                        padding: '5px'
                    }}>
                        <h1>{each.fname}</h1>
                        <h3>{each.lname}</h3>
                        <p>{each.email}</p>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default FormRef