import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, completedTodo, deleteTodo } from './taskmanagerSlice'
import EditingForm from './EditingForm'

function TaskManager() {
   const[filter, setFilter] = useState('all')
   const[editing, setEditing] = useState(
    {
        id: '',
        isEditing: false
    }
   )
   const todos = useSelector(state => state.tm.todos)
   const dispatch = useDispatch()
   const newId = todos.length > 0 ? todos[todos.length -1 ].id + 1 : 1

   const todoform = useFormik({
    initialValues: {
        
        title: '',
        completed: false,
        tags: [] ,
        tagInputs: '',
        deadline: '',
        priority: ""
    },
    onSubmit: (values, {resetForm}) => {

        let newTags = []
        let input = todoform.values.tagInputs.trim()
        if(input) {
            newTags = input.split(',').map(tag => tag.trim()).filter(tag => tag)
        }
        

        const newTodo = {
            ...values,
            tags: [...values.tags, ...newTags],
            id: todos.length > 0 ? todos[todos.length -1 ].id + 1 : 1
        }

        dispatch(addTodo(newTodo))
        // console.log(values)
        resetForm()
    }
   })
   const handleEdit = (id) => {
        
        setEditing({
            id,
            isEditing: !editing.isEditing
        })
        let editTodos = todos.find(todo => todo.id === id)
        // console.log(editTodos)
        if(editTodos) {
           
        }
   }
   const filterTodos = todos.filter(todo => {
        if(filter === 'completed') return todo.completed
        if(filter === 'upcoming') return !todo.completed
        return true
   })
   const handleCompleted = () => {
    // console.log(filterTodos)
    console.log('complete')
    setFilter('completed')
}
    const handleUpcoming = () => {
    //    console.log(filterTodos)
        setFilter('upcoming')
   }

  
  return (
    <div className='box'>
        <h1>TaskManager</h1>
        <form onSubmit={todoform.handleSubmit}>
            <input type='text' value={todoform.values.title || ''} name='title' placeholder='enter todo' onChange={todoform.handleChange}/>
            <br/>
            <input type='text' value={todoform.values.tagInputs || ''} name='tagInputs' placeholder='e.g. work urgent' onChange={todoform.handleChange}/>
            <br/>
            <input type='date' value={todoform.values.deadline || ''} name='deadline' placeholder='deadline' onChange={todoform.handleChange}/>
            <br/>
            <select name='priority' value={todoform.values.priority || ''} onChange={todoform.handleChange}>
                <option value='' disabled>priority</option>
                <option value='low'>low</option>
                <option value='medium'>medium</option>
                <option value='high'>high</option>
            </select>
            <br/>
            {editing.isEditing ? '' : <button type='submit'>add</button>}
            
        </form>

        <button onClick={()=>setFilter('all')}>all</button>
        <button onClick={handleCompleted}>completed</button>
        <button onClick={handleUpcoming}>upcomming</button>
        
        {
            editing.isEditing && <button  type = 'submit' onClick={()=>{console.log('updated')}}>edit</button> 
        }

        {
            editing.isEditing && <EditingForm editing={editing.isEditing} id={editing.id} todos={todos}/>
        }

        <ul className='box'>
            {
               filterTodos.length > 0 && filterTodos.map((todo) => {
                    return <li key={todo.id}>
                        <h3 style={{ textDecoration: todo.completed ? 'line-through' : 'none'}}>{todo.title}</h3>
                        <p>{todo.deadline}</p>
                        <b>{todo.priority}</b>
                        <div>
                            {
                                todo.tags.map((tag, i) => {
                                    return <span key={i}>{tag}{', '}</span>
                                })
                            }
                        </div>
                        <i>{todo.completed ? "completed" : 'not completed'} </i>
                        <button onClick={()=>{handleEdit(todo.id)}}>edit</button>
                        <button onClick={()=>{dispatch(completedTodo(todo.id))}}>{todo.completed ? "not completed" : 'completed'}</button>
                        <button onClick={()=>{dispatch(deleteTodo(todo.id))}}>Delete</button>
                    </li>
                })
            }
        </ul>
    </div>
  )
}

export default TaskManager