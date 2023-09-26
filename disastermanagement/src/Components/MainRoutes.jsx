import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Intro from '../Pages/Intro'
import Chat from '../Pages/Chat'
import GatherMoreDay1 from '../Pages/GatherMoreDay1'
import DiskDriveDay1 from '../Pages/DiskDriveDay1'
import BringDownDay1 from '../Pages/BringDownDay1'
import NotifyDay1 from '../Pages/NotifyDay1'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path='/intro' element={<Intro />}/>
        <Route path='/chat' element={<Chat/>} />
        <Route path='/gathermore' element={<GatherMoreDay1 />}/>
        <Route path='/diskdrive' element={<DiskDriveDay1 />}/>
        <Route path='/bringdown' element={<BringDownDay1 />}/>
        <Route path='/notify' element={<NotifyDay1 />}/>

    </Routes>
  )
}

export default MainRoutes