import { Box, Divider, Image, Text } from '@chakra-ui/react'
import React, { useContext, useEffect } from 'react'
import MyContext from '../Components/ContextApi/MyContext'
import map3 from "../Images/map3.png"

const Prepare = () => {

    const {setShowCloseBtn} = useContext(MyContext);

    useEffect(()=>{
        setShowCloseBtn(false);
    })
   
  return (
   
    <Box
      textAlign={"left"}
      w={"80%"}
      m={"auto"}
      border={"0px solid red"}
      bg={"gray.100"}
    >
      <Text mt={10} mb={2} fontSize={30}>
        Setting the Stage:
      </Text>
      <Divider border={"2px solid black"} />
      <ul>
        
          <Text mt={10} textAlign={"justify"} fontSize={20}>
            Welcome to the world of Ben Carter, Chief Information Officer (CIO) for
            OrionTech Corp (OTC). With two years at OTC, Ben’s influence stretches
            far beyond tech solutions – he's been instrumental in building bridges
            with stakeholders and ensuring transparent communication throughout the
            company.
          </Text>
        
          <Text mt={10} textAlign={"justify"} fontSize={20}>
            OrionTech in Columbus, Ohio, isn't just
            recognized for its technological prowess; its strength lies in
            relationships. With stakeholders ranging from internal teams and
            shareholders to global partners and customers, OTC’s success hinges on
            effective communication and mutual trust.
          </Text>
          <Text mt={4} textAlign={"justify"} fontSize={20}>
          OTC is a global technological leader with clients, development centers and a presence the world over.  
          </Text>
          <Image margin={"auto"}  src={map3} />
        
        
          <Text mt={10} textAlign={"justify"} fontSize={20}>
            Today, as Ben is wrapping up and contemplating a peaceful evening, his
            plans are interrupted. It's 5:47 p.m., and a message suggests that a
            storm might be brewing.
          </Text>
       
       
          <Text mt={10} textAlign={"justify"} fontSize={20} fontWeight={"bold"}>
            Your Role :
          </Text>
        
        <li>
          <Text mt={5} textAlign={"justify"} fontSize={20}>
            In this simulation, you'll experience leadership in its truest form.
            Beyond the technical challenges that unfold, you'll navigate the
            intricate web of stakeholder relationships. How do you keep
            communication channels open? How do you manage expectations, reassure
            partners, and maintain OTC's hard-earned reputation?
          </Text>
        </li>
        <li>
          <Text mt={10} textAlign={"justify"} fontSize={20}>
            Remember, this isn’t just about fixing a glitch; it's about managing
            perceptions, ensuring clarity, and upholding trust. Your decisions will
            not only shape the immediate response but also influence long-term
            relationships and OTC's standing in the industry.{" "}
          </Text>
        </li>
        
          <Text mt={10} textAlign={"justify"} fontSize={20} fontWeight={"bold"}>
            Before We Dive In :
          </Text>
       
        <li>
          <Text mt={5} textAlign={"justify"} fontSize={20}>
            Reflect on the importance of stakeholder relationships. In times of
            crisis, these bonds are both a challenge and a lifeline.{" "}
          </Text>
        </li>
        <li>
          <Text mt={10} textAlign={"justify"} fontSize={20}>
            Prioritize communication. In the digital age, transparency and timely
            updates can make or break trust.
          </Text>
        </li>
        <li>
          <Text mt={10} textAlign={"justify"} fontSize={20}>
            Stay adaptable. While technology can be unpredictable, human
            relationships require consistency and understanding.
          </Text>
        </li>
        <li>
          <Text mt={10} textAlign={"justify"} fontSize={20}>
            Ready to juggle tech troubles with stakeholder sensibilities, ensure
            effective communication, and lead OTC through a challenging scenario?
          </Text>
        </li>
        
          <Text mt={10} mb={10} textAlign={"justify"} fontSize={20} fontWeight={"bold"}>
            Dive deep, and let the journey begin!
          </Text>
        
      </ul>
    </Box>
 
  );
};


export default Prepare;
