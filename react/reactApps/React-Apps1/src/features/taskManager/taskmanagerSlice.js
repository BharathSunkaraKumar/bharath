import { createSlice, Tuple } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
    todos : [
        {
            id:1,
            title: 'Buy groceries',
            completed: false,
            tags: ["shopping", 'urgent'],
            deadline: '2025-04-25',
            priority: "high"
        },
        {
            id:2,
            title: 'bills',
            completed: true,
            tags: ["gold bills", 'loan bills'],
            deadline: '2025-04-22',
            priority: "high"
        },
        {
            id:3,
            title: 'gym',
            completed: false,
            tags: ["lads", 'biceps'],
            deadline: '2025-04-26',
            priority: "medium"
        }
    ]
}

export const taskManagerSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
            // state.todos.push({...action.payload, id:new Date().getTime().toString()})
        },
        completedTodo: (state, action) => {
            const completedTodo = state.todos.find((todo) =>todo.id == action.payload )
            if(completedTodo) {
                completedTodo.completed = !completedTodo.completed
            }
        },
        deleteTodo: (state, action) => {
            const newTodos = state.todos.filter(todo => action.payload !== todo.id)
            if(newTodos) {
                return {...state, todos:[...newTodos]}
            }
        },
        editTodo: (state, action) => {
           console.log(action)
           const todo = state.todos.find(todo => todo.id === action.payload.id)
           console.log(todo)
           if(todo) {
            todo.title = action.payload.title;
            todo.deadline = action.payload.deadline;
            todo.priority = action.payload.priority;
           }
        }
        
    }
})

export const {addTodo, completedTodo, deleteTodo, editTodo} = taskManagerSlice.actions;
export default taskManagerSlice.reducer; 