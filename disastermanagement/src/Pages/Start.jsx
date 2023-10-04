import { Box, Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import disasterLogo from "../Images/disasterLogo.png"
import Sidebar from '../Components/Sidebar'

const Start = () => {
  return (
    <Box h={"88vh"}>
    <Flex
      bgColor="#691212"
      fontFamily={"Croissant One"}
      justifyContent={"flex-start"}
      alignItems={"center"}
      w={"100%"}
      m={"auto"}
      border={"1px solid black"}
      h={"20"}
      pl={5}
      color={"white"}
    >
      <Heading fontFamily={"Croissant One"} fontStyle={"italic"}>
        Disaster Recovery Business Case
      </Heading>
    </Flex>
    <Box
      fontFamily={"Fredoka"}
      border={"1px solid black"}
      w={"100%"}
      m={"auto"}
      h={"100%"}
    >
      
        <Sidebar />
      
    </Box>
    
  </Box>

  )
}

export default Start