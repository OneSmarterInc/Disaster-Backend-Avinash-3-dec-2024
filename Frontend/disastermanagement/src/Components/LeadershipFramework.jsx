import {
  Box,
  Button,
  Heading,
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
import { FcPlus } from "react-icons/fc";

const LeadershipFramework = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = window.innerWidth <= 600; // Define your mobile breakpoint

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={isMobile ? "center" :"space-between"}
        alignItems={"center"}
        mt={isMobile ? 4 : 10}
        pl={5}
        pr={5}
        className="containerChild"
        onClick={onOpen}
        fontSize={isMobile && 10}
      >
        Leadership Awareness Framework
        {!isMobile && <FcPlus />}
        
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size={"4xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader  fontFamily={"Fredoka"} w={isMobile && "90%"} fontSize={isMobile ? 12 : 25}>
            Leadership Awareness Framework
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody fontFamily={"Fredoka"}>
            <VStack alignItems={"left"}>
              <Text fontWeight={"600"} fontSize={isMobile ? 11 : 18}>
                1. Technical Awareness:
              </Text>
              <Text fontSize={isMobile ? 10 : 18}>
                Understanding the technical intricacies of the situation,
                including systems, processes, and tools.
              </Text>
            </VStack>
            <VStack alignItems={"left"}>
              <Text fontWeight={"600"} fontSize={isMobile ? 11 : 18} mt={5}>
                2. Situational Awareness:
              </Text>
              <Text fontSize={isMobile ? 10 : 18}>
                Grasping the immediate context, the severity of the situation,
                and its implications.
              </Text>
            </VStack>
            <VStack alignItems={"left"}>
              <Text fontWeight={"600"} fontSize={isMobile ? 11 : 18} mt={5}>
                3. External Awareness:
              </Text>
              <Text fontSize={isMobile ? 10 : 18}>
                Being aware of external stakeholders, market dynamics, and
                broader industry implications.
              </Text>
            </VStack>
            <VStack alignItems={"left"}>
              <Text fontWeight={"600"} fontSize={isMobile ? 11 : 18} mt={5}>
                4. Team Awareness:
              </Text>
              <Text fontSize={isMobile ? 10 : 18}>
                Recognizing the strengths, weaknesses, and emotional states of
                team members.
              </Text>
            </VStack>
            <VStack alignItems={"left"}>
              <Text fontWeight={"600"} fontSize={isMobile ? 11 : 18} mt={5}>
                5. Strategic Awareness:
              </Text>
              <Text fontSize={isMobile ? 10 : 18}>
                Keeping an eye on the long-term vision, goals, and implications
                of the crisis on the organization's future.
              </Text>
            </VStack>
            <VStack alignItems={"left"}>
              <Text fontWeight={"600"} fontSize={isMobile ? 11 : 18} mt={5}>
                6. Self Awareness:
              </Text>
              <Text fontSize={isMobile ? 10 : 18}>
                Understanding one's own emotions, strengths, weaknesses, and
                biases during the crisis.
              </Text>
            </VStack>
            <VStack alignItems={"left"}>
              <Text fontWeight={"600"} fontSize={isMobile ? 11 : 18} mt={5}>
                7. Initial Crisis Onset:
              </Text>
              <Text fontSize={isMobile ? 10 : 18}>
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
            
            <Heading fontFamily={"Fredoka"} fontSize={isMobile ? 12 : 18} mt={10}>
              Ben Carter's Awareness Strengths
            </Heading>

            <VStack alignItems={"left"}>
              <Text fontWeight={"600"} fontSize={isMobile ? 11 : 18} mt={2}>
                1. Interactions with External Partners:
              </Text>
              <Text fontSize={isMobile ? 10 : 18}>
                <li>Dominant Awareness: External and Situational Awareness.</li>
                <li>
                  Ben clearly communicates the situation with external partners,
                  setting expectations and understanding the broader industry
                  implications
                </li>
              </Text>
            </VStack>
            <VStack alignItems={"left"}>
              <Text fontWeight={"600"} fontSize={isMobile ? 11 : 18} mt={5}>
                2. Guidance During Prolonged Crisis:
              </Text>
              <Text fontSize={isMobile ? 10 : 18}>
                <li> Dominant Awareness: Team and Situational Awareness</li>
                <li>
                  Ben remains calm, guiding his team through challenges, and
                  recognizing the emotional toll the crisis is taking on them
                </li>
              </Text>
            </VStack>
            <VStack alignItems={"left"}>
              <Text fontWeight={"600"} fontSize={isMobile ? 11 : 18} mt={5}>
               3. Post-Crisis Reflection:
              </Text>
              <Text fontSize={isMobile ? 10 : 18}>
                <li> Dominant Awareness: Strategic and Technical Awareness</li>
                <li>
                  Ben reflects on the technical root causes and also looks at
                  the long-term implications and lessons learned for the
                  organization.
                </li>
              </Text>
            </VStack>
            <VStack alignItems={"left"}>
              <Text fontWeight={"600"} fontSize={isMobile ? 11 : 18} mt={5}>
                4. Outreach to Key Stakeholders:
              </Text>
              <Text fontSize={isMobile ? 10 : 18}>
                <li> Dominant Awareness: External and Strategic Awareness.</li>
                <li>
                  Ben proactively communicates with key clients, understanding
                  the external implications and ensuring the company's strategic
                  positioning remains intact.
                </li>
              </Text>
            </VStack>
            <VStack alignItems={"left"}>
              <Text fontWeight={"600"} fontSize={isMobile ? 11 : 18} mt={5}>
                5. Throughout the Simulation:
              </Text>
              <Text fontSize={isMobile ? 10 : 18} >
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
            <Button colorScheme="blue" size={isMobile && "sm"} fontSize={isMobile && 10} mr={isMobile ? 0 : 3} onClick={onClose} p={2}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LeadershipFramework;
