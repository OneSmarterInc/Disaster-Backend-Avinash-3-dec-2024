import { Avatar, Box, Button, Flex, Heading, Radio, Text, Image } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import "./Chat.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import disasterLogo from "../Images/disasterLogo.png";

const Chat = () => {
  const [chatData, setChatData] = useState([]);
  const [activeUser, setActiveUser] = useState(null);
  const [showBox, setShowBox] = useState(false);
  const [value, setValue] = useState("");
  const containerRef = useRef(null);
  //console.log(value);

  



  const handleClick = () => {};

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
        sender: "Tech Expert",
        message:
          " Hey, CIO, sorry to bother you, but we've got a problem at the data center. Can you join a conference call ?",
      },
      { sender: "CIO", message: "Sure, I'm in. What's going on?" },
      {
        sender: "Tech Expert",
        message:
          " Applications at the data center are failing with data corruption errors. We've already submitted an incident report to the storage vendor. The weird part is, it's happening across different servers and storage units.",
      },
      {
        sender: "CIO",
        message: " I see. Let's gather more information. What's our next step?",
      },
      {
        sender: "Tech Expert",
        message:
          "We have two data centers linked by high-speed fiber, with mirrored setups for high availability applications. Some apps are on mirrored clusters at both sites.",
      },
      {
        sender: "CIO",
        message:
          "  Got it. We need to assess the situation. Decision time, folks.",
      },
      { sender: "Tech Expert", message: " We're at a decision point here" },
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

    const scrollToBottom = () => {
      const container = containerRef.current;
      if (container) {
        container.scrollTop = container.scrollHeight;
      }
    };

    // Call scrollToBottom when children change or initially
    scrollToBottom();
    
    return () => {
      clearTimeout(addMessageWithDelay);
    };
  }, []);

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
        <Image w={"12%"} src={disasterLogo} />
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
        <Flex h={"100%"}>
          <Box h={"100%"} w={"17%"} borderRight={"1px solid black"}>
            <Box bgColor="#a1e8f0" pt={5} borderBottom={"1px solid black"}>
              <Text fontWeight={500} fontSize={30}>
                Day 1
              </Text>
              {users.map((el) => {
                return (
                  <Box borderBottom={"1px solid black"}>
                    <Box
                      boxShadow={
                        "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
                      }
                      key={el}
                      
                      h={"35px"}
                      w={"44px"}
                      m={"auto"}
                      mt={"50px"}
                      border={"0px solid black"}
                      borderRadius={"50%"}
                    >
                        
                        <img src="https://i.ibb.co/QP9DvZK/user-2.png" alt="" className={el === activeUser ? "active" : ""}/>
                    </Box>
                    <Text fontSize={20} mt={3}>
                      {el}
                    </Text>
                  </Box>
                );
              })}
            </Box>
            {/* <Box bgColor={"#fafaf5"} pt={7} borderBottom={"1px solid black"} pb={5}>
                        <Box h={"35px"} w={"44px"} bgColor={"gray.200"} m={"auto"} border={"1px solid black"} borderRadius={"50%"} ></Box>
                        <Text fontSize={20} mt={1}>Texh Expert</Text>
                    </Box>
                    <Box bgColor="#f7fadc" pt={10} pb={5}>
                        <Box h={"35px"} w={"44px"} bgColor={"gray.200"} m={"auto"} border={"1px solid black"} borderRadius={"50%"} ></Box>
                        <Text mb={5} fontSize={20} mt={1}>Storage Vendor</Text>
                        <Box h={"35px"} w={"44px"} bgColor={"gray.200"} m={"auto"} border={"1px solid black"} borderRadius={"50%"} ></Box>
                        <Text mb={5} fontSize={20} mt={1}>Data Center</Text>
                        <Box h={"35px"} w={"44px"} bgColor={"gray.200"} m={"auto"} border={"1px solid black"} borderRadius={"50%"} ></Box>
                        <Text fontSize={20} mt={1}>Company Distribution</Text>
                    </Box> */}
          </Box>
          <Box
            pt={5}
            pb={2}
            h={"100%"}
            w={"83%"}
            overflow={"auto"}
            
          >
            <Box
              border={"1px solid black"}
              bgColor={"#030405"}
              color={'white'}
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
                  const messageClass = isCIO ? "cio" : "techExpert";
                  const alignMessage = isCIO ? "flex-end" : "flex-start";
                  return (
                    <CSSTransition
                      key={i}
                      classNames="message"
                      timeout={{ enter: 300, exit: 300 }}
                    >
                      <Box
                        display="flex"
                        alignItems={alignMessage}
                        w={"50%"}
                        className={`message ${messageClass} ${
                          el.sender === "CIO" ? "cio" : "techExpert"
                        }`}
                      >
                        <Box
                          boxShadow={
                            "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
                          }
                          border={"0px solid black"}
                          bgColor={el.sender == "CIO" ? "#030405" : "#f0f0f0"}
                          color={el.sender == "CIO" ? "white" : "black"}
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
                    </CSSTransition>
                  );
                })}
                {showBox && (
                  <>
                    <Box className="box" mb={"5"} mt={"10"}>
                      <Text>Decision goes here.</Text>
                    </Box>

                    <Flex
                      value={value}
                      onClick={() =>
                        setValue(
                          "Continue with the call to gather more information"
                        )
                      }
                      className="box"
                      border={"1px solid gray"}
                      w={"50%"}
                      m={"auto"}
                      mb={"5"}
                      h={"50px"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      bg={"#c8cfca"}
                      cursor={'pointer'}
                    >
                      <Text>
                        Continue with the call to gather more information
                      </Text>
                    </Flex>

                    <Flex
                      value={value}
                      onClick={() =>
                        setValue(
                          "Immediately include the disc drive vendor on the call"
                        )
                      }
                      className="box"
                      border={"1px solid gray"}
                      w={"50%"}
                      m={"auto"}
                      mb={"5"}
                      h={"50px"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      bg={"#c8cfca"}
                      cursor={'pointer'}
                    >
                      <Text>
                        Immediately include the disc drive vendor on the call
                      </Text>
                    </Flex>

                    <Flex
                      value={value}
                      onClick={() =>
                        setValue(
                          "Immediately bring down ALL the remaining applications"
                        )
                      }
                      className="box"
                      border={"1px solid gray"}
                      w={"50%"}
                      m={"auto"}
                      mb={"5"}
                      h={"50px"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      bg={"#c8cfca"}
                      cursor={'pointer'}
                    >
                      <Text>
                        Immediately bring down ALL the remaining applications
                      </Text>
                    </Flex>

                    <Flex
                      value={value}
                      onClick={() =>
                        setValue("Notify the users of the incident")
                      }
                      className="box"
                      border={"1px solid gray"}
                      w={"50%"}
                      m={"auto"}
                      mb={"5"}
                      h={"50px"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      bg={"#c8cfca"}
                      cursor={'pointer'}
                    >
                      <Text>Notify the users of the incident</Text>
                    </Flex>

                    <Flex
                      value={value}
                      onClick={() => setValue("All of the above")}
                      className="box"
                      border={"1px solid gray"}
                      w={"50%"}
                      m={"auto"}
                      mb={"5"}
                      h={"50px"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      bg={"#f0f2f0"}
                      cursor={'pointer'}
                    >
                      <Text>All of the above</Text>
                    </Flex>

                    <Button onClick={handleClick} cursor={"pointer"}>
                      PROCEED
                    </Button>
                  </>
                )}
              </TransitionGroup>
            </Box>
          </Box>
        </Flex>
      </Box>
      {/* <div ref={chatEndRef} /> */}
    </>
  );
};

export default Chat;
