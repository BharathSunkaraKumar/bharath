import { useState } from "react"


const EditUSer = ({id, updateTitle, updateEmail, upDateData}) => {
    
    const [title, setTitle] = useState(updateTitle || '')
    const [email, setEmail] = useState(updateEmail || '')
    return(
        <>
            <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <button onClick={()=>{upDateData(id, title, email)}}>submit</button>
        </>
    )
}

export default EditUSer;