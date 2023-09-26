import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "./Chat.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const BringDownDay1 = () => {
  const [chatData, setChatData] = useState([]);
  const [activeUser, setActiveUser] = useState(null);
  const [showBox, setShowBox] = useState(false);
  const [value, setValue] = useState("");

  const users = [
    "CIO",
    "Tech Expert",
    "Storage Vendor",
    "Data Center",
    "Company Distribution",
  ];

  const handleClick = ()=>{}

 

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
    
    return () => {
      clearTimeout(addMessageWithDelay);
    };
  }, []);

  return (
    <>
      <Flex
        bgColor="#a1e8f0"
        fontFamily={"Croissant One"}
        justifyContent={"center"}
        alignItems={"center"}
        w={"80%"}
        m={"auto"}
        border={"1px solid black"}
        h={"20"}
      >
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
                  const messageClass = isCIO ? "cio" : "storagevendor";
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
                          el.sender === "CIO" ? "cio" : "storagevendor"
                        }`}
                      >
                        <Box
                          boxShadow={
                            "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
                          }
                          border={"0px solid black"}
                          bgColor={el.sender === "CIO" ? "#f0f0f0"  : "#030405"}
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
                    </CSSTransition>
                  );
                })}
                {showBox && (
                  <>
                    <Flex className="box" mb={"5"} mt={"10"} border={'1px solid gray'} w={'50%'} alignItems={'center'} justifyContent={'center'} h={'50px'} bg={'#c8cfca'} color={'black'}>
                      <Text>Decision goes here.</Text>
                    </Flex>

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
                      bg={'black'}
                      color={'white'}
                      _hover={{'bgColor':'#c8cfca',"color":"black"}}
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
                      bg={'black'}
                      color={'white'}
                      _hover={{'bgColor':'#c8cfca',"color":"black"}}
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
                      bg={'black'}
                      color={'white'}
                      _hover={{'bgColor':'#c8cfca',"color":"black"}}
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
                      bg={'black'}
                      color={'white'}
                      _hover={{'bgColor':'#c8cfca',"color":"black"}}
                      cursor={'pointer'}
                    >
                      <Text>Notify the users of the incident</Text>
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
    </>
  )
}

export default BringDownDay1