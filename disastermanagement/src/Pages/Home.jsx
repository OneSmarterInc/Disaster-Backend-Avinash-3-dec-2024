import React from "react";
import {
  Box,
  Heading,
  Input,
} from "@chakra-ui/react";
import warehouse from "../Images/dataware.jpg";
import serverroom from "../Images/serverroom.jpg"
import { useNavigate } from "react-router-dom";
import "./Home.css"

const Home = () => {

  const navigate = useNavigate();

  const handleSubmit = ()=>{
    navigate("/intro")
  }
  return (
    <>
      <Box
        bgPosition={"center"}
        bgSize={"cover"}
        bgRepeat={"no-repeat"}
        bgImage={serverroom}
        filter={"blur(4px)"}
        h={"100vh"}
      ></Box>

      <Box w={"30%"} position={"absolute"} top={"17%"} left={"34%"}>
        <Heading color={"white"} fontFamily={"Fredoka"} size={"2xl"} mb={5}>Welcome</Heading>
        <Heading color={"white"} fontFamily={"Fredoka"} mb={5}>To</Heading>
        <Heading color={"white"} fontFamily={"Fredoka"} mb={"10"} >Disaster Recovery Business Case</Heading>
        <Box m={"auto"} fontFamily={"Fredoka"} >
          <Input
            h={"65px"}
            fontSize={25}
            borderRadius={35}
            // opacity={"0.65"}
            bgColor={"white"}
            type="text"
            placeholder="Enter your name..."
            pl={6}
          />
          <Input
          id="start"
            cursor={"pointer"} 
            mt={10}
            type="submit"
            value={"Start"}
            w={"35%"}
            h={"50px"}
            borderRadius={"28"}
            fontSize={25}
            // opacity={"0.65"}
            bgColor={"white"}
            fontWeight={500}
            fontFamily={"Fredoka"}
            onClick={handleSubmit}
          />
        </Box>
      </Box>
    </>
  );
};

export default Home;
