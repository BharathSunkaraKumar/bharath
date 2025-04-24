import { useFormik } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, completedTodo } from './taskmanagerSlice'

function TaskManager() {
   const todos = useSelector(state => state.tm.todos)
   const dispatch = useDispatch()
   const newId = todos.length > 0 ? todos[todos.length -1 ].id + 1 : 1
//    console.log(todos[todos.length-1])
//    console.log(newId)
   const todoform = useFormik({
    initialValues: {
        
        title: '',
        completed: false,
        tags: [],
        tagInputs: '',
        deadline: '',
        priority: ""
    },
    onSubmit: (values, {resetForm}) => {

        let input = todoform.values.tagInputs.trim()
        let newTags = []
        if(input) {
            newTags = input.split(',').map(tag => tag.trim()).filter(tag => tag)
        }
        

        const newTodo = {
            ...values,
            tags: [...values.tags, ...newTags],
            id: todos.length > 0 ? todos[todos.length -1 ].id + 1 : 1
        }

        dispatch(addTodo(newTodo))
        resetForm()
    }
   })
  return (
    <div className='box'>
        <h1>TaskManager</h1>
        <form onSubmit={todoform.handleSubmit}>
            <input type='text' value={todoform.values.title} name='title' placeholder='enter todo' onChange={todoform.handleChange}/>
            <br/>
            <input type='text' value={todoform.values.tagInputs} name='tagInputs' placeholder='e.g. work urgent' onChange={todoform.handleChange}/>
            <br/>
            <input type='date' value={todoform.values.deadline} name='deadline' placeholder='deadline' onChange={todoform.handleChange}/>
            <br/>
            <select name='priority' value={todoform.values.priority} onChange={todoform.handleChange}>
                <option value='' disabled>priority</option>
                <option value='low'>low</option>
                <option value='medium'>medium</option>
                <option value='high'>high</option>
            </select>
            <br/>
            <button type='submit'>add</button>
        </form>
        <ul className='box'>
            {
                todos.map((todo) => {
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
                        <button onClick={()=>{dispatch(completedTodo(todo.id))}}>{todo.completed ? "not completed" : 'completed'}</button>
                    </li>
                })
            }
        </ul>
    </div>
  )
}

export default TaskManager