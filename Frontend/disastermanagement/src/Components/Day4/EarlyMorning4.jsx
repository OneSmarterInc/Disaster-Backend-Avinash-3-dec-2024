import {
  ChakraProvider,
  extendTheme,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Tooltip,
} from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react";
import { Box, Button, Flex, Heading, Text, Image } from "@chakra-ui/react";
import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Cookies from "js-cookie";
import "../Day1/BringDown.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Morning5 from "../Day5/Morning5";
import { dayFourMorning } from "../../mainData";
import bencarter from "../userImages/bencarter.png";
import ScrollDown from "../ScrollDown";
import sophia from "../userImages/sophia_kim.png";
import kate from "../userImages/kate_sullivan.png";
import mia from "../userImages/Mia Rodriguez.png";
import gaji from "../userImages/gaji.jpg";
import dev1 from "../userImages/systemdev1.jpg";
import dev2 from "../userImages/systemdev2.jpg";
import begin from "../userImages/begingajji.png";
import liam from "../userImages/liam.jpeg";

import scene2 from "../userImages/2ndscene.jpeg";
import begin2 from "../userImages/begin2.png";
import tapping from "../userImages/tapping.png";
import starts from "../userImages/starts.png";
import callwith from "../userImages/callwith.jpeg";
import error from "../userImages/error.jpeg";
import feelhour from "../userImages/feelhour.jpeg";
import scramble from "../userImages/scramble.jpeg";
import MyContext from "../ContextApi/MyContext";
import { MdNotStarted } from "react-icons/md";
import { BsPauseCircleFill } from "react-icons/bs";
import gajjiteam2 from "../userImages/gajjiteam2.png"

