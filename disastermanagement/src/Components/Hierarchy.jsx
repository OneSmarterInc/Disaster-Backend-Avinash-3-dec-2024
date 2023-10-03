import React from 'react';
import {
  Box,
  List,
  ListItem,
  Text,
  VStack,
  HStack,
  Avatar,
  Divider,
} from '@chakra-ui/react';

const data = {
  CEO: {
    name: 'Carlos Mendoza',
    title: 'CEO',
    children: {
      COO: {
        name: 'Aisha Patel',
        title: 'COO',
        children: {
          CIO: {
            name: 'Ben Carter',
            title: 'CIO',
            children: {
              'IT Director': {
                name: 'Chloe Zhang',
                title: 'IT Director',
                children: {
                  'IT Manager': {
                    name: 'Kate Sullivan',
                    title: 'IT Manager',
                    children: {
                      'Senior Systems Analyst': {
                        name: 'Liam Turner',
                        title: 'Senior Systems Analyst',
                      },
                      'Network Specialist': {
                        name: 'Mia Rodriguez',
                        title: 'Network Specialist',
                      },
                      'Database Administrator': {
                        name: 'Sophia Kim',
                        title: 'Database Administrator',
                      },
                    },
                  },
                },
              },
            },
          },
          'IT Infrastructure Head': {
            name: 'Jabari Nkosi',
            title: 'IT Infrastructure Head',
          },
          'IT Security Head': {
            name: 'Tariq Al-Hashim',
            title: 'IT Security Head',
          },
        },
      },
      CFO: {
        name: 'Elena Ivanova',
        title: 'CFO',
      },
      CMO: {
        name: 'Lucas Oliveira',
        title: 'CMO',
      },
      CHRO: {
        name: 'Priya Narayanan',
        title: 'CHRO',
      },
    },
  },
};

const HierarchyNode = ({ node }) => {
  return (
    <VStack align="start" spacing={2} pl={4}>
      <HStack spacing={4}>
        <Avatar name={node.name} size="md" />
        <Box>
          <Text fontWeight="bold">{node.name}</Text>
          <Text fontSize="sm" color="gray.500">
            {node.title}
          </Text>
        </Box>
      </HStack>
      {node.children && (
        <List ml={4}>
          {Object.keys(node.children).map((key) => (
            <React.Fragment key={key}>
              <ListItem>
                <HierarchyNode node={node.children[key]} />
              </ListItem>
              {key !== 'CHRO' && <Divider borderColor="gray.300" />}
            </React.Fragment>
          ))}
        </List>
      )}
    </VStack>
  );
};

const Hierarchy = () => {
  return (
    <Box p={4} w="70vw" > {/* Add overflowX to handle horizontal overflow */}
      <HierarchyNode node={data.CEO} />
    </Box>
  );
};

export default Hierarchy;
