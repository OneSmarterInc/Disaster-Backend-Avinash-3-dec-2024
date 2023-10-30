import React, { useContext, useEffect, useRef, useState } from "react";
import { Box, Divider, Flex, Text, VStack } from "@chakra-ui/react";
import Prepare from "../Pages/Prepare";
import Chat from "../Pages/Chat";
import StyledTreeExample from "./Hierarchy/StyledTreeExample";
import Debrief from "./Debrief";
import MyContext from "./ContextApi/MyContext";
import Deliverable from "./Deliverable";
import { AiOutlineClose } from "react-icons/ai";
import { BsArrowRightSquareFill } from "react-icons/bs";
import External from "./Hierarchy/External";

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
  } = useContext(MyContext);

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

  return (
    <>
      <Box display="flex" flexDirection="row" height={"88vh"} bg={"white"}>
        {showSidebar || isHovered ? (
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
            fontSize={20}
            pl={5}
            pr={5}
            pt={5}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            ref={sidebarRef}
          >
            {showCloseBtn && (
              <AiOutlineClose
                onClick={handleclose}
                cursor={"pointer"}
                fontWeight={"bold"}
              />
            )}
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
              // pointerEvents={globalState ? "auto" : "none"}
              color={globalState ? "black" : "gray"}
            >
              Debrief
            </Text>
          </VStack>
        ) : (
          <></>
        )}
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
        <Box
          bg={"gray.100"}
          overflowX="auto"
          padding={selectedSection === "Hierarchy" ? "10" : "0"}
          w={
            selectedSection === "debrief" || selectedSection === "deliverable"
              ? "100%"
              : undefined || selectedSection === "Hierarchy"
              ? "100%"
              : undefined
          }
        >
          {selectedSection === "Prepare" && <Prepare />}
          {selectedSection === "Hierarchy" && (
            <Flex gap={10}>
              <StyledTreeExample />
              <Divider
                borderColor={"black"}
                orientation="vertical"
                borderWidth={"2px"}
                h={"100vh"}
              />
              <External />
            </Flex>
          )}
          {/* <Text color={'gray.100'}>
            --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
          </Text> */}
          {selectedSection === "Chat" && <Chat />}
          {selectedSection === "deliverable" && <Deliverable />}
          {selectedSection === "debrief" && <Debrief />}
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;
