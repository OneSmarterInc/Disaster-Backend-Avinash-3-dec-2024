import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Chat from '../Pages/Chat'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path='/chat' element={<Chat/>} />
    </Routes>
  )
}

export default MainRoutes