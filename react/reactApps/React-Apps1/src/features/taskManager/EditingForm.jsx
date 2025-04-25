import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { editTodo } from './taskmanagerSlice'
import { useDispatch } from 'react-redux'


function EditingForm(props) {
    console.log(props)
    const [editTags, setEditTags] = useState()
    const dispacth = useDispatch()
    const findTodo = props.todos.find((e) => {
        return e.id === props.id
    })
    // console.log(findTodo)
    
    const editform = useFormik({
        initialValues: {},
        onSubmit: (values, {resetForm}) => {
            dispacth(editTodo(values))
            resetForm()
            
        }
       })
       useEffect(()=>{
        console.log(findTodo)
            editform.setValues(findTodo)
       }, [findTodo])
  return (
    <div className='box'>
        <h1>EditingForm</h1>
        {
           editTags && console.log(editTags)
        }
        <form onSubmit={editform.handleSubmit}>
            <input type='text' value={editform.values?.title || ''} name='title' placeholder='enter todo' onChange={editform.handleChange}/>
            <br/>
            {/* <input type='text' value={editform.values?.tags || ''} name='tags' placeholder='e.g. work urgent' onChange={editform.handleChange}/> */}
            {/* <br/> */}
            <input type='date' value={editform.values?.deadline || ''} name='deadline' placeholder='deadline' onChange={editform.handleChange}/>
            <br/>
            <select name='priority' value={editform.values?.priority || ''} onChange={editform.handleChange}>
                <option value='' disabled>priority</option>
                <option value='low'>low</option>
                <option value='medium'>medium</option>
                <option value='high'>high</option>
            </select>
            <br/>
            <button type='submit'>submit</button>
            
        </form>
    </div>
  )
}

export default EditingForm