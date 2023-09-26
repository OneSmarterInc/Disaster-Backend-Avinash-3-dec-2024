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
            border={"2px solid black"}
            margin={"auto"}
            h={"80vh"}
            mt={"70px"}
            borderRadius={"50px"}
            pr={'20px'}
            pl={'20px'}
            className="intro"
          >
            <Heading fontFamily={'Fredoka'} fontSize={40}>Introduction !</Heading>
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
            <Link to="/chat">
            <Button  border={'1px solid black'} mt={'45px'}>Begin</Button>
            </Link>
          </Box>
        </Box>
      {/* </Flex> */}
    </Box>
  );
};

export default Intro;
