import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
const GroupPage = () => {
    const [showId,setShowId] = useState(false);
    const [showInput,setShowInput] = useState(false);

    const handleCreate = ()=>{
        setShowId(true)
    }

    const handleJoin = ()=>{
        setShowInput(true);
    }
  return (
    <>
      <Navbar />
      <Box border={"1px solid grey"} boxShadow="lg" borderRadius="lg" minH={"78vh"} w={"60%"} m={"auto"} mt={10}>
        <Flex justifyContent={"space-between"}>
          <Button
            bgColor={"#346e98"}
            ml={20}
            mb={10}
            mt={10}
            color={"white"}
            _hover={{ color: "black" }}
            onClick={handleCreate}
          >
            Create Group
          </Button>
          
          
          <Button
            bgColor={"#346e98"}
            mr={20}
            mb={10}
            mt={10}
            color={"white"}
            _hover={{ color: "black" }}
            onClick={handleJoin}
          >
            Join Group
          </Button>
          
        </Flex>
        {showId && (
            <Box>
                <Text mr={'520px'}>Share this ID : dhfgd6f5</Text>
            </Box>
          )}
        {showInput && (
            <Box>
            <Input type="text" placeholder="Enter gp_Id" w={'20%'} ml={'420px'} mr={'5px'}/>
            <Button>Submit</Button>
            </Box>
          )}
        <TableContainer>
          <Table
            variant="simple"
            w={"80%"}
            m={"auto"}
            border={"1px solid grey"}
          >
            <Thead bgColor={"#346e98"} color={"black"}>
              <Tr>
                <Th color={"white"}>Sr. No</Th>
                <Th color={"white"}>Name</Th>
                <Th color={"white"}>Email</Th>
                <Th color={"white"}>gp_Id</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </Tr>
              <Tr>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </Tr>
              <Tr>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default GroupPage;
