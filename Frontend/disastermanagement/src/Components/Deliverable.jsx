import { Box, Divider, Text } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import Drform from "./Drform";
import Cookies from "js-cookie";
import MyContext from "./ContextApi/MyContext";

const Deliverable = () => {
  const isMobile = window.innerWidth <= 600; // Define your mobile breakpoint

  const { setHead, enableDeliverable, setSelectedSection } =
    useContext(MyContext);

  let day1morning1 = Cookies.get("day1morning1") || "No feedback provided";
  let day1morning2 = Cookies.get("day1morning2") || "No feedback provided";

  let day1evening1 = Cookies.get("day1evening1") || "No feedback provided";
  let day1evening2 = Cookies.get("day1evening2") || "No feedback provided";

  let day2earlymorning1 =
    Cookies.get("day2earlymorning1") || "No feedback provided";
  let day2earlymorning2 =
    Cookies.get("day2earlymorning2") || "No feedback provided";

  let day2latemorning1 =
    Cookies.get("day2latemorning1") || "No feedback provided";
  let day2latemorning2 =
    Cookies.get("day2latemorning2") || "No feedback provided";

  let day3morning1 = Cookies.get("day3morning1") || "No feedback provided";
  let day3morning2 = Cookies.get("day3morning2") || "No feedback provided";

  let day4earlymorning1 =
    Cookies.get("day4earlymorning1") || "No feedback provided";
  let day4earlymorning2 =
    Cookies.get("day4earlymorning2") || "No feedback provided";

  let day5morning1 = Cookies.get("day5morning1") || "No feedback provided";
  let day5morning2 = Cookies.get("day5morning2") || "No feedback provided";

  useEffect(() => {
    setHead("");
    enableDeliverable();
    setSelectedSection("deliverable");
  }, []);

  return (
    <>
      <Box
        fontFamily={"Fredoka"}
        textAlign={"left"}
        w={isMobile ? "95%" : "80%"}
        m={"auto"}
        border={"0px solid black"}
        mt={isMobile ? 3 : 10}
        mb={isMobile ? 3 : 10}
      >
        <Box>
          <Text bgColor={"#dae3f2"} pl={2} fontSize={isMobile ? 12 :25} fontWeight={"700"}>
            Your Feedback ...
          </Text>
          {/* Day 1 Morning  */}
          <Text mt={5} fontSize={isMobile ? 12 : 20} fontWeight={"700"}>
            Day 1 Morning
          </Text>

          <Text mt={5} fontSize={isMobile ? 12 : 20} fontWeight={"500"}>
            Question no.1 : Which of the following technical challenges do you
            see as dominant in the scripts which you just saw ?
          </Text>
          <Text fontSize={isMobile && 12 }>Your Answer : {day1morning1}</Text>

          <Text mt={3} fontSize={isMobile ? 12 : 20} fontWeight={"500"}>
            Question no.2 : Which quality of Ben Carter do you feel stands out
            during the last conversation?
          </Text>
          <Text fontSize={isMobile && 12 }>Your Answer : {day1morning2}</Text>
          <Divider borderBottomWidth="4px" mt={2} borderColor={"black"} />
          {/* Day 1 Morning  */}

          {/* Day 1 Evening  */}
          <Text mt={5} fontSize={isMobile ? 12 : 20} fontWeight={"700"}>
            Day 1 Evening
          </Text>

          <Text mt={5} fontSize={isMobile ? 12 : 20} fontWeight={"500"}>
            Question no.1 : Which of the following technical challenges do you
            see as dominant in the scripts which you just saw ?
          </Text>
          <Text fontSize={isMobile && 12 } >Your Answer : {day1evening1}</Text>

          <Text mt={3} fontSize={isMobile ? 12 : 20} fontWeight={"500"}>
            Question no.2 : Which quality of Ben Carter do you feel stands out
            during the last conversation?
          </Text>
          <Text fontSize={isMobile && 12 }>Your Answer : {day1evening2}</Text>
          <Divider borderBottomWidth="4px" mt={2} borderColor={"black"} />

          {/* Day 1 Evening  */}

          {/* Day 2 earlymorning  */}
          <Text mt={5} fontSize={isMobile ? 12 : 20} fontWeight={"700"}>
            Day 2 Early Morning
          </Text>

          <Text mt={5} fontSize={isMobile ? 12 : 20} fontWeight={"500"}>
            Question no.1 : Which of the following technical challenges do you
            see as dominant in the scripts which you just saw ?
          </Text>
          <Text fontSize={isMobile && 12 }>Your Answer : {day2earlymorning1}</Text>

          <Text mt={3} fontSize={isMobile ? 12 : 20} fontWeight={"500"}>
            Question no.2 : Which quality of Ben Carter do you feel stands out
            during the last conversation?
          </Text>
          <Text fontSize={isMobile && 12 }>Your Answer : {day2earlymorning2}</Text>
          <Divider borderBottomWidth="4px" mt={2} borderColor={"black"} />

          {/*Day 2 earlymorning */}

          {/* Day 2 latemorning  */}
          <Text mt={5} fontSize={isMobile ? 12 : 20} fontWeight={"700"}>
            Day 2 late Morning
          </Text>

          <Text mt={5} fontSize={isMobile ? 12 : 20} fontWeight={"500"}>
            Question no.1 : Which of the following technical challenges do you
            see as dominant in the scripts which you just saw ?
          </Text>
          <Text fontSize={isMobile && 12 }>Your Answer : {day2latemorning1}</Text>

          <Text mt={3} fontSize={isMobile ? 12 : 20} fontWeight={"500"}>
            Question no.2 : Which quality of Ben Carter do you feel stands out
            during the last conversation?
          </Text>
          <Text fontSize={isMobile && 12 }>Your Answer : {day2latemorning2}</Text>
          <Divider borderBottomWidth="4px" mt={2} borderColor={"black"} />

          {/* Day 2 latemorning  */}

          {/* Day 3 morning  */}
          <Text mt={5} fontSize={isMobile ? 12 : 20} fontWeight={"700"}>
            Day 3 Morning
          </Text>

          <Text mt={5} fontSize={isMobile ? 12 : 20} fontWeight={"500"}>
            Question no.1 : Which of the following technical challenges do you
            see as dominant in the scripts which you just saw ?
          </Text>
          <Text fontSize={isMobile && 12 }>Your Answer : {day3morning1}</Text>

          <Text mt={3} fontSize={isMobile ? 12 : 20} fontWeight={"500"}>
            Question no.2 : Which quality of Ben Carter do you feel stands out
            during the last conversation?
          </Text>
          <Text fontSize={isMobile && 12 }>Your Answer : {day3morning2}</Text>
          <Divider borderBottomWidth="4px" mt={2} borderColor={"black"} />

          {/* Day 3 morning  */}

          {/* Day 4 earlymorning  */}
          <Text mt={5} fontSize={isMobile ? 12 : 20} fontWeight={"700"}>
            Day 4 Early Morning
          </Text>

          <Text mt={5} fontSize={isMobile ? 12 : 20} fontWeight={"500"}>
            Question no.1 : Which of the following technical challenges do you
            see as dominant in the scripts which you just saw ?
          </Text>
          <Text fontSize={isMobile && 12 }>Your Answer : {day4earlymorning1}</Text>

          <Text mt={3} fontSize={isMobile ? 12 : 20} fontWeight={"500"}>
            Question no.2 : Which quality of Ben Carter do you feel stands out
            during the last conversation?
          </Text>
          <Text fontSize={isMobile && 12 }>Your Answer : {day4earlymorning2}</Text>
          <Divider borderBottomWidth="4px" mt={2} borderColor={"black"} />

          {/* Day 4 earlymorning  */}

          {/* Day 5 morning  */}
          <Text mt={5} fontSize={isMobile ? 12 : 20} fontWeight={"700"}>
            Day 5 Morning
          </Text>

          <Text mt={5} fontSize={isMobile ? 12 : 20} fontWeight={"500"}>
            Question no.1 : Which of the following technical challenges do you
            see as dominant in the scripts which you just saw ?
          </Text>
          <Text fontSize={isMobile && 12 }>Your Answer : {day5morning1}</Text>

          <Text mt={3} fontSize={isMobile ? 12 : 20} fontWeight={"500"}>
            Question no.2 : Which quality of Ben Carter do you feel stands out
            during the last conversation?
          </Text>
          <Text fontSize={isMobile && 12 }>Your Answer : {day5morning2}</Text>
          <Divider borderBottomWidth="4px" mt={2} borderColor={"black"} />

          {/* Day 5 morning  */}
        </Box>

        <Box mt={20}>
          <Text bgColor={"#dae3f2"} pl={2} fontSize={isMobile ? 12 : 25} fontWeight={"700"}>
            Disaster Recovery Plan
          </Text>

          <Text mt={5} fontSize={isMobile ? 12 : 20} fontWeight={"500"}>
            Creating a Disaster Recovery Plan (DRP) is crucial for ensuring
            business continuity in the face of unforeseen adversities such as
            natural disasters, cyber-attacks, or technical failures. A DRP
            outlines a systematic approach to restoring critical systems, data,
            and infrastructure, ensuring minimal disruption to operations. It
            begins with identifying and prioritizing essential business
            functions, followed by an analysis of potential threats and the
            impact they might have. Strategies are then developed to mitigate
            these risks, encompassing data backup, resource management, and
            communication plans. Regular testing and updating of the DRP are
            essential to adapt to changing circumstances and to ensure that the
            organization is well-prepared to respond effectively when disaster
            strikes. Learning how to create a robust DRP equips you with
            invaluable skills for safeguarding business operations against a
            wide range of threats.
          </Text>
          <Divider borderBottomWidth="4px" mt={2} borderColor={"black"} />

        </Box>
      </Box>
      <Drform />
    </>
  );
};

export default Deliverable;
