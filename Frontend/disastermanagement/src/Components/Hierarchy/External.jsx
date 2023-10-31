import React from "react";
import HumanTiles from "./HumanTiles";
import { externalData } from "./data";
import { Flex } from "@chakra-ui/react";

const External = () => {
  return (
    <>
      {/* <Flex direction={"column"} gap={10}>
        {externalData.map((el, i) => {
          return <HumanTiles key={i} data={el} />;
        })}
      </Flex> */}
    </>
  );
};

export default External;
