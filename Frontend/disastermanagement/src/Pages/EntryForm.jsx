import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import bgImage from "../Images/entrybg.jpg"

const EntryForm = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [areaCode, setAreaCode] = useState("");
  const [mobile, setMobile] = useState("");

  const isValidEmail = (email) => {
    // Regular expression for basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const redTextStyle = {
    color: 'red'
  };
  const handleSubmit = async () => {
    let link =
      "https://disastermanagement-9irk1pmi4-avinashkalmegh.vercel.app/DSRBC";

    let obj = {
      email,
      firstName,
      lastName,
      mobile,
      link,
    };

    if (!isValidEmail(obj.email)) {
      console.error("Invalid email address.");
      return; // Don't proceed if the email format is invalid
    }

    // Proceed to add the entry to the database if the email format is valid
    try {
      const response = await axios.post(
        "http://localhost:5500/api/entry/addentry",
        obj
      );
      console.log("Entry added successfully:", response.status);
      if (response.status === 201) {
        localStorage.setItem("token", JSON.stringify(response.status));
      }
    } catch (error) {
      console.error("Error adding entry:", error.message);
    }
  };

  return (
    <Box w={"100%"} bgImage={bgImage} bgSize={"cover"}  h={"100vh"} bgRepeat={"no-repeat"}>
    <Box border={"0px solid black"} bg={"blue.50"} w={"40%"} m={"auto"} pb={5} mt={5}>
      <Box textAlign={"left"} p={8} bg={"gray.200"}>
        <Heading size={"lg"}> Disaster Management Simulation</Heading>
        <Text>
          Please fill this form to get access of simulation Contact : <br />{" "}
          vikram@vikramsethi.com
        </Text>
      </Box>
      <Box w={"90%"} m={"auto"} pl={10} pb={0} pr={10} pt={4}  mt={5} textAlign={"left"}>
            <Text fontWeight={"bold"}>Full Name <sup style={redTextStyle}>*</sup></Text>
      
      <HStack w={"100%"}>
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
      </Box>
      <Box w={"90%"} m={"auto"} p={10}  mt={0} textAlign={"left"}>
        <Text fontWeight={"bold"}>Email <sup style={redTextStyle}>*</sup></Text>
        <VStack alignItems={"flex-start"}>
          <Input
            type="email"
            placeholder="Enter email"
            value={email}
            border={"1px solid gray"}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Text>Email : for ex. example@example.com</Text>
        </VStack>
      </Box>

      <VStack w={"90%"} m={"auto"} pl={10} pb={5} pr={10} pt={5}  alignItems={"flex-start"}>
        <Text fontWeight="bold">Mobile <sup style={redTextStyle}>*</sup></Text>
        <Input
          placeholder="Enter Mobile Number"
          type="number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          border={"1px solid gray"}
        />
      </VStack>

      <Button w="90%" m={"auto"} bgColor={"black"} color={"white"} onClick={handleSubmit}>
        SUBMIT
      </Button>
    </Box>
    </Box>
  );
};

export default EntryForm;
