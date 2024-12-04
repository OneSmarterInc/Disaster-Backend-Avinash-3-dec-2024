import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useState } from "react";
import bgImage from "../Images/entrybg.jpg";
import { useNavigate } from "react-router-dom";
import MyContext from "../Components/ContextApi/MyContext";

const AccessForm = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const {api} = useContext(MyContext);
  const redTextStyle = {
    color: "red",
  };

  

  const handleSubmit = async () => {
    

    let obj = {
      email,
      
    };

   

    // Proceed to add the entry to the database if the email format is valid
    try {
      if (!email) {
        toast({
          title: "Please enter your registered email.",
          status: "error",
          duration: 6000,
          isClosable: true,
          position: "top",
        });
        return; // Don't proceed if required fields are empty
      }

      setLoading(true);
      const response = await axios.post(
        `https://semantic.onesmarter.com/disaster/access`,
        obj
      );
      setLoading(false);

      if (response.status === 201) {
        // localStorage.setItem("token", JSON.stringify(response.status));
        toast({
          title: "Email verified. You are ready to play the simulation",
          status: "success",
          duration: 6000,
          isClosable: true,
          position: "top",
        });
        
        setEmail("");
        localStorage.setItem("token", JSON.stringify("201"));
        navigate("/DSRBC");
      } else if (response.status === 400) {
        toast({
          title: "Email is not registered.",
          description:
            "Please enter your registered email.",
          status: "error",
          duration: 6000,
          isClosable: true,
          position: "top",
        });
       
      } 
    } catch (error) {
    //   console.error("Error adding entry:", error);
      toast({
        title: "Email is not registered.",
        description:
            "Please enter your registered email.",
        status: "error",
        duration: 6000,
        isClosable: true,
        position: "top",
      });
      setLoading(false);
    }
  };

  return (
    <Box
      w={"100%"}
      bgImage={bgImage}
      bgSize={"cover"}
      h={"100vh"}
      bgRepeat={"no-repeat"}
    >
      <Box
        border={"0px solid black"}
        bg={"blue.50"}
        w={{ base: "90%", md: "40%" }}
        m={"auto"}
        pb={5}
        mt={{ base: 8, md: 5 }}
      >
        <Box textAlign={"left"} p={8} bg={"gray.200"}>
          <Heading size={"lg"}>
            Leading Through Disruption: An Executive Simulation on Disaster
            Management
          </Heading>
          <Text mt={2}>
            Please enter your registered email to verify
            <br /> Contact: support@disruptionsim.com
          </Text>
        </Box>
        <Box
          w={"90%"}
          m={"auto"}
          pl={{ base: 4, md: 10 }}
          pb={0}
          pr={{ base: 4, md: 10 }}
          pt={4}
          mt={{ base: 2, md: 5 }}
          textAlign={"left"}
        >
          <Text fontWeight={"bold"}>
            Email <sup style={redTextStyle}>*</sup>
          </Text>
          <VStack alignItems={"flex-start"}>
            <Input
              type="email"
              placeholder="Enter email"
              value={email}
              border={"1px solid gray"}
              onChange={(e) => setEmail(e.target.value)}
              w={"100%"}
            />
            <Text>Please enter email in the below format only: <br /> example@wright.edu</Text>
          </VStack>
        </Box>

        <Button
          w={{ base: "90%", md: "50%" }}
          m={"auto"}
          bgColor={"black"}
          color={"white"}
          onClick={handleSubmit}
          mt={5}
          isDisabled={loading === true}
        >
          {loading ? "Loading..." : "Verify Email"}
        </Button>
      </Box>
    </Box>
  );
};

export default AccessForm;
