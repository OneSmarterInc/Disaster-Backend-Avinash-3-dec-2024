import React from "react";
import Navbar from "../Components/Navbar";
import { Box, Button, Flex, Image, Text, Center, useColorModeValue } from "@chakra-ui/react";
import dataware from "../Images/dataware.jpg";
import { Link } from "react-router-dom";

const Info = () => {
  return (
    <>
      <Navbar />
      <Box minH={"88vh"} p={4}>
        <Text fontSize={28} fontWeight={"bold"} textAlign="center" mt={4}>
          Disaster Recovery Business Case
        </Text>
        <Flex
          flexWrap={{ base: "wrap", md: "nowrap" }}
          direction={{ base: "column", md: "row" }}
          mt={4}
          justify="center"
        >
          <Box w={{ base: "100%", md: "45%" }} p={4} textAlign="center" bg="white" boxShadow="lg" borderRadius="lg">
            <Text fontSize={16} textAlign="justify" color={useColorModeValue('black', 'gray.800')}>
              Over the course of several days, we will follow the CIO's journey
              as he navigates through a major data center incident that
              threatens to disrupt critical business operations. We will delve
              into the key decision points faced by the CIO and the IT team,
              such as whether to involve vendors, how to communicate with
              internal and external stakeholders, and the difficult choices
              surrounding data recovery methods. As the incident unfolds, we
              will witness the resilience and determination of the team as they
              work tirelessly to restore operations and manage the crisis's
              aftermath. This gripping narrative sheds light on the intricacies
              of handling a data center crisis in a Fortune 500 company and
              underscores the importance of preparedness.
            </Text>
            
          </Box>
          <Box w={{ base: "100%", md: "45%" }} p={4}>
            <Image src={dataware} alt="Data Center" />
          </Box>
        </Flex>
        <Center mt={4}>
              <Button bgColor="#35A6F5" px={6} py={3}>
                <Link to={"/DSRBC"}>
                    Start
                </Link>
              </Button>
            </Center>
      </Box>
    </>
  );
};

export default Info;
