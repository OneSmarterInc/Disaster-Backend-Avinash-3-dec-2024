import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useContext, useEffect, useRef, useState } from "react";

import { CSSTransition, TransitionGroup } from "react-transition-group";
import {
  dayOneMorning,
  dayOneEvening,
  dayTwoEarlyMorning,
  dayTwoLateMorning,
  dayThreeMorning,
  dayFourMorning,
} from "../mainData";
import MyContext from "../Components/ContextApi/MyContext";

import bensphone from "../Images/bensphone.jpg";
import figma from "./userImages/figma.jpg";
import day2morning from "./Day2/day2morning.png";
import officebuzz from "./userImages/officebuzz.jpg";
import morninglight from "./userImages/morninglight.jpg";
import kateben from "./userImages/kateben.jpg";



const PreviousChat = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [chatPaused, setChatPaused] = useState(false);
  const [imgsrc, setImgSrc] = useState(bensphone);
  const chatContainerRef = useRef(null);
  const { setShowCloseBtn, component } = useContext(MyContext);

  // Define the mapping object for components
  const componentDataMap = {
    bringdown: dayOneMorning,
    earlymorning2: dayOneEvening,
    latemorning2: dayTwoEarlyMorning,
    morning3: dayTwoLateMorning,
    morning4: dayThreeMorning,
    morning5: dayFourMorning,
    // Add more components as needed
  };

  // Set the component data based on the mapping
  const componentData = componentDataMap[component] || [];

  useEffect(() => {
    setShowCloseBtn(true);
    setChatPaused(true);
  }, [component]);

  const isMobile = window.innerWidth <= 600;

  return (
    <>
      <Button onClick={onOpen} disabled={component === "chat"}>
        Previous
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size={"6xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Box
              border={"0px solid red"}
              w={"100%"}
              m={"auto"}
              h={isMobile ? "100%" : "88vh"}
              display="flex"
              flexWrap="wrap"
            >
              <Flex h={"88vh"}>
                <Box
                  h={isMobile ? "100%" : "88vh"}
                  w={isMobile ? "100%" : "100%"}
                  border="0px solid red"
                  overflow="auto"
                  ref={chatContainerRef}
                  pb={5}
                  bgImage={
                    (component === "bringdown" && bensphone) ||
                    (component === "earlymorning2" && figma) ||
                    (component === "latemorning2" && day2morning) ||
                    (component === "morning3" && officebuzz) ||
                    (component === "morning4" && morninglight) ||
                    (component === "morning5" && kateben)
                  }
                  bgRepeat="no-repeat"
                  bgSize={isMobile ? "cover" : "cover"}
                  bgPosition={isMobile ? "center" : "none"}
                  display="flex"
                  flexDirection="column"
                  alignItems={isMobile ? "center" : "flex-start"}
                >
                  <Box
                    w={isMobile ? "100%" : "90%"}
                    pl={isMobile ? 2 : 5}
                    pr={isMobile ? 2 : 5}
                    m={"0 auto"}
                    mt={3}
                    h={"68vh"}
                  >
                    <TransitionGroup>
                      {componentData.map((el, i) => {
                        const isCIO = el.sender === "Ben Carter";
                        const messageClass = isCIO
                          ? "KateSullivan"
                          : "BenCarter";
                        return (
                          <CSSTransition
                            key={i}
                            classNames="message"
                            timeout={{ enter: 300, exit: 300 }}
                          >
                            <Box
                              key={i}
                              border="0px solid white"
                              w={"100%"}
                              display="flex"
                              flexDirection="column"
                              alignItems={isCIO ? "flex-start" : "flex-end"}
                              className={`message ${messageClass} ${
                                el.sender === "Ben Carter"
                                  ? "BenCarter"
                                  : "KateSullivan"
                              }`}
                              mb={4}
                            >
                              <Box
                                boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
                                border="0px solid red"
                                bgColor={
                                  el.sender === "Ben Carter"
                                    ? "#f0f0f0"
                                    : "#030405"
                                }
                                color={
                                  el.sender === "Ben Carter" ? "black" : "white"
                                }
                                w={isMobile ? "70%" : "50%"}
                                borderRadius="10px"
                                textAlign={isMobile ? "left" : "justify"}
                                p={isMobile ? 2 : 4}
                                pl={isMobile ? 3 : 5}
                                pr={isMobile ? 3 : 5}
                                fontSize={isMobile ? "12px" : "15px"}
                              >
                                <Text>
                                  <span id="sender">{el.sender}</span>:{" "}
                                  {el.message}
                                </Text>
                              </Box>
                            </Box>
                          </CSSTransition>
                        );
                      })}
                    </TransitionGroup>
                  </Box>
                </Box>
              </Flex>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PreviousChat;
