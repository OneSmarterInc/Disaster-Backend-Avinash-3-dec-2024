import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'

import Intro from '../Pages/Intro'

import Chat from '../Pages/Chat'


const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}  />

        <Route path='/intro' element={<Intro />}/>

        <Route path='/chat' element={<Chat/>} />

    </Routes>
  )
}

export default MainRoutes