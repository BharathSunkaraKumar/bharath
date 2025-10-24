import React, { useState } from 'react'

const TodoList = () => {
    const [todos, setTodos] = useState({
        id: "",
        todo: "",
    })
    const [list, setList] = useState([])
    const hanldeTodos = (e) => {
        setTodos({
            ...todos,
            todo: e.target.value
        })
        
    }
    const hanldeAdd = () => {
        let newTodo = {
            todo: todos.todo,
            id: new Date().getTime().toString()
        }
        setList([
            ...list,
            newTodo
        ])
        setTodos({
            todo: "",
            id: ""
        })
        console.log(list)
    }
    const handleDelete = (id) => {
        console.log("delete")
        let newList = list.filter((e) => {
            return e.id != id
        })
        setList(newList)
    }
  return (
    <div className='p-5'>
        <h1 className='text-3xl text-blue-500'>TodoList</h1>
        <div className='flex justify-center mt-5 mb-5'>
            <input value={todos.todo} onChange={hanldeTodos}  className='border border-blue-500 px-4 py-3' type="text" placeholder='Enter Todos' />
            <button onClick={hanldeAdd} className='bg-black text-white px-4 py-3'>Add</button>
        </div>
        <hr />
        
        {
            list.length > 0 ? (
                <div className='border-2 rounded-lg border-gary-600 p-5 m-4'>
            <ul>
                {
                    list.map((each) => {
                        return(
                            <li className='border p-2 m-2 rounded-lg font-semibold text-2xl border-gray-800 flex justify-between items-center' key={each.id}>
                                {each.todo}
                                <span className='m-2 '>
                                    <button onClick={()=>{handleDelete(each.id)}} className='bg-red-400 px-2 py-1 rounded-lg hover:bg-red-500 transition-colors '>Delete</button>
                                    <button className='bg-blue-400 px-2 py-1 rounded-lg hover:bg-blue-500 transition-colors '>Edit</button>
                                </span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
            ) : <p className='text-center font-semibold text-3xl m-3'>Enter Some Todos</p>
        }
    </div>
  )
}

export default TodoList