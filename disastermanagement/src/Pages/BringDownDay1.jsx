import {
  ChakraProvider,
  extendTheme,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";

import { Box, Button, Flex, Heading, Text, Image } from "@chakra-ui/react";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

import "./Chat.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import disasterLogo from "../Images/disasterLogo.png";
import { useNavigate } from "react-router";

const BringDownDay1 = () => {
  const [chatData, setChatData] = useState([]);
  const [activeUser, setActiveUser] = useState(null);
  const [showBox, setShowBox] = useState(false);

  const [value, setValue] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const chatContainerRef = useRef(null);
  const spacerRef = useRef(null);

  const navigate = useNavigate();

  const handleClick = (option) => {
    setValue(option);
    setIsModalOpen(true);
  };

  const handleRedirect = () => {
    if (value === "Continue with the call to gather more information.") {
      // navigate("/gathermore");
    } else if (
      value === "Immediately include the disc drive vendor on the call"
    ) {
      // navigate("/diskdrive");
    } else if (
      value === "Immediately bring down ALL the remaining applications"
    ) {
      // navigate("/bringdown");
    // } else {
    //   navigate("/notify");
    }
  }
 
  

  const scrollToBottom = () => {
    const container = chatContainerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  };

  const users = [
    "CIO",
    "Tech Expert",
    "Storage Vendor",
    "Data Center",
    "Company Distribution",
  ];



  useEffect(() => {

    // Simulate messages from 5 users with a 2-second delay between each message
    const dayOne = [
      {
        sender: "CIO",
        message:
          " Alright, folks, here's the plan. We're bringing down all applications immediately. We might lose some data, but we can't risk further corruption.",
      },
      { sender: "Storage Vendor", message: "Understood. We'll send an email to the company and keep everyone informed." },
      {
        sender: "CIO",
        message:
          "Interestingly, our email and phone systems are fine, despite the storage issue. They use proprietary infrastructure",
      },
      {
        sender: "Storage Vendor",
        message: "We've got around 500 applications to shut down systematically, but there are more failures.",
      },
      {
        sender: "CIO",
        message:
          "This doesn't look good. Let's see what comes next.",
      },
      {
        sender: "Storage Vendor",
        message:
          "Bad news, everyone. One of our major disco controllers failed and corrupted data on ALL mirrored copies across both sites. We've never seen this before.",
      },
      { sender: "CIO", message: "So, we don't have any good, non-corrupt data left?"
     },
     {
      sender: "Storage Vendor",
      message:
        "Unfortunately, no. Our only solution is to replace the bad controller, reboot the storage systems at Site 1, and restore from backup for the failed systems.",
    },
    {
      sender: "CIO",
      message:
        "How much data are we looking at losing?",
    },
    {
      sender: "Storage Vendor",
      message:
        "About 18 hours of data for the failed systems.",
    },
    {
      sender: "CIO",
      message:
        "These are all critical questions. Let's discuss our next steps carefully.",
    },
    ];


    const messageDelay = 3000; // 2 seconds

    let timeoutIndex = 0;

    const addMessageWithDelay = () => {
      if (timeoutIndex < dayOne.length) {
        const message = dayOne[timeoutIndex];
        setChatData((prevChatData) => [...prevChatData, message]);
        setActiveUser(message.sender);
        timeoutIndex++;
        setTimeout(addMessageWithDelay, messageDelay);
      } else {
        setShowBox(true);
      }
    };

    addMessageWithDelay();

  

    // Call scrollToBottom when children change or initially
    // scrollToBottom();

    return () => {
      clearTimeout(addMessageWithDelay);
    };
  }, []);

  useLayoutEffect(() => {
    // Scroll to the bottom after chatData changes
    scrollToBottom();
  }, [chatData]);

  useLayoutEffect(() => {
    // Scroll to the bottom when showBox becomes true
    if (showBox) {
      scrollToBottom();
    }
  }, [showBox]);

  return (
    <>
      <Flex
        bgColor="#a1e8f0"
        fontFamily={"Croissant One"}
        justifyContent={"space-around"}
        alignItems={"center"}
        w={"80%"}
        m={"auto"}
        border={"1px solid black"}
        h={"20"}
        pr={40}
        pl={40}

      >
        <Image cursor={"pointer"} w={"12%"} src={disasterLogo} />
        <Heading fontFamily={"Croissant One"} fontStyle={"italic"}>
          Disaster Recovery Business Case
        </Heading>
      </Flex>
      <Box
        fontFamily={"Fredoka"}
        border={"1px solid black"}
        w={"80%"}
        m={"auto"}
        h={"100%"}
      >
        <Flex h={"100%"} >
          <Box h={"100%"} w={"10%"} borderRight={"1px solid black"}>
            <Box bgColor="#a1e8f0" pt={3} borderBottom={"1px solid black"}>

              {users.map((el) => {
                return (
                  <Box borderBottom={"1px solid black"} >
                    <Box
                      boxShadow={
                        "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
                      }
                      key={el}
                      h={"35px"}
                      w={"44px"}
                      m={"auto"}
                      mt={"26%"}
                      border={"0px solid black"}
                      borderRadius={"50%"}
                      className={el === activeUser ? "active" : ""}
                    >
                      <img src="https://i.ibb.co/QP9DvZK/user-2.png" alt="" />
                    </Box>
                    <Text className={el === activeUser ? "Tactive" : ""} fontSize={20} mt={3}>
                      {el}
                    </Text>
                  </Box>
                );
              })}
            </Box>
          </Box>
          <Box
            pt={5}
            maxH={"50%"}
            w={"90%"}
            border={"0px solid red"}
            overflow={"auto"}
            ref={chatContainerRef}
            pb={2}
          >
            <Box
              border={"1px solid black"}
              bgColor={"#030405"}
              color={"white"}
              borderRadius={"20px"}
              m={"auto"}
              textAlign={"left"}
              w={"90%"}
              pl={3}
              pt={3}
              pb={3}
            >
              <Text fontSize={"20"}>
                It was a typical February Monday night, and the CIO is just
                about to leave the office. when he received a call inviting him
                to a conference call concern a problem at the data center.
              </Text>
            </Box>
            <Box
              w={"90%"}
              h={"68vh"}
              border="0px solid red"
              m={"auto"}
              pl={5}
              pr={5}
            >
              <TransitionGroup>
                {chatData.map((el, i) => {
                  const isCIO = el.sender === "CIO";
                  const messageClass = isCIO ? "cio" : "storagevendor";
                  const alignMessage = isCIO ? "flex-end" : "flex-start";
                  return (
                    <CSSTransition
                      key={i}
                      classNames="message"
                      timeout={{ enter: 300, exit: 300 }}
                    >
                      <Box border={"0px solid black"} w={"100%"}
                        display="flex"
                        justifyContent={alignMessage} 
                        className={`message ${messageClass} ${el.sender === "CIO" ? "cio" : "storagevendor"}`} >


                        <Box
                          border={"0px solid red"}
                         
                          w={"70%"}

                        >
                          <Box
                            boxShadow={
                              "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
                            }
                            border={"0px solid black"}
                            bgColor={el.sender === "CIO" ? "#f0f0f0" : "#030405"}
                            color={el.sender === "CIO" ? "black" : "white"}
                            w={"100%"}
                            borderRadius={"10px"}
                            textAlign={"justify"}
                            p={4}
                            pl={5}
                            pr={5}
                            mt={10}
                          >
                            <Text>
                              <span id="sender">{el.sender}</span> : {el.message}
                            </Text>
                          </Box>
                        </Box>
                      </Box>
                    </CSSTransition>
                  );
                })}
                {showBox && (
                  <>
                    <Flex
                      className="box"
                      mb={"5"}
                      mt={"10"}
                      boxShadow= "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
                     
                      alignItems={"center"}
                      justifyContent={"center"}
                      h={"50px"}
                      bg={"#c8cfca"}
                      color={"black"}
                      fontWeight={'bold'}
                    >
                      <Text>Decision goes here.</Text>
                    </Flex>

                    <Flex
                      onClick={() =>
                        handleClick(
                          "Continue with the call to gather more information."
                        )
                      }
                      className="box"
                      border={"1px solid gray"}
                      w={"50%"}
                      m={"auto"}
                      mb={"5"}
                      h={"60px"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      bg={"black"}
                      color={"white"}
                      _hover={{ bgColor: "#c8cfca", color: "black" }}
                      cursor={"pointer"}
                    >
                      <Text>
                        A : Continue with the call to gather more information
                      </Text>
                    </Flex>

                    <Flex
                      onClick={() =>
                        handleClick(
                          "Immediately include the disc drive vendor on the call"
                        )
                      }
                      className="box"
                      border={"1px solid gray"}
                      w={"50%"}
                      m={"auto"}
                      mb={"5"}
                      h={"60px"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      bg={"black"}
                      color={"white"}
                      _hover={{ bgColor: "#c8cfca", color: "black" }}
                      cursor={"pointer"}
                    >
                      <Text>
                        B : Immediately include the disc drive vendor on the
                        call
                      </Text>
                    </Flex>

                    <Flex
                      onClick={() =>
                        handleClick(
                          "Immediately bring down ALL the remaining applications"
                        )
                      }
                      className="box"
                      border={"1px solid gray"}
                      w={"50%"}
                      m={"auto"}
                      mb={"5"}
                      h={"60px"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      bg={"black"}
                      color={"white"}
                      _hover={{ bgColor: "#c8cfca", color: "black" }}
                      cursor={"pointer"}
                    >
                      <Text>
                        C : Immediately bring down ALL the remaining
                        applications
                      </Text>
                    </Flex>

                    <Flex
                      onClick={() =>
                        handleClick("Notify the users of the incident")
                      }
                      className="box"
                      border={"1px solid gray"}
                      w={"50%"}
                      m={"auto"}
                      mb={"5"}
                      h={"60px"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      bg={"black"}
                      color={"white"}
                      _hover={{ bgColor: "#c8cfca", color: "black" }}
                      cursor={"pointer"}
                    >
                      <Text>D : Notify the users of the incident</Text>
                    </Flex>

                    <Modal
                      isOpen={isModalOpen}
                      onClose={() => setIsModalOpen(false)}
                      
                    >
                      <ModalOverlay />
                      <ModalContent mt={200} boxShadow={"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}>
                        <ModalHeader fontWeight={'bold'} fontSize={'25px'}>YOUR DECISION...</ModalHeader>
                        <ModalBody fontSize={'18px'}>{value}</ModalBody>
                        <ModalFooter>
                          
                          <Button colorScheme="teal" onClick={handleRedirect} textAlign={'center'} fontFamily={'Croissant One'} bg={'black'} _hover={{"bgColor":"#a1e8f0","color":"black"}} mr={'150px'}>
                            Proceed
                          </Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                  </>
                )}
                      <div ref={spacerRef} style={{ height: "40px" }}></div>

              </TransitionGroup>
            </Box>
          </Box>
        </Flex>
      </Box>
      {/* <div ref={chatEndRef} /> */}
    </>
  );
};


export default BringDownDay1;
