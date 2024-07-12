import React from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './Home'
import FormPage from './FormPage'


function RouterCompo() {
  return (
   <>
   <BrowserRouter>
   {/* <Link to='/'>Home</Link>
   <Link to='/form'>Form</Link> */}
   <Routes>
    <Route  path = '/' element = {<Home />}/>
    <Route  path = '/form' element = {<FormPage />}/>
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default RouterCompo