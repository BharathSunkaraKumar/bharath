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


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
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