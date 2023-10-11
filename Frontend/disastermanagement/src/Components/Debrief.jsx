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
    {/* <Flex
      bgColor="#691212"
      fontFamily={"Croissant One"}
      justifyContent={"space-between"}
      alignItems={"center"}
      w={"100%"}
      m={"auto"}
      border={"1px solid black"}
      h={"20"}
      pl={5}
      pr={5}
      color={"white"}
    >
      <Heading fontFamily={"Fredoka"} >
        Disaster Recovery Business Case
      </Heading>
    </Flex> */}
    <Box id='container'  >
      <AnalysisOfBen />
      <DimensionMatrix/>
      <LeadershipFramework/>
      <BenAwareness/>
    </Box>
    <Drform/>
    </>
  )
}

export default Debrief