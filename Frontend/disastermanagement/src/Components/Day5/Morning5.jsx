import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Tooltip,
  ModalCloseButton,
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
import EarlyMorning from "../Day2/EarlyMorning";
import { dayFiveMorning } from "../../mainData";
import bencarter from "../userImages/bencarter.jpg";
import sophia from "../userImages/sophia_kim.jpg";
import kate from "../userImages/kate_sullivan.jpg";
import mia from "../userImages/Mia Rodriguez.jpg";
import gaji from "../userImages/gaji.jpg";
import communicationlead from "../userImages/communicationlead.jpg";
import ScrollDown from "../ScrollDown";
import { useNavigate } from "react-router-dom";

import recovery from "../userImages/recovery.jpg";
import clock from "../userImages/clock.1.jpg";
import clapping from "../userImages/clapping.jpg";
import email from "../userImages/email.jpg";
import liam from "../userImages/liam.jpg";
import site from "../userImages/2.jpg";
import MyContext from "../ContextApi/MyContext";
import Debrief from "../Debrief";
import Deliverable from "../Deliverable";
import callwithjulia from "../userImages/callwithjulia.jpg";
import respect from "../userImages/respect.jpg";
import calmoffice from "../userImages/calmoffice.jpg";
import fewweeks from "../userImages/fewweeks.jpeg";
import crisis from "../userImages/crisis.jpg";
import cheer from "../userImages/cheer.jpg";
import { MdNotStarted } from "react-icons/md";
import { BsPauseCircleFill } from "react-icons/bs";
import { useSpring, animated } from "react-spring";
import gajjistand from "../userImages/gajjistand.jpg";
import Draggable from "react-draggable";
import dashboard from "../userImages/dashboard.jpg";
import strikes2 from "../userImages/strikes2.jpg";
import suncast from "../userImages/suncast.jpg";
import benc from "../userImages/ben&c.jpg";
import across from "../userImages/across.jpg";
import tvscreen from "../userImages/tvscreen.jpg";
import figure2 from "../userImages/figmabasics2.jpg";

