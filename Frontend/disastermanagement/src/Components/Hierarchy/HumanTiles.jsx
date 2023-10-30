import { Box, Avatar, Text } from "@chakra-ui/react";

const HumanTiles = ({ data }) => {
  return (
    <Box
      borderRadius="8px"
      bg="#948888"
      display="inline-block"
      p={2}
      // width="100%" // Make the tile 100% width on smaller screens
      textAlign="center" // Center-align the content
      minH={'auto'}
    >
      <Avatar src={data.url} boxSize={12} borderRadius="50%" /> {/* Decrease the size of the Avatar */}
      <Box textAlign="center">
        <Text fontWeight="600" fontSize="14px"> {/* Increase the font size for better readability */}
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
