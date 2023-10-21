import React from "react";
import {
  Box,
  Heading,
  Input,
  Flex,Text,Button
} from "@chakra-ui/react";
import warehouse from "../Images/dataware.jpg";
import serverroom from "../Images/serverroom.jpg"

import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import Navbar from "../Components/Navbar";


const Home = () => {

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/DSRBC")
  }
  return (
    <>
    {/* <Navbar /> */}

      <Box
        bgPosition={"center"}
        bgSize={"cover"}
        bgRepeat={"no-repeat"}
        bgImage={serverroom}
        filter={"blur(4px)"}
        h={"89vh"}
      ></Box>

      <Box w={"80%"} position={"absolute"} top={"20%"} left={"10%"} h={"77vh"} m={"auto"}>
        <Heading color={"white"}>All Simulations</Heading>
       <br />
       <br />
       <br />
        <Flex m={"auto"} fontFamily={"Fredoka"} w={"80%"} gap={20}>
          <Text color={"white"} fontSize={"30px"}> 1. Disaster Recovery Business Case</Text>
          <Button mt={"1px"}><Link to={""}>Run Simulation</Link></Button>
        </Flex>
        {/* <br />
        <Flex m={"auto"} fontFamily={"Fredoka"} w={"80%"} gap={20}>
          <Text color={"white"} fontSize={"30px"}> 2. Disaster</Text>
          <Button mt={"1px"}><Link to={"/"}>Run Simulation</Link></Button>
        </Flex> */}
      </Box>

    </>
  );
};

export default Home;
