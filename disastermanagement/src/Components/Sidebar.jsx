import React, { useState } from 'react';
import { Box, Text, VStack } from '@chakra-ui/react';
import Prepare from '../Pages/Prepare';
// import Hierarchy from './Hierarchy';
import Chat from '../Pages/Chat';

const Sidebar = () => {
  const [selectedSection, setSelectedSection] = useState("Prepare");

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <Box display="flex" flexDirection="row" height={"88vh"} >
      <VStack spacing={4} alignItems="flex-start" border={"0px solid red"} bgColor={"#08cdd4"} fontFamily={"Fredoka"} fontSize={20} pl={5} pr={5} pt={5} >
        <Text onClick={() => handleSectionClick('Prepare')} cursor="pointer" fontWeight={selectedSection === 'Prepare' ? 'bold' : 'none'}>
          Prepare
        </Text>
        <Text onClick={() => handleSectionClick('Hierarchy')} cursor="pointer" fontWeight={selectedSection === 'Hierarchy' ? 'bold' : 'none'}>
          Hierarchy
        </Text>
        <Text onClick={() => handleSectionClick('Chat')} cursor="pointer" fontWeight={selectedSection === 'Chat' ? 'bold' : 'none'}>
          Chat
        </Text>
      </VStack>
      <Box bg={"gray.100"}>
        {selectedSection === 'Prepare' && <Prepare />}
        {/* {selectedSection === 'Hierarchy' && <Hierarchy />} */}
        {selectedSection === 'Chat' && <Chat />}
      </Box>
    </Box>
  );
};

export default Sidebar;
