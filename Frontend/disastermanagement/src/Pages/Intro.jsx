import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import "./intro.css";
import { Link } from "react-router-dom";

const Intro = () => {

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      <Box w={"100%"}>
        <Box
          w={"70%"}
          border={"1px solid black"}
          margin={"auto"}
          pb={10}
          mt={"2%"}
          borderRadius={"50px"}
          pr={10}
          pl={10}
          pt={10}
          className="intro"
          style={{
            backgroundImage:
              "linear-gradient(252deg,#dea2a2 0%, #ebfffd 99.46%, #dea2a2 100%)",
          }}
          boxShadow={
            "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
          }
        >
          <Heading
           
            fontSize={38}
            
          >
            Introduction
          </Heading>
          <Text
            textAlign={"justify"}
            fontFamily={"Fredoka"}
            mt={"20px"}
            fontSize={"1rem"}
          >
            Welcome to "Leading Through Disruption: An Executive Simulation on
            Disaster Preparedness," an immersive simulation tailored for
            executive conversations. As participants, you will be delving into
            the intricate world of disaster recovery, not merely from a
            technical vantage point, but from the perspective of strategic
            leadership during crises.
          </Text>

          <Text
            fontWeight={"bold"}
            textAlign={"justify"}
            fontFamily={"Fredoka"}
            mt={"20px"}
            fontSize={"1rem"}
          >
            Meet Ben Carter
          </Text>
          <Text
            textAlign={"justify"}
            fontFamily={"Fredoka"}
            mt={"20px"}
            fontSize={"1rem"}
          >
            Ben Carter is the seasoned Chief Information Officer (CIO) of
            OrionTech, a leading global tech firm renowned for its innovations
            and dominant market presence. With years of IT leadership under his
            belt, Ben has been pivotal in architecting OrionTech's robust
            digital infrastructure and ensuring its technological
            competitiveness. But in the world of IT, challenges lurk around
            every corner. Systems can fail, cyberattacks can threaten, and
            unforeseen disasters can disrupt.
          </Text>

          <Text
            fontWeight={"bold"}
            textAlign={"justify"}
            fontFamily={"Fredoka"}
            mt={"20px"}
            fontSize={"1rem"}
          >
            Simulation Setup
          </Text>
          <ul>
            <li>
              <Text
                textAlign={"justify"}
                fontFamily={"Fredoka"}
                mt={"10px"}
                fontSize={"1rem"}
              >
                Throughout this simulation, participants will be presented with a
                series of events that challenge OrionTech's operational resilience
                and Ben Carter's leadership capabilities. A specific event which
                spans several days - an unexpected server crash challenges the
                global operations of the company and could potentially threaten its
                very existence.
              </Text>
            </li>
            <li>
              <Text
                textAlign={"justify"}
                fontFamily={"Fredoka"}
                mt={"10px"}
                fontSize={"1rem"}
              >
                As the CIO, Ben, in collaboration with his tech team and other
                executive members, will be tasked with navigating these challenges.
                The goal is not only to ensure the technical recovery of systems but
                also to manage communications with stakeholders, make rapid
                strategic decisions, and maintain OrionTech's reputation in the
                market.
              </Text>
            </li>
            <li>
              <Text
                textAlign={"justify"}
                fontFamily={"Fredoka"}
                mt={"10px"}
                fontSize={"1rem"}
              >
                Participants will step into Ben's shoes, grappling with the
                immediate technical challenges while also strategizing on
                communication, stakeholder management, and business continuity.
              </Text>
            </li>
            <li>
              <Text
                textAlign={"justify"}
                fontFamily={"Fredoka"}
                mt={"10px"}
                fontSize={"1rem"}
              >
                Through this simulation, you will be exposed to the complexities of
                disaster recovery as Ben Carter facing them. Think about how you
                would prioritize, collaborate, and most crucially, lead with vision,
                agility, and assurance as watch Ben Carter's performance.
              </Text>
            </li>
            <li>
              <Text
                textAlign={"justify"}
                fontFamily={"Fredoka"}
                mt={"10px"}
                fontSize={"1rem"}
              >
                As you journey through the challenges presented in the simulation,
                remember: your decisions as a CIO significantly influence your own
                organization's trajectory during similar crises. It's about more
                than just technical recovery; it's about leadership, strategy, and
                ensuring the organization's resilience and continued success.
              </Text>
            </li>
          </ul>

          <Link to="/start">
            <Button
              w={"28%"}
              pt={8}
              pb={8}
              fontFamily={"Fredoka"}
              id="begin"
              bgColor={"black"}
              color={"white"}
              border={"1px solid black"}
              fontSize={30}
              mt={"45px"}
            >
              Begin
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Intro;
