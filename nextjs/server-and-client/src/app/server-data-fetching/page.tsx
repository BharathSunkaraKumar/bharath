import React from 'react'

const TodoComponent = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json()
    console.log(data)
  return (
    <div>
        <h1>{data.title}</h1>
        <h1>{data.complted ? "yes" : "no"}</h1>
    </div>
  )
}

export default TodoComponent