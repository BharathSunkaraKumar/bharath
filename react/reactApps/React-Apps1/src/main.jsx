import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import{
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import { store } from './app/store'
import { Provider } from 'react-redux'
import Countries from './features/countries/Countries.jsx'
import TodoList from './features/todolist/TodoList.jsx'
import Counter from './features/counter/Counter.jsx'
import Products from './features/products/Products.jsx'
import CountryDetails from './features/countries/CountryDetails.jsx'
import AddProduct from './features/products/AddProduct.jsx'
import EditProduct from './features/products/EditProduct.jsx'
import Blog from './features/blog/Blog.jsx'
import BlogDetails from './features/blog/BlogDetails.jsx'
import AddBlog from './features/blog/AddBlog.jsx'
import Editblog from './features/blog/Editblog.jsx'
// import Error from './routing/Error.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    // errorElement: <Error/>,
    children: [
      {
        path: '/countries',
        element: <Countries/>,
        children: [
          {
            path: 'countries/countryDetails/:cname',
          element: <CountryDetails/>
          }
        ]
      },
      {
        path: '/todolist',
        element: <TodoList/>
      },
      {
        path: '/counter',
        element: <Counter/>
      },
      {
        path: '/products',
        element: <Products/>
      },
      {
        path: '/addproducts',
        element: <AddProduct/>
      },
      {
        path: '/editproduct/:pid',
        element: <EditProduct/>
      },
      {
        path: '/blog',
        element: <Blog/>
      },
      {
        path: '/blogdetails/:bid',
        element: <BlogDetails/>
      },
      {
        path: '/addblog',
        element: <AddBlog/>
      },
      {
        path: '/editblog/:bid',
        element: <Editblog/>
      },
      {
        path: '/',
        element: <Products/>
      },
      
    ]
    // children: [
    //   {
    //     path: '/countries',
    //     element: <Countries/>,
    //     children: [
    //       {
    //         path: 'countries/countryDetails/:cname',
    //         element: <CountryDetails/>
    //       }
    //     ]
    //   },
    // ]
  }
])


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>,
)

{/* <App />
</RouterProvider>, */}