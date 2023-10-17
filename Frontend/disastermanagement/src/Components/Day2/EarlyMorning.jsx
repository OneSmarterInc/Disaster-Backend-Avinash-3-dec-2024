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
import { Radio, RadioGroup } from "@chakra-ui/react";
import { Box, Button, Flex, Heading, Text, Image } from "@chakra-ui/react";
import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import Cookies from "js-cookie";
import day2morning from "./day2morning.png";
import loss from "./loss.png"
import "../Day1/BringDown.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useNavigate } from "react-router";
import LateMorning from "./LateMoring";
import { dayTwoEarlyMorning } from "../../mainData";
import bencarter from "../userImages/bencarter.png";
import sophia from "../userImages/sophia_kim.png";
import kate from "../userImages/kate_sullivan.png";
import mia from "../userImages/Mia Rodriguez.png";
import julia from "../userImages/juliaharper.jpg";
import tom from "../userImages/tom.jpg";
import raj from "../userImages/rajpatel.jpg";
import grace from "../userImages/gracepatterson.jpg";
import williams from "../userImages/williams.jpg";
import ScrollDown from "../ScrollDown";
import oncall from "../userImages/oncall.png";
import withtom from "../userImages/withtom.png";
import warroom from "../userImages/warroom.png";

import liam from "../userImages/liam.jpeg";

import MyContext from "../ContextApi/MyContext";


