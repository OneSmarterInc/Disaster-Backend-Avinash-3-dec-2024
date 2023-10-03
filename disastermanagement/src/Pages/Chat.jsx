import {
  ChakraProvider,
  extendTheme,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  RadioGroup,
  Stack,
  Radio,
  Input,
  VisuallyHidden,
} from "@chakra-ui/react";

import { Box, Button, Flex, Heading, Text, Image } from "@chakra-ui/react";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Cookies from "js-cookie";
import "./Chat.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import disasterLogo from "../Images/disasterLogo.png";
import { useNavigate } from "react-router";
import BringDownDay1 from "./BringDownDay1";
import BringDown from "../Components/Day1/BringDown";
import GatherMore from "../Components/Day1/GatherMore";
import DiskDrive from "../Components/Day1/DiskDrive";
import Notify from "../Components/Day1/Notify";
import chatbg from "../Images/chatbg.png"

const Chat = () => {
  const [chatData, setChatData] = useState([]);
  const [activeUser, setActiveUser] = useState(null);
  const [showBox, setShowBox] = useState(false);
  const [value, setValue] = useState(null);
  const [modalValue, setModalValue] = useState(null);
  const [explaination, setExplanation] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const chatContainerRef = useRef(null);
  const spacerRef = useRef(null);

  const handleChange = (value) => {
    setValue(value);
    setIsModalOpen(true);
    //  console.log(value);
  };

  const handleClick = () => {
    //modalValue set
    //cookies marks set
    //text store cookies
    if (value === "Making clear and swift decisions under pressure") {
      Cookies.set("day1marks", "1");
      Cookies.set("day1explaination", explaination);
      setModalValue(value);
    } else if (value === "Remaining calm and level-headed during challenges") {
      Cookies.set("day1marks", "0");
      Cookies.set("day1explaination", explaination);
      setModalValue(value);
    } else if (
      value ===
      "Emphasizing teamwork, both internally and with external partners"
    ) {
      Cookies.set("day1marks", "1");
      Cookies.set("day1explaination", explaination);
      setModalValue(value);
    } else if (
      value ===
      "Effectively conveying information, even in challenging circumstances"
    ) {
      Cookies.set("day1marks", "0");
      Cookies.set("day1explaination", explaination);
      setModalValue(value);
    } else if (
      value ===
      "Quickly adjusting strategies based on new information or changing scenarios"
    ) {
      Cookies.set("day1marks", "0");
      Cookies.set("day1explaination", explaination);
      setModalValue(value);
    } else if (
      value ===
      "Keeping an eye on long-term impacts and future implications during the crisis"
    ) {
      Cookies.set("day1marks", "0");
      Cookies.set("day1explaination", explaination);
      setModalValue(value);
    }

    // const cookiemarks = Cookies.get('day1marks') || "";
    // const cookieex = Cookies.get('day1explaination') || "";
    // console.log(cookiemarks, cookieex);
  };

  const scrollToBottom = () => {
    const container = chatContainerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  };

  const users = [
    "Ben Carter",
    "Kate Sullivan",
    "Liam Turner",
    "Mia Rodriguez",
    "Sophia Kim",
  ];

  useEffect(() => {
    // Simulate messages from 5 users with a 2-second delay between each message
    const dayOne = [
      {
        sender: "Ben Carter",
        message:
          "Kate, can you look into this? Let me know if I need to be in the loop.",
      },
      {
        sender: "Kate Sullivan",
        message:
          "Hey Ben, I saw your email. I thought it was just a minor glitch, but we've received a couple more reports. Still, everything seems under control.",
      },
      {
        sender: "Ben Carter",
        message:
          "Alright, keep me posted. And, Kate? If this escalates, don't hesitate to pull in external support. Better safe than sorry.",
      },
      {
        sender: "Kate Sullivan",
        message:
          "Ben, it's getting worse. More applications are failing, and we've isolated the issue to data corruption errors. It's... it's not looking like a simple operational hiccup anymore.",
      },
      {
        sender: "Ben Carter",
        message:
          "What?! Alright, I'll be there. We need to handle this urgently.",
      },
    ];

    const messageDelay = 4000; // 4 seconds

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
      <Box
        fontFamily={"Fredoka"}
        border={"0px solid red"}
        w={"100%"}
        m={"auto"}
        h={"88vh"}
      >
        <Flex h={"88vh"}>
          <Box
            h={"88vh"}
            w={"20%"}
            borderRight={"1px solid black"}
            overflow={"auto"}
          >
            <Box bgColor="#a1e8f0" pt={3} borderBottom={"1px solid black"}>
              {users.map((el) => {
                return (
                  <Box borderBottom={"1px solid black"} key={el}>
                    <Box
                      boxShadow={
                        "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
                      }
                      h={"6vh"}
                      w={"44px"}
                      m={"auto"}
                      mt={"26%"}
                      border={"0px solid black"}
                      borderRadius={"50%"}
                      className={el === activeUser ? "active" : ""}
                    >
                      <img src="https://i.ibb.co/QP9DvZK/user-2.png" alt="" />
                    </Box>
                    <Text
                      className={el === activeUser ? "Tactive" : ""}
                      fontSize={20}
                      mt={3}
                    >
                      {el}
                    </Text>
                  </Box>
                );
              })}
            </Box>
          </Box>
          {modalValue ===
          "Emphasizing teamwork, both internally and with external partners" ? (
            <BringDown />
          ) : modalValue ===
            "Making clear and swift decisions under pressure" ? (
            <GatherMore />
          ) : modalValue ===
            "Remaining calm and level-headed during challenges" ? (
            <DiskDrive />
          ) : modalValue ===
            "Effectively conveying information, even in challenging circumstances" ? (
            <Notify />
          ) : (
            <Box
              pt={5}
              maxH={"88vh"}
              w={"90%"}
              border={"0px solid red"}
              overflow={"auto"}
              ref={chatContainerRef}
              pb={2}
              bgImage={chatbg}
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
                  about to leave the office. when he received a call inviting
                  him to a conference call concern a problem at the data center.
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
                    const isCIO = el.sender === "Ben Carter";
                    const messageClass = isCIO ? "KateSullivan" : "BenCarter";
                    const alignMessage = isCIO ? "flex-start" : "flex-end";
                    return (
                      <CSSTransition
                        key={i}
                        classNames="message"
                        timeout={{ enter: 300, exit: 300 }}
                      >
                        <Box
                          border={"0px solid black"}
                          w={"100%"}
                          display="flex"
                          justifyContent={alignMessage}
                          className={`message ${messageClass} ${
                            el.sender === "Ben Carter"
                              ? "BenCarter"
                              : "KateSullivan"
                          }`}
                        >
                          <Box border={"0px solid red"} w={"70%"}>
                            <Box
                              boxShadow={
                                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
                              }
                              border={"0px solid black"}
                              bgColor={
                                el.sender === "Ben Carter"
                                  ? "#f0f0f0"
                                  : "#030405"
                              }
                              color={
                                el.sender === "Ben Carter" ? "black" : "white"
                              }
                              w={"100%"}
                              borderRadius={"10px"}
                              textAlign={"justify"}
                              p={4}
                              pl={5}
                              pr={5}
                              mt={10}
                            >
                              <Text>
                                <span id="sender">{el.sender}</span> :{" "}
                                {el.message}
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
                        boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
                        alignItems={"center"}
                        justifyContent={"center"}
                        h={"50px"}
                        bg={"#c8cfca"}
                        color={"black"}
                        fontWeight={"bold"}
                      >
                        <Text>
                          Which trade of the customer representative do you feel
                          has stood out during your latest interaction ?
                        </Text>
                      </Flex>

                      <RadioGroup
                        m={"auto"}
                        onChange={handleChange}
                        value={value}
                      >
                        <Box className="flex" w={"80%"} m={"auto"}>
                          <Box
                            border={"1px solid black"}
                            w={"70%"}
                            borderRadius={"50px"}
                          >
                            <label
                              style={{
                                cursor: "pointer",
                                position: "relative",
                              }}
                            >
                              <Radio
                                
                                fontFamily={"Fredoka"}
                                size={"lg"}
                                colorScheme="orange"
                                value="Making clear and swift decisions under pressure"
                                style={{
                                  position: "absolute",
                                  opacity: 0,
                                  cursor: "pointer",
                                }}
                              />
                              Decisive
                            </label>
                          </Box>

                          <Box
                            border={"1px solid black"}
                            w={"80%"}
                            borderRadius={"50px"}
                          >
                            <label
                              style={{
                                cursor: "pointer",
                                position: "relative",
                              }}
                            >
                              <Radio
                                border="1px solid black"
                                fontFamily={"Fredoka"}
                                size={"lg"}
                                colorScheme="orange"
                                value="Remaining calm and level-headed during challenges"
                                style={{
                                  position: "absolute",
                                  opacity: 0,
                                  cursor: "pointer",
                                }}
                              />
                              Composed
                            </label>
                          </Box>

                          <Box border={"1px solid black"} borderRadius={"50px"}>
                            <label
                              style={{
                                cursor: "pointer",
                                position: "relative",
                              }}
                            >
                              <Radio
                                border="1px solid black"
                                fontFamily={"Fredoka"}
                                size={"lg"}
                                colorScheme="orange"
                                value="Emphasizing teamwork, both internally and with external partners"
                                style={{
                                  position: "absolute",
                                  opacity: 0,
                                  cursor: "pointer",
                                }}
                              />
                              Collaborative
                            </label>
                          </Box>

                          <Box border={"1px solid black"} borderRadius={"50px"}>
                            <label
                              style={{
                                cursor: "pointer",
                                position: "relative",
                              }}
                            >
                              <Radio
                                border="1px solid black"
                                fontFamily={"Fredoka"}
                                size={"lg"}
                                colorScheme="orange"
                                value="Effectively conveying information, even in challenging circumstances"
                                style={{
                                  position: "absolute",
                                  opacity: 0,
                                  cursor: "pointer",
                                }}
                              />
                              Communicative
                            </label>
                          </Box>

                          <Box border={"1px solid black"} borderRadius={"50px"}>
                            <label
                              style={{
                                cursor: "pointer",
                                position: "relative",
                              }}
                            >
                              <Radio
                                border="1px solid black"
                                fontFamily={"Fredoka"}
                                size={"lg"}
                                colorScheme="orange"
                                value="Quickly adjusting strategies based on new information or changing scenarios"
                                style={{
                                  position: "absolute",
                                  opacity: 0,
                                  cursor: "pointer",
                                }}
                              />
                              Adaptive
                            </label>
                          </Box>

                          <Box border={"1px solid black"} borderRadius={"50px"}>
                            <label
                              style={{
                                cursor: "pointer",
                                position: "relative",
                              }}
                            >
                              <Radio
                                border="1px solid black"
                                fontFamily={"Fredoka"}
                                size={"lg"}
                                colorScheme="orange"
                                value="Keeping an eye on long-term impacts and future implications during the crisis"
                                style={{
                                  position: "absolute",
                                  opacity: 0,
                                  cursor: "pointer",
                                }}
                              />
                              Visionary
                            </label>
                          </Box>
                        </Box>
                      </RadioGroup>

                      <Modal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                      >
                        <ModalOverlay />
                        <ModalContent
                          mt={200}
                          boxShadow={
                            "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
                          }
                        >
                          <ModalHeader fontWeight={"bold"} fontSize={"25px"}>
                            Refined Leadership Trait Scale
                          </ModalHeader>
                          <ModalBody fontSize={"18px"}>
                            <Image src="https://epyqh8r42ug.exactdn.com/wp-content/uploads/2021/12/organic-flat-feedback-concept_52683-62653.jpeg?strip=all&lossy=1&ssl=1" />
                            <Text>
                              Which trade of the customer representative do you
                              feel has stood out during your latest interaction
                              ?
                            </Text>
                            <br />
                            <Text fontWeight={500}>{value}</Text>
                            <br />
                            {/* <Input onChange={(e) => setExplanation(e.target.value)} value={explaination} placeholder="Please provide an explanation for your answer" /> */}
                          </ModalBody>
                          <ModalFooter>
                            <Button
                              colorScheme="teal"
                              onClick={handleClick}
                              textAlign={"center"}
                              fontFamily={"Croissant One"}
                              bg={"black"}
                              _hover={{ bgColor: "#a1e8f0", color: "black" }}
                              mr={"150px"}
                            >
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
          )}
        </Flex>
      </Box>
      {/* <div ref={chatEndRef} /> */}
    </>
  );
};

export default Chat;
