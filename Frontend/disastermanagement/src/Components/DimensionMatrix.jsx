import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import "./Debrief.css";
import { FcPlus } from "react-icons/fc";

const DimensionMatrix = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = window.innerWidth <= 600; // Define your mobile breakpoint

  return (
    <>
      <Box
        pl={5}
        pr={5}
        display={"flex"}
        justifyContent={isMobile ? "center" : "space-between"}
        alignItems={"center"}
        mt={isMobile ? 4 : 10}
        className="containerChild"
        onClick={onOpen}
        fontSize={isMobile && 10}
      >
        The Technical Leader Framework
        {!isMobile && <FcPlus />}
        
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size={"4xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontFamily={"Fredoka"} w={isMobile ? "85%" : "90%"} fontSize={isMobile ? 12 : 25}>
            The Technical Leader Framework
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody fontFamily={"Fredoka"}>
            <Text fontWeight={"600"} fontSize={isMobile ? 11 : 25}>
              Leadership can be interpreted as an application of different
              traits or qualities to different situational needs. In the context
              of this simulation, it is useful to examine Ben Carter on two
              dimentions:
            </Text>
            <VStack alignItems={"left"}>
              <Text fontWeight={"600"} fontSize={isMobile ? 12 : 25} mt={10}>
               1. Response to Change:
              </Text>
              <Text fontSize={isMobile ? 10 : 25}>
                This dimension focuses on how a leader reacts to changing
                situations. It ranges from "Reactive" (responding to immediate
                challenges) to "Proactive" (anticipating and preparing for
                future challenges).
              </Text>
            </VStack>
            <VStack alignItems={"left"}>
              <Text fontWeight={"600"} fontSize={isMobile ? 11 : 25} mt={5}>
               2. Mode of Interaction:
              </Text>
              <Text fontSize={isMobile ? 10 : 25}>
                This dimension focuses on how a leader interacts with others. It
                ranges from "Individual" (more focused on personal decisions and
                actions) to "Collaborative" (emphasizing teamwork and
                partnerships).
              </Text>
            </VStack>
            <Text
              fontFamily={"Fredoka"}
              fontSize={isMobile ? 12 : 25}
              mt={7}
              fontWeight={"500"}
            >
              Breakdown of Traits in the Matrix:
            </Text>

            <TableContainer mt={10} fontSize={isMobile && 10}>
              <Table
                border={"1px solid teal"}
                variant={"simple"}
                colorScheme="teal"
              >
                <Thead  >
                  <Tr>
                    <Th></Th>
                    <Th>Reactive</Th>
                    <Th>Proactive</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td fontWeight={"600"}>Individual</Td>
                    <Td>Decisive</Td>
                    <Td>Visionary</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight={"600"}>Collaborative</Td>
                    <Td>Communicative</Td>
                    <Td>Adaptive + Collaborative</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>

            <VStack alignItems={"left"} mt={10}>
              <Text fontWeight={"600"} fontSize={isMobile ? 11 : 25} mt={5}>
                1. Decisive (Reactive + Individual):
              </Text>
              <Text fontSize={isMobile ? 10 : 25}>
                When faced with immediate challenges, Ben quickly makes
                decisions, reflecting a reactive response on an individual
                level.
              </Text>
            </VStack>
            <VStack alignItems={"left"}>
              <Text fontWeight={"600"} fontSize={isMobile ? 11 : 25} mt={5}>
                2. Visionary (Proactive + Individual):
              </Text>
              <Text fontSize={isMobile ? 10 : 25}>
                Ben's outreach to stakeholders after the crisis and his focus on
                long-term implications showcase his proactive thinking at an
                individual leadership level.
              </Text>
            </VStack>
            <VStack alignItems={"left"}>
              <Text fontWeight={"600"} fontSize={isMobile ? 11 : 25} mt={5}>
                3. Communicative (Reactive + Collaborative):
              </Text>
              <Text fontSize={isMobile ? 10 : 25}>
                In the face of challenges, Ben's immediate emphasis on clear
                communication with both his team and external partners places
                this trait in the reactive and collaborative quadrant.
              </Text>
            </VStack>
            <VStack alignItems={"left"}>
              <Text fontWeight={"600"} fontSize={isMobile ? 11 : 25} mt={5}>
                4. Adaptive + Collaborative (Proactive + Collaborative):
              </Text>
              <Text fontSize={isMobile ? 10 : 25}>
                Post-crisis, Ben values adaptability, learning from the
                situation, and ensuring better preparedness for the future.
                Combined with his emphasis on teamwork, this places the trait in
                the proactive and collaborative quadrant.
              </Text>
            </VStack>

            <Text mt={10} fontSize={isMobile ? 10 : 25}>
              This 2x2 matrix provides a succinct overview of Ben Carter's
              leadership traits, making it easier to discuss and visualize his
              leadership style in relation to the challenges presented in the
              simulation.
            </Text>
            <Text mt={5} fontSize={isMobile ? 10 : 25}>
              Based on the narrative and the leadership traits exhibited by Ben
              Carter at various junctures in the simulation, Ben would
              predominantly fall into the Proactive + Collaborative quadrant of
              the 2x2 matrix. Here's why:
            </Text>

            <VStack alignItems={"left"}>
              <Text fontWeight={"600"} fontSize={isMobile ? 11 : 25} mt={5}>
                1. Proactive Approach:
              </Text>
              <Text fontSize={isMobile ? 10 : 25}>
                Even though Ben reacts decisively to immediate challenges, his
                actions throughout the simulation show a forward-thinking
                approach. His outreach to key stakeholders after the crisis,
                discussions around lessons learned, and emphasis on future
                implications demonstrate a proactive mindset.
              </Text>
            </VStack>
            <VStack alignItems={"left"}>
              <Text fontWeight={"600"} fontSize={isMobile ? 11 : 25} mt={5}>
               2. Collaborative Nature:
              </Text>
              <Text fontSize={isMobile ? 10 : 25}>
                Ben consistently emphasizes teamwork and collaboration. Whether
                he's working with his internal team, interacting with external
                partners, or reaching out to stakeholders, he values collective
                efforts and understands that facing challenges is a shared
                responsibility.
              </Text>
            </VStack>
            <br/>
            <Text fontSize={isMobile ? 10 : 25}>
              Therefore, if we were to place Ben Carter on the 2x2 matrix, he
              would be positioned towards the Proactive + Collaborative
              quadrant, reflecting a leader who not only thinks ahead but also
              deeply values teamwork and partnership in navigating challenges.
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" size={isMobile && "sm"} fontSize={isMobile && 10} mr={isMobile ? 0 : 3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DimensionMatrix;
