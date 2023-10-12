import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
import "./intro.css"
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <Box>
      {/* <Flex> */}
        {/* <Box
          w={"18%"}
          border={"1px solid black"}
          h={"100vh"}
          bg={"#f7fadc"}
        ></Box> */}
        <Box w={"100%"}>
          <Box
            w={"40%"}
            border={"1px solid black"}
            margin={"auto"}
            pb={10}
            mt={"2%"}
            borderRadius={"50px"}
            pr={10}
            pl={10}
            pt={10}
            className="intro"
            bgColor="#a09f9f"
            boxShadow={
              "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
            }
          >
            <Heading fontFamily={"Croissant One"} fontSize={42} fontStyle={"italic"}>Introduction !</Heading>
            <Text textAlign={'justify'} fontFamily={'Fredoka'} mt={'20px'} fontSize={"1rem"}>
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
              underscores the importance of preparedness, effective
              communication, and strategic decision-making in such high-stakes
              situations. It also reveals how unforeseen discoveries can
              significantly impact the outcome of a crisis and lead to
              unexpected resolutions.
            </Text>
            <Link to="/start">
            <Button w={"28%"} pt={8} pb={8} fontFamily={"Fredoka"} id="begin" bgColor={"black"} color={"white"} border={'1px solid black'} fontSize={30} mt={'45px'}>Begin</Button>
            </Link>
          </Box>
        </Box>
      {/* </Flex> */}
    </Box>
  );
};

export default Intro;