const EarlyMorning4 = () => {
  const [chatData, setChatData] = useState([]);
  const [activeUser, setActiveUser] = useState(null);
  const [showBox, setShowBox] = useState(false);
  const [showBox2, setShowBox2] = useState(false);
  const [showBoxContent1, setShowBoxContent1] = useState(true);
  const [showBoxContent2, setshowBoxContent2] = useState(false);
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
  const [day5Popup6, setDay5Popup6] = useState(true);

  const [modalValue, setModalValue] = useState(null);
  const [modalValue1, setModalValue1] = useState(null);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  const [showPopup3, setShowPopup3] = useState(false);
  const [showPopup4, setShowPopup4] = useState(false);
  const [ShowScroll, setShowScroll] = useState(false);

  const [showPopup5, setShowPopup5] = useState(false);
  const [showPopup6, setShowPopup6] = useState(false);

  const [chatPaused, setChatPaused] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const chatContainerRef = useRef(null);
  const spacerRef = useRef(null);

  const { setHead, speed, pauseBtn, setPauseBtn } = useContext(MyContext);

  const handlePause = () => {
    setPauseBtn(!pauseBtn);
  };

  const handleChange = (value) => {
    setValue(value);
    Cookies.set("day4earlymorning2", value);
  };

  const handleChange2 = (value1) => {
    setValue1(value1);
    Cookies.set("day4earlymorning1", value1);
    setShowBox2(true);
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
      name: "Gajji",
      url: gaji,
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
      name: "System One Developer #1",
      url: dev1,
    },
    {
      name: "System One Developer #2",
      url: dev2,
    },
  ];

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
  }, [showBox, showBoxContent2]);

  useEffect(() => {
    setHead("Day 4 - Evening");

    const displayNextMessage = () => {
      if (!pauseBtn) {
        if (!chatPaused && currentMessageIndex < dayFourMorning.length) {
          const message = dayFourMorning[currentMessageIndex];
          setCurrentMessageIndex((prevIndex) => prevIndex + 1);
          setActiveUser(message.sender);

          if (currentMessageIndex === 5) {
            setChatPaused(true);
            setTimeout(() => {
              setShowPopup(true);
              setStartIndex(currentMessageIndex + 1);
            }, 2000);
          } else if (currentMessageIndex === 7) {
            setChatPaused(true);
            setTimeout(() => {
              setShowPopup2(true);
            }, 2000);
          } else if (currentMessageIndex === 9) {
            setChatPaused(true);
            setTimeout(() => {
              setShowPopup3(true);
            }, 2000);
          } else if (currentMessageIndex === 11) {
            setChatPaused(true);
            setTimeout(() => {
              setShowPopup4(true);
            }, 2000);
          } else if (currentMessageIndex === 13) {
            setChatPaused(true);
            setTimeout(() => {
              setShowPopup5(true);
            }, 2000);
          } else if (currentMessageIndex === 15) {
            setChatPaused(true);
            setTimeout(() => {
              setShowPopup6(true);
            }, 2000);
          }
        } else {
          if (currentMessageIndex === dayFourMorning.length) {
            // The chat has ended completely, set showBox to true
            setShowBox(true);
          }
        }
      }
    };

    const messageInterval = setInterval(displayNextMessage, speed);

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

  const closePopup6 = () => {
    // setShowPopup(false);
    setDay5Popup6(false);
    // onClose();
    setChatPaused(false);
  };

  const visibleMessages = dayFourMorning.slice(startIndex, currentMessageIndex);

  return (
    <>
      {value ===
      "Emphasizing teamwork, both internally and with external partners" ? (
        <Morning5 />
      ) : value === "Making clear and swift decisions under pressure" ? (
        <Morning5 />
      ) : value === "Remaining calm and level-headed during challenges" ? (
        <Morning5 />
      ) : value ===
        "Effectively conveying information, even in challenging circumstances" ? (
        <Morning5 />
      ) : value ===
        "Quickly adjusting strategies based on new information or changing scenarios" ? (
        <Morning5 />
      ) : value ===
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
              bgColor={"#948888"}
            >
              <Box
                bgColor="#948888"
                pt={3}
                flex="1"
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent={"center"}
                columnGap={3}
              >
                <Box>
                  {users.slice(0, 5).map((el) => {
                    return (
                      <Tooltip
                        label={
                          (el.name === "Ben Carter" && "CEO") ||
                          (el.name === "Kate Sullivan" && "IT Director") ||
                          (el.name === "Liam Turner" &&
                            "Senior Systems Analyst") ||
                          (el.name === "Sophia Kim" &&
                            "Database Administrator") ||
                          (el.name === "Mia Rodriguez" &&
                            "Network Specialist") ||
                          (el.name === "Tom Mitchell" &&
                            "Application Vendor") ||
                          (el.name === "Raj Patel" && "") ||
                          (el.name === "Grace Patterson" && "") ||
                          (el.name === "Gajji" &&
                            "Senior Vice President of Development (ERP Vendor)") ||
                          (el.name === "System One Developer #1" &&
                            "System One Developer #1") ||
                          (el.name === "System One Developer #2" &&
                            "System One Developer #2")
                        }
                      >
                        <Box key={el.name} cursor={"pointer"}>
                          <Box
                            h={"6vh"}
                            w={"55px"}
                            m={"auto"}
                            mt={5}
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
                            {el.name.split(" ")[0]}
                          </Text>
                        </Box>
                      </Tooltip>
                    );
                  })}
                </Box>
                <Box alignSelf={"flex-start"}>
                  {users.slice(5).map((el) => (
                    <Tooltip
                      label={
                        (el.name === "Ben Carter" && "CEO") ||
                        (el.name === "Kate Sullivan" && "IT Director") ||
                        (el.name === "Liam Turner" &&
                          "Senior Systems Analyst") ||
                        (el.name === "Sophia Kim" &&
                          "Database Administrator") ||
                        (el.name === "Mia Rodriguez" && "Network Specialist") ||
                        (el.name === "Tom Mitchell" && "Application") ||
                        (el.name === "Aisha Patel" &&
                          "Chief Operating Officer") ||
                        (el.name === "Gajji" &&
                          "Senior Vice President of Development (ERP Vendor)") ||
                        (el.name === "System One Developer #1" &&
                          "System One Developer #1") ||
                        (el.name === "System One Developer #2" &&
                          "System One Developer #2")
                      }
                    >
                      <Box id={el.name} key={el.name} cursor={"pointer"}>
                        <Box
                          h={"6vh"}
                          w={"55px"}
                          m={"auto"}
                          mt={5}
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
                          {(el.name === "System One Developer #1" && "SOD 1") ||
                            (el.name === "System One Developer #2" &&
                              "SOD 2") ||
                            el.name.split(" ")[0]}
                        </Text>
                      </Box>
                    </Tooltip>
                  ))}
                </Box>
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
                currentMessageIndex > 16
                  ? starts
                  : currentMessageIndex > 14
                  ? starts
                  : currentMessageIndex > 12
                  ? tapping
                  : currentMessageIndex > 10
                  ? begin
                  : currentMessageIndex > 8
                  ? scene2
                  : currentMessageIndex > 6
                  ? gajjiteam2
                  :begin2
              }
              bgRepeat={"no-repeat"}
              bgSize={"cover"}
            >
              {currentMessageIndex < 7 ? (
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
                    Ben Carter and Kate Sullivan have come together to engage in
                    a strategic meeting. This is a frank conversation where they
                    discuss and plan various strategies..{" "}
                  </Text>
                </Box>
              ) : (
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
                    The ERP vendor team is now driving a solution, working
                    diligently and ensuring a successful implementation. Their
                    commitment and expertise are instrumental in guiding towards
                    a positive outcome.
                  </Text>
                </Box>
              )}

              <Box
                w={"90%"}
                h={"68vh"}
                border="0px solid red"
                m={"auto"}
                pl={5}
                pr={5}
              >
                {/* <Text
                  position={"fixed"}
                  color={"black"}
                  top={"650px"}
                  left={"1450px"}
                  cursor={"pointer"}
                  fontSize={45}
                  onClick={handlePause}
                >
                  {pauseBtn ? (
                    <MdNotStarted color="black" />
                  ) : (
                    <BsPauseCircleFill color="black" />
                  )}
                </Text> */}
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
                        boxShadow="0 0 20px rgba(0, 0, 0, 0.2)"
                        bgColor="#E3E3E3"
                        maxW={{ base: "90%", sm: "600px" }}
                      >
                        <ModalHeader fontWeight="bold" fontSize="25px">
                          {/* Add a header if needed */}
                        </ModalHeader>

                        <ModalBody fontSize="18px">
                          <Flex
                            direction={{ base: "column", sm: "row" }}
                            gap={4}
                          >
                            <Box
                              bgColor="white"
                              boxShadow="0 0 20px rgba(0, 0, 0, 0.2)"
                              borderRadius={10}
                              p={5}
                            >
                              <Text>
                                Gajji's team begins their work, replacing the
                                corrupted files. The room's screens display
                                lines of code and logs. The atmosphere is thick
                                with anticipation.
                              </Text>
                            </Box>
                            <Box>
                              <Image
                                src={scene2}
                                borderRadius={10}
                                maxW="100%"
                                h="auto"
                              />
                              <Button
                                colorScheme="teal"
                                onClick={closePopup}
                                textAlign="center"
                                fontFamily="Croissant One"
                                bg="black"
                                _hover={{ bgColor: "#a1e8f0", color: "black" }}
                                w="100%"
                                mt={3}
                                borderRadius={10}
                              >
                                Close
                              </Button>
                            </Box>
                          </Flex>
                        </ModalBody>
                        <ModalFooter>
                          {/* Add a footer if needed */}
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                  )}
                  {showPopup2 && (
                    <Modal isOpen={day5Popup2}>
                      <ModalOverlay />
                      <ModalContent
                        boxShadow="0 0 20px rgba(0, 0, 0, 0.2)"
                        bgColor="#E3E3E3"
                        maxW={{ base: "90%", sm: "600px" }}
                      >
                        <ModalHeader fontWeight="bold" fontSize="25px">
                          {/* Add a header if needed */}
                        </ModalHeader>

                        <ModalBody fontSize="18px">
                          <Flex
                            direction={{ base: "column", sm: "row" }}
                            gap={4}
                          >
                            <Box
                              bgColor="white"
                              boxShadow="0 0 20px rgba(0, 0, 0, 0.2)"
                              borderRadius={10}
                              p={5}
                            >
                              <Text>
                                A sudden error message pops up on the main
                                screen. The room goes tense.
                              </Text>
                            </Box>
                            <Box>
                              <Image
                                src={error}
                                borderRadius={10}
                                maxW="100%"
                                h="auto"
                              />
                              <Button
                                colorScheme="teal"
                                onClick={closePopup2}
                                textAlign="center"
                                fontFamily="Croissant One"
                                bg="black"
                                _hover={{ bgColor: "#a1e8f0", color: "black" }}
                                w="100%"
                                mt={3}
                                borderRadius={10}
                              >
                                Close
                              </Button>
                            </Box>
                          </Flex>
                        </ModalBody>
                        <ModalFooter>
                          {/* Add a footer if needed */}
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                  )}
                  {showPopup3 && (
                    <Modal isOpen={day5Popup3}>
                      <ModalOverlay />
                      <ModalContent
                        boxShadow="0 0 20px rgba(0, 0, 0, 0.2)"
                        bgColor="#E3E3E3"
                        maxW={{ base: "90%", sm: "600px" }}
                      >
                        <ModalHeader fontWeight="bold" fontSize="25px">
                          {/* Add a header if needed */}
                        </ModalHeader>

                        <ModalBody fontSize="18px">
                          <Flex
                            direction={{ base: "column", sm: "row" }}
                            gap={4}
                          >
                            <Box
                              bgColor="white"
                              boxShadow="0 0 20px rgba(0, 0, 0, 0.2)"
                              borderRadius={10}
                              p={5}
                            >
                              <Text>
                                Everyone watches with bated breath. Minutes feel
                                like hours.
                              </Text>
                            </Box>
                            <Box>
                              <Image
                                src={feelhour}
                                borderRadius={10}
                                maxW="100%"
                                h="auto"
                              />
                              <Button
                                colorScheme="teal"
                                onClick={closePopup3}
                                textAlign="center"
                                fontFamily="Croissant One"
                                bg="black"
                                _hover={{ bgColor: "#a1e8f0", color: "black" }}
                                w="100%"
                                mt={3}
                                borderRadius={10}
                              >
                                Close
                              </Button>
                            </Box>
                          </Flex>
                        </ModalBody>
                        <ModalFooter>
                          {/* Add a footer if needed */}
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                  )}
                  {showPopup4 && (
                    <Modal isOpen={day5Popup4}>
                      <ModalOverlay />
                      <ModalContent
                        boxShadow="0 0 20px rgba(0, 0, 0, 0.2)"
                        bgColor="#E3E3E3"
                        maxW={{ base: "90%", sm: "600px" }}
                      >
                        <ModalHeader fontWeight="bold" fontSize="25px">
                          {/* Add a header if needed */}
                        </ModalHeader>

                        <ModalBody fontSize="18px">
                          <Flex
                            direction={{ base: "column", sm: "row" }}
                            gap={4}
                          >
                            <Box
                              bgColor="white"
                              boxShadow="0 0 20px rgba(0, 0, 0, 0.2)"
                              borderRadius={10}
                              p={5}
                            >
                              <Text>
                                The developers scramble, making adjustments. The
                                room is silent except for the tapping of
                                keyboards.
                              </Text>
                            </Box>
                            <Box>
                              <Image
                                src={scramble}
                                borderRadius={10}
                                maxW="100%"
                                h="auto"
                              />
                              <Button
                                colorScheme="teal"
                                onClick={closePopup4}
                                textAlign="center"
                                fontFamily="Croissant One"
                                bg="black"
                                _hover={{ bgColor: "#a1e8f0", color: "black" }}
                                w="100%"
                                mt={3}
                                borderRadius={10}
                              >
                                Close
                              </Button>
                            </Box>
                          </Flex>
                        </ModalBody>
                        <ModalFooter>
                          {/* Add a footer if needed */}
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                  )}

                  {showPopup5 && (
                    <Modal isOpen={day5Popup5}>
                      <ModalOverlay />
                      <ModalContent
                        boxShadow="0 0 20px rgba(0, 0, 0, 0.2)"
                        bgColor="#E3E3E3"
                        maxW={{ base: "90%", sm: "600px" }}
                      >
                        <ModalHeader fontWeight="bold" fontSize="25px">
                          {/* Add a header if needed */}
                        </ModalHeader>

                        <ModalBody fontSize="18px">
                          <Flex
                            direction={{ base: "column", sm: "row" }}
                            gap={4}
                          >
                            <Box
                              bgColor="white"
                              boxShadow="0 0 20px rgba(0, 0, 0, 0.2)"
                              borderRadius={10}
                              p={5}
                            >
                              <Text>
                                After what feels like an eternity, the screens
                                show positive signs. Processes start running
                                smoothly.
                              </Text>
                            </Box>
                            <Box>
                              <Image
                                src={starts}
                                borderRadius={10}
                                maxW="100%"
                                h="auto"
                              />
                              <Button
                                colorScheme="teal"
                                onClick={closePopup5}
                                textAlign="center"
                                fontFamily="Croissant One"
                                bg="black"
                                _hover={{ bgColor: "#a1e8f0", color: "black" }}
                                w="100%"
                                mt={3}
                                borderRadius={10}
                              >
                                Close
                              </Button>
                            </Box>
                          </Flex>
                        </ModalBody>
                        <ModalFooter>
                          {/* Add a footer if needed */}
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                  )}
                  {showPopup6 && (
                    <Modal isOpen={day5Popup6}>
                      <ModalOverlay />
                      <ModalContent
                        boxShadow="0 0 20px rgba(0, 0, 0, 0.2)"
                        bgColor="#E3E3E3"
                        maxW={{ base: "90%", sm: "600px" }}
                      >
                        <ModalHeader fontWeight="bold" fontSize="25px">
                          {/* Add a header if needed */}
                        </ModalHeader>

                        <ModalBody fontSize="18px">
                          <Flex
                            direction={{ base: "column", sm: "row" }}
                            gap={4}
                          >
                            <Box
                              bgColor="white"
                              boxShadow="0 0 20px rgba(0, 0, 0, 0.2)"
                              borderRadius={10}
                              p={5}
                            >
                              <Text>
                                A couple of hours pass. The super users are busy
                                checking the system.
                              </Text>
                            </Box>
                            <Box>
                              <Image
                                src={callwith}
                                borderRadius={10}
                                maxW="100%"
                                h="auto"
                              />
                              <Button
                                colorScheme="teal"
                                onClick={closePopup6}
                                textAlign="center"
                                fontFamily="Croissant One"
                                bg="black"
                                _hover={{ bgColor: "#a1e8f0", color: "black" }}
                                w="100%"
                                mt={3}
                                borderRadius={10}
                              >
                                Close
                              </Button>
                            </Box>
                          </Flex>
                        </ModalBody>
                        <ModalFooter>
                          {/* Add a footer if needed */}
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
