import { Box, Text } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import "./Debrief.css";
import AnalysisOfBen from "./AnalysisOfBen";
import DimensionMatrix from "./DimensionMatrix";
import LeadershipFramework from "./LeadershipFramework";
import FinalThoughts from "./FinalThoughts";
import MyContext from "./ContextApi/MyContext";

const Debrief = () => {
  const isMobile = window.innerWidth <= 600; // Define your mobile breakpoint

  const {setHead} = useContext(MyContext);
  useEffect(()=>{
      setHead("")
  },[])
  return (
    <>
      
      <Box id="container"   >
        <AnalysisOfBen />
        <DimensionMatrix />
        <LeadershipFramework />
        <FinalThoughts />
      </Box>
      <Text color={"gray.100"}>
              -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
            </Text>
    </>
  );
};

export default Debrief;
