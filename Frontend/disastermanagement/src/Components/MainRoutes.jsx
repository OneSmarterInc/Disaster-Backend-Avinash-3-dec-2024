import React from 'react'
import { Route, Routes} from 'react-router-dom'
import { motion } from 'framer-motion';

import Home from '../Pages/Home'
import Intro from '../Pages/Intro'
import Chat from '../Pages/Chat'
import Start from '../Pages/Start';
import { Login } from '../Pages/Login';
import { Signup } from '../Pages/Signup';



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
        <Route path='/DSRBC' element={<motion.div
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
        
        <Route path='/start' element={<motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
          ><Start/></motion.div>} />
        
        {/* <Route path='/debrief' element={<motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
          ><Debrief/></motion.div>} /> */}

    <Route path='/login' element={<Login />}/>
    <Route path='/signup' element={<Signup />}/>
      
    </Routes>
  )
}

export default MainRoutes