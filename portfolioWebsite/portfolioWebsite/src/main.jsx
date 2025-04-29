import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import About from './components/about/About.jsx'
import LandingPage from './components/landing/LandingPage.jsx'
import Projects from './components/projects/Projects.jsx'
import Allprojects from './components/projects/Allprojects.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <LandingPage/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/projects',
        element: <Allprojects/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
