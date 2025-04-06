import { useState } from 'react'

import './App.css'
// import Todo from './todoApp/Todo'
// import Cocktail from './cocktail/Cocktail'
import Review from './reviewapp/Review'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <Todo/> */}
        {/* <Cocktail/> */}
        <Review/>
      </div>
    </>
  )
}

export default App
