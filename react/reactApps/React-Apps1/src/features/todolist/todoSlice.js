import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todoList: ['sbk', 'javascript', 'react', 'backend']
}

export const todoSlice = createSlice({
    name: 'todolist',
    initialState,
    reducers : {
        addTodo: (state, action) => {
            state.todoList.push(action.payload)
        },
        deleteTodo : (state, action) => {
            state.todoList.splice(action.payload, 1)
        }
    }
})

export let {addTodo, deleteTodo} = todoSlice.actions;
export default todoSlice.reducer;
