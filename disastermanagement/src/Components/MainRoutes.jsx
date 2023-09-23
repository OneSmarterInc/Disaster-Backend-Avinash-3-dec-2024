import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Intro from '../Pages/Intro'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path='/intro' element={<Intro />}/>
    </Routes>
  )
}

export default MainRoutes