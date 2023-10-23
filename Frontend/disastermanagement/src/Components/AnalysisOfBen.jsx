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
import { FcPlus } from "react-icons/fc";

const AnalysisOfBen = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-around"}
        alignItems={"center"}
        mt={10}
        className="containerChild"
        onClick={onOpen}
      >
        Analysis of Ben Carter's Leadership (Our View)
        <FcPlus />
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size={"4xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontFamily={"Fredoka"} fontSize={25}>
            Analysis of Ben Carter's Leadership (Our View)
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody fontFamily={"Fredoka"}>
            <VStack alignItems={"left"}>
              <Text fontWeight={"600"} fontSize={18}>
              1. Decisive in Action:
              </Text>
              <Text>
                At the onset of challenges, Ben Carter doesn't waver. His
                immediate responses, such as delegating tasks swiftly and
                setting clear expectations, demonstrate a leader who doesn't shy
                away from making decisions, even under pressure. His ability to
                act without delay is a testament to his decisive nature,
                ensuring that potential issues are addressed head-on.
              </Text>
            </VStack>
            <VStack alignItems={"left"}>
              <Text fontWeight={"600"} fontSize={18} mt={5}>
              2. Master Communicator:
              </Text>
              <Text>
                Whether it's with his internal team or external partners, Ben's
                emphasis on clear and open communication stands out. He ensures
                that everyone is aligned, understands the gravity of the
                situation, and knows what's expected of them. This clarity,
                especially in crisis situations, is vital in navigating
                complexities and ensuring a coordinated response.
              </Text>
            </VStack>
            <VStack alignItems={"left"}>
              <Text fontWeight={"600"} fontSize={18} mt={5}>
               3. Unwavering Composure:
              </Text>
              <Text>
                Despite the prolonged nature of the crisis, repeated setbacks,
                and the mounting pressure, Ben remains a pillar of calm. His
                composed demeanor provides stability to his team, allowing them
                to focus on solutions without succumbing to panic or despair.
              </Text>
            </VStack>
            <VStack alignItems={"left"}>
              <Text fontWeight={"600"} fontSize={18} mt={5}>
               4. Adaptive Thinker:
              </Text>
              <Text>
                Post-crisis reflection reveals a leader who values adaptability.
                Ben understands that while immediate solutions are necessary,
                it's equally crucial to adapt strategies based on new learnings
                and information. This adaptive mindset ensures that the
                organization is better prepared for future challenges.
              </Text>
            </VStack>
            <VStack alignItems={"left"}>
              <Text fontWeight={"600"} fontSize={18} mt={5}>
               5. Collaborative Spirit:
              </Text>
              <Text>
                Throughout the narrative, Ben's emphasis on teamwork and
                collaboration is evident. Whether it's trusting his internal
                team's expertise or valuing the input of external partners, Ben
                understands that facing challenges is a collective effort. This
                collaborative spirit fosters a culture where all stakeholders
                work together towards a common goal.
              </Text>
            </VStack>
            <VStack alignItems={"left"}>
              <Text fontWeight={"600"} fontSize={18} mt={5}>
               6. Visionary Outlook:
              </Text>
              <Text>
                Beyond the immediate crisis, Ben's leadership reflects a
                visionary outlook. His proactive outreach to key stakeholders
                after the crisis underscores a leader who understands the
                long-term implications of actions and decisions. Ben is not just
                focused on the here and now but is always considering the
                broader impact on the organization's future and reputation. In
                essence, Ben Carter emerges as a leader who is not just defined
                by one or two traits but is a blend of several leadership
                qualities. His multifaceted leadership approach ensures that he
                can navigate complex challenges effectively, always keeping the
                best interests of his organization at the forefront.
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

export default AnalysisOfBen;
