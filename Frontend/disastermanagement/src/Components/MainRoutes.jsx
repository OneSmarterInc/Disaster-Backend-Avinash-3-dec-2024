import React from "react";
import { Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";

import Home from "../Pages/Home";
import Intro from "../Pages/Intro";
import Chat from "../Pages/Chat";
import Start from "../Pages/Start";
import { Login } from "../Pages/Login";
import { Signup } from "../Pages/Signup";
import Info from "../Pages/Info";
import GroupPage from "../Pages/GroupPage";
import Payment from "../Pages/Payment";
import BringDown from "./Day1/Day1Evening";
import EntryForm from "../Pages/EntryForm";
import { PrivateRoute } from "./PrivateRoute";
import AccessForm from "../Pages/Access";

const pageVariants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

const MainRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
          >
            <Info />
          </motion.div>
        }
      />
      <Route
        path="/DSRBC"
        element={
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
          >
            <PrivateRoute><Intro /></PrivateRoute>
            
          </motion.div>
        }
      />
      <Route
        path="/chat"
        element={
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
          >
            <PrivateRoute><Chat /></PrivateRoute>
            
          </motion.div>
        }
      />

      <Route
        path="/start"
        element={
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
          >
            <PrivateRoute><Start /></PrivateRoute>
            
          </motion.div>
        }
      />


      <Route path="/evening" element={<PrivateRoute><BringDown /></PrivateRoute> } />

      {/* <Route path="/info" element={<Info />} /> */}
      <Route path="/entryform" element={<EntryForm/>} />
      <Route path="/accessform" element={<AccessForm/>} />
    </Routes>
  );
};

export default MainRoutes;
