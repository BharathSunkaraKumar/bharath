import React from 'react'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import Homepage from './pages/Homepage'
import MainLayout from './layouts/MainLayout'
import Jobjs from './pages/Jobjs'
import PageNotFound from './pages/PageNotFound'
import JobPage, {jobLoader} from './pages/JobPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element={<Homepage/>} />
      <Route path='/jobs' element={<Jobjs/>} />
      <Route path='/job/:id' element={<JobPage/>} loader={jobLoader}/>
      <Route path='*' element={<PageNotFound/>} />
    </Route>
  )
)


const App = () => {
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App