import React from "react";
import Navbar from "../Components/Navbar";
import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  Center,
  useColorModeValue,
} from "@chakra-ui/react";
import dataware from "../Images/dataware.jpg";
import { Link } from "react-router-dom";

const Info = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Box minH={"88vh"} p={4} mt={"30px"}>
        <Text fontSize={28} fontWeight={"bold"} textAlign="center" mt={4}>
          Leading Through Disruption: An Executive Simulation on Disaster
          Preparedness
        </Text>
        {/* <Flex
          flexWrap={{ base: "wrap", md: "nowrap" }}
          direction={{ base: "column", md: "row" }}
          mt={4}
          justify="center"
        > */}

        {/* <Box
            // w={{ base: "100%", md: "45%" }}
            w={'70%'}
            m={'auto'}
            p={4}
            textAlign="center"
            bg="white"
            boxShadow="lg"
            borderRadius="lg"
          >
           
          </Box> */}
        <Box
          // w={{ base: "100%", md: "45%" }}
          w={"70%"}
          m={"auto"}
          mt={'10px'}
          p={4}
          textAlign="center"
          bg="white"
          boxShadow="lg"
          borderRadius="lg"
        >
          {/* <Image src={dataware} alt="Data Center" /> */}
          <Text
            fontSize={16}
            textAlign="justify"
            color={useColorModeValue("black", "gray.800")}
          >
            In today's dynamic business environment, senior executives must be
            prepared for uncertainties. While technological advancements propel
            organizations to new heights, they also introduce vulnerabilities.
            Disaster recovery, often viewed through a purely technical lens, has
            profound strategic implications that can impact an organization's
            bottom line, reputation, and market position.
          </Text>
          <br />
          <Text
            fontSize={16}
            textAlign="justify"
            color={useColorModeValue("black", "gray.800")}
          >
            For senior executives, the challenge is not just to navigate the
            immediate aftermath of a disaster but to anticipate, prepare, and
            lead proactively. Their strategic vision and decision-making
            capabilities are pivotal in crafting disaster recovery plans that
            align with the organization's broader goals and stakeholder
            expectations.
          </Text>
          <br />
          <Text
            fontSize={16}
            textAlign="justify"
            color={useColorModeValue("black", "gray.800")}
          >
            This simulation is tailored for executives. Through immersive
            scenarios, executive participants will grapple with the multifaceted
            challenges of disaster recovery, gaining insights that transcend
            technical details and delve into strategic leadership during crises.
          </Text>
          <br />
          <Text
            fontSize={16}
            textAlign="justify"
            color={useColorModeValue("black", "gray.800")}
            fontWeight={"bold"}
          >
            Learning Objectives:
          </Text>
          <br />
          <Text
            fontSize={16}
            textAlign="justify"
            color={useColorModeValue("black", "gray.800")}
            fontWeight={"bold"}
          >
            Strategic Perspective on Disaster Recovery:
          </Text>
          <br />
          <Text
            fontSize={16}
            textAlign="justify"
            color={useColorModeValue("black", "gray.800")}
          >
            Grasp the broader business, reputational, and financial implications
            of disaster scenarios. Understand the strategic importance of
            proactive disaster recovery planning in safeguarding organizational
            value.
          </Text>
          <br/>
          <Text
            fontSize={16}
            textAlign="justify"
            color={useColorModeValue("black", "gray.800")}
            fontWeight={"bold"}
          >
            Leadership during Crisis:
          </Text>
          <br/>
          <Text
            fontSize={16}
            textAlign="justify"
            color={useColorModeValue("black", "gray.800")}
          >
            Cultivate the ability to lead with clarity, decisiveness, and vision
            during disruptions.
          </Text>
          <Text
            fontSize={16}
            textAlign="justify"
            color={useColorModeValue("black", "gray.800")}
          >
            Recognize the significance of transparent and timely communication
            with stakeholders at all levels.
          </Text>
          <br/>
          <Text
            fontSize={16}
            textAlign="justify"
            color={useColorModeValue("black", "gray.800")}
            fontWeight={"bold"}
          >
            Anticipatory Strategy Formulation:
          </Text>
          <br/>
          <Text
            fontSize={16}
            textAlign="justify"
            color={useColorModeValue("black", "gray.800")}
          >
            Analyze potential disaster scenarios, foreseeing their broader
            business implications.
          </Text>
          <Text
            fontSize={16}
            textAlign="justify"
            color={useColorModeValue("black", "gray.800")}
          >
            Develop strategies that ensure business continuity, safeguard
            stakeholder trust, and position the organization advantageously in
            post-disaster scenarios.
          </Text>
          <br/>
          <Text
            fontSize={16}
            textAlign="justify"
            color={useColorModeValue("black", "gray.800")}
            fontWeight={"bold"}
          >
            Stakeholder Management and Communication:{" "}
          </Text>
          <br/>
          <Text
            fontSize={16}
            textAlign="justify"
            color={useColorModeValue("black", "gray.800")}
          >
            Home skills to manage stakeholder expectations during crises,
            balancing transparency with reassurance.
          </Text>
          <Text
            fontSize={16}
            textAlign="justify"
            color={useColorModeValue("black", "gray.800")}
          >
            Understand the nuances of effective crisis communication, both
            internally and externally.
          </Text>
          <br/>
          <Text
            fontSize={16}
            textAlign="justify"
            color={useColorModeValue("black", "gray.800")}
            fontWeight={"bold"}
          >
            Collaborative Leadership:
          </Text>
          <br/>
          <Text
            fontSize={16}
            textAlign="justify"
            color={useColorModeValue("black", "gray.800")}
          >
            Foster cross-functional collaboration, ensuring that technical and
            strategic teams align in their disaster response efforts.
          </Text>
          <Text
            fontSize={16}
            textAlign="justify"
            color={useColorModeValue("black", "gray.800")}
          >
            Appreciate the value of diverse perspectives in formulating robust
            disaster recovery strategies.
          </Text>
          <br/>
          <Text
            fontSize={16}
            textAlign="justify"
            color={useColorModeValue("black", "gray.800")}
            fontWeight={"bold"}
          >
            Reflective Leadership and Continuous Improvement:
          </Text>
          <br/>
          <Text
            fontSize={16}
            textAlign="justify"
            color={useColorModeValue("black", "gray.800")}
          >
            Use the insights from the simulation to reflect on potential
            vulnerabilities in current organizational strategies.
          </Text>
          <Text
            fontSize={16}
            textAlign="justify"
            color={useColorModeValue("black", "gray.800")}
          >
            Drive a culture of continuous improvement, adapting and refining
            disaster recovery strategies in line with emerging risks and best
            practices. Incorporating this simulation into executive education
            programs will empower senior leaders to approach disaster recovery
            not as a technical afterthought but as a core strategic component in
            their leadership toolkit. As they navigate the challenges of the
            digital age, this understanding will be pivotal in ensuring
            organizational resilience, stakeholder trust, and sustained success.
          </Text>
        </Box>

        {/* </Flex> */}
        <Center mt={4}>
          <Button bgColor="#35A6F5" px={6} py={3}>
            <Link to={"/DSRBC"}>Start</Link>
          </Button>
        </Center>
      </Box>
    </>
  );
};

export default Info;
