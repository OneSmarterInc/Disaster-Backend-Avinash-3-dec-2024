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
import MyContext from "../Components/ContextApi/MyContext";

// TEMPORARY: DB is unavailable, so skip the backend call and always respond
// with the "email already registered" message. Set to false to restore the API call.
const BYPASS_AUTH = true;

const EntryForm = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [areaCode, setAreaCode] = useState("");
  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const {api} = useContext(MyContext)
  const redTextStyle = {
    color: "red",
  };

  const isValidEmail = (email) => {
    // Regular expression for basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async () => {
    let link =
      "www.disruptionsim.com/accessform";

    let obj = {
      email,
      firstName,
      lastName,
      mobile,
      link,
      access:false
    };

    if (!isValidEmail(obj.email)) {
      // console.error("Invalid email address.");
      toast({
        title: "Email is not valid",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      return; // Don't proceed if the email format is invalid
    }

    // Proceed to add the entry to the database if the email format is valid
    try {
      if (!firstName || !lastName || !email) {
        toast({
          title: "Please fill all the fields",
          description: "Firstname, Lastname, and Email are compulsory",
          status: "error",
          duration: 6000,
          isClosable: true,
          position: "top",
        });
        return; // Don't proceed if required fields are empty
      }

      if (BYPASS_AUTH) {
        toast({
          title: "Email already registered and have access to the simulation",
          status: "error",
          duration: 6000,
          isClosable: true,
          position: "top",
        });
        return;
      }

      setLoading(true);
      const response = await axios.post(
        `https://semantic.onesmarter.com/disaster/entry/addentry`,
        obj
      );
      console.log(response)
      setLoading(false);

      if (response.status === 201) {
        // localStorage.setItem("token", JSON.stringify(response.status));
        toast({
          title: "Please check your email for the simulation link.",
          status: "success",
          duration: 6000,
          isClosable: true,
          position: "top",
        });
        setFirstName("");
        setLastName("");
        setEmail("");
        setMobile("");
      } else if (response.status === 202) {
        toast({
          title: "Welcome to our simulation!",
          description: "You have been placed on the wait list as we ramp up our capacity. We will be on touch shortly.",
          status: "success",
          duration: 6000,
          isClosable: true,
          position: "top",
        });
        setFirstName("");
        setLastName("");
        setEmail("");
        setMobile("");
      } else if (response.status === 203 && response.data.result === "Email already registered but don't have access") {
        toast({
          title: "You are already on our waitlist.",
          description: "We will contact you shortly.",
          status: "error",
          duration: 6000,
          isClosable: true,
          position: "top",
        });
      }
      else if(response.status == 203 && response.data.result === "Email already registered and have access"){
        toast({
          title: "Email already registered and have access to the simulation",
          status: "error",
          duration: 6000,
          isClosable: true,
          position: "top",
        });
      }
    } catch (error) {
      console.error("Error adding entry:", error);
      toast({
        title: "Error adding entry. Please try again.",
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
          Leading Through Disruption: An Executive Simulation on Disaster Management
        </Heading>
        <Text mt={2}>
          Please fill this form to get access to the simulation <br /> Contact:
          support@disruptionsim.com
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
          Full Name <sup style={redTextStyle}>*</sup>
        </Text>

        <HStack w={"100%"} spacing={4}>
          <VStack alignItems={"flex-start"} w={"50%"}>
            <Input
              w={"100%"}
              placeholder="Enter First Name"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              border={"1px solid gray"}
            />
            <Text>Firstname</Text>
          </VStack>
          <VStack alignItems={"flex-start"} w={"50%"}>
            <Input
              w={"100%"}
              placeholder="Enter Last Name"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              border={"1px solid gray"}
            />
            <Text>Lastname</Text>
          </VStack>
        </HStack>

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
            <Text>Email: for ex. example@example.com</Text>
          </VStack>

        <Text fontWeight={"bold"}>
          Mobile 
        </Text>
        <Input
          placeholder="Enter Mobile Number"
          type="number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          border={"1px solid gray"}
        />
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
        {loading ? "Loading..." : "GET ACCESS"}
        
      </Button>
    </Box>
  </Box>
  );
};

export default EntryForm;
