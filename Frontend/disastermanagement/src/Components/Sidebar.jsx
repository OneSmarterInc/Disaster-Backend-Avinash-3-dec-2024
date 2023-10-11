import React, { useState } from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import Prepare from "../Pages/Prepare";
import Chat from "../Pages/Chat";
import StyledTreeExample from "./Hierarchy/StyledTreeExample";
import Debrief from "./Debrief";

const Sidebar = () => {
  const [selectedSection, setSelectedSection] = useState("Prepare");

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <Box display="flex" flexDirection="row" height={"88vh"}>
      <VStack
        spacing={4}
        alignItems="flex-start"
        border={"0px solid red"}
        bgColor={" #856262 "}
        fontFamily={"Fredoka"}
        fontSize={20}
        pl={5}
        pr={5}
        pt={5}
      >
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
          onClick={() => handleSectionClick("debrief")}
          cursor="pointer"
          fontWeight={selectedSection === "debrief" ? "bold" : "none"}
        >
          Debrief
        </Text>
      </VStack>
      <Box
        bg={"gray.100"}
        overflowX="auto"
        padding={selectedSection === "Hierarchy" ? "10" : "0"}
        w={selectedSection === "debrief" && "100%"}
      >
        {selectedSection === "Prepare" && <Prepare />}
        {selectedSection === "Hierarchy" && <StyledTreeExample />}
        {selectedSection === "Chat" && <Chat />}
        {selectedSection === "debrief" && <Debrief />}
      </Box>
    </Box>
  );
};

export default Sidebar;
