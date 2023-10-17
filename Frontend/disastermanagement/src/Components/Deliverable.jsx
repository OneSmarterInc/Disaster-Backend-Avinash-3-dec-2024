import { Box, Divider, Text } from "@chakra-ui/react";
import React from "react";
import Drform from "./Drform";
import Cookies from "js-cookie";

const Deliverable = () => {
  let day1morning1 = Cookies.get("day1morning1") || "No feedback provided";
  let day1morning2 = Cookies.get("day1morning2") || "No feedback provided";

  let day1evening1 = Cookies.get("day1evening1") || "No feedback provided";
  let day1evening2 = Cookies.get("day1evening2") || "No feedback provided";

  let day2earlymorning1 =
    Cookies.get("day2earlymorning1") || "No feedback provided";
  let day2earlymorning2 = Cookies.get("day2earlymorning2") || "No feedback provided";

  let day2latemorning1 =
    Cookies.get("day2latemorning1") || "No feedback provided";
  let day2latemorning2 = Cookies.get("day2latemorning2") || "No feedback provided";

  let day3morning1 = Cookies.get("day3morning1") || "No feedback provided";
  let day3morning2 = Cookies.get("day3morning2") || "No feedback provided";

  let day4earlymorning1 = Cookies.get("day4earlymorning1") || "No feedback provided";
  let day4earlymorning2 = Cookies.get("day4earlymorning2") || "No feedback provided";

  let day5morning1 = Cookies.get("day5morning1") || "No feedback provided";
  let day5morning2 = Cookies.get("day5morning2") || "No feedback provided";

  return (
    <>
      <Box
        fontFamily={"Fredoka"}
        textAlign={"left"}
        w={"80%"}
        m={"auto"}
        border={"0px solid black"}
        mt={10}
      >
        <Text fontSize={25} fontWeight={"700"}>
          Your Feedback ...
        </Text>
        {/* Day 1 Morning  */}
        <Text mt={5} fontSize={20} fontWeight={"700"}>
          Day 1 Morning
        </Text>

        <Text mt={5} fontSize={20} fontWeight={"500"}>
          Question no.1 : Which of the following traits do you believe Ben
          Carter exhibited most dominantly?
        </Text>
        <Text>Your Answer : {day1morning1}</Text>

        <Text mt={3} fontSize={20} fontWeight={"500"}>
          Question no.2 : Which trade of the customer representative do you feel
          has stood out during your latest interaction?
        </Text>
        <Text>Your Answer : {day1morning2}</Text>
        <Divider borderBottomWidth="4px" mt={2} borderColor={"black"} />
        {/* Day 1 Morning  */}

        {/* Day 1 Evening  */}
        <Text mt={5} fontSize={20} fontWeight={"700"}>
          Day 1 Evening
        </Text>

        <Text mt={5} fontSize={20} fontWeight={"500"}>
          Question no.1 : Which of the following traits do you believe Ben
          Carter exhibited most dominantly?
        </Text>
        <Text>Your Answer : {day1evening1}</Text>

        <Text mt={3} fontSize={20} fontWeight={"500"}>
          Question no.2 : Which trade of the customer representative do you feel
          has stood out during your latest interaction?
        </Text>
        <Text>Your Answer : {day1evening2}</Text>
        <Divider borderBottomWidth="4px" mt={2} borderColor={"black"} />

        {/* Day 1 Evening  */}

        {/* Day 2 earlymorning  */}
        <Text mt={5} fontSize={20} fontWeight={"700"}>
          Day 2 Early Morning
        </Text>

        <Text mt={5} fontSize={20} fontWeight={"500"}>
          Question no.1 : Which of the following traits do you believe Ben
          Carter exhibited most dominantly?
        </Text>
        <Text>Your Answer : {day2earlymorning1}</Text>

        <Text mt={3} fontSize={20} fontWeight={"500"}>
          Question no.2 : Which trade of the customer representative do you feel
          has stood out during your latest interaction?
        </Text>
        <Text>Your Answer : {day2earlymorning2}</Text>
        <Divider borderBottomWidth="4px" mt={2} borderColor={"black"} />

        {/*Day 2 earlymorning */}

        {/* Day 2 latemorning  */}
        <Text mt={5} fontSize={20} fontWeight={"700"}>
          Day 2 late Morning
        </Text>

        <Text mt={5} fontSize={20} fontWeight={"500"}>
          Question no.1 : Which of the following traits do you believe Ben
          Carter exhibited most dominantly?
        </Text>
        <Text>Your Answer : {day2latemorning1}</Text>

        <Text mt={3} fontSize={20} fontWeight={"500"}>
          Question no.2 : Which trade of the customer representative do you feel
          has stood out during your latest interaction?
        </Text>
        <Text>Your Answer : {day2latemorning2}</Text>
        <Divider borderBottomWidth="4px" mt={2} borderColor={"black"} />

        {/* Day 2 latemorning  */}


         {/* Day 3 morning  */}
         <Text mt={5} fontSize={20} fontWeight={"700"}>
          Day 3 Morning
        </Text>

        <Text mt={5} fontSize={20} fontWeight={"500"}>
          Question no.1 : Which of the following traits do you believe Ben
          Carter exhibited most dominantly?
        </Text>
        <Text>Your Answer : {day3morning1}</Text>

        <Text mt={3} fontSize={20} fontWeight={"500"}>
          Question no.2 : Which trade of the customer representative do you feel
          has stood out during your latest interaction?
        </Text>
        <Text>Your Answer : {day3morning2}</Text>
        <Divider borderBottomWidth="4px" mt={2} borderColor={"black"} />

        {/* Day 3 morning  */}

        {/* Day 4 earlymorning  */}
        <Text mt={5} fontSize={20} fontWeight={"700"}>
          Day 4 Early Morning
        </Text>

        <Text mt={5} fontSize={20} fontWeight={"500"}>
          Question no.1 : Which of the following traits do you believe Ben
          Carter exhibited most dominantly?
        </Text>
        <Text>Your Answer : {day4earlymorning1}</Text>

        <Text mt={3} fontSize={20} fontWeight={"500"}>
          Question no.2 : Which trade of the customer representative do you feel
          has stood out during your latest interaction?
        </Text>
        <Text>Your Answer : {day4earlymorning2}</Text>
        <Divider borderBottomWidth="4px" mt={2} borderColor={"black"} />

        {/* Day 4 earlymorning  */}


        {/* Day 5 morning  */}
        <Text mt={5} fontSize={20} fontWeight={"700"}>
          Day 5 Morning
        </Text>

        <Text mt={5} fontSize={20} fontWeight={"500"}>
          Question no.1 : Which of the following traits do you believe Ben
          Carter exhibited most dominantly?
        </Text>
        <Text>Your Answer : {day5morning1}</Text>

        <Text mt={3} fontSize={20} fontWeight={"500"}>
          Question no.2 : Which trade of the customer representative do you feel
          has stood out during your latest interaction?
        </Text>
        <Text>Your Answer : {day5morning2}</Text>
        <Divider borderBottomWidth="4px" mt={2} borderColor={"black"} />

        {/* Day 5 morning  */}
      </Box>
      <Drform />
    </>
  );
};

export default Deliverable;
