import { Box, Flex, Heading, Image } from '@chakra-ui/react'
import React, { useContext } from 'react'
import disasterLogo from "../Images/disasterLogo.png"
import Sidebar from '../Components/Sidebar'
import {AiOutlineMail} from "react-icons/ai"
import MyContext from '../Components/ContextApi/MyContext'

const Start = () => {
  const {head}  = useContext(MyContext);
  return (
    <Box h={"88vh"}>
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
      <Heading mr={80} size={"md"} fontFamily={"Fredoka"} >
        {head}
      </Heading>
      <AiOutlineMail size={'30px'} cursor={'pointer'}/>
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