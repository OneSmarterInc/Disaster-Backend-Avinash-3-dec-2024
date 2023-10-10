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
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import "../Pages/Result.css";

const LeadershipFramework = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box mt={10} className="containerChild" onClick={onOpen}>
        Leadership Awareness Framework
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size={"4xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontFamily={"Fredoka"} fontSize={25}>
            Leadership Awareness Framework
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody fontFamily={"Fredoka"}>
            <VStack alignItems={"left"}>
              <Text fontWeight={"600"} fontSize={18}>
                Technical Awareness:
              </Text>
              <Text>
                Understanding the technical intricacies of the situation,
                including systems, processes, and tools.
              </Text>
            </VStack>
            <VStack alignItems={"left"}>
              <Text fontWeight={"600"} fontSize={18} mt={5}>
                Situational Awareness:
              </Text>
              <Text>
                Grasping the immediate context, the severity of the situation,
                and its implications.
              </Text>
            </VStack>
            <VStack alignItems={"left"}>
              <Text fontWeight={"600"} fontSize={18} mt={5}>
                External Awareness:
              </Text>
              <Text>
                Being aware of external stakeholders, market dynamics, and
                broader industry implications.
              </Text>
            </VStack>
            <VStack alignItems={"left"}>
              <Text fontWeight={"600"} fontSize={18} mt={5}>
                Team Awareness:
              </Text>
              <Text>
                Recognizing the strengths, weaknesses, and emotional states of
                team members.
              </Text>
            </VStack>
            <VStack alignItems={"left"}>
              <Text fontWeight={"600"} fontSize={18} mt={5}>
                Strategic Awareness:
              </Text>
              <Text>
                Keeping an eye on the long-term vision, goals, and implications
                of the crisis on the organization's future.
              </Text>
            </VStack>
            <VStack alignItems={"left"}>
              <Text fontWeight={"600"} fontSize={18} mt={5}>
                Self Awareness:
              </Text>
              <Text>
                Understanding one's own emotions, strengths, weaknesses, and
                biases during the crisis.
              </Text>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LeadershipFramework;
