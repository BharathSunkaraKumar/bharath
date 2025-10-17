import React from 'react'

const TodoList = () => {
  return (
    <div className='p-4'>
        <h1 className='font-bold text-2xl text-blue-600'>TodoList</h1>
        <div>
            <input className="px-8 border-2 border-gray-500 py-5 !border" placeholder='enter todo' />
        </div>
    </div>
  )
}

export default TodoList