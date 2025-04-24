import { createSlice, Tuple } from "@reduxjs/toolkit";

const initialState = {
    todos : [
        {
            id:1,
            title: 'Buy groceries',
            completed: false,
            tags: ["shopping", 'urgent'],
            deadline: '2025-04-25',
            priority: "high"
        }
    ]
}

export const taskManagerSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },
        completedTodo: (state, action) => {
            const completedTodo = state.todos.find((todo) =>todo.id == action.payload )
            if(completedTodo) {
                completedTodo.completed = !completedTodo.completed
            }
        }
    }
})

export const {addTodo, completedTodo} = taskManagerSlice.actions;
export default taskManagerSlice.reducer; 