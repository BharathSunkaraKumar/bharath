
import './App.css'
import Counter from './features/counter/Counter'
import Countries from './features/countries/Countries'
import TodoList from './features/todolist/TodoList'
import Form from './formik/Form'
import { Link } from 'react-router'
import { Outlet } from 'react-router'
function App() {
  return (
    <>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/todolist'>TodoList</Link>
        <Link to='/countries'>countries</Link>
        <Link to='/products'>produts</Link>
        <Link to='/addproducts'>add produt</Link>
        <Link to='/counter'>counter</Link>
        <Outlet/>
      </div>
    </>
  )
}

export default App
