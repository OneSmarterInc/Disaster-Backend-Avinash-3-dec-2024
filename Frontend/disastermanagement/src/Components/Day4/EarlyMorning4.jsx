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
import bencarter from "../userImages/bencarter.jpg";
import ScrollDown from "../ScrollDown";
import sophia from "../userImages/sophia_kim.jpg";
import kate from "../userImages/kate_sullivan.jpg";
import mia from "../userImages/Mia Rodriguez.jpg";
import gaji from "../userImages/gaji.jpg";
import dev1 from "../userImages/systemdev1.jpg";
import dev2 from "../userImages/systemdev2.jpg";
import begin from "../userImages/begingajji.jpg";
import liam from "../userImages/liam.jpg";
import tension from "../userImages/tension.jpg";

import scene2 from "../userImages/2ndscene.jpg";
import begin2 from "../userImages/begin2.jpg";
import tapping from "../userImages/tapping.jpg";
import starts from "../userImages/starts1.jpeg";
import callwith from "../userImages/callwith.jpg";
import error from "../userImages/error.jpg";
import feelhour from "../userImages/feelhour.jpg";
import scramble from "../userImages/scramble.jpg";
import MyContext from "../ContextApi/MyContext";
import { MdNotStarted } from "react-icons/md";
import { BsPauseCircleFill } from "react-icons/bs";
import dashboard from "../userImages/dashboard.jpg";
import gajjiteam2 from "../userImages/gajjiteam2.jpg";
import Draggable from "react-draggable";

