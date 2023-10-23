import {
  Box,
  Button,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  UnorderedList,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import "./Debrief.css";
import { FcPlus } from "react-icons/fc";

const FinalThoughts = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        mt={10}
        pl={5}
        pr={5}
        className="containerChild"
        onClick={onOpen}
      >
        Final Thoughts
        <FcPlus />
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size={"4xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader ml={3} fontFamily={"Fredoka"} fontSize={25}>
            Final Thoughts
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody fontFamily={"Fredoka"}>
            <Text fontWeight={"600"} fontSize={18}>
              The simulation offers a rich narrative that can be analyzed
              through various lenses to gain deeper insights into leadership,
              crisis management, and organizational dynamics. Apart from the
              leadership traits and awareness frameworks we've discussed, here
              are some additional lenses to consider:
            </Text>

            <VStack alignItems={"left"}>
              <Text fontWeight={"600"} fontSize={18} mt={10}>
                1. Organizational Culture and Dynamics:
              </Text>
              <VStack>
                <Text fontWeight={"600"} fontSize={18}>
                  Trust and Autonomy:
                </Text>
                <UnorderedList>
                  <ListItem>
                    • Insight: Throughout the simulation, Ben Carter delegates
                    tasks to team members like Kate Sullivan, indicating a level
                    of trust in their capabilities.
                  </ListItem>
                </UnorderedList>
              </VStack>
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

            <ModalHeader fontFamily={"Fredoka"} fontSize={25} mt={10}>
              Ben Carter's Awareness Strengths
            </ModalHeader>

            <VStack alignItems={"left"}>
              <Text fontWeight={"600"} fontSize={18} mt={2}>
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

export default FinalThoughts;
