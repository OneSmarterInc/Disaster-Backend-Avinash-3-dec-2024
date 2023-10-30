import React, { useEffect } from "react";
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
import homepage from "../Images/homepage.jpg";

const Info = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      <Box
        minH={"88vh"}
        p={4}
        bgPosition={"center"}
        bgSize={"cover"}
        bgRepeat={"no-repeat"}
        bgImage={homepage}
        position="relative" // Add this line
      >
        <Box
          w={"90%"}
          m={"auto"}
          mt={"10px"}
          p={8}
          textAlign="center"
          bg="rgba(245, 255, 255, 0.8)" // Add a semi-transparent white background
          boxShadow="lg"
          borderRadius="lg"
        >
          <Text
            fontSize={24}
            fontWeight={"bold"}
            textAlign="center"
            mt={4}
            color={useColorModeValue("black", "white")}
          >
            Leading Through Disruption 
          </Text>
          <Text
            fontSize={24}
            fontWeight={"bold"}
            textAlign="center"
            mb={4}
            color={useColorModeValue("black", "white")}
          >
           An Executive Simulation on Disaster
            Managament <Text fontSize={17} display={"inline"} textAlign={"end"}>&#169;</Text>
          </Text>
          {/* ... Rest of your text content ... */}
          <Text
            fontSize={14}
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
            fontSize={14}
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
            fontSize={14}
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
            fontSize={14}
            textAlign="justify"
            color={useColorModeValue("black", "gray.800")}
            fontWeight={"bold"}
          >
            Learning Objectives:
          </Text>
          <br />
          <Text
            fontSize={14}
            textAlign="justify"
            color={useColorModeValue("black", "gray.800")}
            fontWeight={"bold"}
          >
            Strategic Perspective on Disaster Recovery:
          </Text>
          <ul>
            <li>
              <Text
                fontSize={14}
                textAlign="justify"
                color={useColorModeValue("black", "gray.800")}
              >
                Grasp the broader business, reputational, and financial
                implications of disaster scenarios. Understand the strategic
                importance of proactive disaster recovery planning in
                safeguarding organizational value.
              </Text>
            </li>
          </ul>
          <br />
          <Text
            fontSize={14}
            textAlign="justify"
            color={useColorModeValue("black", "gray.800")}
            fontWeight={"bold"}
          >
            Leadership during Crisis:
          </Text>
          <ul>
            <li>
              <Text
                fontSize={14}
                textAlign="justify"
                color={useColorModeValue("black", "gray.800")}
              >
                Cultivate the ability to lead with clarity, decisiveness, and
                vision during disruptions.
              </Text>
            </li>
            <li>
              <Text
                fontSize={14}
                textAlign="justify"
                color={useColorModeValue("black", "gray.800")}
              >
                Recognize the significance of transparent and timely
                communication with stakeholders at all levels.
              </Text>
            </li>
          </ul>
          <br />
          <Text
            fontSize={14}
            textAlign="justify"
            color={useColorModeValue("black", "gray.800")}
            fontWeight={"bold"}
          >
            Anticipatory Strategy Formulation:
          </Text>
          <ul>
            <li>
              <Text
                fontSize={14}
                textAlign="justify"
                color={useColorModeValue("black", "gray.800")}
              >
                Analyze potential disaster scenarios, foreseeing their broader
                business implications.
              </Text>
            </li>
            <li>
              <Text
                fontSize={14}
                textAlign="justify"
                color={useColorModeValue("black", "gray.800")}
              >
                Develop strategies that ensure business continuity, safeguard
                stakeholder trust, and position the organization advantageously
                in post-disaster scenarios.
              </Text>
            </li>
          </ul>
          <br />
          <Text
            fontSize={14}
            textAlign="justify"
            color={useColorModeValue("black", "gray.800")}
            fontWeight={"bold"}
          >
            Stakeholder Management and Communication:{" "}
          </Text>
          <ul>
            <li>
              <Text
                fontSize={14}
                textAlign="justify"
                color={useColorModeValue("black", "gray.800")}
              >
                Home skills to manage stakeholder expectations during crises,
                balancing transparency with reassurance.
              </Text>
            </li>
            <li>
              <Text
                fontSize={14}
                textAlign="justify"
                color={useColorModeValue("black", "gray.800")}
              >
                Understand the nuances of effective crisis communication, both
                internally and externally.
              </Text>
            </li>
          </ul>
          <br />
          <Text
            fontSize={14}
            textAlign="justify"
            color={useColorModeValue("black", "gray.800")}
            fontWeight={"bold"}
          >
            Collaborative Leadership:
          </Text>
          <ul>
            <li>
              <Text
                fontSize={14}
                textAlign="justify"
                color={useColorModeValue("black", "gray.800")}
              >
                Foster cross-functional collaboration, ensuring that technical
                and strategic teams align in their disaster response efforts.
              </Text>
            </li>
            <li>
              <Text
                fontSize={14}
                textAlign="justify"
                color={useColorModeValue("black", "gray.800")}
              >
                Appreciate the value of diverse perspectives in formulating
                robust disaster recovery strategies.
              </Text>
            </li>
          </ul>
          <br />
          <Text
            fontSize={14}
            textAlign="justify"
            color={useColorModeValue("black", "gray.800")}
            fontWeight={"bold"}
          >
            Reflective Leadership and Continuous Improvement:
          </Text>
          <ul>
            <li>
              <Text
                fontSize={14}
                textAlign="justify"
                color={useColorModeValue("black", "gray.800")}
              >
                Use the insights from the simulation to reflect on potential
                vulnerabilities in current organizational strategies.
              </Text>
            </li>
            <li>
              <Text
                fontSize={14}
                textAlign="justify"
                color={useColorModeValue("black", "gray.800")}
              >
                Drive a culture of continuous improvement, adapting and refining
                disaster recovery strategies in line with emerging risks and
                best practices.
              </Text>
            </li>
          </ul>
          <br/>
          <Text
            fontSize={14}
            textAlign="justify"
            color={useColorModeValue("black", "gray.800")}
          >
            Incorporating this simulation into executive education programs will
            empower senior leaders to approach disaster recovery not as a
            technical afterthought but as a core strategic component in their
            leadership toolkit. As they navigate the challenges of the digital
            age, this understanding will be pivotal in ensuring organizational
            resilience, stakeholder trust, and sustained success.
          </Text>
        </Box>

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




