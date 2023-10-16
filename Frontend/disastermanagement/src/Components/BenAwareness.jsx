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
import "./Debrief.css";
import { FcPlus } from 'react-icons/fc';


const BenAwareness = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box display={"flex"} justifyContent={"space-around"} alignItems={"center"} mt={10} className="containerChild" onClick={onOpen}>
        Ben Carter's Awareness Strengths
        <FcPlus/>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size={"4xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontFamily={"Fredoka"} fontSize={25}>
            Ben Carter's Awareness Strengths
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody fontFamily={"Fredoka"}>
            <VStack alignItems={"left"}>
              <Text fontWeight={"600"} fontSize={18}>
                Initial Crisis Onset:
              </Text>
              <Text>
                <Text>
                  <li>
                    Dominant Awareness: Technical and Situational Awareness.
                  </li>
                </Text>
                <Text>
                  <li>
                    Ben quickly grasps the technical issue at hand and
                    understands its immediate implications.
                  </li>
                </Text>
              </Text>
            </VStack>
            
           
            <VStack alignItems={"left"}>
              <Text fontWeight={"600"} fontSize={18} mt={5}>
                Interactions with External Partners:
              </Text>
              <Text>
                <li>Dominant Awareness: External and Situational Awareness.</li>
                <li>
                  Ben clearly communicates the situation with external partners,
                  setting expectations and understanding the broader industry
                  implications
                </li>
              </Text>
            </VStack>
            <VStack alignItems={"left"}>
              <Text fontWeight={"600"} fontSize={18} mt={5}>
                Guidance During Prolonged Crisis:
              </Text>
              <Text>
                <li> Dominant Awareness: Team and Situational Awareness</li>
                <li>
                  Ben remains calm, guiding his team through challenges, and
                  recognizing the emotional toll the crisis is taking on them
                </li>
              </Text>
            </VStack>
            <VStack alignItems={"left"}>
              <Text fontWeight={"600"} fontSize={18} mt={5}>
                Post-Crisis Reflection:
              </Text>
              <Text>
                <li> Dominant Awareness: Strategic and Technical Awareness</li>
                <li>
                  Ben reflects on the technical root causes and also looks at
                  the long-term implications and lessons learned for the
                  organization.
                </li>
              </Text>
            </VStack>
            <VStack alignItems={"left"}>
              <Text fontWeight={"600"} fontSize={18} mt={5}>
                Outreach to Key Stakeholders:
              </Text>
              <Text>
                <li> Dominant Awareness: External and Strategic Awareness.</li>
                <li>
                  Ben proactively communicates with key clients, understanding
                  the external implications and ensuring the company's strategic
                  positioning remains intact.
                </li>
              </Text>
            </VStack>
            <VStack alignItems={"left"}>
              <Text fontWeight={"600"} fontSize={18} mt={5}>
                Throughout the Simulation:
              </Text>
              <Text>
                <li>Dominant Awareness: Self Awareness.</li>
                <li>
                   Ben remains composed, reflective, and adapts his leadership
                  style based on the situation, indicating a strong sense of
                  self-awareness.
                </li>
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

export default BenAwareness;
