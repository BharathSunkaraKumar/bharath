import React, { useEffect, useRef } from 'react'
import ChildRef from './ChildRef';

const Myref = () => {
    let myRef = useRef();
    let nextRef = useRef();
    let childRed = useRef();

    useEffect(() => {
        // document.getElementById("d1").focus();
        myRef.current.focus()
    },[])
    const handlenext = (e) => {
        console.log(e.key)
        if(e.key == "Enter") {
            nextRef.current.focus();
        }
    }
    const handleNext = (e) => {
        console.log(e.key)
        if(e.key == "Enter") {
            childRed.current.focus();
        }
    }
  return (
    <div style={{
        border: "1px solid",
        padding: "5px"
    }}>
        <h1>Myref</h1>
        <input type="text" name="name" onKeyUp={(e)=>{handlenext(e)}} ref={myRef}/>
        <br />
        <input type="text" name="name" ref={nextRef} onKeyUp={(e)=>{handleNext(e)}}/>
        <br />
        <ChildRef ChildRef={childRed} myRef={myRef}/>
    </div>
  )
}

export default Myref