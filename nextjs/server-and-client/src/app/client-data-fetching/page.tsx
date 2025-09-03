"use client"

import { useEffect, useState } from "react"

interface Todo {
    userId: number;
    id: string;
    title: string;
    completed: boolean
}

const TodoComponent = () => {
    const [todo, setTodo] = useState<Todo | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(()=> {
        const fetchData = async () => {
           try {
                 setError(null)
                const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
                if (!response.ok) {
                    throw new Error("Failed to fetch data")
                }
                const data = await response.json()
                setTodo(data)
           } catch (error) {
            if(error instanceof Error) {
                setError(error.message)
            }
           } finally{
            setLoading(false)
           }
        }
        fetchData()
    }, [])
    if(loading) {
        return <div>Loading...</div>
    }
    if(error) {
        return <div>error: {error}</div>
    }
    
    if(todo) {
        return (
            <div>
                <h1>Todo</h1>
                <p>
                    <strong>ID: {todo.id}</strong>
                </p>
                <p>
                    <strong>Title: {todo.title}</strong>
                </p>
                <p>
                    <strong>Completed: {todo.completed ? 'yes' : "no"}</strong>
                </p>
            </div>
        )
    }
    return null
}

export default TodoComponent