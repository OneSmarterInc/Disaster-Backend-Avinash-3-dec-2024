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
  const isMobile = window.innerWidth <= 600; // Define your mobile breakpoint

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={isMobile ? "center" : "space-between"}
        alignItems={"center"}
        mt={isMobile ? 4 : 10}
        pl={5}
        pr={5}
        className="containerChild"
        onClick={onOpen}
        fontSize={isMobile && 10}
      >
        Final Thoughts
        {!isMobile && <FcPlus />}
        
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size={"4xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader ml={isMobile ? 0 : 3} fontFamily={"Fredoka"} fontSize={isMobile ? 12 : 25}>
            Final Thoughts
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody fontFamily={"Fredoka"}>
            <Text fontWeight={"600"} fontSize={isMobile ? 11 : 18} textAlign={"justify"}>
              This framework provides a lens to view Ben Carter's shifting focus
              and awareness throughout the simulation. It shows a leader who is
              versatile and can tap into different domains of awareness as the
              situation demands. This ability to shift focus and adapt is a
              hallmark of effective leadership, especially in crisis situations.
              The simulation offers a rich narrative that can be analyzed
              through various lenses to gain deeper insights into leadership,
              crisis management, and organizational dynamics. Apart from the
              leadership traits and awareness frameworks we've discussed, here
              are some additional lenses to consider:
            </Text>

            <VStack alignItems={"left"}>
              <Text fontWeight={"600"} fontSize={isMobile ? 10 : 18} mt={10}>
                1. Organizational Culture and Dynamics:
              </Text>
              <Text fontWeight={"600"} fontSize={isMobile ? 10 : 18}>
                Trust and Autonomy:
              </Text>
              <UnorderedList fontSize={isMobile ? 10 : 18}>
                <ListItem>
                  Insight: Throughout the simulation, Ben Carter delegates tasks
                  to team members like Kate Sullivan, indicating a level of
                  trust in their capabilities.
                </ListItem>
              </UnorderedList>
              <UnorderedList fontSize={isMobile ? 10 : 18}>
                <ListItem>
                  Takeaway: A culture of trust and autonomy can empower team
                  members to take initiative, leading to quicker responses in
                  crisis situations.
                </ListItem>
              </UnorderedList>

              <Text fontWeight={"600"} fontSize={isMobile ? 10 : 18}>
                Feedback and Learning Culture:
              </Text>
              <UnorderedList fontSize={isMobile ? 10 : 18}>
                <ListItem>
                  Insight: After the crisis, there's a reflection on lessons
                  learned, suggesting a culture that values feedback and
                  continuous improvement.
                </ListItem>
              </UnorderedList>
              <UnorderedList fontSize={isMobile ? 10 : 18}>
                <ListItem>
                  Takeaway: Embracing setbacks as learning opportunities can
                  foster resilience and innovation.
                </ListItem>
              </UnorderedList>
            </VStack>

            <VStack alignItems={"left"}>
              <Text fontWeight={"600"} fontSize={isMobile ? 10 : 18} mt={10}>
                2. Decision-Making Process:
              </Text>
              <Text fontWeight={"600"} fontSize={isMobile ? 10 : 18}>
                Centralized vs. Decentralized:
              </Text>
              <UnorderedList fontSize={isMobile ? 10 : 18}>
                <ListItem>
                  Insight: While Ben Carter provides guidance and direction, he
                  also involves his team in decision-making, suggesting a
                  balance between centralized and decentralized decision-making.
                </ListItem>
              </UnorderedList>
              <UnorderedList fontSize={isMobile ? 10 : 18}>
                <ListItem>
                  Takeaway: Flexibility in decision-making processes can enhance
                  adaptability during crises
                </ListItem>
              </UnorderedList>

              <Text fontWeight={"600"} fontSize={isMobile ? 10 : 18}>
                Data-Driven vs. Intuitive:
              </Text>
              <UnorderedList fontSize={isMobile ? 10 : 18}>
                <ListItem>
                  Insight: Decisions seem to be a mix of data (like the
                  reports from the storage vendor) and intuition (Ben's early
                  sense of the crisis's gravity).
                </ListItem>
              </UnorderedList>
              <UnorderedList fontSize={isMobile ? 10 : 18}>
                <ListItem>
                  Takeaway: Combining data with intuition can provide a holistic
                  approach to decision-making.
                </ListItem>
              </UnorderedList>
            </VStack>

            <VStack alignItems={"left"}>
              <Text fontWeight={"600"} fontSize={isMobile ? 10 : 18}  mt={10}>
                3. Communication Dynamics:
              </Text>
              <Text fontWeight={"600"} fontSize={isMobile ? 10 : 18} >
                Frequency:
              </Text>
              <UnorderedList fontSize={isMobile ? 10 : 18}>
                <ListItem>
                  Insight: Regular updates and communications are evident
                  throughout the crisis, both internally and with external
                  partners.
                </ListItem>
              </UnorderedList>
              <UnorderedList fontSize={isMobile ? 10 : 18}>
                <ListItem>
                  Takeaway: Frequent communication can ensure alignment and
                  clarity during tumultuous times.
                </ListItem>
              </UnorderedList>

              <Text fontWeight={"600"} fontSize={isMobile ? 10 : 18}>
                Transparency:
              </Text>
              <UnorderedList fontSize={isMobile ? 10 : 18}>
                <ListItem>
                  Insight: Ben Carter emphasizes transparent communication,
                  especially with external stakeholders, suggesting a value on
                  openness.
                </ListItem>
              </UnorderedList>
              <UnorderedList fontSize={isMobile ? 10 : 18}>
                <ListItem>
                  Takeaway: Transparency can foster trust, especially during
                  crises.
                </ListItem>
              </UnorderedList>
            </VStack>

            <VStack alignItems={"left"}>
              <Text fontWeight={"600"} fontSize={isMobile ? 10 : 18} mt={10}>
                4. Stakeholder Management:
              </Text>
              <Text fontWeight={"600"} fontSize={isMobile ? 10 : 18}>
                Internal Stakeholders:
              </Text>
              <UnorderedList fontSize={isMobile ? 10 : 18}>
                <ListItem>
                  Insight: There's an emphasis on keeping senior management
                  informed and involved, indicating effective internal
                  stakeholder management.
                </ListItem>
              </UnorderedList>
              <UnorderedList fontSize={isMobile ? 10 : 18}>
                <ListItem>
                  Takeaway: Engaging internal stakeholders can ensure
                  organizational alignment.
                </ListItem>
              </UnorderedList>

              <Text fontWeight={"600"}  fontSize={isMobile ? 10 : 18}>
                External Stakeholders:
              </Text>
              <UnorderedList fontSize={isMobile ? 10 : 18}>
                <ListItem>
                  Insight: Ben's proactive outreach to key clients after the
                  crisis demonstrates effective external stakeholder
                  management..
                </ListItem>
              </UnorderedList>
              <UnorderedList fontSize={isMobile ? 10 : 18}>
                <ListItem>
                  Takeaway: Managing external perceptions is crucial for
                  maintaining trust and reputation.
                </ListItem>
              </UnorderedList>
            </VStack>

            <VStack alignItems={"left"}>
              <Text fontWeight={"600"} fontSize={isMobile ? 10 : 18} mt={10}>
                5. Resource Management:
              </Text>
              <Text fontWeight={"600"} fontSize={isMobile ? 10 : 18}>
                Allocation:
              </Text>
              <UnorderedList fontSize={isMobile ? 10 : 18}>
                <ListItem>
                  Insight: Resources, both technical and human, are swiftly
                  mobilized in response to the crisis.
                </ListItem>
              </UnorderedList>
              <UnorderedList fontSize={isMobile ? 10 : 18}>
                <ListItem>
                  Takeaway: Effective resource allocation can be the difference
                  between swift resolution and prolonged issues.{" "}
                </ListItem>
              </UnorderedList>

              <Text fontWeight={"600"} fontSize={isMobile ? 10 : 18}>
                Backup and Redundancy:
              </Text>
              <UnorderedList fontSize={isMobile ? 10 : 18}>
                <ListItem>
                  Insight: The repeated system failures suggest potential gaps
                  in backup and redundancy systems.
                </ListItem>
              </UnorderedList>
              <UnorderedList fontSize={isMobile ? 10 : 18}>
                <ListItem>
                  Takeaway: Investing in robust backup systems can prevent
                  prolonged outages.
                </ListItem>
              </UnorderedList>
            </VStack>

            <VStack alignItems={"left"}>
              <Text fontWeight={"600"} fontSize={isMobile ? 10 : 18} mt={10}>
                6. Emotional and Psychological Dynamics:
              </Text>
              <Text fontWeight={"600"} fontSize={isMobile ? 10 : 18} >
                Team Morale and Motivation:
              </Text>
              <UnorderedList fontSize={isMobile ? 10 : 18}>
                <ListItem>
                  Insight: Despite the challenges, the team continues to work
                  towards solutions, suggesting a level of resilience and
                  motivation.
                </ListItem>
              </UnorderedList>
              <UnorderedList fontSize={isMobile ? 10 : 18}>
                <ListItem>
                  Takeaway: Leadership support and recognition can bolster team
                  morale during tough times.
                </ListItem>
              </UnorderedList>

              <Text fontWeight={"600"} fontSize={isMobile ? 10 : 18}>
                Stress and Burnout:
              </Text>
              <UnorderedList  fontSize={isMobile ? 10 : 18}>
                <ListItem>
                  Insight: The prolonged nature of the crisis likely led to
                  increased stress levels, though specific measures to address
                  burnout aren't explicitly mentioned.
                </ListItem>
              </UnorderedList >
              <UnorderedList fontSize={isMobile ? 10 : 18}>
                <ListItem>
                  Takeaway: Proactive measures to address team well-being can
                  prevent burnout and ensure sustained productivity.
                </ListItem>
              </UnorderedList>
            </VStack>

            <VStack alignItems={"left"}>
              <Text fontWeight={"600"} fontSize={isMobile ? 10 : 18} mt={10}>
                7. Vendor and Partner Relationships:
              </Text>
              <Text fontWeight={"600"} fontSize={isMobile ? 10 : 18}>
                Accountability:
              </Text>
              <UnorderedList fontSize={isMobile ? 10 : 18}>
                <ListItem>
                  Insight: The storage vendor is held accountable, and
                  compensation is provided, highlighting the importance of
                  vendor accountability.
                </ListItem>
              </UnorderedList>
              <UnorderedList fontSize={isMobile ? 10 : 18}>
                <ListItem>
                  Takeaway: Strong vendor agreements with accountability clauses
                  can protect organizational interests.
                </ListItem>
              </UnorderedList>

              <Text fontWeight={"600"} fontSize={isMobile ? 10 : 18}>
                Collaboration:
              </Text>
              <UnorderedList fontSize={isMobile ? 10 : 18}>
                <ListItem>
                  Insight: Despite challenges, there's collaboration between
                  the internal team and the storage vendor, suggesting a
                  partnership approach.
                </ListItem>
              </UnorderedList>
              <UnorderedList fontSize={isMobile ? 10 : 18}>
                <ListItem>
                  Takeaway: Collaboration, even during challenging times, can
                  foster better solutions and mutual growth.
                </ListItem>
              </UnorderedList>
            </VStack>
            <Button
              colorScheme="blue"
              size={isMobile && "sm"}
              fontSize={isMobile && 10}
              mr={isMobile ? 0 : 3}
              onClick={onClose}
              p={2}
              ml={isMobile ? "300px": '750px'}
            >
              Close
            </Button>
          </ModalBody>

          
        </ModalContent>
      </Modal>
    </>
  );
};

export default FinalThoughts;
