import { Box, Avatar, Text } from "@chakra-ui/react";

const HumanTiles = ({ data }) => {
  return (
    <Box
      // borderRadius="8px"
      // bg="#948888"
      // display="inline-block"
      // p={2}
      // textAlign="center" 
      // minH={'auto'}
    >
      <Avatar src={data.url} boxSize={12} borderRadius="50%" />
      <Box textAlign="center">
        <Text fontWeight="600" fontSize="14px"> 
          {data.name}
        </Text>
        <Text color="black" fontSize="12px">
          {data.designation}
        </Text>
      </Box>
    </Box>
  );
};

export default HumanTiles;
