import { Box, Avatar, Text } from "@chakra-ui/react";

const HumanTiles = ({ data }) => {
  return (
    <Box
      borderRadius="8px"
      bg="white"
      display="inline-block"
      border={"0px solid red"}
      p={2}
    >
      <Box textAlign="center" spacing={2}>
        <Avatar src={data.url} boxSize={20} borderRadius="50%" />
        <Box textAlign="center">
          <Text fontWeight="600">{data.name}</Text>
          <Text color="#475467" fontSize="12px">
            {data.designation}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default HumanTiles;
