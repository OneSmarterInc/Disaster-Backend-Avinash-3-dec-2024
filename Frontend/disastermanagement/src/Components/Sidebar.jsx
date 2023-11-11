import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Show,
  Text,
  VStack,
} from "@chakra-ui/react";
import Prepare from "../Pages/Prepare";
import Chat from "../Pages/Chat";
import StyledTreeExample from "./Hierarchy/StyledTreeExample";
import Debrief from "./Debrief";
import MyContext from "./ContextApi/MyContext";
import Deliverable from "./Deliverable";
import { AiOutlineClose } from "react-icons/ai";
import { BsArrowRightSquareFill } from "react-icons/bs";
import External from "./Hierarchy/External";
import { FiMinus } from "react-icons/fi";
import { BiPlus } from "react-icons/bi";
import { MdSpeed } from "react-icons/md";
import BringDown from "./Day1/Day1Evening";
import EarlyMorning from "./Day2/EarlyMorning";
import LateMorning from "./Day2/LateMoring";
import Morning from "./Day3/Morning";
import EarlyMorning4 from "./Day4/EarlyMorning4";
import Morning5 from "./Day5/Morning5";

const Sidebar = () => {
  const {
    globalState,
    deliverableState,
    selectedSection,
    setSelectedSection,
    showSidebar,
    setShowSideBar,
    setHead,
    showCloseBtn,
    setSpeed,
    speed,
  } = useContext(MyContext);

  const isMobile = window.innerWidth <= 600; // Define your mobile breakpoint
  const isDesktop = window.innerWidth > 600; // Define your mobile breakpoint

  const [isHovered, setIsHovered] = useState(false);
  const sidebarRef = useRef(null);
  const menuButtonRef = useRef(null);

  const handleMouseOver = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  const handleclose = () => {
    setShowSideBar(false);
  };

  const handleopen = () => {
    setShowSideBar(true);
  };

  useEffect(() => {
    if (selectedSection === "Prepare" || selectedSection === "Hierarchy") {
      setHead("");
    }
  }, [selectedSection]);

  const handleSpeed = (value) => {
    setSpeed((pre) => pre + value);

    console.log(speed);
  };

  const handleNormalSpeed = (value) => {
    setSpeed(value);
  };

  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        // height={"88vh"}
        bg={"white"}
        border={"0px solid red"}
        minW={"100%"}
        h={isMobile ? "100%" : "88vh"}
      >
        {showSidebar || isHovered ? (
          <>
            <VStack
              spacing={4}
              alignItems="flex-start"
              style={{
                transform:
                  showSidebar || isHovered
                    ? "translateX(0)"
                    : "translateX(-100%)",
                transition: "transform 0.3s ease-in-out",
                willChange: "transform", // hint to browsers for performance
              }}
              fontFamily={"Fredoka"}
              fontSize={isMobile ? 8 : 20}
              pl={isMobile ? 1 : 5}
              pr={isMobile ? 1 : 5}
              pt={isMobile ? 1 : 5}
              onMouseOver={handleMouseOver}
              onMouseLeave={handleMouseLeave}
              ref={sidebarRef}
            >
              <Show above="md">
                {showCloseBtn && (
                  <AiOutlineClose
                    onClick={handleclose}
                    cursor={"pointer"}
                    fontWeight={"bold"}
                  />
                )}
              </Show>

              <Text
                onClick={() => handleSectionClick("Prepare")}
                cursor="pointer"
                fontWeight={selectedSection === "Prepare" ? "bold" : "none"}
              >
                Prepare
              </Text>
              <Text
                onClick={() => handleSectionClick("Hierarchy")}
                cursor="pointer"
                fontWeight={selectedSection === "Hierarchy" ? "bold" : "none"}
              >
                Hierarchy
              </Text>
              <Text
                onClick={() => handleSectionClick("Chat")}
                cursor="pointer"
                fontWeight={selectedSection === "Chat" ? "bold" : "none"}
              >
                Chat
              </Text>
              <Text
                onClick={() => handleSectionClick("deliverable")}
                cursor="pointer"
                fontWeight={selectedSection === "deliverable" ? "bold" : "none"}
                pointerEvents={deliverableState ? "auto" : "none"}
                color={deliverableState ? "black" : "gray"}
              >
                Deliverable
              </Text>
              <Text
                onClick={() => handleSectionClick("debrief")}
                cursor="pointer"
                fontWeight={selectedSection === "debrief" ? "bold" : "none"}
                pointerEvents={globalState ? "auto" : "none"}
                color={globalState ? "black" : "gray"}
              >
                Debrief
              </Text>

              <HStack >
                <Button
                  size={isMobile ? 2 : "10px"}
                  fontSize={isMobile ? 12 : 17}
                  _hover={{ bgColor: "white", color: "black" }}
                  //color={"white"}
                  bg={"transparent"}
                  onClick={() => handleSpeed(1000)}
                  isDisabled={speed > 7000}
                >
                  <FiMinus />
                </Button>
                <Text>{speed / 1000}s</Text>
                <MdSpeed fontSize={isMobile ? 17 : 27} />
                <Button
                  size={isMobile ? 2 : "10px"}
                  fontSize={isMobile ? 12 : 17}
                  _hover={{ bgColor: "white", color: "black" }}
                  //color={"white"}
                  bg={"transparent"}
                  onClick={() => handleSpeed(-1000)}
                  isDisabled={speed < 2000}
                >
                  <BiPlus />
                </Button>
              </HStack>
            </VStack>
          </>
        ) : (
          <></>
        )}
        <Show above="md">
          {!showSidebar && (
            <BsArrowRightSquareFill
              ref={menuButtonRef}
              onMouseOver={handleMouseOver}
              onMouseLeave={handleMouseLeave}
              onClick={handleopen}
              cursor={"pointer"}
              size={"25px"}
            />
          )}
        </Show>
        <Box
          bg={"gray.100"}
          overflowX="auto"
          padding={selectedSection === "Hierarchy" ? "10" : "0"}
          border={"0px solid black"}
          w={
            selectedSection === "debrief" || selectedSection === "deliverable"
              ? "100%"
              : undefined || selectedSection === "Hierarchy"
              ? "100%"
              : undefined
          }
          h={
            (isMobile && selectedSection === "Hierarchy") ||
            selectedSection === "debrief"
              ? "100vh"
              : undefined
          }
        >
          {selectedSection === "Prepare" && <Prepare />}
          {selectedSection === "Hierarchy" && (
            <Flex gap={10}>
              <StyledTreeExample />

              <External />
            </Flex>
          )}

          {selectedSection === "Chat" && <Chat />}
          {selectedSection === "BringDown" && <BringDown/>}
          {selectedSection === "EarlyMorning2" && <EarlyMorning/>}
          {selectedSection === "LateMorning2" && <LateMorning/>}
          {selectedSection === "Morning3" && <Morning/>}
          {selectedSection === "Morning4" && <EarlyMorning4/>}
          {selectedSection === "Morning5" && <Morning5/>}
          {selectedSection === "deliverable" && <Deliverable />}
          {selectedSection === "debrief" && <Debrief />}
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;
