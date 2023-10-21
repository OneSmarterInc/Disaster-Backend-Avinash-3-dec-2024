import React, { useContext, useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "../Components/Sidebar";
import MyContext from "../Components/ContextApi/MyContext";
import { MdNotStarted } from "react-icons/md";
import { BsPauseCircleFill } from "react-icons/bs";
import site1 from "../Images/2.jpg";
import site2 from "../Images/1.jpg";
import site from "../Images/site.jpeg";

const Start = () => {
  const { head, pauseBtn, setPauseBtn } = useContext(MyContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);

  const handlePause = () => {
    setPauseBtn(!pauseBtn);
  };

  const {
    isOpen: isImagesModalOpen,
    onOpen: onImagesModalOpen,
    onClose: onImagesModalClose,
  } = useDisclosure();
  const {
    isOpen: isMailsModalOpen,
    onOpen: onMailsModalOpen,
    onClose: onMailsModalClose,
  } = useDisclosure();

  const handleDropdownClick = (section) => {
    setShowDropdown(false);
    setSelectedSection(section);

    if (section === "Images") {
      onImagesModalOpen();
    } else if (section === "Mails") {
      onMailsModalOpen();
    }
  };

  return (
    <Box h={"88vh"}>
      <Flex
        bgColor="#691212"
        justifyContent={"space-between"}
        alignItems={"center"}
        w={"100%"}
        m={"auto"}
        border={"1px solid black"}
        h={"20"}
        pl={5}
        pr={5}
        color={"white"}
      >
        <Heading fontFamily={"Fredoka"}>Leading Through Disruption</Heading>
        <Heading mr={80} size={"md"} fontFamily={"Fredoka"}>
          {head}
        </Heading>
        <Text
          color={"black"}
          cursor={"pointer"}
          fontSize={45}
          onClick={handlePause}
        >
          {pauseBtn ? (
            <MdNotStarted color="black" />
          ) : (
            <BsPauseCircleFill color="black" />
          )}
        </Text>
        

        {/* <Text cursor={"pointer"} fontSize={35} onClick={handlePause}>{pauseBtn ? <MdNotStarted /> : <BsPauseCircleFill />}</Text> */}
        <div
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
          style={{ position: "relative" }}
        >
          <GiHamburgerMenu size={"30px"} cursor={"pointer"} />
          {showDropdown && (
            <div
              style={{
                position: "absolute",
                top: "100%",
                right: 0,
                width: "150px",
                backgroundColor: "white",
                border: "1px solid #ddd",
                zIndex: 1,
                borderRadius: 5,
              }}
            >
              <div
                onClick={() => handleDropdownClick("Images")}
                style={{
                  cursor: "pointer",
                  padding: "10px",
                  color: "black",
                  border: "1px solid grey",
                  padding: "5px",
                  margin: "5px",
                }}
              >
                Diagrams
              </div>
              <div
                onClick={() => handleDropdownClick("Mails")}
                style={{
                  cursor: "pointer",
                  padding: "10px",
                  color: "black",
                  border: "1px solid grey",
                  marginTop: "3px",
                  padding: "5px",
                  margin: "5px",
                }}
              >
                All Emails
              </div>
            </div>
          )}
        </div>
      </Flex>
      {/* ... Rest of your code ... */}

      <Box
        fontFamily={"Fredoka"}
        border={"1px solid black"}
        w={"100%"}
        m={"auto"}
        h={"100%"}
      >
        <Sidebar />
      </Box>

      {/* Chakra UI Modals for Images and Mails sections */}
      <Modal isOpen={isImagesModalOpen} onClose={onImagesModalClose} isCentered>
        <ModalOverlay />
        <ModalContent maxW={"600px"}>
          <ModalHeader>Images</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src={site1} />
            <Image src={site} />
            {/* You can add more content here */}
          </ModalBody>
        </ModalContent>
      </Modal>

      <Modal isOpen={isMailsModalOpen} onClose={onMailsModalClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Inbox</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box border={"1px solid grey"} p={2}>
              <Text> Minor issues at the data center.</Text>
            </Box>
            <Box border={"1px solid grey"} mt={5} p={2}>
              <Text fontWeight={"bold"}>Accross the company</Text>
              <Text>
                {" "}
                The crisis is officially over, and everyone can return to normal
                operations.
              </Text>
            </Box>
            <Box border={"1px solid grey"} mt={5} p={2}>
              <Text fontWeight={"bold"}>Announcement</Text>
              <Text>
                {" "}
                To all our valued team members and stakeholders, we are pleased
                to inform you that the recent IT crisis has been fully resolved.
                We appreciate your patience, support, and understanding during
                this challenging period. Thanks to the concerted efforts of our
                IT teams and partners, our systems are now fully operational. We
                remain committed to serving you with excellence and ensuring
                such disruptions are mitigated in the future.
              </Text>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Start;
