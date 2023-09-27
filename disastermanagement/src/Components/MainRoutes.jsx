import React from 'react'
import { Route, Routes} from 'react-router-dom'
import { motion } from 'framer-motion';

import Home from '../Pages/Home'
import Intro from '../Pages/Intro'
import Chat from '../Pages/Chat'
import GatherMoreDay1 from '../Pages/GatherMoreDay1'
import DiskDriveDay1 from '../Pages/DiskDriveDay1'
import BringDownDay1 from '../Pages/BringDownDay1'
import NotifyDay1 from '../Pages/NotifyDay1'
import Start from '../Pages/Start';


const pageVariants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

const MainRoutes = () => {
  return (
    <Routes>
      
      
        <Route path="/" element={
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
          ><Home/></motion.div>
          }  />
        <Route path='/intro' element={<motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
          ><Intro /></motion.div>}/>
        <Route path='/chat' element={<motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
          ><Chat/></motion.div>} />
        <Route path='/gathermore' element={<motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
          ><GatherMoreDay1 /></motion.div>}/>
        <Route path='/diskdrive' element={<motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
          ><DiskDriveDay1 /></motion.div>}/>
        <Route path='/bringdown' element={<motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
          ><BringDownDay1 /></motion.div>}/>
        <Route path='/notify' element={<motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
          ><NotifyDay1 /></motion.div>}/>
        <Route path='/start' element={<motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
          ><Start/></motion.div>} />
        
      
    </Routes>
  )
}

export default MainRoutes