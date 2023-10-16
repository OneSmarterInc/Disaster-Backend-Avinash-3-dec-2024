import { Box, Button, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const Payment = () => {
  return (
    <>
      <Navbar />
      <Box
        w={['90%', '80%', '60%', '40%']} 
        m="auto"
        h="auto"
        border="1px solid grey"
        boxShadow="lg"
        borderRadius="lg"
        mt={['80px', '120px', '150px', '180px']}
        pt={10}
        pb={4}
        px={4}
        textAlign="center"
      >
        <Text fontSize={['20px', '25px']} mb={4}>
          Make Payment of $24
        </Text>
        <Button
          bgColor="#346e98"
          color="white"
          _hover={{ bgColor: 'grey', color: 'black' }}
          w="25%"
          as={Link}
          to="/lobby"
        >
          Pay
        </Button>
      </Box>
    </>
  );
};

export default Payment;