import kateben from "../userImages/kateben.jpg";
import twoLeaders from "../userImages/twoleaders.jpeg";

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
  const [ptr, setPtr] = useState(0);
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
  const [content, setContent] = useState(
    "The two CEO's have a frank conversation.  The risk to both organizations is immense.  But both agree to work together. However, they wholeheartedly commit to a collaborative partnership."
  );
  const [imgSrc, setImgSrc] = useState(kateben);

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
    if (currentMessageIndex === 6) {
      setTimeout(() => {
        setHead("Day 4 - Afternoon: Both CEO's agree to a risk sharing plan");
      }, 2000);
    }

    const container = chatContainerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  };

  useState(() => {
    setHead("Day 4 - Early Morning: Where will help come from?");
  }, []);

  const user = [
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
    if (currentMessageIndex === 6) {
      setTimeout(() => {
        setImgSrc(twoLeaders);
      }, 2000);
    }
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
    const displayNextMessage = () => {
      if (!pauseBtn) {
        if (!chatPaused && currentMessageIndex < dayFourMorning.length) {
          const message = dayFourMorning[currentMessageIndex];
          setCurrentMessageIndex((prevIndex) => prevIndex + 1);
          setActiveUser(message.sender);

          if (currentMessageIndex === 5) {
            setChatPaused(true);
            setTimeout(() => {
              setStartIndex(currentMessageIndex + 1);
            }, 2000);

            setTimeout(() => {
              setShowPopup(true);
            }, 8000);
            setPtr(1);
          } else if (currentMessageIndex === 7) {
            setChatPaused(true);
            setTimeout(() => {
              setShowPopup2(true);
            }, 2000);
            setPtr(2);
          } else if (currentMessageIndex === 9) {
            setChatPaused(true);
            setTimeout(() => {
              setShowPopup3(true);
            }, 2000);
            setPtr(3);
          } else if (currentMessageIndex === 11) {
            setChatPaused(true);
            setTimeout(() => {
              setShowPopup4(true);
            }, 2000);
            setPtr(4);
          } else if (currentMessageIndex === 13) {
            setChatPaused(true);
            setTimeout(() => {
              setShowPopup5(true);
            }, 2000);
            setPtr(5);
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
    setStartIndex(currentMessageIndex);
    setContent(
      "The ERP vendor team is now driving a solution, working diligently and ensuring a successful implementation. Skilled development leads for the ERP vendor are heavily engaged."
    );
    setImgSrc(gajjiteam2);
    setHead("Day 4 - Afternoon: ERP team takes over");

    setDay5Popup(false);
    // onClose();
    setChatPaused(false);
  };
  const closePopup2 = () => {
    // setShowPopup(false);
    setDay5Popup2(false);
    setImgSrc(scene2);
    // onClose();
    setChatPaused(false);
  };

  const closePopup3 = () => {
    // setShowPopup(false);
    setDay5Popup3(false);
    setImgSrc(begin);
    // onClose();
    setChatPaused(false);
  };

  const closePopup4 = () => {
    // setShowPopup(false);
    setDay5Popup4(false);
    setImgSrc(tapping);
    // onClose();
    setChatPaused(false);
  };

  const closePopup5 = () => {
    // setShowPopup(false);
    setDay5Popup5(false);
    setImgSrc(starts);
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

  const isMobile = window.innerWidth <= 600; // Define your mobile breakpoint

  const userAvatarSize = isMobile ? "30px" : "55px";
  const messageFontSize = isMobile ? "16px" : "18px";

  const scene = [5, 7, 9, 11, 13, 15];
  const visibleMessagess = dayFourMorning.slice(startIndex, scene[ptr]);
  let temp = [];
  let final = [];
  let users = [];

  for (let i = 0; i < visibleMessagess.length; i++) {
    temp.push(visibleMessagess[i]["sender"]);
  }
  const uniqueTemp = [...new Set(temp)];
  console.log(uniqueTemp);

  for (let i = 0; i < uniqueTemp.length; i++) {
    for (let j = 0; j < user.length; j++) {
      if (user[j].name == uniqueTemp[i]) {
        final.push({ url: user[j].url, name: user[j].name });
      }
      //setUsers(final)
      users = final;
    }
  }

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
          // fontFamily={"Fredoka"}
          border={"0px solid red"}
          w={"100%"}
          m={"auto"}
          h={isMobile ? "90vh" : "88vh"}
          display="flex"
          flexWrap="wrap"
        >
          <Flex h={"88vh"}>
            <Box
              h={isMobile ? "90vh" : "88vh"}
              w={isMobile ? "27%" : "13%"}
              overflow="auto"
              style={{
                backgroundImage: isMobile
                  ? "none"
                  : "linear-gradient(32deg,grey 0%, white 100%)",
              }}
            >
              <Box
                //bgColor="#948888"
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
                        <Box
                          borderBottom="0px solid black"
                          key={el.name}
                          cursor="pointer"
                          display="flex"
                          flexDirection={isMobile ? "column" : "column"}
                          alignItems="center"
                        >
                          <Box
                            h={userAvatarSize}
                            w={userAvatarSize}
                            m="auto"
                            mt={isMobile ? "17%" : 0}
                            borderRadius="50%"
                            className={el.name === activeUser ? "active" : ""}
                          >
                            <Image borderRadius={"50%"} src={el.url} alt="" />
                          </Box>
                          <Text
                            className={el.name === activeUser ? "Tactive" : ""}
                            fontSize={isMobile ? "14px" : "20px"}
                            mb={isMobile ? 0 : 4}
                            cursor="pointer"
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
                      <Box
                        borderBottom="0px solid black"
                        key={el.name}
                        cursor="pointer"
                        display="flex"
                        flexDirection={isMobile ? "column" : "column"}
                        alignItems="center"
                      >
                        <Box
                          h={userAvatarSize}
                          w={userAvatarSize}
                          m="auto"
                          mt={isMobile ? "17%" : 0}
                          borderRadius="50%"
                          className={el.name === activeUser ? "active" : ""}
                        >
                          <Image borderRadius={"50%"} src={el.url} alt="" />
                        </Box>
                        <Text
                          className={el.name === activeUser ? "Tactive" : ""}
                          fontSize={isMobile ? "14px" : "20px"}
                          mb={isMobile ? 0 : 4}
                          cursor="pointer"
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
              maxH={isMobile ? "100vh" : "88vh"}
              w={isMobile ? "100%" : "90%"}
              border="0px solid red"
              overflow="auto"
              ref={chatContainerRef}
              pb={5}
              bgImage={imgSrc}
              bgRepeat="no-repeat"
              bgSize={isMobile ? "cover" : "cover"}
              bgPosition={isMobile ? "center" : "none"}
              display="flex"
              flexDirection="column"
              alignItems={isMobile ? "center" : "flex-start"}
            >
              {currentMessageIndex < 5 ? (
                <Box
                  bgColor={"#030405"}
                  color={"white"}
                  textAlign={"left"}
                  w={"100%"}
                  pl={3}
                  pt={3}
                  pb={3}
                >
                  <Text fontSize={isMobile ? "15" : "20"}>
                    Ben Carter and Kate Sullivan have come together to engage in
                    a strategic meeting. This is a frank conversation where they
                    discuss plans and risks to their careers because of the
                    situation they are in.{" "}
                  </Text>
                </Box>
              ) : (
                <Box
                  bgColor={"#030405"}
                  color={"white"}
                  borderRadius={"20px"}
                  textAlign={"left"}
                  w={"100%"}
                  pl={3}
                  pt={3}
                  pb={3}
                >
                  <Text fontSize={"20"}>{content}</Text>
                </Box>
              )}

              <Box
                w={isMobile ? "100%" : "90%"}
                pl={isMobile ? 2 : 5}
                pr={isMobile ? 2 : 5}
                m={ "0 auto"}
                mt={3}
                h={"68vh"}
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
                          mb={4}
                        >
                          <Box
                            boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
                            border="0px solid red"
                            bgColor={
                              el.sender === "Ben Carter" ? "#f0f0f0" : "#030405"
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
                            mt={2}
                            fontSize={isMobile ? "12px" : "15px"}
                          >
                            <Text>
                              <span id="sender">{el.sender}</span> :{" "}
                              {el.message}
                            </Text>
                          </Box>
                        </Box>
                      </CSSTransition>
                    );
                  })}

                  {showPopup && (
                    <Modal isOpen={day5Popup}>
                      <ModalOverlay />
                      <ModalContent
                        bg={"transparent"}
                        maxW={{ base: "90%", sm: "600px" }}
                      >
                        <ModalHeader fontWeight="bold" fontSize="25px">
                          {/* Add a header if needed */}
                        </ModalHeader>
                        <Draggable>
                          <ModalBody
                            fontSize="18px"
                            className="draggable-modal"
                            borderRadius={10}
                            bg="rgba(245, 255, 255, 0.8)"
                            p={10}
                          >
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
                                  lines of code and logs. The atmosphere is
                                  thick with anticipation.
                                </Text>
                              </Box>
                              <Box>
                                <Image
                                  src={tension}
                                  borderRadius={10}
                                  maxW="100%"
                                  h="auto"
                                />

                                <Button
                                  colorScheme="teal"
                                  onClick={closePopup}
                                  onTouchEnd={closePopup}
                                  textAlign="center"
                                  fontFamily="Croissant One"
                                  bg="black"
                                  _hover={{
                                    bgColor: "#a1e8f0",
                                    color: "black",
                                  }}
                                  w="100%"
                                  mt={3}
                                  borderRadius={10}
                                >
                                  Close
                                </Button>
                              </Box>
                            </Flex>
                          </ModalBody>
                        </Draggable>
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
                        bg={"transparent"}
                        maxW={{ base: "90%", sm: "600px" }}
                      >
                        <ModalHeader fontWeight="bold" fontSize="25px">
                          {/* Add a header if needed */}
                        </ModalHeader>
                        <Draggable>
                          <ModalBody
                            fontSize="18px"
                            className="draggable-modal"
                            borderRadius={10}
                            bg="rgba(245, 255, 255, 0.8)"
                            p={10}
                          >
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
                                  onTouchEnd={closePopup2}
                                  textAlign="center"
                                  fontFamily="Croissant One"
                                  bg="black"
                                  _hover={{
                                    bgColor: "#a1e8f0",
                                    color: "black",
                                  }}
                                  w="100%"
                                  mt={3}
                                  borderRadius={10}
                                >
                                  Close
                                </Button>
                              </Box>
                            </Flex>
                          </ModalBody>
                        </Draggable>
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
                        bg={"transparent"}
                        maxW={{ base: "90%", sm: "600px" }}
                      >
                        <ModalHeader fontWeight="bold" fontSize="25px">
                          {/* Add a header if needed */}
                        </ModalHeader>
                        <Draggable>
                          <ModalBody
                            fontSize="18px"
                            className="draggable-modal"
                            borderRadius={10}
                            bg="rgba(245, 255, 255, 0.8)"
                            p={10}
                          >
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
                                  Everyone watches with bated breath. Minutes
                                  feel like hours.
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
                                  onTouchEnd={closePopup3}
                                  textAlign="center"
                                  fontFamily="Croissant One"
                                  bg="black"
                                  _hover={{
                                    bgColor: "#a1e8f0",
                                    color: "black",
                                  }}
                                  w="100%"
                                  mt={3}
                                  borderRadius={10}
                                >
                                  Close
                                </Button>
                              </Box>
                            </Flex>
                          </ModalBody>
                        </Draggable>
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
                        bg={"transparent"}
                        maxW={{ base: "90%", sm: "600px" }}
                      >
                        <ModalHeader fontWeight="bold" fontSize="25px">
                          {/* Add a header if needed */}
                        </ModalHeader>
                        <Draggable>
                          <ModalBody
                            fontSize="18px"
                            className="draggable-modal"
                            borderRadius={10}
                            bg="rgba(245, 255, 255, 0.8)"
                            p={10}
                          >
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
                                  The developers scramble, making adjustments.
                                  The room is silent except for the tapping of
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
                                  onTouchEnd={closePopup4}
                                  textAlign="center"
                                  fontFamily="Croissant One"
                                  bg="black"
                                  _hover={{
                                    bgColor: "#a1e8f0",
                                    color: "black",
                                  }}
                                  w="100%"
                                  mt={3}
                                  borderRadius={10}
                                >
                                  Close
                                </Button>
                              </Box>
                            </Flex>
                          </ModalBody>
                        </Draggable>
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
                        bg={"transparent"}
                        maxW={{ base: "90%", sm: "600px" }}
                      >
                        <ModalHeader fontWeight="bold" fontSize="25px">
                          {/* Add a header if needed */}
                        </ModalHeader>
                        <Draggable>
                          <ModalBody
                            fontSize="18px"
                            className="draggable-modal"
                            borderRadius={10}
                            bg="rgba(245, 255, 255, 0.8)"
                            p={10}
                          >
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
                                  onTouchEnd={closePopup5}
                                  textAlign="center"
                                  fontFamily="Croissant One"
                                  bg="black"
                                  _hover={{
                                    bgColor: "#a1e8f0",
                                    color: "black",
                                  }}
                                  w="100%"
                                  mt={3}
                                  borderRadius={10}
                                >
                                  Close
                                </Button>
                              </Box>
                            </Flex>
                          </ModalBody>
                        </Draggable>
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
                        bg={"transparent"}
                        maxW={{ base: "90%", sm: "600px" }}
                      >
                        <ModalHeader fontWeight="bold" fontSize="25px">
                          {/* Add a header if needed */}
                        </ModalHeader>
                        <Draggable>
                          <ModalBody
                            fontSize="18px"
                            className="draggable-modal"
                            borderRadius={10}
                            bg="rgba(245, 255, 255, 0.8)"
                            p={10}
                          >
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
                                  A couple of hours pass. The super users are
                                  busy checking the system.
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
                                  onTouchEnd={closePopup6}
                                  textAlign="center"
                                  fontFamily="Croissant One"
                                  bg="black"
                                  _hover={{
                                    bgColor: "#a1e8f0",
                                    color: "black",
                                  }}
                                  w="100%"
                                  mt={3}
                                  borderRadius={10}
                                >
                                  Close
                                </Button>
                              </Box>
                            </Flex>
                          </ModalBody>
                        </Draggable>
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
                        p={2}
                        w={isMobile ? "100%" : "60%"} // Adjust the width for mobile view
                        m={"auto"}
                        mt={isMobile ? "20px" : "50px"} // Adjust the top margin for mobile view
                        borderRadius={10}
                      >
                        {showBoxContent1 && (
                          <>
                            <Image
                              w={isMobile ? "80%" : "50%"} // Adjust the image width for mobile view
                              m={"auto"}
                              src="https://img.freepik.com/free-vector/text-files-concept-illustration_114360-4402.jpg?t=st=1696612249~exp=1696612849~hmac=fb707e6cc9f86b8c9c7c512cf3910dfc942bd0073ccf581840b9772cf4deb68e"
                            />
                            <Flex
                              className="box"
                              mb={5}
                              mt={isMobile ? "5" : "5"} // Adjust the top margin for mobile view
                              boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
                              alignItems={"center"}
                              justifyContent={"center"}
                              h={isMobile ? "auto" : "50px"}
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
                              <Box
                                className="flex2"
                                w={isMobile ? "90%" : "80%"}
                                m={"auto"}
                                pb={3}
                              >
                                <Box
                                  border="1px solid black"
                                  borderRadius="50px"
                                  _hover={{ bgColor: "black", color: "white" }}
                                  // Add padding to the box
                                  bgColor={
                                    isMobile ? "lightgray" : "transparent"
                                  } // Set background color
                                  display="flex" // Center radio button and label horizontally
                                  alignItems="center"
                                  justifyContent="space-between"
                                  boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
                                >
                                  <Tooltip label="Weaknesses in the system that can be exploited, leading to potential disasters">
                                    <label
                                      style={{
                                        cursor: "pointer",
                                        position: "relative",
                                        flex: 1, // Take up the available space for the label
                                      }}
                                    >
                                      <Radio
                                        fontFamily={"Fredoka"}
                                        size={isMobile ? "sm" : "lg"}
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
                                  border="1px solid black"
                                  borderRadius="50px"
                                  _hover={{ bgColor: "black", color: "white" }}
                                  p={isMobile ? "1" : "1"} // Add padding to the box
                                  bgColor={
                                    isMobile ? "lightgray" : "transparent"
                                  } // Set background color
                                  display="flex" // Center radio button and label horizontally
                                  alignItems="center"
                                  justifyContent="space-between"
                                  boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
                                >
                                  <Tooltip label="Ensuring that data remains accurate and reliable throughout its entire lifecycle, especially post-recovery">
                                    <label
                                      style={{
                                        cursor: "pointer",
                                        position: "relative",
                                        flex: 1, // Take up the available space for the label
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
                                  border="1px solid black"
                                  borderRadius="50px"
                                  _hover={{ bgColor: "black", color: "white" }}
                                  p={isMobile ? "1" : "1"} // Add padding to the box
                                  bgColor={
                                    isMobile ? "lightgray" : "transparent"
                                  } // Set background color
                                  display="flex" // Center radio button and label horizontally
                                  alignItems="center"
                                  justifyContent="space-between"
                                  boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
                                >
                                  <Tooltip label="Hardware or network breakdowns that can disrupt normal operations">
                                    <label
                                      style={{
                                        cursor: "pointer",
                                        position: "relative",
                                        flex: 1,
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
                                  border="1px solid black"
                                  borderRadius="50px"
                                  _hover={{ bgColor: "black", color: "white" }}
                                  p={isMobile ? "1" : "1"} // Add padding to the box
                                  bgColor={
                                    isMobile ? "lightgray" : "transparent"
                                  } // Set background color
                                  display="flex" // Center radio button and label horizontally
                                  alignItems="center"
                                  justifyContent="space-between"
                                  boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
                                >
                                  <Tooltip label="Inadequate or failed backups that prevent or delay recovery efforts">
                                    <label
                                      style={{
                                        cursor: "pointer",
                                        position: "relative",
                                        flex: 1,
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
                                  border="1px solid black"
                                  borderRadius="50px"
                                  _hover={{ bgColor: "black", color: "white" }}
                                  p={isMobile ? "1" : "1"} // Add padding to the box
                                  bgColor={
                                    isMobile ? "lightgray" : "transparent"
                                  } // Set background color
                                  display="flex" // Center radio button and label horizontally
                                  alignItems="center"
                                  justifyContent="space-between"
                                  boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
                                >
                                  <Tooltip label="Failures in internal and external communication systems during critical times">
                                    <label
                                      style={{
                                        cursor: "pointer",
                                        position: "relative",
                                        flex: 1,
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
                                  border="1px solid black"
                                  borderRadius="50px"
                                  _hover={{ bgColor: "black", color: "white" }}
                                  p={isMobile ? "1" : "1"} // Add padding to the box
                                  bgColor={
                                    isMobile ? "lightgray" : "transparent"
                                  } // Set background color
                                  display="flex" // Center radio button and label horizontally
                                  alignItems="center"
                                  justifyContent="space-between"
                                  boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
                                >
                                  <Tooltip label="Absence of failover systems or processes that can act as a backup during primary system failures">
                                    <label
                                      style={{
                                        cursor: "pointer",
                                        position: "relative",
                                        flex: 1,
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
                              w={isMobile ? "70%" : "50%"} // Adjust the image width for mobile view
                              m={"auto"}
                              src="https://img.freepik.com/free-vector/business-decisions-concept-illustration_114360-4096.jpg?w=740&t=st=1696672316~exp=1696672916~hmac=0b5a3d793d15d5eccf6f03a04e907baee2f1e59dc4292775fe4e025c871152be"
                            />
                            <Flex
                              className="box"
                              mb={"5"}
                              mt={isMobile ? "5" : "5"} // Adjust the top margin for mobile view
                              boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
                              alignItems={"center"}
                              justifyContent={"center"}
                              h={"auto"}
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
                                w={isMobile ? "100%" : "80%"}
                                m={"auto"}
                                pb={4}
                              >
                                <Box
                                  border="1px solid black"
                                  borderRadius="50px"
                                  _hover={{ bgColor: "black", color: "white" }}
                                  p={isMobile ? "0" : "1"} // Add padding to the box
                                  bgColor={
                                    isMobile ? "lightgray" : "transparent"
                                  } // Set background color
                                  display="flex" // Center radio button and label horizontally
                                  alignItems="center"
                                  justifyContent="space-between"
                                  boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
                                >
                                  <Tooltip label="Making clear and swift decisions under pressure">
                                    <label
                                      style={{
                                        cursor: "pointer",
                                        position: "relative",
                                        flex: 1,
                                      }}
                                    >
                                      <Radio
                                        fontFamily={"Fredoka"}
                                        size={"10px"}
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
                                  border="1px solid black"
                                  borderRadius="50px"
                                  _hover={{ bgColor: "black", color: "white" }}
                                  p={isMobile ? "0" : "1"} // Add padding to the box
                                  bgColor={
                                    isMobile ? "lightgray" : "transparent"
                                  } // Set background color
                                  display="flex" // Center radio button and label horizontally
                                  alignItems="center"
                                  justifyContent="space-between"
                                  boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
                                >
                                  <Tooltip label="Remaining calm and level-headed during challenges">
                                    <label
                                      style={{
                                        cursor: "pointer",
                                        position: "relative",
                                        flex: 1,
                                      }}
                                    >
                                      <Radio
                                        border="1px solid black"
                                        fontFamily={"Fredoka"}
                                        size={"10px"}
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
                                  border="1px solid black"
                                  borderRadius="50px"
                                  _hover={{ bgColor: "black", color: "white" }}
                                  p={isMobile ? "0" : "1"} // Add padding to the box
                                  bgColor={
                                    isMobile ? "lightgray" : "transparent"
                                  } // Set background color
                                  display="flex" // Center radio button and label horizontally
                                  alignItems="center"
                                  justifyContent="space-between"
                                  boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
                                >
                                  <Tooltip label="Emphasizing teamwork, both internally and with external partners">
                                    <label
                                      style={{
                                        cursor: "pointer",
                                        position: "relative",
                                        flex: 1,
                                      }}
                                    >
                                      <Radio
                                        border="1px solid black"
                                        fontFamily={"Fredoka"}
                                        size={"10px"}
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
                                  border="1px solid black"
                                  borderRadius="50px"
                                  _hover={{ bgColor: "black", color: "white" }}
                                  p={isMobile ? "0" : "1"} // Add padding to the box
                                  bgColor={
                                    isMobile ? "lightgray" : "transparent"
                                  } // Set background color
                                  display="flex" // Center radio button and label horizontally
                                  alignItems="center"
                                  justifyContent="space-between"
                                  boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
                                >
                                  <Tooltip label="Effectively conveying information, even in challenging circumstances">
                                    <label
                                      style={{
                                        cursor: "pointer",
                                        position: "relative",
                                        flex: 1,
                                      }}
                                    >
                                      <Radio
                                        border="1px solid black"
                                        fontFamily={"Fredoka"}
                                        size={"10px"}
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
                                  border="1px solid black"
                                  borderRadius="50px"
                                  _hover={{ bgColor: "black", color: "white" }}
                                  p={isMobile ? "0" : "1"} // Add padding to the box
                                  bgColor={
                                    isMobile ? "lightgray" : "transparent"
                                  } // Set background color
                                  display="flex" // Center radio button and label horizontally
                                  alignItems="center"
                                  justifyContent="space-between"
                                  boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
                                >
                                  <Tooltip label="Quickly adjusting strategies based on new information or changing scenarios">
                                    <label
                                      style={{
                                        cursor: "pointer",
                                        position: "relative",
                                        flex: 1,
                                      }}
                                    >
                                      <Radio
                                        border="1px solid black"
                                        fontFamily={"Fredoka"}
                                        size={"10px"}
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
                                  border="1px solid black"
                                  borderRadius="50px"
                                  _hover={{ bgColor: "black", color: "white" }}
                                  p={isMobile ? "0" : "1"} // Add padding to the box
                                  bgColor={
                                    isMobile ? "lightgray" : "transparent"
                                  } // Set background color
                                  display="flex" // Center radio button and label horizontally
                                  alignItems="center"
                                  justifyContent="space-between"
                                  boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
                                >
                                  <Tooltip label="Keeping an eye on long-term impacts and future implications during the crisis">
                                    <label
                                      style={{
                                        cursor: "pointer",
                                        position: "relative",
                                        flex: 1,
                                      }}
                                    >
                                      <Radio
                                        border="1px solid black"
                                        fontFamily={"Fredoka"}
                                        size={"10px"}
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

export default EarlyMorning4;