import butterfly from "../userImages/butterfly.jpg";
const Morning5 = () => {
  const [flip, setFlip] = useState(false);

  // const [chatData, setChatData] = useState([]);
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
  const [modalValue, setModalValue] = useState(null);
  const [modalValue1, setModalValue1] = useState(null);
  const [ShowScroll, setShowScroll] = useState(false);
  const [day5Popup, setDay5Popup] = useState(true);
  const [day5Popup2, setDay5Popup2] = useState(true);
  const [day5Popup3, setDay5Popup3] = useState(true);
  const [day5Popup4, setDay5Popup4] = useState(true);
  const [day5Popup5, setDay5Popup5] = useState(true);
  const [day5Popup6, setDay5Popup6] = useState(true);
  const [day5Popup7, setDay5Popup7] = useState(true);
  const [day5Popup8, setDay5Popup8] = useState(true);
  const [day5Popup9, setDay5Popup9] = useState(true);
  const [day5Popup10, setDay5Popup10] = useState(true);
  const [day5Popup11, setDay5Popup11] = useState(true);
  const [day5Popup12, setDay5Popup12] = useState(true);
  const [ptr, setPtr] = useState(0);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  const [showPopup3, setShowPopup3] = useState(false);
  const [showPopup4, setShowPopup4] = useState(false);
  const [showPopup5, setShowPopup5] = useState(false);
  const [showPopup6, setShowPopup6] = useState(false);
  const [showPopup7, setShowPopup7] = useState(false);
  const [showPopup8, setShowPopup8] = useState(false);
  const [showPopup9, setShowPopup9] = useState(false);
  const [showPopup10, setShowPopup10] = useState(false);
  const [showPopup11, setShowPopup11] = useState(false);
  const [showPopup12, setShowPopup12] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const [chatPaused, setChatPaused] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [textBox, setTextBox] = useState(
    " Morning light floods the office. There's a palpable sense of cautious optimism. Team members, though visibly exhausted, are in high spirits, closely monitoring systems and validating data."
  );
  const [imgSrc, setImgSrc] = useState(dashboard);

  const chatContainerRef = useRef(null);
  const usersContainerRef = useRef();
  const spacerRef = useRef(null);

  const { setHead, speed, enableDeliverable, pauseBtn, setPauseBtn } =
    useContext(MyContext);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const chatAnimation = useSpring({
    opacity: day5Popup2 ? 0 : 1,
    from: { opacity: day5Popup2 ? 0 : 1 },
  });

  const handleChange = (value) => {
    setShowPopup12(true);
    enableDeliverable();
    setValue(value); // Store the selected value in the state
    Cookies.set("day5morning2", value);
  };

  const handleChange2 = (value1) => {
    setValue1(value1);
    Cookies.set("day5morning1", value1);
    setShowBox2(true);
    setShowBoxContent1(false);
    setshowBoxContent2(true);
  };

  const handleUserMessage = (userName) => {
    setActiveUser(userName);

    scrollToActiveUser();
  };

  const scrollToActiveUser = () => {
    if (activeUser) {
      const activeUserElement = document.getElementById(activeUser);
      if (activeUserElement) {
        activeUserElement.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
  };

  const scrollToBottom = () => {
    const container = chatContainerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  };

  useEffect(() => {
    setHead("Day 5 - Morning: The day after...");
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
      name: "Communications Lead",
      url: communicationlead,
    },
  ];

  // Simulate messages from 5 users with a 2-second delay between each message

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

  const visibleMessages = dayFiveMorning.slice(startIndex, currentMessageIndex);

  const scene = [0,2,3,5,7,8,11,14,23,32,33];
  const visibleMessagess = dayFiveMorning.slice(startIndex, scene[ptr]);
  let temp = [];
  let final = [];
  let users = [];

  for(let i = 0;i<visibleMessagess.length;i++){
    temp.push(visibleMessagess[i]["sender"]);
  }
  const uniqueTemp = [...new Set(temp)];
  console.log(uniqueTemp)
 
  for(let i =  0; i<uniqueTemp.length;i++){
    for(let j = 0;j< user.length;j++){
      if (user[j].name == uniqueTemp[i]){
        final.push({"url":user[j].url,"name":user[j].name})

  }
  //setUsers(final)
  users = final
}
}

  useEffect(() => {
    const displayNextMessage = () => {
      if (!pauseBtn) {
        if (!chatPaused && currentMessageIndex < dayFiveMorning.length) {
          const message = dayFiveMorning[currentMessageIndex];
          setCurrentMessageIndex((prevIndex) => prevIndex + 1);
          handleUserMessage(message.sender);
          if (currentMessageIndex === 7) {
            setShowPopup5(true);
            setChatPaused(true);
            setPtr(5);
          } else if (currentMessageIndex === 0) {
            setChatPaused(true);
            setTimeout(() => {
              setShowPopup2(true);
            }, 2000);
            setPtr(1);
          } else if (currentMessageIndex === 2) {
            setChatPaused(true);
            setTimeout(() => {
              setShowPopup3(true);
            }, 2000);
            setPtr(2);
          } else if (currentMessageIndex === 3) {
            setChatPaused(true);
            setTimeout(() => {
              setShowPopup4(true);
            }, 2000);
            setPtr(3);
          } else if (currentMessageIndex === 5) {
            setChatPaused(true);
            setTimeout(() => {
              setShowPopup10(true);
            }, 2000);
            setPtr(4);
          } else if (currentMessageIndex === 8) {
            setChatPaused(true);
            setTimeout(() => {
              setShowPopup(true);
            }, 2000);
            setPtr(6);
          } else if (currentMessageIndex === 11) {
            setChatPaused(true);
            setTimeout(() => {
              setShowPopup6(true);
            }, 2000);
            setPtr(7);
          } else if (currentMessageIndex === 14) {
            setChatPaused(true);
            setTimeout(() => {
              setShowPopup7(true);
            }, 2000);
            setPtr(8);
          } else if (currentMessageIndex === 23) {
            setChatPaused(true);
            setTimeout(() => {
              setShowPopup8(true);
            }, 2000);
            setPtr(9);
          } else if (currentMessageIndex === 32) {
            setChatPaused(true);
            setTimeout(() => {
              setShowPopup9(true);
            }, 2000);
            setPtr(10);
          } else if (currentMessageIndex === 33) {
            setChatPaused(true);
            setTimeout(() => {
              setShowPopup11(true);
            }, 4000);
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
    setImgSrc(email);
    // onClose();
    setChatPaused(false);
  };

  const closePopup2 = () => {
    // setShowPopup(false);
    setDay5Popup2(false);
    setTextBox(
      "Kate confirms system stability, close to completion. Liam anticipates final checks. Sophia reflects on the long journey with a hint of relief as the end nears."
    );
    setImgSrc(recovery);
    setHead("Day 5 - Afternoon: The day after...");

    // onClose();
    setChatPaused(false);
  };

  const closePopup3 = () => {
    // setShowPopup(false);
    setDay5Popup3(false);
    setImgSrc(clock);
    // onClose();
    setChatPaused(false);
  };

  const closePopup4 = () => {
    // setShowPopup(false);
    setDay5Popup4(false);
    setImgSrc(clapping);
    // onClose();
    setChatPaused(false);
  };

  const closePopup5 = () => {
    // setShowPopup(false);
    setDay5Popup5(false);
    setImgSrc(benc);
    setHead("Day 5 - Late Afternoon: The day after...");

    // onClose();
    setChatPaused(false);
  };

  const closePopup6 = () => {
    // setShowPopup(false);
    setStartIndex(currentMessageIndex);
    setImgSrc(fewweeks);
    setHead("Next few weeks: Assuring clients and calming fears");
    setTextBox(
      " Ben Carter informs clients about the ongoing crisis at OrionTech, ensuring open communication and commitment to preventing future disruptions. Clients express appreciation for the transparency and dedication."
    );

    setDay5Popup6(false);
    // onClose();
    setChatPaused(false);
  };

  const closePopup7 = () => {
    // setShowPopup(false);
    setStartIndex(currentMessageIndex);
    setImgSrc(calmoffice);
    setHead("Next few weeks: Epilog-1 Debrief");
    setTextBox(
      " Ben Carter realizes the data issue wasn't about the discs. Kate laments the time lost. They discuss the vendor's oversight and the importance of thorough investigation for the future."
    );

    setDay5Popup7(false);
    // onClose();
    setChatPaused(false);
  };

  const closePopup8 = () => {
    // setShowPopup(false);
    setStartIndex(currentMessageIndex);
    setTextBox(
      "Ben Carter and Gajji meet in person to debrief, discussing the project's progress, sharing insights, and strategizing for the next steps.  Their face-to-face interaction fosters a deeper understanding of the situation and paves the way for effective collaboration."
    );
    setImgSrc(respect);
    setHead("Conversation of respect");

    setDay5Popup8(false);
    // onClose();
    setChatPaused(false);
  };

  const closePopup9 = () => {
    // setShowPopup(false);
    setDay5Popup9(false);
    setImgSrc(gajjistand);
    // onClose();
    setChatPaused(false);
  };

  const closePopup10 = () => {
    // setShowPopup(false);
    setDay5Popup10(false);
    setImgSrc(benc);
    // onClose();
    setChatPaused(false);
  };

  const closePopup11 = () => {
    // setShowPopup(false);
    setStartIndex(currentMessageIndex);
    // setImgSrc(figure2);
    setHead("Epilog-2");

    setDay5Popup11(false);
    // onClose();
    setChatPaused(false);

    setShowBox(true);
  };

  const closePopup12 = () => {
    setDay5Popup12(false);
    setSelectedValue(value);
  };

  return (
    <>
      {selectedValue ===
      "Emphasizing teamwork, both internally and with external partners" ? (
        <Deliverable />
      ) : selectedValue ===
        "Making clear and swift decisions under pressure" ? (
        <Deliverable />
      ) : selectedValue ===
        "Remaining calm and level-headed during challenges" ? (
        <Deliverable />
      ) : selectedValue ===
        "Effectively conveying information, even in challenging circumstances" ? (
        <Deliverable />
      ) : selectedValue ===
        "Quickly adjusting strategies based on new information or changing scenarios" ? (
        <Deliverable />
      ) : selectedValue ===
        "Keeping an eye on long-term impacts and future implications during the crisis" ? (
        <Deliverable />
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
              overflow={"auto"}
              // bgColor="#948888"
              style={{
                backgroundImage: "linear-gradient(32deg,grey 0%, white 100%)",
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
                          (el.name === "Communications Lead" &&
                            "Communications Lead")
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
                        (el.name === "Tom Mitchell" && "Application Vendor") ||
                        (el.name === "Aisha Patel" &&
                          "Chief Operating Officer") ||
                        (el.name === "GAjji" &&
                          "Senior Vice President of Development (ERP Vendor)") ||
                        (el.name === "Communications Lead" &&
                          "Communications Lead")
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
                          {el.name === "Communications Lead"
                            ? "CL"
                            : el.name.split(" ")[0]}
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
              w={"100%"}
              border={"0px solid red"}
              overflow={"auto"}
              ref={chatContainerRef}
              pb={2}
              // bgImage={
              //   currentMessageIndex > 33
              //     ? figure2
              //     : currentMessageIndex > 32
              //     ? gajjistand
              //     : currentMessageIndex > 24
              //     ? respect
              //     : currentMessageIndex > 15
              //     ? calmoffice
              //     : currentMessageIndex > 12
              //     ? fewweeks
              //     : currentMessageIndex > 9
              //     ? email
              //     : currentMessageIndex > 8
              //     ? benc
              //     : currentMessageIndex > 6
              //     ? benc
              //     : currentMessageIndex > 4
              //     ? clapping
              //     : currentMessageIndex > 3
              //     ? clock
              //     : currentMessageIndex > 1
              //     ? recovery
              //     : dashboard
              // }
              bgImage={imgSrc}
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
                visibility={currentMessageIndex > 33 ? "hidden" : "auto"}
              >
                <Text fontSize={"20"}>{textBox}</Text>
              </Box>
              {/* {currentMessageIndex <= 1 && (

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
                    Morning light floods the office. There's a palpable sense of
                    cautious optimism. Team members, though visibly exhausted,
                    are in high spirits, closely monitoring systems and
                    validating data.{" "}
                  </Text>
                </Box>
              )}

              {currentMessageIndex > 1 && currentMessageIndex <= 11 && (
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
                    Kate confirms system stability, close to completion. Liam
                    anticipates final checks. Sophia reflects on the long
                    journey with a hint of relief as the end nears.
                  </Text>
                </Box>
              )}
              {currentMessageIndex > 11 && currentMessageIndex <= 15 && (
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
                    Ben Carter informs clients about the ongoing crisis at
                    OrionTech, ensuring open communication and commitment to
                    preventing future disruptions. Clients express appreciation
                    for the transparency and dedication.
                  </Text>
                </Box>
              )}

              {currentMessageIndex > 15 && currentMessageIndex <= 23 && (
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
                    Ben Carter realizes the data issue wasn't about the discs.
                    Kate laments the time lost. They discuss the vendor's
                    oversight and the importance of thorough investigation for
                    the future.
                  </Text>
                </Box>
              )}

              {currentMessageIndex > 23 && (
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
                  visibility={currentMessageIndex >=33 ? "hidden" : "auto"}

                >
                  <Text fontSize={"20"}>
                    Ben Carter and Gajji meet in person to debrief, discussing
                    the project's progress, sharing insights, and strategizing
                    for the next steps.Their face-to-face interaction fosters a
                    deeper understanding of the situation and paves the way for
                    effective collaboration.
                  </Text>
                </Box>

              )} */}

              {/* {currentMessageIndex < 24 ? (
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
                    Morning light floods the office. There's a palpable sense of
                    cautious optimism. Team members, though visibly exhausted,
                    are in high spirits, closely monitoring systems and
                    validating data --> Ben Carter and the OTC executive team
                    reassured clients after the crisis was over.{" "}
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
                    Ben Carter and Gaji meet in person to debrief, discussing
                    the project's progress, sharing insights, and strategizing
                    for the next steps.Their face-to-face interaction fosters a
                    deeper understanding of the situation and paves the way for
                    effective collaboration.
                  </Text>
                </Box>
              )} */}
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
                                <span id="sender">{senderName}</span> :{" "}
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
                      <ModalContent bg={"transparent"}>
                        <ModalHeader fontWeight="bold" fontSize="25px">
                          {/* Add a header if needed */}
                        </ModalHeader>
                        <ModalBody
                          fontSize="18px"
                          className="draggable-modal"
                          borderRadius={10}
                          bg="rgba(245, 255, 255, 0.8)"
                          p={10}
                        >
                          <Heading as="h2" size="lg" mb={4}>
                            Announcement
                          </Heading>
                          <Text>
                            To all our valued team members and stakeholders, we
                            are pleased to inform you that the recent IT crisis
                            has been fully resolved. We appreciate your
                            patience, support, and understanding during this
                            challenging period. Thanks to the concerted efforts
                            of our IT teams and partners, our systems are now
                            fully operational. We remain committed to serving
                            you with excellence and ensuring such disruptions
                            are mitigated in the future.
                          </Text>
                          <Button
                            colorScheme="teal"
                            onClick={closePopup}
                            onTouchEnd={closePopup}
                            textAlign="center"
                            fontFamily="Croissant One"
                            bg="black"
                            _hover={{ bgColor: "#a1e8f0", color: "black" }}
                            w="100%"
                            mt={3}
                          >
                            Close Announcement
                          </Button>
                        </ModalBody>
                        <ModalFooter></ModalFooter>
                      </ModalContent>
                    </Modal>
                  )}

                  {showPopup2 && (
                    <Modal isOpen={day5Popup2}>
                      <ModalOverlay />
                      <ModalContent bg={"transparent"} maxW="600px">
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
                                  At noon, the recovery process was complete.
                                </Text>
                              </Box>
                              <Box>
                                <Image
                                  src={crisis}
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
                        <ModalFooter></ModalFooter>
                      </ModalContent>
                    </Modal>
                  )}
                  {showPopup3 && (
                    <Modal isOpen={day5Popup3}>
                      <ModalOverlay />
                      <ModalContent bg={"transparent"} maxW="600px">
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
                                  Ben Carter stands at the head of the room,
                                  gathering everyone's attention.{" "}
                                </Text>
                              </Box>
                              <Box>
                                <Image
                                  src={strikes2}
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
                        <ModalFooter></ModalFooter>
                      </ModalContent>
                    </Modal>
                  )}
                  {showPopup4 && (
                    <Modal isOpen={day5Popup4} isCentered>
                      <ModalOverlay />
                      <ModalContent
                        maxW={{ base: "90%", sm: "80%", md: "600px" }}
                        borderRadius={10}
                        bg={"transparent"}
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
                            <Heading fontWeight="bold" fontSize="25px" mb={4}>
                              Successful Recovery
                            </Heading>
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
                                  A loud cheer erupts as team members clap and
                                  some even hug each other. The crisis is over,
                                  and everyone can breathe a sigh of relief.
                                </Text>
                              </Box>
                              <Box>
                                <Image
                                  src={cheer}
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
                        <ModalFooter></ModalFooter>
                      </ModalContent>
                    </Modal>
                  )}
                  {showPopup10 && (
                    <Modal isOpen={day5Popup10} isCentered>
                      <ModalOverlay />
                      <ModalContent
                        maxW={{ base: "90%", sm: "80%", md: "600px" }}
                        borderRadius={10}
                        bg={"transparent"}
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
                                  The afternoon sun casts a warm glow. The
                                  Communications team is busy drafting an
                                  announcement.
                                </Text>
                              </Box>
                              <Box>
                                <Image
                                  src={suncast}
                                  borderRadius={10}
                                  maxW="100%"
                                  h="auto"
                                />
                                <Button
                                  colorScheme="teal"
                                  onClick={closePopup10}
                                  onTouchEnd={closePopup10}
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
                        <ModalFooter></ModalFooter>
                      </ModalContent>
                    </Modal>
                  )}

                  {showPopup5 && (
                    <Modal isOpen={day5Popup5} isCentered>
                      <ModalOverlay />
                      <ModalContent
                        maxW={{ base: "90%", sm: "80%", md: "600px" }}
                        borderRadius={10}
                        bg={"transparent"}
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
                            <Heading ontWeight="bold" fontSize="25px" mb={4}>
                              Successful Recovery Announcement
                            </Heading>

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
                                  At 4:00 PM, emails ping across the company,
                                  and an announcement is broadcasted on internal
                                  communication channels. The crisis is
                                  officially over, and everyone can return to
                                  normal operations.
                                </Text>
                              </Box>
                              <Box>
                                <Image
                                  src={tvscreen}
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
                        <ModalFooter></ModalFooter>
                      </ModalContent>
                    </Modal>
                  )}
                  {showPopup6 && (
                    <Modal isOpen={day5Popup6} isCentered>
                      <ModalOverlay />
                      <ModalContent
                        maxW={{ base: "90%", sm: "80%", md: "600px" }}
                        borderRadius={10}
                        bg={"transparent"}
                      >
                        <ModalHeader></ModalHeader>
                        <Draggable>
                          <ModalBody
                            fontSize="18px"
                            className="draggable-modal"
                            borderRadius={10}
                            bg="rgba(245, 255, 255, 0.8)"
                            p={10}
                          >
                            <Heading fontWeight="bold" fontSize="25px" mb={5}>
                              The Next Couple of Weeks
                            </Heading>
                            <Text>
                              Over the next few weeks, the CIO, Ben Carter, and
                              the Senior Vice President of Worldwide Customer
                              Service embarked on a series of meetings with key
                              customers to address concerns and rebuild trust.
                            </Text>
                            <br />
                            <Text>
                              During these meetings, they discussed the recent
                              IT crisis, the measures taken to resolve it, and
                              the steps being implemented to prevent future
                              disruptions. The transparent communication went a
                              long way in reaffirming the company's commitment
                              to its clients.
                            </Text>
                            <Button
                              colorScheme="teal"
                              onClick={closePopup6}
                              onTouchEnd={closePopup6}
                              fontFamily="Croissant One"
                              bg="teal.500"
                              _hover={{ bgColor: "teal.600" }}
                              borderRadius={10}
                              mt={4}
                              ml={450}
                            >
                              Close
                            </Button>
                          </ModalBody>
                        </Draggable>
                        <ModalFooter></ModalFooter>
                      </ModalContent>
                    </Modal>
                  )}
                  {showPopup7 && (
                    <Modal isOpen={day5Popup7} isCentered>
                      <ModalOverlay />
                      <ModalContent
                        maxW={{ base: "90%", sm: "80%", md: "600px" }}
                        borderRadius={10}
                        bg={"transparent"}
                      >
                        <ModalHeader></ModalHeader>
                        <Draggable>
                          <ModalBody
                            fontSize="18px"
                            className="draggable-modal"
                            borderRadius={10}
                            bg="rgba(245, 255, 255, 0.8)"
                            p={10}
                          >
                            <Heading fontWeight="bold" fontSize="25px" mb={5}>
                              Epilog 1: The Debrief
                            </Heading>
                            <Text>
                              The office is calm, a stark contrast to the
                              frenzied atmosphere of the crisis days. Ben Carter
                              sits at his desk, reading through the final report
                              from the storage vendor. He looks contemplative.
                            </Text>
                            <Button
                              colorScheme="teal"
                              onClick={closePopup7}
                              onTouchEnd={closePopup7}
                              fontFamily="Croissant One"
                              bg="teal.500"
                              _hover={{ bgColor: "teal.600" }}
                              borderRadius={10}
                              mt={4}
                              ml={450}
                            >
                              Close
                            </Button>
                          </ModalBody>
                        </Draggable>
                        <ModalFooter></ModalFooter>
                      </ModalContent>
                    </Modal>
                  )}
                  {showPopup8 && (
                    <Modal isOpen={day5Popup8} isCentered>
                      <ModalOverlay />
                      <ModalContent
                        maxW={{ base: "90%", sm: "80%", md: "600px" }}
                        borderRadius={10}
                        bg={"transparent"}
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
                            <Heading fontWeight="bold" fontSize="25px" mb={5}>
                              A Conversation of Respect
                            </Heading>

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
                                  Inside a conference room, Ben Carter and Gajji
                                  sit across from each other. There's a sense of
                                  mutual respect between them.
                                </Text>
                              </Box>
                              <Box>
                                <Image
                                  src={across}
                                  borderRadius={10}
                                  maxW="100%"
                                  h="auto"
                                />
                                <Button
                                  colorScheme="teal"
                                  onClick={closePopup8}
                                  onTouchEnd={closePopup8}
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
                        <ModalFooter></ModalFooter>
                      </ModalContent>
                    </Modal>
                  )}
                  {showPopup9 && (
                    <Modal isOpen={day5Popup9} isCentered>
                      <ModalOverlay />
                      <ModalContent
                        maxW={{ base: "90%", sm: "80%", md: "600px" }}
                        borderRadius={10}
                        bg={"transparent"}
                      >
                        <ModalHeader></ModalHeader>
                        <Draggable>
                          <ModalBody
                            fontSize="18px"
                            className="draggable-modal"
                            borderRadius={10}
                            bg="rgba(245, 255, 255, 0.8)"
                            p={10}
                          >
                            <Heading fontWeight="bold" fontSize="25px" mb={5}>
                              {" "}
                              A Moment of Mutual Appreciation
                            </Heading>
                            <Text>
                              The two leaders share a moment of mutual
                              appreciation, aware that the trials they faced
                              together have only deepened their bond.
                            </Text>
                            <Button
                              colorScheme="teal"
                              onClick={closePopup9}
                              onTouchEnd={closePopup9}
                              fontFamily="Croissant One"
                              bg="teal.500"
                              _hover={{ bgColor: "teal.600" }}
                              borderRadius={10}
                              mt={4}
                              ml={450}
                            >
                              Close
                            </Button>
                          </ModalBody>
                        </Draggable>
                        <ModalFooter></ModalFooter>
                      </ModalContent>
                    </Modal>
                  )}
                  {showPopup11 && (
                    <Modal isOpen={day5Popup11} isCentered >
                      <ModalOverlay />
                      <ModalContent
                        maxW={{ base: "90%", sm: "80%", md: "60%" }}
                        borderRadius={10}
                        bg={"transparent"}
                      >
                        <ModalHeader></ModalHeader>
                        <Draggable>
                          <ModalBody
                            fontSize="18px"
                            className="draggable-modal"
                            borderRadius={10}
                            bg="rgba(245, 255, 255, 0.8)"
                            p={10}
                          >
                            <Heading fontWeight="bold" fontSize="25px" mb={5}>
                              Epilog - 2
                            </Heading>
                            <Text>
                              After months of analysis, the storage vendor’s
                              final report indicated the site 2 (R2) mirrored
                              copy was never corrupted. While the data in the
                              controller buffers were corrupted, the controller
                              had implemented defensive processes that prevented
                              the controller from writing the corrupted data to
                              the actual discs. The support team had viewed the
                              buffers but never investigated whether the
                              actually discs on the frames at site 2 were
                              corrupted. If this information had been convened
                              at the time of the incident, all applications
                              could have safely been restored within 24 hours.
                            </Text>

                            <br />
                            <Text>
                              The storage vendor provided approximately three
                              million dollars of new hardware and software to
                              provide two additional copies of the data as
                              restitution for the event.
                            </Text>
                            <br />
                            <Image src={figure2} />
                            <Text mt={2}>
                              <strong>Note:</strong> You can see more details of
                              all diagrams in document section.
                            </Text>
                            <Button
                              colorScheme="teal"
                              onClick={closePopup11}
                              onTouchEnd={closePopup11}
                              fontFamily="Croissant One"
                              bg="teal.500"
                              _hover={{ bgColor: "teal.600" }}
                              borderRadius={10}
                              ml={"750px"}
                            >
                              Close
                            </Button>
                            {/* <Image src={site}/> */}
                          </ModalBody>
                        </Draggable>
                        <ModalFooter></ModalFooter>
                      </ModalContent>
                    </Modal>
                  )}

                  {showPopup12 && (
                    <Modal
                      isOpen={day5Popup12}
                      onClose={closePopup12}
                      size="md"
                    >
                      <ModalOverlay />
                      <ModalContent>
                        <ModalHeader>End of Simulation</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                          {/* Place your moving thumb GIF here */}
                          <Box>
                            <img src={butterfly} alt="Moving Thumb" />
                          </Box>

                          <Text textAlign={"center"} fontWeight={"bold"}>
                            We appreciate your feedback, and you are now ready
                            to move on to the next step by accessing the
                            deliverable section.
                          </Text>
                        </ModalBody>
                        <ModalFooter>
                          <Button
                            onClick={closePopup12}
                            onTouchEnd={closePopup12}
                            bgColor={"#A81B1B"}
                            color={"white"}
                            _hover={{ color: "black" }}
                          >
                            Close
                          </Button>
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

export default Morning5;
