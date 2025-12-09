import React, { useState } from 'react'
import "./Todolist.css"

const Todolist = () => {
    const [todos, setTodos] = useState({
        id: "",
        todo: ""
    })

    const [editing, setEdition] = useState({
        id: "",
        isEditing: false,
    })

    const [list, setList] = useState([]);


    const handleTodo = (e) => {
        setTodos({
            ...todos,
            todo: e.target.value 
        })
    }

    const handleAdd = () => {
        let newTodo = {
            todo: todos.todo,
            id: new Date().getTime().toString()
        }
        setList([...list, newTodo])

        setTodos({
            todos: "",
            id: ""
        })
        console.log(list)
    }

    const handleDel = (id) => {
        console.log(id)
        let newTodos = list.filter((each) => each.id != id);
        setList(newTodos)
        console.log(newTodos)
    }
    
    const handleEdit = (id) => {
        console.log("edit", id)
        setEdition({
            ...editing,
            isEditing: true,
            id: id,
        })
        const findTodo = list.find((each) => each.id == id);
        console.log("found todo " + findTodo.todo);
        setTodos({
            id: findTodo.id,
            todo: findTodo.todo,
        })
    }

    const confimEdit = () => {
        // alert("confirm edit")
        let newList = list.map((each) => {
            if(each.id == editing.id) {
                return {
                    todo: todos.todo,
                    id: editing.id
                }
            }else{
                return each
            }
        })

        setList(newList);
        setTodos({
            todo: "",
            id: ""
        })
        setEdition({
            id: "",
            isEditing: false
        })

    }

  return (
    <div className='box'>
        <h1>Todolist</h1>
        <div className='box'>
            <input value={todos.todo || ""} onChange={handleTodo} type="text" name="todo"/>
            {
                editing?.isEditing ? <button onClick={confimEdit}>Edit Todo</button> : (
                    <button onClick={handleAdd}>Add Todo</button>
                )
            }
        </div>
        <ul>
            {
                list.map((each) => {
                    return <li key={each.id}>
                        <div className='items'>
                            <span>
                                {each.todo}
                            </span>
                        <span>
                            <button onClick={() => {handleDel(each.id)}}>
                                Delete
                            </button>
                        </span>
                        <span>
                            <button onClick={() => {handleEdit(each.id)}}>
                                Edit
                            </button>
                        </span>
                        </div>
                    </li>
                })
            }
        </ul>
    </div>
  )
}

export default Todolist