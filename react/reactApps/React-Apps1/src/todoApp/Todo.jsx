import { useState } from "react";
import './Todo.css'
const Todo = (() => {
    
    const [input, setInput] = useState({
        todo: '',
        id:''
    })

    const [list, setList] = useState([])
    const [editingItem, setEditingItem] = useState({
        id:'',
        isEditing: false
    })

    const handleInput = (e) => {
        setInput({
            ...input,
            todo: e.target.value,
        })
        
    }
    const handleAdd = () => {
        
        let newTodos = {
            todo: input.todo,
            id: new Date().getTime().toString()
        }
        setList([
            ...list,
            newTodos
        ])
        setInput({
            todo: '',
            id: ''
        })

    }
    const handleDelete = (id) => {
    
        let newList = list.filter((e) => {
            return e.id != id
        })
        console.log(newList)
        setList(newList)

    }

    const handleEdit = (id) => {
        
        setEditingItem({
            ...editingItem,
            id: id,
            isEditing: true
        })
        let editingTodo = list.find((e) => {
            return e.id === id
        })
        console.log(editingTodo)
        setInput({
            ...input,
            todo: editingTodo.todo,
            id: editingTodo.id
        })
    }

    const handleConfirmEdit = () => {
        let newTodos = list.map((e) => {
            if(e.id === editingItem.id) {
                return{
                    todo: input.todo,
                    id: editingItem.id
                }
            }else{
                return e
            }
        })
        setList(newTodos)
        setInput({
            todo: '',
            id: ''
        })
    }
    return(
        <div>
            <div className="inputbox">
                <input
                    type='text' 
                    id="todo" 
                    placeholder="Enter todos"
                    value={input.todo}
                    onChange={handleInput}
                />
                {editingItem.isEditing ? <button onClick={handleConfirmEdit}>Edit</button> : (
                    <button onClick={handleAdd}>Add</button>
                )}
                
            </div>
            <hr/>
            {list.length == 0 && <h3 style={{textAlign: 'center'}}>There is NO todos</h3>}
            <ul className="list">
            {
                list.map((e,i) => {
                    return  <li key={i}>
                                <span>{e.todo}</span>
                                <button onClick={()=>handleDelete(e.id)}>Delete</button>
                                <button onClick={()=>handleEdit(e.id)}>Edit</button>
                            </li>
                })
            }
            </ul>
        </div>
    )
})

export default Todo;