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
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Cookies from "js-cookie";
import "../Day1/BringDown.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Morning5 from "../Day5/Morning5";
import { dayFourMorning } from "../../mainData";
import bencarter from "../userImages/bencarter.png";

import sophia from "../userImages/sophia_kim.png";
import kate from "../userImages/kate_sullivan.png";
import mia from "../userImages/Mia Rodriguez.png";
import gaji from "../userImages/gaji.jpg";
import dev1 from "../userImages/systemdev1.jpg";
import dev2 from "../userImages/systemdev2.jpg";

import ScrollDown from "../ScrollDown";

const EarlyMorning4 = () => {
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

  const [modalValue, setModalValue] = useState(null);
  const [modalValue1, setModalValue1] = useState(null);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  const [showPopup3, setShowPopup3] = useState(false);
  const [showPopup4, setShowPopup4] = useState(false);
  const [ShowScroll,setShowScroll] = useState(false);


  const [chatPaused, setChatPaused] = useState(false);

  const chatContainerRef = useRef(null);
  const spacerRef = useRef(null);

  const handleChange = (value) => {
    setValue(value);
    setIsModalOpen(true);
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
      name: "Gajji",
      url: gaji,
    },
    {
      name: "Kate Sullivan",
      url: kate,
    },
    {
      name: "Liam Turner",
      url: bencarter,
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
      name: "System One Developer #1",
      url: dev1,
    },
    {
      name: "System One Developer #2",
      url: dev2,
    },
  ];


  

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


  useEffect(() => {
    const displayNextMessage = () => {
      if (!chatPaused && currentMessageIndex < dayFourMorning.length) {
        const message = dayFourMorning[currentMessageIndex];
        setCurrentMessageIndex((prevIndex) => prevIndex + 1);

       
        if (currentMessageIndex === 1) {
          setChatPaused(true);
          setTimeout(() => {
            setShowPopup(true);
          }, 2000);
        }
        else if (currentMessageIndex === 3) {
          setChatPaused(true);
          setTimeout(() => {
            setShowPopup2(true)
          }, 2000);
        }
        else if (currentMessageIndex === 5) {
          setChatPaused(true);
          setTimeout(() => {
            setShowPopup3(true)
          }, 2000);
        }
        else if (currentMessageIndex === 7) {
          setChatPaused(true);
          setTimeout(() => {
            setShowPopup4(true)
          }, 2000);
        }
      }
      else {
        if (currentMessageIndex === dayFourMorning.length) {
          // The chat has ended completely, set showBox to true
          setShowBox(true);
        }
      }
    };

    const messageInterval = setInterval(displayNextMessage, 500);

    return () => {
      clearInterval(messageInterval);
    };
  }, [currentMessageIndex, chatPaused]);

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

  return (
    <>
      {modalValue ===
      "Emphasizing teamwork, both internally and with external partners" ? (
        <Morning5 />
      ) : modalValue === "Making clear and swift decisions under pressure" ? (
        <Morning5 />
      ) : modalValue === "Remaining calm and level-headed during challenges" ? (
        <Morning5 />
      ) : modalValue ===
        "Effectively conveying information, even in challenging circumstances" ? (
        <Morning5 />
      ) : modalValue ===
        "Quickly adjusting strategies based on new information or changing scenarios" ? (
        <Morning5 />
      ) : modalValue ===
        "Keeping an eye on long-term impacts and future implications during the crisis" ? (
        <Morning5 />
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
            >
              <Box bgColor="#948888" pt={3} borderBottom={"1px solid black"}>
                {users.map((el) => {
                  return (
                    <Box borderBottom={"1px solid black"} key={el}>
                      <Box
                        boxShadow={
                          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
                        }
                        h={"6vh"}
                        w={"55px"}
                        m={"auto"}
                        mt={"17%"}
                        border={"0px solid black"}
                        borderRadius={"50%"}
                        className={el.name === activeUser ? "active" : ""}
                      >
                        <Image borderRadius={"50%"} src={el.url} alt="" />
                      </Box>
                      <Text
                        className={el.name === activeUser ? "Tactive" : ""}
                        fontSize={20}
                        mt={5}
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
              // bgImage={day1morning}
              // bgRepeat={"no-repeat"}
              // bgSize={"cover"}
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
                  Gajji's team begins their work, replacing the corrupted files.
                  The room's screens display lines of code and logs. The
                  atmosphere is thick with anticipation.{" "}
                </Text>
              </Box>
              <Text fontSize={20} fontWeight={"bold"} color={"white"}>
                Day4 Early Morning
              </Text>
              <Box
                w={"90%"}
                h={"68vh"}
                border="0px solid red"
                m={"auto"}
                pl={5}
                pr={5}
              >
                <TransitionGroup>
                  {dayFourMorning.slice(0, currentMessageIndex).map((el, i) => {
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
                        <ModalHeader fontWeight={"bold"} fontSize={"25px"}>
                         
                        </ModalHeader>
                        <ModalBody fontSize={"18px"}>
                          <Text>
                          A sudden error message pops up on the main screen. The room goes tense.
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
                            Close Mail
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
                        <ModalHeader fontWeight={"bold"} fontSize={"25px"}>
                         
                        </ModalHeader>
                        <ModalBody fontSize={"18px"}>
                          <Text>
                          Everyone watches with bated breath. Minutes feel like hours.
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
                            Close Mail
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
                        <ModalHeader fontWeight={"bold"} fontSize={"25px"}>
                         
                        </ModalHeader>
                        <ModalBody fontSize={"18px"}>
                          <Text>
                          The developers scramble, making adjustments. The room is silent except for the tapping of keyboards.
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
                            Close Mail
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
                        <ModalHeader fontWeight={"bold"} fontSize={"25px"}>
                         
                        </ModalHeader>
                        <ModalBody fontSize={"18px"}>
                          <Text>
                          After what feels like an eternity, the screens show positive signs. Processes start running smoothly.
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
                            Close Mail
                          </Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                  )}

                  {showBox && (
                    <>
                      <Box bg={"white"} p={10} w={"60%"} m={"auto"} mt={"50px"}>
                        <Image
                          w={"80%"}
                          m={"auto"}
                          src="https://www.timefixed.com/static/img/app.3b5132a.gif"
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
                          w={"80%"}
                          m={"auto"}
                          src="https://www.timefixed.com/static/img/hr.5d824eb.gif"
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

export default EarlyMorning4;
