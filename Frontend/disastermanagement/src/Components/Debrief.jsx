import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import "./Debrief.css";
import AnalysisOfBen from './AnalysisOfBen';
import BenAwareness from './BenAwareness';
import DimensionMatrix from './DimensionMatrix';
import LeadershipFramework from './LeadershipFramework';
import Drform from './Drform';

const Debrief = () => {
  return (
    <>
    <Box id='container' bg={"gray.300"} >
      <AnalysisOfBen />
      <DimensionMatrix/>
      <LeadershipFramework/>
      {/* <BenAwareness/> */}
    </Box>
    </>
  )
}

export default Debrief