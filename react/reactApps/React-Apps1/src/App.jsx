import { useState } from 'react'

import './App.css'
import User from './useReducer/User'
import TodoList from './useReducer/TodoList'
import StudentForm from './formik/StudentForm'
// import Component1 from './contex/Component1'
// import Darkmode from './darkMode/Darkmode'
// import Todo from './todoApp/Todo'
// import Cocktail from './cocktail/Cocktail'
// import Review from './reviewapp/Review'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <Todo/> */}
        {/* <Cocktail/> */}
        {/* <Review/> */}
        {/* <Darkmode/> */}
        {/* <Component1/> */}
        {/* <User/> */}
        {/* <TodoList/> */}
        <StudentForm/>
      </div>
    </>
  )
}

export default App
