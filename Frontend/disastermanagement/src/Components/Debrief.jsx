import { Box } from "@chakra-ui/react";
import React from "react";
import "./Debrief.css";
import AnalysisOfBen from "./AnalysisOfBen";
import DimensionMatrix from "./DimensionMatrix";
import LeadershipFramework from "./LeadershipFramework";
import FinalThoughts from "./FinalThoughts";

const Debrief = () => {
  return (
    <>
      <Box id="container">
        <AnalysisOfBen />
        <DimensionMatrix />
        <LeadershipFramework />
        <FinalThoughts />
      </Box>
    </>
  );
};

export default Debrief;
