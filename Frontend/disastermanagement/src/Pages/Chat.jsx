import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  RadioGroup,
  Radio,
  Tooltip,
} from "@chakra-ui/react";

import { Box, Button, Flex, Text, Image } from "@chakra-ui/react";
import React, { useContext, useEffect, useRef, useState } from "react";
import Cookies from "js-cookie";
import "./Chat.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import BringDown from "../Components/Day1/Day1Evening";
import bencarter from "../Images/org/bencarter.png";
import { dayOneMorning } from "../mainData";
import kate from "../Images/org/kate_sullivan.png";
import MyContext from "../Components/ContextApi/MyContext";
import openemail from "../Images/openemail.jpeg";
import bensphone from "../Images/bensphone.jpeg";
import relaxing from "../Images/relaxing.jpeg";
import bgcall from "../Images/bgcall.jpeg";
import bensleep from "../Images/bensleep.jpeg";
import Morning5 from "../Components/Day5/Morning5";

const Chat = () => {
  const [activeUser, setActiveUser] = useState(null);
  const [showBox, setShowBox] = useState(false);
  const [showBoxContent1, setShowBoxContent1] = useState(true);
  const [showBoxContent2, setshowBoxContent2] = useState(false);
  const [value, setValue] = useState(null);
  const [value1, setValue1] = useState(null);
  const [day5Popup, setDay5Popup] = useState(true);
  const [day5Popup2, setDay5Popup2] = useState(true);
  const [day5Popup3, setDay5Popup3] = useState(true);
  const [chatPaused, setChatPaused] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  const [showPopup3, setShowPopup3] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const chatContainerRef = useRef(null);
  const spacerRef = useRef(null);

  const { setHead, speed, pauseBtn, showSideBar, setShowCloseBtn } =
    useContext(MyContext);

  const handleChange = (value) => {
    setValue(value);
    Cookies.set("day1morning2", value);
  };

  const handleChange2 = (value1) => {
    setValue1(value1);
    Cookies.set("day1morning1", value1);
    setShowBoxContent1(false);
    setshowBoxContent2(true);
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
  ];

  useEffect(() => {
    // Simulate messages from 5 users with a 2-second delay between each message
    setShowCloseBtn(true);
    if (currentMessageIndex > 3) {
      setHead("Day 1 - Night");
    } else {
      setHead("Day 1 - Evening");
    }
    
    console.log(startIndex ,currentMessageIndex, dayOneMorning[startIndex].message);
   

    const messageDelay = speed;

    const displayNextMessage = () => {
      if (!pauseBtn) {
        if (!chatPaused && currentMessageIndex < dayOneMorning.length) {
          const message = dayOneMorning[currentMessageIndex];
          setCurrentMessageIndex((prevIndex) => prevIndex + 1);
          setActiveUser(message.sender);

          if (currentMessageIndex === 0) {
            setChatPaused(true);
            setTimeout(() => {
              setShowPopup(true);
            }, 2000);
          } else if (currentMessageIndex === 2) {
            setChatPaused(true);
            setTimeout(() => {
              setShowPopup2(true);
              
                setStartIndex(currentMessageIndex+1)
              
            }, 2000);
          } else if (currentMessageIndex === 5) {
            setChatPaused(true);
            setTimeout(() => {
              setShowPopup3(true);
            }, 2000);
          }
        } else {
          if (currentMessageIndex === dayOneMorning.length) {
            // The chat has ended completely, set showBox to true
            setShowBox(true);
          }
        }
      }
    };

    const messageInterval = setInterval(displayNextMessage, messageDelay);

    return () => {
      clearInterval(messageInterval);
    };
  }, [currentMessageIndex, chatPaused, pauseBtn]);

  

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

  useEffect(() => {
    // Scroll to the bottom after chatData changes
    scrollToBottom();
  }, [currentMessageIndex]);

  useEffect(() => {
    // Scroll to the bottom when showBox becomes true
    if (showBox) {
      setTimeout(() => {
        scrollToBottom();
      }, 100);
    }
  }, [showBox, showBoxContent2, showSideBar]);

  
  const visibleMessages = dayOneMorning.slice(startIndex, currentMessageIndex);

  return (
    <>
      {value ===
      "Emphasizing teamwork, both internally and with external partners" ? (
        <BringDown />
      ) : value === "Making clear and swift decisions under pressure" ? (
        <BringDown />
      ) : value === "Remaining calm and level-headed during challenges" ? (
        <BringDown />
      ) : value ===
        "Effectively conveying information, even in challenging circumstances" ? (
        <BringDown />
      ) : value ===
        "Quickly adjusting strategies based on new information or changing scenarios" ? (
        <BringDown />
      ) : value ===
        "Keeping an eye on long-term impacts and future implications during the crisis" ? (
        <BringDown />
      ) : value ===
        "Quickly adjusting strategies based on new information or changing scenarios" ? (
        <BringDown />
      ) : value ===
        "Keeping an eye on long-term impacts and future implications during the crisis" ? (
        <BringDown />
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
              <Box pt={3} borderBottom={"0px solid black"}>
                {users.map((el) => {
                  return (
                    <Tooltip
                      label={
                        (el.name === "Ben Carter" && "CEO") ||
                        (el.name === "Kate Sullivan" && "IT Director")
                      }
                    >
                      <Box
                        borderBottom={"0px solid black"}
                        key={el.name}
                        cursor={"pointer"}
                      >
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
                          cursor={"pointer"}
                        >
                          {el.name}
                        </Text>
                      </Box>
                    </Tooltip>
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
                currentMessageIndex > 6
                  ? bgcall
                  : currentMessageIndex > 3
                  ? relaxing
                  : bensphone
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
                <Text fontSize={"18"}>
                  The office of Ben Carter. He's wrapping up for the day,
                  shutting down his computer,gathering his things, and
                  exchanging a few words with his colleagues before heading out.
                </Text>
              </Box>
              <Box mt={2}>
                <Text bgColor={"grey"} color={"black"} w={"90%"} m={"auto"}>
                  Ben's Phone: A soft chime. New email notification.
                </Text>
                <Text bgColor={"grey"} color={"black"} w={"90%"} m={"auto"}>
                  Ben glances at the email subject: "Minor issues at the data
                  center."
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
                  {visibleMessages.map((el, i) => {
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
                        boxShadow="0px 10px 20px rgba(0, 0, 0, 0.2)"
                        borderRadius={10}
                        width={["90%", "70%", "50%"]} // Responsive width
                        maxW="500px"
                      >
                        <ModalHeader
                          fontWeight="bold"
                          fontSize="25px"
                        ></ModalHeader>

                        <ModalBody fontSize="18px">
                          <Flex flexDirection={["column", "row"]} gap={[4, 2]}>
                            {" "}
                            {/* Responsive layout */}
                            <Box
                              bgColor="white"
                              boxShadow="0px 10px 20px rgba(0, 0, 0, 0.2)"
                              borderRadius={10}
                              p={4}
                              flex="1"
                            >
                              <Text>
                                He opens the email. It's a brief report about
                                some applications showing sporadic errors.
                              </Text>
                            </Box>
                            <Box textAlign="center" flex="1">
                              <Image src={openemail} borderRadius={10} />
                              <Button
                                colorScheme="teal"
                                onClick={closePopup}
                                fontFamily="Croissant One"
                                bg="black"
                                _hover={{ bgColor: "#a1e8f0", color: "black" }}
                                mt={3}
                                borderRadius={10}
                                w={"100%"}
                              >
                                Close
                              </Button>
                            </Box>
                          </Flex>
                        </ModalBody>
                        <ModalFooter>
                          {/* Footer content, if needed */}
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                  )}

                  {showPopup2 && (
                    <Modal isOpen={day5Popup2}>
                      <ModalOverlay />
                      <ModalContent
                        boxShadow="0px 10px 20px rgba(0, 0, 0, 0.2)"
                        borderRadius={10}
                        width={["90%", "70%", "50%"]} // Responsive width
                        maxW="500px"
                      >
                        <ModalHeader
                          fontWeight="bold"
                          fontSize="25px"
                        ></ModalHeader>

                        <ModalBody fontSize="18px">
                          <Flex flexDirection={["column", "row"]} gap={[4, 2]}>
                            {" "}
                            {/* Responsive layout */}
                            <Box
                              bgColor="white"
                              boxShadow="0px 10px 20px rgba(0, 0, 0, 0.2)"
                              borderRadius={10}
                              p={4}
                              flex="1"
                            >
                              <Text>
                                An hour later. Ben is at home, relaxing. His
                                phone buzzes with a call from Kate.
                              </Text>
                            </Box>
                            <Box textAlign="center" flex="1">
                              <Image src={relaxing} borderRadius={10} />
                              <Button
                                colorScheme="teal"
                                onClick={closePopup2}
                                fontFamily="Croissant One"
                                bg="black"
                                _hover={{ bgColor: "#a1e8f0", color: "black" }}
                                mt={3}
                                borderRadius={10}
                                w={"100%"}
                              >
                                Close
                              </Button>
                            </Box>
                          </Flex>
                        </ModalBody>
                        <ModalFooter>
                          {/* Footer content, if needed */}
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                  )}
                  {showPopup3 && (
                    <Modal isOpen={day5Popup3}>
                      <ModalOverlay />
                      <ModalContent
                        boxShadow="0px 10px 20px rgba(0, 0, 0, 0.2)"
                        borderRadius={10}
                        width={["90%", "70%", "50%"]} // Responsive width
                        maxW="500px"
                      >
                        <ModalHeader
                          fontWeight="bold"
                          fontSize="25px"
                        ></ModalHeader>

                        <ModalBody fontSize="18px">
                          <Flex flexDirection={["column", "row"]} gap={[4, 2]}>
                            {" "}
                            {/* Responsive layout */}
                            <Box
                              bgColor="white"
                              boxShadow="0px 10px 20px rgba(0, 0, 0, 0.2)"
                              borderRadius={10}
                              p={4}
                              flex="1"
                            >
                              <Text>
                                Late at night. Ben is asleep. His phone rings
                                persistently. Groggily, he picks it up. It's
                                Kate
                              </Text>
                            </Box>
                            <Box textAlign="center" flex="1">
                              <Image src={bensleep} borderRadius={10} />
                              <Button
                                colorScheme="teal"
                                onClick={closePopup3}
                                fontFamily="Croissant One"
                                bg="black"
                                _hover={{ bgColor: "#a1e8f0", color: "black" }}
                                mt={3}
                                borderRadius={10}
                                w={"100%"}
                              >
                                Close
                              </Button>
                            </Box>
                          </Flex>
                        </ModalBody>
                        <ModalFooter>
                          {/* Footer content, if needed */}
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                  )}

                  {showBox && (
                    <>
                      <Box
                        bg={"white"}
                        pb={10}
                        w={"60%"}
                        m={"auto"}
                        mt={"50px"}
                        borderRadius={10}
                      >
                        {showBoxContent1 && (
                          <>
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
                                Which of the following technical challenges do
                                you see as dominant in the scripts which you
                                just saw ?
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
                                  <Tooltip label="Weaknesses in the system that can be exploited, leading to potential disasters">
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
                                  </Tooltip>
                                </Box>

                                <Box
                                  border={"1px solid black"}
                                  w={"80%"}
                                  borderRadius={"50px"}
                                  _hover={{ bgColor: "black", color: "white" }}
                                >
                                  <Tooltip label="Ensuring that data remains accurate and reliable throughout its entire lifecycle, especially post-recovery">
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
                                  </Tooltip>
                                </Box>

                                <Box
                                  border={"1px solid black"}
                                  borderRadius={"50px"}
                                  _hover={{ bgColor: "black", color: "white" }}
                                >
                                  <Tooltip label="Hardware or network breakdowns that can disrupt normal operations">
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
                                  </Tooltip>
                                </Box>

                                <Box
                                  border={"1px solid black"}
                                  borderRadius={"50px"}
                                  _hover={{ bgColor: "black", color: "white" }}
                                >
                                  <Tooltip label="Inadequate or failed backups that prevent or delay recovery efforts">
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
                                  </Tooltip>
                                </Box>

                                <Box
                                  border={"1px solid black"}
                                  borderRadius={"50px"}
                                  _hover={{ bgColor: "black", color: "white" }}
                                >
                                  <Tooltip label="Failures in internal and external communication systems during critical times">
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
                                  </Tooltip>
                                </Box>

                                <Box
                                  border={"1px solid black"}
                                  borderRadius={"50px"}
                                  _hover={{ bgColor: "black", color: "white" }}
                                >
                                  <Tooltip label="Absence of failover systems or processes that can act as a backup during primary system failures">
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
                                  </Tooltip>
                                </Box>
                              </Box>
                            </RadioGroup>
                          </>
                        )}

                        {showBoxContent2 && (
                          <>
                            <Image
                              w={"50%"}
                              m={"auto"}
                              src="https://img.freepik.com/free-vector/business-decisions-concept-illustration_114360-4096.jpg?w=740&t=st=1696672316~exp=1696672916~hmac=0b5a3d793d15d5eccf6f03a04e907baee2f1e59dc4292775fe4e025c871152be"
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
                                Which quality of Ben Carter do you feel stands
                                out during the last conversation?
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
                                  <Tooltip label="Making clear and swift decisions under pressure">
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
                                  </Tooltip>
                                </Box>

                                <Box
                                  border={"1px solid black"}
                                  w={"80%"}
                                  borderRadius={"50px"}
                                  _hover={{ bgColor: "black", color: "white" }}
                                >
                                  <Tooltip label="Remaining calm and level-headed during challenges">
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
                                  </Tooltip>
                                </Box>

                                <Box
                                  border={"1px solid black"}
                                  borderRadius={"50px"}
                                  _hover={{ bgColor: "black", color: "white" }}
                                >
                                  <Tooltip label="Emphasizing teamwork, both internally and with external partners">
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
                                  </Tooltip>
                                </Box>

                                <Box
                                  border={"1px solid black"}
                                  borderRadius={"50px"}
                                  _hover={{ bgColor: "black", color: "white" }}
                                >
                                  <Tooltip label="Effectively conveying information, even in challenging circumstances">
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
                                  </Tooltip>
                                </Box>

                                <Box
                                  border={"1px solid black"}
                                  borderRadius={"50px"}
                                  _hover={{ bgColor: "black", color: "white" }}
                                >
                                  <Tooltip label="Quickly adjusting strategies based on new information or changing scenarios">
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
                                  </Tooltip>
                                </Box>

                                <Box
                                  border={"1px solid black"}
                                  borderRadius={"50px"}
                                  _hover={{ bgColor: "black", color: "white" }}
                                >
                                  <Tooltip label="Keeping an eye on long-term impacts and future implications during the crisis">
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
                                  </Tooltip>
                                </Box>
                              </Box>
                            </RadioGroup>
                          </>
                        )}
                      </Box>
                      <div ref={spacerRef} style={{ height: "40px" }}></div>
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

export default Chat;
