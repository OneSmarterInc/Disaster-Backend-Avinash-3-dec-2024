import React from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import HumanTiles from "./HumanTiles";
import { ORGDATA } from "./data";
import { Box } from "@chakra-ui/react";

const data = ORGDATA;

function traverse(obj, firstRecursion = false) {
  if (obj?.child?.length === 0) {
    return firstRecursion ? (
      <></>
    ) : (
      <TreeNode
        label={
          <HumanTiles
            data={{
              name: obj.name,
              designation: obj.role,
              url: obj.img
            }}
          />
        }
      />
    );
  }
  let childNodes = obj?.child?.map((child) => traverse(child));
  return firstRecursion ? (
    [childNodes]
  ) : (
    <TreeNode
      label={
        <HumanTiles
          data={{
            name: obj.name,
            designation: obj.role,
            url: obj.img
          }}
        />
      }
    >
      {childNodes}
    </TreeNode>
  );
}

const StyledTreeExample = () => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    width="100%"
    overflowX="auto"
    padding="20px"
  >
    <Tree
      lineWidth={"2px"}
      lineColor={"#0070D2"}
      lineBorderRadius={"10px"}
      label={
        <HumanTiles
          data={{ name: data.name, designation: data.role, url: data.img }}
        />
      }
    >
      {traverse(data, true)}
    </Tree>
  </Box>
);

export default StyledTreeExample;
