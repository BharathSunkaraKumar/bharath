import React from 'react'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import Homepage from './pages/Homepage'
import MainLayout from './layouts/MainLayout'
import Jobjs from './pages/Jobjs'
import PageNotFound from './pages/PageNotFound'
import JobPage, {jobLoader} from './pages/JobPage'
import Addjob from './pages/Addjob'
import Accordion from './components/accordion/Accordion'


const addjob = async(newjob) => {
    const resp = await fetch("http://localhost:8000/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newjob)
    })
    return
    // console.log(newjob)
}

const App = () => {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<Homepage/>} />
        <Route path='/jobs' element={<Jobjs/>} />
        <Route path='/addjob' element={<Addjob addJobSubmit={addjob}/>}  />
        <Route path='/job/:id' element={<JobPage/>} loader={jobLoader}/>
        <Route path='*' element={<PageNotFound/>} />
      </Route>
    )
  )

  return (
    // <RouterProvider router={router}>
    
    // </RouterProvider>
    <>
      <Accordion/>
    </>
  )
}

export default App