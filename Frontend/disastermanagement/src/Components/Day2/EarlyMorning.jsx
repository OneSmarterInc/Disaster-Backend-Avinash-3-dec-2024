import {
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
import React, { useContext, useEffect, useRef, useState } from "react";
import Cookies from "js-cookie";
import day2morning from "./day2morning.png";
import loss from "./loss.png";
import "../Day1/BringDown.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import LateMorning from "./LateMoring";
import { dayTwoEarlyMorning } from "../../mainData";
import bencarter from "../userImages/bencarter.jpg";
import sophia from "../userImages/sophia_kim.jpg";
import kate from "../userImages/kate_sullivan.jpg";
import mia from "../userImages/Mia Rodriguez.jpg";
import julia from "../userImages/juliaharper.jpg";
import tom from "../userImages/tom.jpg";
import raj from "../userImages/rajpatel.jpg";
import grace from "../userImages/gracepatterson.jpg";
import williams from "../userImages/williams.jpg";
import oncall from "../userImages/oncall.jpg";
import withtom from "../userImages/withtom2.jpeg";
import witht from "../userImages/withtom.1.jpg";
import warroom from "../userImages/warroom.jpg";
import liam from "../userImages/liam.jpg";
import callwithjulia from "../userImages/callwithjulia.jpg";
import MyContext from "../ContextApi/MyContext";
import beforewithtom from "../userImages/beforewithtom.jpg";
import backinwar from "../userImages/backinwar.jpg";
import videocall from "../userImages/videocall.jpg";
import gathers from "../userImages/gathers.jpeg";
import Draggable from "react-draggable";

const EarlyMorning = () => {
  const [activeUser, setActiveUser] = useState(null);
  const [showBox, setShowBox] = useState(false);
  const [showBox2, setShowBox2] = useState(false);
  const [showBoxContent1, setShowBoxContent1] = useState(true);
  const [showBoxContent2, setshowBoxContent2] = useState(false);
  const [value, setValue] = useState(null);
  const [value1, setValue1] = useState(null);
  const [day5Popup, setDay5Popup] = useState(true);
  const [day5Popup2, setDay5Popup2] = useState(true);
  const [day5Popup3, setDay5Popup3] = useState(true);
  const [day5Popup4, setDay5Popup4] = useState(true);
  const [day5Popup5, setDay5Popup5] = useState(true);
  const [day5Popup6, setDay5Popup6] = useState(true);
  const [day5Popup7, setDay5Popup7] = useState(true);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  const [showPopup3, setShowPopup3] = useState(false);
  const [showPopup4, setShowPopup4] = useState(false);
  const [showPopup5, setShowPopup5] = useState(false);
  const [showPopup6, setShowPopup6] = useState(false);
  const [showPopup7, setShowPopup7] = useState(false);
  const [chatPaused, setChatPaused] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [imgSrc, setImgSrc] = useState(day2morning);
  const [textBox, setTextBox] = useState(
    "Ben Carter is on the phone with Tom Mitchell, the VP of Customer Services from the applications vendor. They engage in a lengthy conversation, discussing the technical intricacies."
  );
  const [ptr, setPtr] = useState(0);

  const chatContainerRef = useRef(null);
  const spacerRef = useRef(null);

  const { setHead, speed, pauseBtn, setPauseBtn } = useContext(MyContext);

  const handleChange = (value) => {
    setValue(value);
    Cookies.set("day2earlymorning2", value);
  };

  const handleChange2 = (value1) => {
    setValue1(value1);
    Cookies.set("day2earlymorning1", value1);
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

  const user = [
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

  useEffect(() => {
    setHead("Day 2 - Morning:  Call with applications vendor");
  }, []);

  const closePopup = () => {
    // setShowPopup(false);
    setStartIndex(currentMessageIndex);
    setHead("Day 2 - Morning:  Call with storage vendor");
    setTextBox(
      "Ben Carter is on the phone with Julia Harper, the VP of Customer Services from the Disc Vendor. Ben's explains the situation and connects Julia with Tom for shared information."
    );
    setImgSrc(oncall);

    setDay5Popup(false);
    // onClose();
    setChatPaused(false);
  };

  const closePopup2 = () => {
    // setShowPopup(false);
    setStartIndex(currentMessageIndex);
    setHead("Day 2 -  Morning:  Call with applications and storage vendors");
    setTextBox(
      "Ben Carter is on a conference call with Tom Mitchell and Julia Harper. Both vendors are engaged deeply in the technical issues of the OTC problem."
    );
    setImgSrc(withtom);

    setDay5Popup2(false);
    // onClose();
    setChatPaused(false);
  };

  const closePopup3 = () => {
    // setShowPopup(false);
    setStartIndex(currentMessageIndex);
    setHead("Day 2 -  Morning: Ben carter addresses executive team");
    setTextBox(
      "Ben Carter seeks to address concerns of the Executive Team at OrionTech. The executive team expresses concerns and their own respective viewpoints."
    );
    setImgSrc(loss);

    setDay5Popup3(false);
    // onClose();
    setChatPaused(false);
  };

  const closePopup4 = () => {
    // setShowPopup(false);
    setStartIndex(currentMessageIndex);
    setHead("Day 2 - Noon:  Ben carter speaks to key clients");
    setTextBox(
      "Ben Carter reaches out to key clients to update them about the current situation OTC is facing so that they have all the necessary updates."
    );
    setImgSrc(witht);

    setDay5Popup4(false);
    // onClose();
    setChatPaused(false);
  };
  const closePopup5 = () => {
    // setShowPopup(false);
    setStartIndex(currentMessageIndex);
    setHead("Day 2 -  Early Afternoon : War room");
    setTextBox(
      " Ben Carter meets with his internal team to assess the current situation and creatively explore any new options which may have been missed for moving forward. "
    );
    setImgSrc(warroom);

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

  const closePopup7 = () => {
    // setShowPopup(false);
    setDay5Popup7(false);
    setImgSrc(gathers);
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
  }, [showBox, showBoxContent2]);

  const visibleMessages = dayTwoEarlyMorning.slice(
    startIndex,
    currentMessageIndex
  );

  const scene = [7, 16, 21, 27, 32, 37, 41, 56];
  const visibleMessagess = dayTwoEarlyMorning.slice(startIndex, scene[ptr]);
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


  useEffect(() => {
    const displayNextMessage = () => {
      if (!pauseBtn) {
        if (!chatPaused && currentMessageIndex < dayTwoEarlyMorning.length) {
          const message = dayTwoEarlyMorning[currentMessageIndex];
          setCurrentMessageIndex((prevIndex) => prevIndex + 1);
          setActiveUser(message.sender);

          if (currentMessageIndex === 7) {
            setChatPaused(true);
            setTimeout(() => {
              setShowPopup(true);
            }, 2000);
            setPtr(1);
          } else if (currentMessageIndex === 16) {
            setChatPaused(true);
            setTimeout(() => {
              setShowPopup2(true);
            }, 2000);
            setPtr(2);
          } else if (currentMessageIndex === 21) {
            setChatPaused(true);
            setTimeout(() => {
              setShowPopup6(true);
            }, 2000);
            setPtr(3);
          } else if (currentMessageIndex === 27) {
            setChatPaused(true);
            setTimeout(() => {
              setShowPopup3(true);
            }, 2000);
            setPtr(4);
          } else if (currentMessageIndex === 32) {
            setChatPaused(true);
            setTimeout(() => {
              setShowPopup4(true);
            }, 2000);
            setPtr(5);
          } else if (currentMessageIndex === 37) {
            setChatPaused(true);
            setTimeout(() => {
              setShowPopup5(true);
            }, 2000);
            setPtr(7);
          } else if (currentMessageIndex === 41) {
            setChatPaused(true);
            setTimeout(() => {
              setShowPopup7(true);
            }, 2000);
          }
        } else {
          if (currentMessageIndex === dayTwoEarlyMorning.length) {
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

  const isMobile = window.innerWidth <= 600; // Define your mobile breakpoint

  const userAvatarSize = isMobile ? "30px" : "55px";
  const messageFontSize = isMobile ? "16px" : "18px";

  return (
    <>
      {value ===
      "Emphasizing teamwork, both internally and with external partners" ? (
        <LateMorning />
      ) : value === "Making clear and swift decisions under pressure" ? (
        <LateMorning />
      ) : value === "Remaining calm and level-headed during challenges" ? (
        <LateMorning />
      ) : value ===
        "Effectively conveying information, even in challenging circumstances" ? (
        <LateMorning />
      ) : value ===
        "Quickly adjusting strategies based on new information or changing scenarios" ? (
        <LateMorning />
      ) : value ===
        "Keeping an eye on long-term impacts and future implications during the crisis" ? (
        <LateMorning />
      ) : (
        <Box
          fontFamily={"Fredoka"}
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
                          (el.name === "Aisha Patel" && "COO") ||
                          (el.name === "Julia Harper" && "Storage Vendor")
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
                        (el.name === "Tom Mitchell" && "Application Vendor") ||
                        (el.name === "Aisha Patel" &&
                          "Chief Operating Officer") ||
                        (el.name === "GAjji" &&
                          "Senior Vice President of Development (ERP Vendor)") ||
                        (el.name === "Julia Harper" && "Storage Vendor")
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
                          {el.name === "Mr. Williams"
                            ? "Williams"
                            : el.name.split(" ")[0]}
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
                <Text fontSize={isMobile ? "15" : "18"}>{textBox}</Text>
              </Box>

              <Box
                w={isMobile ? "100%" : "90%"}
                pl={isMobile ? 2 : 5}
                pr={isMobile ? 2 : 5}
                m={"auto"}
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
                        maxW={{ base: "90%", sm: "600px" }} // Responsive width
                      >
                        <ModalHeader
                          fontWeight="bold"
                          fontSize="25px"
                        ></ModalHeader>
                        <Draggable>
                          <ModalBody
                            fontSize="18px"
                            className="draggable-modal"
                            borderRadius={10}
                            bg="rgba(245, 255, 255, 0.8)"
                            p={10}
                          >
                            <Flex
                              flexDirection={{ base: "column", sm: "row" }}
                              gap={{ base: 2, sm: 4 }}
                            >
                              {" "}
                              {/* Responsive layout */}
                              <Box
                                bgColor="white"
                                boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)"
                                borderRadius={10}
                                p={{ base: 4, sm: 5 }}
                              >
                                <Text>
                                  After briefing the CEO, Ben Carter gets back
                                  on the call with Julia Harper from the storage
                                  vendor's team.
                                </Text>
                              </Box>
                              <Box textAlign="center">
                                <Image src={callwithjulia} borderRadius={10} />
                                <Button
                                  colorScheme="teal"
                                  onClick={closePopup}
                                  onTouchEnd={closePopup}
                                  fontFamily="Croissant One"
                                  bg="black"
                                  _hover={{
                                    bgColor: "#a1e8f0",
                                    color: "black",
                                  }}
                                  mt={3}
                                  borderRadius={10}
                                  w={"100%"}
                                >
                                  Close
                                </Button>
                              </Box>
                            </Flex>
                          </ModalBody>
                        </Draggable>
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
                        bg={"transparent"}
                        maxW={{ base: "90%", sm: "600px" }} // Responsive width
                      >
                        <ModalHeader
                          fontWeight="bold"
                          fontSize="25px"
                        ></ModalHeader>
                        <Draggable>
                          <ModalBody
                            fontSize="18px"
                            className="draggable-modal"
                            borderRadius={10}
                            bg="rgba(245, 255, 255, 0.8)"
                            p={10}
                          >
                            <Flex
                              flexDirection={{ base: "column", sm: "row" }}
                              gap={{ base: 2, sm: 4 }}
                            >
                              {" "}
                              {/* Responsive layout */}
                              <Box
                                bgColor="white"
                                boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)"
                                borderRadius={10}
                                p={{ base: 4, sm: 5 }}
                              >
                                <Text>
                                  Ben Carter has another call with Tom Mitchell
                                  and adds Julia Harper to the conference.
                                </Text>
                              </Box>
                              <Box textAlign="center">
                                <Image src={videocall} borderRadius={10} />
                                <Button
                                  colorScheme="teal"
                                  onClick={closePopup2}
                                  onTouchEnd={closePopup2}
                                  fontFamily="Croissant One"
                                  bg="black"
                                  _hover={{
                                    bgColor: "#a1e8f0",
                                    color: "black",
                                  }}
                                  mt={3}
                                  borderRadius={10}
                                  w={"100%"}
                                >
                                  Close
                                </Button>
                              </Box>
                            </Flex>
                          </ModalBody>
                        </Draggable>
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
                        bg={"transparent"}
                        maxW={{ base: "90%", sm: "600px" }} // Responsive width
                      >
                        <ModalHeader
                          fontWeight="bold"
                          fontSize="25px"
                        ></ModalHeader>
                        <Draggable>
                          <ModalBody
                            fontSize="18px"
                            className="draggable-modal"
                            borderRadius={10}
                            bg="rgba(245, 255, 255, 0.8)"
                            p={10}
                          >
                            <Flex
                              flexDirection={{ base: "column", sm: "row" }}
                              gap={{ base: 2, sm: 4 }}
                            >
                              {" "}
                              {/* Responsive layout */}
                              <Box
                                bgColor="white"
                                boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)"
                                borderRadius={10}
                                p={{ base: 4, sm: 5 }}
                              >
                                <Text>
                                  Ben Carter stands at the head of the
                                  conference table, addressing the executive
                                  team.
                                </Text>
                              </Box>
                              <Box textAlign="center">
                                <Image src={beforewithtom} borderRadius={10} />
                                <Button
                                  colorScheme="teal"
                                  onClick={closePopup3}
                                  onTouchEnd={closePopup3}
                                  fontFamily="Croissant One"
                                  bg="black"
                                  _hover={{
                                    bgColor: "#a1e8f0",
                                    color: "black",
                                  }}
                                  mt={3}
                                  borderRadius={10}
                                  w={"100%"}
                                >
                                  Close
                                </Button>
                              </Box>
                            </Flex>
                          </ModalBody>
                        </Draggable>
                        <ModalFooter>
                          {/* Footer content, if needed */}
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                  )}

                  {showPopup4 && (
                    <Modal isOpen={day5Popup4}>
                      <ModalOverlay />
                      <ModalContent
                        bg={"transparent"}
                        maxW={{ base: "90%", sm: "600px" }} // Responsive width
                      >
                        <ModalHeader
                          fontWeight="bold"
                          fontSize="25px"
                        ></ModalHeader>
                        <Draggable>
                          <ModalBody
                            fontSize={{ base: "16px", sm: "18px" }}
                            className="draggable-modal"
                            borderRadius={10}
                            bg="rgba(245, 255, 255, 0.8)"
                            p={10}
                          >
                            <Flex
                              flexDirection={{ base: "column", sm: "row" }}
                              gap={{ base: 2, sm: 4 }}
                            >
                              {" "}
                              {/* Responsive layout */}
                              <Box
                                bgColor="white"
                                boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)"
                                borderRadius={10}
                                p={{ base: 4, sm: 5 }}
                              >
                                <Text>
                                  Ben Carter is on a video call with a key
                                  client, Mr. Williams.
                                </Text>
                              </Box>
                              <Box textAlign="center">
                                <Image src={videocall} borderRadius={10} />
                                <Button
                                  colorScheme="teal"
                                  onClick={closePopup4}
                                  onTouchEnd={closePopup4}
                                  fontFamily="Croissant One"
                                  bg="black"
                                  _hover={{
                                    bgColor: "#a1e8f0",
                                    color: "black",
                                  }}
                                  mt={3}
                                  borderRadius={10}
                                  w={"100%"}
                                >
                                  Close
                                </Button>
                              </Box>
                            </Flex>
                          </ModalBody>
                        </Draggable>
                        <ModalFooter>
                          {/* Footer content, if needed */}
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                  )}
                  {showPopup5 && (
                    <Modal isOpen={day5Popup5}>
                      <ModalOverlay />
                      <ModalContent
                        bg={"transparent"}
                        maxW={{ base: "90%", sm: "600px" }} // Responsive width
                      >
                        <ModalHeader
                          fontWeight="bold"
                          fontSize="25px"
                        ></ModalHeader>
                        <Draggable>
                          <ModalBody
                            fontSize={{ base: "16px", sm: "18px" }}
                            className="draggable-modal"
                            borderRadius={10}
                            bg="rgba(245, 255, 255, 0.8)"
                            p={10}
                          >
                            <Flex
                              flexDirection={{ base: "column", sm: "row" }}
                              gap={{ base: 2, sm: 4 }}
                            >
                              {" "}
                              {/* Responsive layout */}
                              <Box
                                bgColor="white"
                                boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)"
                                borderRadius={10}
                                p={{ base: 4, sm: 5 }}
                              >
                                <Text>
                                  Back in the war room, Ben gathers the
                                  executive team for a quick huddle.
                                </Text>
                              </Box>
                              <Box textAlign="center">
                                <Image src={backinwar} borderRadius={10} />
                                <Button
                                  colorScheme="teal"
                                  onClick={closePopup5}
                                  onTouchEnd={closePopup5}
                                  fontFamily="Croissant One"
                                  bg="black"
                                  _hover={{
                                    bgColor: "#a1e8f0",
                                    color: "black",
                                  }}
                                  mt={3}
                                  borderRadius={10}
                                  w={"100%"}
                                >
                                  Close
                                </Button>
                              </Box>
                            </Flex>
                          </ModalBody>
                        </Draggable>
                        <ModalFooter>
                          {/* Footer content, if needed */}
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                  )}
                  {showPopup7 && (
                    <Modal isOpen={day5Popup7}>
                      <ModalOverlay />
                      <ModalContent
                        bg={"transparent"}
                        maxW={{ base: "90%", sm: "600px" }} // Responsive width
                      >
                        <ModalHeader
                          fontWeight="bold"
                          fontSize="25px"
                        ></ModalHeader>
                        <Draggable>
                          <ModalBody
                            fontSize={{ base: "16px", sm: "18px" }}
                            className="draggable-modal"
                            borderRadius={10}
                            bg="rgba(245, 255, 255, 0.8)"
                            p={10}
                          >
                            <Flex
                              flexDirection={{ base: "column", sm: "row" }}
                              gap={{ base: 2, sm: 4 }}
                            >
                              {" "}
                              {/* Responsive layout */}
                              <Box
                                bgColor="white"
                                boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)"
                                borderRadius={10}
                                p={{ base: 4, sm: 5 }}
                              >
                                <Text>
                                  The executive team gathers around the
                                  conference table. The room's atmosphere is
                                  tense, but there's a shared determination to
                                  address the situation head-on
                                </Text>
                              </Box>
                              <Box textAlign="center">
                                <Image src={gathers} borderRadius={10} />
                                <Button
                                  colorScheme="teal"
                                  onClick={closePopup7}
                                  onTouchEnd={closePopup7}
                                  fontFamily="Croissant One"
                                  bg="black"
                                  _hover={{
                                    bgColor: "#a1e8f0",
                                    color: "black",
                                  }}
                                  mt={3}
                                  borderRadius={10}
                                  w={"100%"}
                                >
                                  Close
                                </Button>
                              </Box>
                            </Flex>
                          </ModalBody>
                        </Draggable>
                        <ModalFooter>
                          {/* Footer content, if needed */}
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                  )}
                  {showPopup6 && (
                    <Modal isOpen={day5Popup6}>
                      <ModalOverlay />
                      <ModalContent
                        bg={"transparent"}
                        maxW={{ base: "90%", sm: "800px" }} // Responsive width
                      >
                        <ModalHeader
                          fontWeight="bold"
                          fontSize="25px"
                        ></ModalHeader>
                        <Draggable>
                          <ModalBody
                            fontSize={{ base: "16px", sm: "18px" }}
                            className="draggable-modal"
                            borderRadius={10}
                            bg="rgba(245, 255, 255, 0.8)"
                            p={10}
                          >
                            <Heading>Note:</Heading>
                            <Text>
                              While the storage platform replicates themselves
                              on a hardware basis, for applications with
                              databases (almost all) it is necessary to back up
                              the databases on some schedule; typically, on a
                              twenty-four-hour basis. This company typically
                              does this between 12:00 AM and 2:00 AM (note
                              figure A in the Appendix. The database on Site 1
                              is halted and a quiet point (all transactions are
                              halted) is taken insuring all buffers are written
                              out and all transactions are completed. The
                              database on Site 2 is stop and an incremental (and
                              much shorter backup) is done to a separate storage
                              frame not use for the replication process; it this
                              case, it is the previous generation of storage
                              devices. These incremental backups will be saved
                              for one week on this separate storage frame. Once
                              a week, on a week-end, a full database backup is
                              taken then the full backup and well as the
                              incremental backups will be taken to take tape
                              cassettes. To recover an application database, it
                              takes the full back up as well as any incremental
                              backups that have occurred since the week-end. The
                              success rate of recovering from tape is
                              approximately 97.5%. As you might have determined,
                              it may take days to recover the applications that
                              have failed.
                            </Text>
                            <Flex>
                              <Button
                                colorScheme="teal"
                                onClick={closePopup6}
                                onTouchEnd={closePopup6}
                                fontFamily="Croissant One"
                                bg="black"
                                _hover={{ bgColor: "#a1e8f0", color: "black" }}
                                ml="auto"
                              >
                                Close
                              </Button>
                            </Flex>
                          </ModalBody>
                        </Draggable>
                        <ModalFooter></ModalFooter>
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

export default EarlyMorning;
