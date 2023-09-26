import React from "react";
import {
  Box,
  Input,
} from "@chakra-ui/react";
import warehouse from "../Images/dataware.jpg";
import { useNavigate } from "react-router-dom";

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
        bgImage={warehouse}
        filter={"blur(2px)"}
        h={"100vh"}
      ></Box>

      <Box w={"30%"} position={"absolute"} top={"35%"} left={"34%"}>
        <Box m={"auto"} fontFamily={"Fredoka"} >
          <Input
            h={"65px"}
            fontSize={25}
            borderRadius={35}
            opacity={"0.65"}
            bgColor={"white"}
            type="text"
            placeholder="Enter your name..."
            pl={6}
          />
          <Input
            cursor={"pointer"} 
            mt={10}
            type="submit"
            value={"Start"}
            w={"35%"}
            h={"50px"}
            borderRadius={"28"}
            fontSize={25}
            opacity={"0.65"}
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
