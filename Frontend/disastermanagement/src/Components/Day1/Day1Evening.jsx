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
import day1evening from "./day1evening.jpg";
import "./BringDown.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useNavigate } from "react-router";
import EarlyMorning from "../Day2/EarlyMorning";
import { dayOneEvening } from "../../mainData";
import bencarter from "../userImages/bencarter.jpg";
import sophia from "../userImages/sophia_kim.jpg";
import kate from "../userImages/kate_sullivan.jpg";
import mia from "../userImages/Mia Rodriguez.jpg";
import julia from "../userImages/juliaharper.jpg";
import ScrollDown from "../ScrollDown";
import { MdNotStarted } from "react-icons/md";
import { BsPauseCircleFill } from "react-icons/bs";

import liam from "../userImages/liam.jpg";
import chloe from "../userImages/ChiocZang.jpg";
import figma from "../userImages/figma.jpg";
import conference from "../userImages/conference.jpg";
import architecture from "../userImages/architecture.jpg";
import callwithjulia from "../userImages/callwithjulia.jpg";
import tom from "../userImages/tom.jpg";
import MyContext from "../ContextApi/MyContext";

const BringDown = () => {
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

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [day5Popup, setDay5Popup] = useState(true);
  const [chatPaused, setChatPaused] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const [modalValue, setModalValue] = useState(null);
  const [modalValue1, setModalValue1] = useState(null);
  const [ShowScroll, setShowScroll] = useState(false);
  const [activeUserMessageSent, setActiveUserMessageSent] = useState(false);
  const userListContainerRef = useRef(null);
  const chatContainerRef = useRef(null);
  const spacerRef = useRef(null);

  const { setHead, speed, pauseBtn, setPauseBtn } = useContext(MyContext);

  const handlePause = () => {
    setPauseBtn(!pauseBtn);
  };

  const handleChange = (value) => {
    setValue(value);
    Cookies.set("day1evening2", value);
  };

  const handleChange2 = (value1) => {
    setValue1(value1);
    Cookies.set("day1evening1", value1);
    setShowBox2(true);
    setShowBoxContent1(false);
    setshowBoxContent2(true);
    setShowScroll(true);
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
    setHead("Day 1 - Late night: Back in the office with internal team");
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
      name: "Chloe Zhang",
      url: chloe,
    },
    {
      name: "Sophia Kim",
      url: sophia,
    },
    {
      name: "Mia Rodriguez",
      url: mia,
    },
    
  ];

  useEffect(() => {
    // Simulate messages from 5 users with a 2-second delay between each message

    const messageDelay = speed; // 4 seconds

    let timeoutIndex = 0;

    const displayNextMessage = () => {
      if (!pauseBtn) {
        if (!chatPaused && currentMessageIndex < dayOneEvening.length) {
          const message = dayOneEvening[currentMessageIndex];
          setCurrentMessageIndex((prevIndex) => prevIndex + 1);
          setActiveUser(message.sender);

          if (currentMessageIndex === 20) {
            setChatPaused(true);
            setTimeout(() => {
              setShowPopup(true);
            }, 2000);
          }
        } else {
          if (currentMessageIndex === dayOneEvening.length) {
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

  useLayoutEffect(() => {
    // Scroll to the bottom after chatData changes
    scrollToBottom();
  }, [currentMessageIndex]);

  useEffect(() => {
    // Scroll to the bottom after chatData changes
    scrollToBottom();
  }, [chatData]);

  useEffect(() => {
    // Scroll to the bottom when showBox becomes true
    if (showBox) {
      setTimeout(() => {
        scrollToBottom();
      }, 100);
    }
  }, [showBox, showBoxContent2]);

  // const scrollToActiveUserItem = () => {
  //   const activeUserItem = document.querySelector(".active-user");
  //   console.log(activeUserItem);
  //   if (activeUserItem && userListContainerRef.current) {
  //     userListContainerRef.current.scrollBottom = activeUserItem.offsetTop;
  //   }
  // };

  const isMobile = window.innerWidth <= 600; // Define your mobile breakpoint

  const userAvatarSize = isMobile ? "20px" : "55px";
  const messageFontSize = isMobile ? "16px" : "18px";

  return (
    <>
      {value ===
      "Emphasizing teamwork, both internally and with external partners" ? (
        <EarlyMorning />
      ) : value === "Making clear and swift decisions under pressure" ? (
        <EarlyMorning />
      ) : value === "Remaining calm and level-headed during challenges" ? (
        <EarlyMorning />
      ) : value ===
        "Effectively conveying information, even in challenging circumstances" ? (
        <EarlyMorning />
      ) : value ===
        "Quickly adjusting strategies based on new information or changing scenarios" ? (
        <EarlyMorning />
      ) : value ===
        "Keeping an eye on long-term impacts and future implications during the crisis" ? (
        <EarlyMorning />
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
              w={isMobile ? "10%" : "13%"}
              overflow="auto"
              style={{
                backgroundImage: isMobile
                  ? "none"
                  : "linear-gradient(32deg,grey 0%, white 100%)",
              }}
              border={"0px solid red"}
            >
              {isMobile ?  <Box
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
                  {users.map((el) => {
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
                          (el.name === "Raj Patel" && "CFO") ||
                          (el.name === "Grace Patterson" && "") ||
                          (el.name === "Chloe Zhang" && "IT Manager")
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
                            fontSize={isMobile ? "10px" : "20px"}
                            mt={isMobile ? 0 : 6}
                            cursor="pointer"
                          >
                            {el.name === "Tom Mitchell"
                              ? "Tom"
                              : el.name.split(" ")[0]}
                          </Text>
                        </Box>
                      </Tooltip>
                    );
                  })}
                </Box>
                
              </Box>:
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
                          (el.name === "Ben Carter" && "CIO") ||
                          (el.name === "Kate Sullivan" && "IT Director") ||
                          (el.name === "Liam Turner" &&
                            "Senior Systems Analyst") ||
                          (el.name === "Sophia Kim" &&
                            "Database Administrator") ||
                          (el.name === "Mia Rodriguez" &&
                            "Network Specialist") ||
                          (el.name === "Tom Mitchell" &&
                            "Application Vendor") ||
                          (el.name === "Raj Patel" && "CFO") ||
                          (el.name === "Grace Patterson" && "") ||
                          (el.name === "Chloe Zhang" && "IT Manager")
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
                            {el.name === "Tom Mitchell"
                              ? "Tom"
                              : el.name.split(" ")[0]}
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
                          "Senior Vice President of Development (ERP Vendor)")
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
                          {el.name === "Tom Mitchell"
                            ? "Tom"
                            : el.name.split(" ")[0]}
                        </Text>
                      </Box>
                    </Tooltip>
                  ))}
                </Box>
              </Box>
}
            </Box>
            <Box
              maxH={isMobile ? "100vh" : "88vh"}
              w={isMobile ? "100%" : "90%"}
              border="0px solid red"
              overflow="auto"
              ref={chatContainerRef}
              pb={5}
              bgImage={figma}
              bgRepeat="no-repeat"
              bgSize={isMobile ? "cover" : "cover"}
              bgPosition={isMobile ? "center" : "none"}
              display="flex"
              flexDirection="column"
              alignItems={isMobile ? "center" : "flex-start"}
            >
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
                  {/* Ben Carter rubs his temples, trying to process the magnitude
                  of the situation. He can feel the eight of responsibility
                  pressing down on him, knowing that critical decisions lie
                  ahead. */}
                  Ben's mind raced as he contemplated the intricacies of the
                  current architectural design, his thoughts consumed by the
                  nagging concern of an elusive vulnerability.
                </Text>
              </Box>

              <Box
                w={isMobile ? "100%" : "90%"}
                pl={isMobile ? 2 : 5}
                pr={isMobile ? 2 : 5}
                m={ "0 auto"}
                mt={3}
                h={"68vh"}
              >
                <TransitionGroup>
                  {dayOneEvening.slice(0, currentMessageIndex).map((el, i) => {
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
      )}{" "}
    </>
  );
};

export default BringDown;
