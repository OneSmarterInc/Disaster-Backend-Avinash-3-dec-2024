import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import "./intro.css";
import { Link } from "react-router-dom";
import "./Info.css";

const Intro = () => {
  const isMobile = window.innerWidth <= 600; // Define your mobile breakpoint

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    localStorage.setItem("token",JSON.stringify("201"));
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      <Box w={"100%"}>
      <Box
          w={["90%", "70%"]} // Use responsive width based on screen size
          border={"1px solid black"}
          margin={"auto"}
          pb={10}
          mt={["5%", "2%"]}
          mb={["5%", "2%"]}  // Adjust margin based on screen size
          borderRadius={"50px"}
          pr={8} // Adjust padding based on screen size
          pl={8}
          pt={8}
          className="intro"
          style={{
            backgroundImage:
              "linear-gradient(252deg,#dea2a2 0%, #ebfffd 99.46%, #dea2a2 100%)",
          }}
          boxShadow="lg"
        >
          <Heading
           
           fontSize={["md", "3xl"]}
            
          >
            Introduction
          </Heading>
          <Text
            textAlign={"justify"}
            fontFamily={"Fredoka"}
            mt={"20px"}
            fontSize={["sm", "md"]} 
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
            fontSize={["sm", "md"]} 
          >
            Meet Ben Carter
          </Text>
          <Text
            textAlign={"justify"}
            fontFamily={"Fredoka"}
            mt={"20px"}
            fontSize={["sm", "md"]} 
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
            fontSize={["sm", "md"]} 
          >
            Simulation Setup
          </Text>
          <ul>
            <li>
              <Text
                textAlign={"justify"}
                fontFamily={"Fredoka"}
                mt={"10px"}
                fontSize={["sm", "md"]} 
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
                fontSize={["sm", "md"]} 
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
                fontSize={["sm", "md"]} 
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
                fontSize={["sm", "md"]} 
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
                fontSize={["sm", "md"]} 
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
              w={["100%", "28%"]} // Adjust button width based on screen size
              pt={isMobile ? 1 : 8}
              pb={isMobile ? 1 : 8}
              fontFamily={"Fredoka"}
              id="begin"
              bgColor={"black"}
              color={"white"}
              border={"1px solid black"}
              fontSize={["sm", "2xl"]} // Adjust font size based on screen size
              mt={["20px", "45px"]} // Adjust margin top based on screen size
            >
              Begin
            </Button>
          </Link>
        </Box>
      </Box>
      {/* <footer>
          <a
            href="mailto:vikram@vikramsethi.com"
            style={{ textDecoration: "none" }}
          >
            Copyright  
            &copy; 2023 Vikram Sethi All rights reserved
          </a>
        </footer> */}
    </Box>
  );
};

export default Intro;
