import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Show,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "../Components/Sidebar";
import MyContext from "../Components/ContextApi/MyContext";
import { MdNotStarted } from "react-icons/md";
import { BsPauseCircleFill } from "react-icons/bs";
import site1 from "../Images/2.jpg";
import site2 from "../Images/1.jpg";
import site from "../Images/site.jpg";
import folder from "../Images/folder.jpg";
import figure from "../Images/figmabasics.png";
import figma from "../Images/figmabasic.png";
import figure3 from "../Images/figmabasics3.png";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { AiOutlineClose } from "react-icons/ai";
import {FiMinus} from "react-icons/fi";
import {BiPlus} from "react-icons/bi";
import {MdSpeed} from "react-icons/md"
import "../Pages/Info.css";


const Start = () => {
  const {
    head,
    pauseBtn,
    setPauseBtn,
    showSidebar,
    setShowSideBar,
    showCloseBtn,
    setSpeed,
    speed
  } = useContext(MyContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);

  const isMobile = window.innerWidth <= 600; // Define your mobile breakpoint

  const handleSpeed = (value) => {
   
      setSpeed((pre)=> pre+value);
    
    console.log(speed);
  };

  const handleNormalSpeed = (value)=>{
    setSpeed(value);
  }

  const handleclose = () => {
    setShowSideBar(false);
  };

  const handleopen = () => {
    setShowSideBar(true);
  };

  const handlePause = () => {
    setPauseBtn(!pauseBtn);
    // console.log(head);
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

  useEffect(()=>{
    window.scrollTo(0,0);
  },[])

  return (
    <Box>
      <Flex
        bgColor="#343541"
        justifyContent={"space-between"}
        alignItems={"center"}
        w={"100%"}
        m={"auto"}
        h={isMobile ? 10 : 20} // Adjust the height for mobile view
        pl={4}
        pr={4}
        color={"white"}

        // border={"10px solid white"}
      >
        <Show above="md">
          <Heading fontFamily={"caliber"} size={"lg"}>
            Leading Through Disruption
            <Text fontSize={17} display={"inline"}>
              <sup>&#169;</sup>
            </Text>
          </Heading>
        </Show>

        <Show breakpoint="(max-width : 900px)">
          {showSidebar ? (
            <AiOutlineClose
              onClick={handleclose}
              fontWeight={"bold"}
              fontSize={isMobile ? 15 : 30}
            />
          ) : (
            <HamburgerIcon onClick={handleopen} fontSize={isMobile ? 15 : 30} />
          )}
        </Show>
        <Box width={isMobile ? "40%" : "35%"} border={"0px solid white"}>
          <Heading
            fontSize={isMobile ? 9 : 20}
            fontWeight={"500"}
            fontFamily={"Fredoka"}
          >
            {head}
          </Heading>
        </Box>
        <Text
          cursor={"pointer"}
          fontSize={isMobile ? 20 : 45}
          onClick={handlePause}
        >
          {pauseBtn ? (
            <MdNotStarted color="green" />
          ) : (
            <BsPauseCircleFill color="#db1c50" />
          )}
        </Text>
        <HStack  border={"0px solid white"}>
          <Button size={isMobile ? 2 : "sm"} fontSize={isMobile ? 12 : 20}  _hover={{"bgColor":"white", "color":"black"}} color={"white"} bg={"transparent"} onClick={() => handleSpeed(1000)} isDisabled={speed >8000}>

        <FiMinus  />
          </Button>
  
            <MdSpeed fontSize={isMobile ? 20 : 30}/>
          <Button size={isMobile ? 2 : "sm"} fontSize={isMobile ? 12 :20} _hover={{"bgColor":"white", "color":"black"}} color={"white"} bg={"transparent"}  onClick={() => handleSpeed(-1000)} isDisabled={speed <2000}>
          <BiPlus  />
          </Button>
        </HStack>

        {/* <Text cursor={"pointer"} fontSize={35} onClick={handlePause}>{pauseBtn ? <MdNotStarted /> : <BsPauseCircleFill />}</Text> */}
        <div
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Image
            src={folder}
            w={isMobile ? 5 : 10}
            sizes="30px"
            cursor={"pointer"}
          />
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

      <Box fontFamily={"Fredoka"} w={"100%"} m={"auto"} h={"100%"}>
        <Sidebar />
      </Box>

      {/* Chakra UI Modals for Images and Mails sections */}
      <Modal isOpen={isImagesModalOpen} onClose={onImagesModalClose} isCentered>
        <ModalOverlay />
        <ModalContent maxW={"5xl"}>
          <ModalHeader textAlign={"center"}>Detailed Architecture</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ModalHeader>Data Processing Setup:</ModalHeader>
            <Image src={figma} w={"100%"} />
            <Divider borderBottomWidth="4px" mt={20} borderColor={"black"} />

            <ModalHeader mt={10}>Original Architecture</ModalHeader>
            <Image src={figure3} w={"100%"} />
            <Divider borderBottomWidth="4px" mt={20} borderColor={"black"} />
            <ModalHeader mt={10}>Storage Vendor's Restitution</ModalHeader>
            <Image src={figure} w={"100%"} />

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
      <footer>
            <a
              href="mailto:vikram@vikramsethi.com"
              style={{ textDecoration: "none" }}
            >
              &copy; Vikram Sethi Contact :&nbsp;vikram@vikramsethi.com
            </a>
          </footer>
    </Box>
  );
};

export default Start;