const EarlyMorning = () => {
  const [chatData, setChatData] = useState([]);
  const [activeUser, setActiveUser] = useState(null);
  const [showBox, setShowBox] = useState(false);
  const [showBox2, setShowBox2] = useState(false);

  const [explaination, setExplanation] = useState("");
  const [value, setValue] = useState(null);
  const [value1, setValue1] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [day5Popup, setDay5Popup] = useState(true);
  const [day5Popup2, setDay5Popup2] = useState(true);
  const [day5Popup3, setDay5Popup3] = useState(true);
  const [day5Popup4, setDay5Popup4] = useState(true);
  const [day5Popup5, setDay5Popup5] = useState(true);


  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [showPopup2,setShowPopup2] = useState(false);
  const [showPopup3, setShowPopup3] = useState(false);
  const [showPopup4, setShowPopup4] = useState(false);
  const [showPopup5, setShowPopup5] = useState(false);

  const [chatPaused, setChatPaused] = useState(false);
  const [modalValue, setModalValue] = useState(null);
  const [modalValue1, setModalValue1] = useState(null);
  const [ShowScroll,setShowScroll] = useState(false);
  const [img, showImg] = useState(false)


  const chatContainerRef = useRef(null);
  const spacerRef = useRef(null);

  const {setHead} = useContext(MyContext);


  const handleChange = (value) => {
    setValue(value);
    setIsModalOpen(true);
    Cookies.set("day2earlymorning2", value);
    //  console.log(value);
  };

  const handleClick = () => {
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

    const cookiemarks = Cookies.get("day1marks") || "";
    const cookieex = Cookies.get("day1explaination") || "";
    console.log(cookiemarks, cookieex);
  };

  const handleChange2 = (value1) => {
    setValue1(value1);
    setIsModalOpen1(true);
    Cookies.set("day2earlymorning1", value1);
    //  console.log(value);
  };

  const handleClick2 = () => {
    setIsModalOpen1(false);
    setShowBox2(true);
    setShowScroll(true);

    if (
      value1 ===
      "Weaknesses in the system that can be exploited, leading to potential disasters"
    ) {
      Cookies.set("day1marks", "1");
      Cookies.set("day1explaination", explaination);

      setModalValue1(value1);
    } else if (
      value1 ===
      "Ensuring that data remains accurate and reliable throughout its entire lifecycle, especially post-recovery"
    ) {
      // Cookies.set("day1marks", "0");
      // Cookies.set("day1explaination", explaination);
      // setModalValue(value1);
    } else if (
      value1 ===
      "Hardware or network breakdowns that can disrupt normal operations"
    ) {
      // Cookies.set("day1marks", "1");
      // Cookies.set("day1explaination", explaination);
      // setModalValue(value1);
    } else if (
      value1 ===
      "Inadequate or failed backups that prevent or delay recovery efforts"
    ) {
      // Cookies.set("day1marks", "0");
      // Cookies.set("day1explaination", explaination);
      // setModalValue(value1);
    } else if (
      value1 ===
      "Failures in internal and external communication systems during critical times"
    ) {
      // Cookies.set("day1marks", "0");
      // Cookies.set("day1explaination", explaination);
      // setModalValue(value1);
    } else if (
      value1 ===
      "Absence of failover systems or processes that can act as a backup during primary system failures"
    ) {
      // Cookies.set("day1marks", "0");
      // Cookies.set("day1explaination", explaination);
      // setModalValue(value1);
    }

    // const cookiemarks = Cookies.get('day1marks') || "";
    //  const cookieex = Cookies.get('day1explaination') || "";
    //  console.log( cookieex);
  };

  const scrollToBottom = () => {
    const container = chatContainerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  };

  const users = [
    {
      name: "Ben Carter",
      url: bencarter,
    },
    {
      name: "Kate Sullivan",
      url: kate,
    },
    {
      name: "Liam Turner",
      url: liam,
    },
    {
      name: "Sophia Kim",
      url: sophia,
    },
    {
      name: "Mia Rodriguez",
      url: mia,
    },
    {
      name: "Julia Harper",
      url: julia,
    },
    {
      name: "Tom Mitchell",
      url: tom,
    },
    {
      name: "Grace Patterson",
      url: grace,
    },
    {
      name: "Raj Patel",
      url: raj,
    },
    {
      name: "Mr. Williams",
      url: williams,
    },
  ];

  const closePopup = () => {
    // setShowPopup(false);
    setDay5Popup(false);
    // onClose();
    setChatPaused(false);
  };

  const closePopup2 = () => {
    // setShowPopup(false);
    setDay5Popup2(false);
    // onClose();
    setChatPaused(false);
  };

  const closePopup3 = () => {
    // setShowPopup(false);
    setDay5Popup3(false);
    // onClose();
    setChatPaused(false);
  };

  const closePopup4 = () => {
    // setShowPopup(false);
    setDay5Popup4(false);
    // onClose();
    setChatPaused(false);
  };
  const closePopup5 = () => {
    // setShowPopup(false);
    setDay5Popup5(false);
    // onClose();
    setChatPaused(false);
  };

  useLayoutEffect(() => {
    // Scroll to the bottom after chatData changes
    scrollToBottom();
  }, [currentMessageIndex]);

  useLayoutEffect(() => {
    // Scroll to the bottom when showBox becomes true
    if (showBox) {
      scrollToBottom();
    }
  }, [showBox]);

  useLayoutEffect(() => {
    // Scroll to the bottom when showBox becomes true
    if (showBox2) {
      scrollToBottom();
    }
  }, [showBox2]);

  useEffect(() => {

    setHead("Day 2 Early Morning");
    const displayNextMessage = () => {
      if (!chatPaused && currentMessageIndex < dayTwoEarlyMorning.length) {
        const message = dayTwoEarlyMorning[currentMessageIndex];
        setCurrentMessageIndex((prevIndex) => prevIndex + 1);
        setActiveUser(message.sender);
        
        if (currentMessageIndex === 6) {
          setChatPaused(true);
          setTimeout(() => {
            setShowPopup(true);
          }, 2000);
        }
        else if (currentMessageIndex === 13) {
          setChatPaused(true);
          setTimeout(() => {
            setShowPopup2(true)
          }, 2000);
        }
        else if (currentMessageIndex === 19) {
          setChatPaused(true);
          setTimeout(() => {
            setShowPopup3(true)
          }, 2000);
        }
        else if (currentMessageIndex === 24) {
          setChatPaused(true);
          setTimeout(() => {
            setShowPopup4(true)
          }, 2000);
        }
        else if (currentMessageIndex === 29) {
          setChatPaused(true);
          setTimeout(() => {
            setShowPopup5(true)
          }, 1000);
        }
      } else {
        if (currentMessageIndex === dayTwoEarlyMorning.length) {
          // The chat has ended completely, set showBox to true
          setShowBox(true);
        }
      }
    };

    const messageInterval = setInterval(displayNextMessage, 4000);

    return () => {
      clearInterval(messageInterval);
    };
  }, [currentMessageIndex, chatPaused]);

  return (
    <>
      {modalValue ===
      "Emphasizing teamwork, both internally and with external partners" ? (
        <LateMorning />
      ) : modalValue === "Making clear and swift decisions under pressure" ? (
        <LateMorning />
      ) : modalValue === "Remaining calm and level-headed during challenges" ? (
        <LateMorning />
      ) : modalValue ===
        "Effectively conveying information, even in challenging circumstances" ? (
        <LateMorning />
      ) : modalValue ===
        "Quickly adjusting strategies based on new information or changing scenarios" ? (
        <LateMorning />
      ) : modalValue ===
        "Keeping an eye on long-term impacts and future implications during the crisis" ? (
        <LateMorning />
      ) : (
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
              w={"13%"}
              borderRight={"1px solid black"}
              overflow={"auto"}
              bgColor="#948888"
            >
              <Box bgColor="#948888" pt={3} borderBottom={"1px solid black"}>
                {users.map((el) => {
                  return (
                    <Box borderBottom={"1px solid black"} key={el.name}>
                      <Box
                        
                        h={"6vh"}
                        w={"55px"}
                        m={"auto"}
                        mt={"17%"}
                        borderRadius={"50%"}
                        className={el.name === activeUser ? "active" : ""}
                      >
                        <Image borderRadius={"50%"} src={el.url} alt="" />
                      </Box>
                      <Text
                        className={el.name === activeUser ? "Tactive" : ""}
                        fontSize={20}
                        mt={6}
                      >
                        {el.name}
                      </Text>
                    </Box>
                  );
                })}
              </Box>
            </Box>
            <Box
              pt={5}
              maxH={"88vh"}
              w={"90%"}
              border={"0px solid red"}
              overflow={"auto"}
              ref={chatContainerRef}
              pb={2}
              bgImage={
                currentMessageIndex > 30 ? loss :
                currentMessageIndex > 25 ? warroom :
                currentMessageIndex > 43 ? withtom :
                currentMessageIndex > 7 ? oncall :
                day2morning
              }
              bgRepeat={"no-repeat"}
              bgSize={"cover"}
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
                  Ben Carter is on the phone with Tom Mitchell, the VP of
                  Customer Services from the storage vendor. They engage in a
                  lengthy conversation, discussing the technical intricacies.
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
                  {dayTwoEarlyMorning
                    .slice(0, currentMessageIndex)
                    .map((el, i) => {
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
                          key={i}
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
                            <Box border={"0px solid red"} w={"50%"}>
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

                  {showPopup && (
                    <Modal isOpen={day5Popup}>
                      <ModalOverlay />
                      <ModalContent
                        boxShadow={
                          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
                        }
                      >
                        <ModalHeader
                          fontWeight={"bold"}
                          fontSize={"25px"}
                        ></ModalHeader>
                        <ModalBody fontSize={"18px"}>
                          <Text>
                            After briefing the CEO, Ben Carter gets back on the
                            call with Julia Harper from the vendor's team.
                          </Text>
                        </ModalBody>
                        <ModalFooter>
                          <Button
                            colorScheme="teal"
                            onClick={closePopup}
                            textAlign={"center"}
                            fontFamily={"Croissant One"}
                            bg={"black"}
                            _hover={{ bgColor: "#a1e8f0", color: "black" }}
                            mr={"150px"}
                          >
                            Close
                          </Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                  )}

                  {showPopup2 && (
                    <Modal isOpen={day5Popup2}>
                      <ModalOverlay />
                      <ModalContent
                        boxShadow={
                          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
                        }
                      >
                        <ModalHeader
                          fontWeight={"bold"}
                          fontSize={"25px"}
                        ></ModalHeader>
                        <ModalBody fontSize={"18px"}>
                          <Text>
                          Before making the decision to proceed, Ben Carter has another call with Tom Mitchell
                          </Text>
                        </ModalBody>
                        <ModalFooter>
                          <Button
                            colorScheme="teal"
                            onClick={closePopup2}
                            textAlign={"center"}
                            fontFamily={"Croissant One"}
                            bg={"black"}
                            _hover={{ bgColor: "#a1e8f0", color: "black" }}
                            mr={"150px"}
                          >
                            Close
                          </Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                  )}
                  {showPopup3 && (
                    <Modal isOpen={day5Popup3}>
                      <ModalOverlay />
                      <ModalContent
                        boxShadow={
                          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
                        }
                      >
                        <ModalHeader
                          fontWeight={"bold"}
                          fontSize={"25px"}
                        ></ModalHeader>
                        <ModalBody fontSize={"18px"}>
                          <Text>
                          Ben Carter is on a video call with a key client, Mr. Williams.
                          </Text>
                        </ModalBody>
                        <ModalFooter>
                          <Button
                            colorScheme="teal"
                            onClick={closePopup3}
                            textAlign={"center"}
                            fontFamily={"Croissant One"}
                            bg={"black"}
                            _hover={{ bgColor: "#a1e8f0", color: "black" }}
                            mr={"150px"}
                          >
                            Close
                          </Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                  )}
                  {showPopup4 && (
                    <Modal isOpen={day5Popup4}>
                      <ModalOverlay />
                      <ModalContent
                        boxShadow={
                          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
                        }
                      >
                        <ModalHeader
                          fontWeight={"bold"}
                          fontSize={"25px"}
                        ></ModalHeader>
                        <ModalBody fontSize={"18px"}>
                          <Text>
                          Back in the war room, Ben gathers the executive team for a quick huddle.
                          </Text>
                        </ModalBody>
                        <ModalFooter>
                          <Button
                            colorScheme="teal"
                            onClick={closePopup4}
                            textAlign={"center"}
                            fontFamily={"Croissant One"}
                            bg={"black"}
                            _hover={{ bgColor: "#a1e8f0", color: "black" }}
                            mr={"150px"}
                          >
                            Close
                          </Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                  )}
                  {showPopup5 && (
                    <Modal isOpen={day5Popup5}>
                      <ModalOverlay />
                      <ModalContent
                        boxShadow={
                          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
                        }
                      >
                        <ModalHeader
                          fontWeight={"bold"}
                          fontSize={"25px"}
                        ></ModalHeader>
                        <ModalBody fontSize={"18px"}>
                          <Text>
                          The executive team gathers around the conference table. The room's atmosphere is tense, but there's a shared determination to address the situation head-on.
                          </Text>
                        </ModalBody>
                        <ModalFooter>
                          <Button
                            colorScheme="teal"
                            onClick={closePopup5}
                            textAlign={"center"}
                            fontFamily={"Croissant One"}
                            bg={"black"}
                            _hover={{ bgColor: "#a1e8f0", color: "black" }}
                            mr={"150px"}
                          >
                            Close
                          </Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                  )}
                  {showBox && (
                    <>
                      <Box bg={"white"} p={10} w={"60%"} m={"auto"} mt={"50px"}>
                        <Image
                          w={"50%"}
                          m={"auto"}
                          src="https://img.freepik.com/free-vector/text-files-concept-illustration_114360-4402.jpg?t=st=1696612249~exp=1696612849~hmac=fb707e6cc9f86b8c9c7c512cf3910dfc942bd0073ccf581840b9772cf4deb68e"
                        />
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
                            Which of the following technical challenges do you
                            see as dominant in the scripts which you just saw ?
                          </Text>
                        </Flex>

                        <RadioGroup
                          m={"auto"}
                          onChange={handleChange2}
                          value={value}
                        >
                          <Box className="flex2" w={"80%"} m={"auto"}>
                            <Box
                              border={"1px solid black"}
                              _hover={{ bgColor: "black", color: "white" }}
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
                                  value="Weaknesses in the system that can be exploited, leading to potential disasters"
                                  style={{
                                    position: "absolute",
                                    opacity: 0,
                                    cursor: "pointer",
                                  }}
                                />
                                System Vulnerabilities
                              </label>
                            </Box>

                            <Box
                              border={"1px solid black"}
                              w={"80%"}
                              borderRadius={"50px"}
                              _hover={{ bgColor: "black", color: "white" }}
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
                                  value="Ensuring that data remains accurate and reliable throughout its entire lifecycle, especially post-recovery"
                                  style={{
                                    position: "absolute",
                                    opacity: 0,
                                    cursor: "pointer",
                                  }}
                                />
                                Data Integrity
                              </label>
                            </Box>

                            <Box
                              border={"1px solid black"}
                              borderRadius={"50px"}
                              _hover={{ bgColor: "black", color: "white" }}
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
                                  value="Hardware or network breakdowns that can disrupt normal operations"
                                  style={{
                                    position: "absolute",
                                    opacity: 0,
                                    cursor: "pointer",
                                  }}
                                />
                                Infrastructure Failures
                              </label>
                            </Box>

                            <Box
                              border={"1px solid black"}
                              borderRadius={"50px"}
                              _hover={{ bgColor: "black", color: "white" }}
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
                                  value="Inadequate or failed backups that prevent or delay recovery efforts"
                                  style={{
                                    position: "absolute",
                                    opacity: 0,
                                    cursor: "pointer",
                                  }}
                                />
                                Backup Failures
                              </label>
                            </Box>

                            <Box
                              border={"1px solid black"}
                              borderRadius={"50px"}
                              _hover={{ bgColor: "black", color: "white" }}
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
                                  value="Failures in internal and external communication systems during critical times"
                                  style={{
                                    position: "absolute",
                                    opacity: 0,
                                    cursor: "pointer",
                                  }}
                                />
                                Communication Breakdowns
                              </label>
                            </Box>

                            <Box
                              border={"1px solid black"}
                              borderRadius={"50px"}
                              _hover={{ bgColor: "black", color: "white" }}
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
                                  value="Absence of failover systems or processes that can act as a backup during primary system failures"
                                  style={{
                                    position: "absolute",
                                    opacity: 0,
                                    cursor: "pointer",
                                  }}
                                />
                                Lack of Redundancy
                              </label>
                            </Box>
                          </Box>
                        </RadioGroup>

                        <Modal
                          isOpen={isModalOpen1}
                          onClose={() => setIsModalOpen1(false)}
                        >
                          <ModalOverlay />
                          <ModalContent
                            boxShadow={
                              "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
                            }
                          >
                            <ModalHeader
                              fontWeight={"bold"}
                              fontSize={"25px"}
                            ></ModalHeader>
                            <ModalBody fontSize={"18px"}>
                              <Image src="https://img.freepik.com/premium-vector/video-tutorials-background-vector-illustration-watching-streaming-online-computer-about-education-knowledge-web-banner-brochures-poster-book-cover_2175-1338.jpg?w=900" />
                              <Text>
                                Which of the following technical challenges do
                                you see as dominant in the scripts which you
                                just saw ?
                              </Text>
                              <br />
                              <Text fontWeight={500}>{value1}</Text>
                              <br />
                              {/* <Input onChange={(e) => setExplanation(e.target.value)} value={explaination} placeholder="Please provide an explanation for your answer" /> */}
                            </ModalBody>
                            <ModalFooter>
                              <Button
                                colorScheme="teal"
                                onClick={handleClick2}
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

                        <Modal
                          isOpen={isModalOpen2}
                          onClose={() => setIsModalOpen2(false)}
                        >
                          <ModalOverlay />
                          <ModalContent
                            boxShadow={
                              "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
                            }
                          >
                            <ModalBody
                              fontSize={"18px"}
                              pt={100}
                              textAlign={"center"}
                            >
                              <Image
                                src="https://www.marvelmatrimony.com/img/icon2.png"
                                m={"auto "}
                              />
                              <Heading>Thank You !</Heading>
                              <Text>Your submission has been sent</Text>
                            </ModalBody>
                            <ModalFooter>
                              <Button
                                colorScheme="teal"
                                onClick={() => setIsModalOpen2(false)}
                                textAlign={"center"}
                                fontFamily={"Croissant One"}
                                bg={"black"}
                                _hover={{ bgColor: "#a1e8f0", color: "black" }}
                                mr={"150px"}
                              >
                                Close
                              </Button>
                            </ModalFooter>
                          </ModalContent>
                        </Modal>
                        {ShowScroll && (
                        <ScrollDown />
                       )}
                      </Box>
                    </>
                  )}

                  {showBox2 && (
                    <>
                      <Box bg={"white"} w={"60%"} m={"auto"} mt={"50px"}>
                        <Image
                          w={"50%"}
                          m={"auto"}
                          src="https://img.freepik.com/free-vector/text-files-concept-illustration_114360-4402.jpg?t=st=1696612249~exp=1696612849~hmac=fb707e6cc9f86b8c9c7c512cf3910dfc942bd0073ccf581840b9772cf4deb68e"
                        />
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
                            Which trade of the customer representative do you
                            feel has stood out during your latest interaction ?
                          </Text>
                        </Flex>

                        <RadioGroup
                          m={"auto"}
                          onChange={handleChange}
                          value={value}
                        >
                          <Box
                            className="flex"
                            w={"80%"}
                            m={"auto"}
                            pb={"40px"}
                            mt={"50px"}
                          >
                            <Box
                              border={"1px solid black"}
                              w={"70%"}
                              borderRadius={"50px"}
                              _hover={{ bgColor: "black", color: "white" }}
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
                              _hover={{ bgColor: "black", color: "white" }}
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

                            <Box
                              border={"1px solid black"}
                              borderRadius={"50px"}
                              _hover={{ bgColor: "black", color: "white" }}
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

                            <Box
                              border={"1px solid black"}
                              borderRadius={"50px"}
                              _hover={{ bgColor: "black", color: "white" }}
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

                            <Box
                              border={"1px solid black"}
                              borderRadius={"50px"}
                              _hover={{ bgColor: "black", color: "white" }}
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

                            <Box
                              border={"1px solid black"}
                              borderRadius={"50px"}
                              _hover={{ bgColor: "black", color: "white" }}
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
                                Which trade of the customer representative do
                                you feel has stood out during your latest
                                interaction ?
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
                      </Box>
                    </>
                  )}

                  <div ref={spacerRef} style={{ height: "40px" }}></div>
                </TransitionGroup>
              </Box>
            </Box>
          </Flex>
        </Box>
      )}
    </>
  );
};

export default EarlyMorning;
