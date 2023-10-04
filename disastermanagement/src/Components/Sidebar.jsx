import React, { useState } from 'react';
import { Box, Text, VStack } from '@chakra-ui/react';
import Prepare from '../Pages/Prepare';
import Chat from '../Pages/Chat';
import StyledTreeExample from './Hierarchy/StyledTreeExample';
// import OrgChart from './OrgChart';

const Sidebar = () => {
  
const orgData = {
  name: 'CEO (Carlos Mendoza)',
  subordinates: [
    {
      name: 'COO (Aisha Patel)',
      subordinates: [
        {
          name: 'CIO (Ben Carter)',
          subordinates: [
            {
              name: 'IT Director (Chloe Zhang)',
              subordinates: [
                {
                  name: 'IT Manager (Kate Sullivan)',
                  subordinates: [
                    { name: 'Senior Systems Analyst (Liam Turner)' },
                    { name: 'Network Specialist (Mia Rodriguez)' },
                    { name: 'Database Administrator (Sophia Kim)' },
                  ],
                },
                {
                  name: 'IT Infrastructure Head (Jabari Nkosi)',
                  subordinates: [
                    { name: 'IT Security Head (Tariq Al-Hashim)' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'CFO (Elena Ivanova)',
    },
    {
      name: 'CMO (Lucas Oliveira)',
    },
    {
      name: 'CHRO (Priya Narayanan)',
    },
  ],
};

  const [selectedSection, setSelectedSection] = useState("Prepare");

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <Box display="flex" flexDirection="row" height={"88vh"}  >
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
      <Box bg={"gray.100"} overflowX="auto" padding={selectedSection === 'Hierarchy' ? '10' : '0'} >
        {selectedSection === 'Prepare' && <Prepare />}
        {selectedSection === 'Hierarchy' && <StyledTreeExample/>}
        {selectedSection === 'Chat' && <Chat />}
      </Box>
    </Box>
  );
};

export default Sidebar;
