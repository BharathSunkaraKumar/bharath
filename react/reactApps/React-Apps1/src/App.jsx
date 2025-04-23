
import { useSelector } from 'react-redux'
import './App.css'
import Counter from './features/counter/Counter'
import Countries from './features/countries/Countries'
import TodoList from './features/todolist/TodoList'
import Form from './formik/Form'
import { Link } from 'react-router'
import { Outlet } from 'react-router'

function App() {
  const cartItems = useSelector(state => state.cart.cartItems)
  return (
    <>
      <div className='items'>
        <div className='item'>
          <Link to='/todolist'>TodoList</Link>
        </div>
        {/* <div className='item'>
          <Link to='/'>Home</Link>
        </div> */}
        <div className='item'>
          <Link to='/countries'>countries</Link>
        </div>
        <div className='item'
        >
          <Link to='/products'>products</Link>
        </div>
        <div className='item'>
          <Link to='/addproducts'>add product</Link>
        </div>
        <div className='item'>
          <Link to='/blog'>blog</Link> 
        </div>
        <div className='item'>
          <Link to='/cart'>cart--{cartItems.length}</Link>
        </div>
        {/* <div className='item'>
          <Link to='/counter'>counter</Link>
        </div> */}
      </div>
        <Outlet/>
    </>
  )
}

export default App
