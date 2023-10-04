import { Box, Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import disasterLogo from "../Images/disasterLogo.png"
import Sidebar from '../Components/Sidebar'

const Start = () => {
  return (
    <Box h={"88vh"}>
    <Flex
      bgColor="#a1e8f0"
      fontFamily={"Croissant One"}
      justifyContent={"space-around"}
      alignItems={"center"}
      w={"100%"}
      m={"auto"}
      border={"1px solid black"}
      h={"20"}
      pr={40}
      pl={40}

    >
      <Image cursor={"pointer"} w={"12%"} src={disasterLogo} />
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