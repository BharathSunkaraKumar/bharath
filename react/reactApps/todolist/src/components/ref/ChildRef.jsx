import React from 'react'

const ChildRef = ({ChildRef, myRef}) => {

    const handleMain = (e) => {
        //handlenext
        if(e.key == "Enter") {
            myRef.current.focus()
        }
    }

  return (
    <div style={{
        border: "1px solid",
        padding: '5px',
        margin: '5px'
    }}>
        <h1>Child Component</h1>
        <div>
            <input type="text" name="email" onKeyUp={(e)=>{handleMain(e)}} ref={ChildRef}/>
        </div>
    </div>
  )
}

export default ChildRef