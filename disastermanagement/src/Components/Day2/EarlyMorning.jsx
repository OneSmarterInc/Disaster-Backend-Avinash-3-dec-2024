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
  import { useNavigate } from "react-router";
import BringDown from "../Day1/BringDown";
  
  const EarlyMorning = () => {
    const [chatData, setChatData] = useState([]);
    const [activeUser, setActiveUser] = useState(null);
    const [showBox, setShowBox] = useState(false);
    const [explaination, setExplanation] = useState("");
    const [value, setValue] = useState(null);
    const [value1, setValue1] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const [isModalOpen2, setIsModalOpen2] = useState(false);
  
    const [modalValue, setModalValue] = useState(null);
    const [modalValue1, setModalValue1] = useState(null);
  
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
      setIsModalOpen2(true);
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
            " Tom, it's Ben. I never imagined we'd be in this situation, especially given how smoothly things have run over the years ",
        },
        { sender: "Tom Mitchell", message: "You and me both, Ben. We value our partnership with XYZ, and we're just as baffled about this situation. But we're here for you." },
        {
          sender: "Kate Sullivan (whispering to Ben)",
          message:
            "We need to understand their immediate protocols.",
        },
        {
          sender: "Ben Carter",
          message: "Tom, can you walk us through your immediate response protocols? We need to align our efforts.",
        },
        {
          sender: "Tom Mitchell",
          message:
            "Absolutely. I've already escalated this to our top-tier engineers. We're treating this with utmost priority.            ",
        },
        {
          sender: "Ben Carter",
          message:
            "I appreciate that, Tom. Let's work together and find a way out of this.            ",
        },
        { sender: "Tom Mitchell", message: "We're on it, Ben. We'll navigate this together" },
        {message:"After briefing the CEO, Ben Carter gets back on the call with Julia Harper from the vendor's team."},
        { sender: "Ben Carter", message: "Julia, our CEO is understandably concerned. We've always spoken highly of your systems, and this has caught us off guard." },
        { sender: "Julia Harper", message: "We're just as surprised, Ben. But we're committed to finding a solution. Our preliminary findings suggest the corruption is in the data headers" },
        { sender: "Sophia Kim", message: "That's consistent with our observations. But what could've caused it?        " },
        { sender: "Julia Harper", message: "We're diving deep into that. It could be a software glitch or a rare hardware anomaly." },
        { sender: "Mia Rodriguez", message: "We need to understand the root cause to ensure this doesn't happen again" },
        { sender: "Ben Carter: ", message: "Thanks, Julia. We're counting on your team." },
        { sender: "Julia Harper", message: "We won't let you down, Ben." },
        { message: "Before making the decision to proceed, Ben Carter has another call with Tom Mitchell" },
        { sender: "Ben Carter", message: "Tom, we're considering your team's proposed solution. But I've got to be honest, the stakes are high." },
        { sender: "Tom Mitchell", message: "I completely understand, Ben. We've been partners for years, and we want to ensure we navigate this challenge together" },
        { sender: "Kate Sullivan", message: "We're in uncharted territory here, Tom. It's concerning." },
        { sender: "Tom Mitchell", message: "I share your concern, Kate. We're pooling all our resources into this. It's a tricky situation, but we believe the solution has merit." },
        { sender: "Ben Carter", message: "We've always trusted your expertise, Tom. Let's work together and find our way through this." },
        { sender: "Tom Mitchell", message: ": We're with you every step of the way, Ben." },
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
          {modalValue ===
          "Emphasizing teamwork, both internally and with external partners" ? (
            <BringDown />
          ) : modalValue === "Making clear and swift decisions under pressure" ? (
            <BringDown />
          ) : modalValue ===
            "Remaining calm and level-headed during challenges" ? (
            <BringDown />
          ) : modalValue ===
            "Effectively conveying information, even in challenging circumstances" ? (
            <BringDown />
          ) : modalValue ===
            "Quickly adjusting strategies based on new information or changing scenarios" ? (
            <BringDown />
          ) : modalValue ===
            "Keeping an eye on long-term impacts and future implications during the crisis" ? (
            <BringDown />
          ) : (
            <Box
              pt={5}
              maxH={"88vh"}
              w={"100%"}
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
              <Text fontSize={20} fontWeight={'bold'}>Day2 EarlyMorning</Text>
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
                    const senderName = el.sender;
                    const messageClass = isCIO ? "CIO" : "OtherSender";
                    // const messageClass = isCIO ? "KateSullivan" : "BenCarter";
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
                                el.sender === "Ben Carter" ? "#f0f0f0" : "#030405"
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
                                <span id="sender">{senderName}</span> :{" "}
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
                      <Box
                        bg={"white"}
                        h={"700px"}
                        w={"70%"}
                        m={"auto"}
                        mt={"50px"}
                      >
                        <Image src="https://www.timefixed.com/static/img/app.3b5132a.gif" />
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
                            Which of the following technical challenges do you see
                            as dominant in the scripts which you just saw ?
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
                                Which of the following technical challenges do you
                                see as dominant in the scripts which you just saw
                                ?
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
                      </Box>
                    </>
                  )}
  
                  {showBox && (
                    <>
                      <Box
                        bg={"white"}
                        h={"750px"}
                        w={"70%"}
                        m={"auto"}
                        mt={"50px"}
                      >
                        <Image src="https://www.timefixed.com/static/img/hr.5d824eb.gif" />
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
                      </Box>
                    </>
                  )}
                  <div ref={spacerRef} style={{ height: "40px" }}></div>
                </TransitionGroup>
              </Box>
            </Box>
          )}
        </Box>
      </>
    );
  };
  
  export default EarlyMorning;
  