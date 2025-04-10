import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import{
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Home from './routing/Home.jsx'
import Countries from './routing/Countries.jsx'
import CountryDetails from './routing/CountryDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
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
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)

{/* <App />
</RouterProvider>, */}