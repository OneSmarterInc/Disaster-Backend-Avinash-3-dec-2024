import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import "./Result.css";
import AnalysisOfBen from '../Components/AnalysisOfBen';
import BenAwareness from '../Components/BenAwareness';
import DimensionMatrix from '../Components/DimensionMatrix';
import LeadershipFramework from '../Components/LeadershipFramework';
import Drform from '../Components/Drform';

const Result = () => {
  return (
    <>
    <Flex
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
    </Flex>
    <Box id='container'>
      <AnalysisOfBen />
      <DimensionMatrix/>
      <LeadershipFramework/>
      <BenAwareness/>
    </Box>
    <Drform/>
    </>
  )
}

export default Result