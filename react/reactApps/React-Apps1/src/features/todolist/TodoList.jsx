import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo } from './todoSlice'

function TodoList() {
   let {todoList} = useSelector(state => state.t)
   const [newTodo, setNewTodo] = useState('')
   const dispatch = useDispatch()

   console.log(todoList)

   const handleInput = (e)=> {
        setNewTodo(e.target.value)
   }
   const handleAdd = () => {
        dispatch(addTodo(newTodo))
        setNewTodo('')
   }
   
  return (
    <div className='box'>
        <h1>TodoList</h1>
        <input type='text' value={newTodo} onChange={handleInput} placeholder='enter Todo' />
        <button onClick={handleAdd}>Add Item</button>
        <ul>
            {
                todoList?.map((e, i) => {
                    return <li key={i}>
                                <span>{e}</span>
                                <button onClick={()=>{dispatch(deleteTodo(i))}}>Del</button>
                            </li>
                })
            }
        </ul>
    </div>
  )
}

export default TodoList