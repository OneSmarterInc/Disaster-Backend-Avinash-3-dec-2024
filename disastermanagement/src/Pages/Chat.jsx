import { Box, Flex, Radio, Text } from '@chakra-ui/react'
import React from 'react'

const Chat = () => {
    return (
        <Box fontFamily={"Fredoka"} border={"1px solid black"} w={"80%"} m={"auto"} h={"100%"} mt={10} >
            <Flex h={"100%"}>
                <Box h={"100%"} w={"17%"} borderRight={"1px solid black"}>
                    <Box bgColor="#f7fadc" pt={5} pb={2} borderBottom={"1px solid black"}>
                        <Text fontWeight={500} fontSize={30}>Day 1</Text>
                        <Box h={"35px"} w={"44px"} bgColor={"gray.200"} m={"auto"} mt={"50px"} border={"1px solid black"} borderRadius={"50%"} ></Box>
                        <Text fontSize={20} mt={1}>CIO</Text>
                    </Box>
                    <Box bgColor={"#fafaf5"} pt={7} borderBottom={"1px solid black"} pb={5}>
                        <Box h={"35px"} w={"44px"} bgColor={"gray.200"} m={"auto"} border={"1px solid black"} borderRadius={"50%"} ></Box>
                        <Text fontSize={20} mt={1}>Texh Expert</Text>
                    </Box>
                    <Box bgColor="#f7fadc" pt={10} pb={5}>
                        <Box h={"35px"} w={"44px"} bgColor={"gray.200"} m={"auto"} border={"1px solid black"} borderRadius={"50%"} ></Box>
                        <Text mb={5} fontSize={20} mt={1}>Storage Vendor</Text>
                        <Box h={"35px"} w={"44px"} bgColor={"gray.200"} m={"auto"} border={"1px solid black"} borderRadius={"50%"} ></Box>
                        <Text mb={5} fontSize={20} mt={1}>Data Center</Text>
                        <Box h={"35px"} w={"44px"} bgColor={"gray.200"} m={"auto"} border={"1px solid black"} borderRadius={"50%"} ></Box>
                        <Text fontSize={20} mt={1}>Company Distribution</Text>
                    </Box>
                </Box>
                <Box pt={5} pb={2} h={"100%"} w={"83%"}>
                    <Box border={"1px solid black"} bgColor={"#f7fadc"} borderRadius={"20px"} m={"auto"} textAlign={"left"} w={"90%"} pl={3} pt={3} pb={3}>
                        <Text fontSize={"20"}>It was a typical February Monday night, and the CIO is just about to leave the office.
                            when he received a call inviting him to a conference call concern a problem at the data center.
                        </Text>
                    </Box>
                    <Box w={"90%"} h={"65vh"} border="0px solid red" m={"auto"} pl={5} pr={5}>
                        <Flex justifyContent={"space-between"}>
                            <Box w={"45%"}>

                                <Box boxShadow={"rgba(0, 0, 0, 0.45) 0px 25px 20px -20px"} border={"1px solid black"} w={"100%"} borderRadius={"20px"} textAlign={"justify"} p={2} mt={10}>
                                    <Text>Hey, CIO, before you head out, we've got a situation here. I need you on a conference call right now regarding a problem at the data center.
                                    </Text>
                                </Box>
                                <Box border={"1px solid black"} w={"7%"} borderRadius={"20px"} textAlign={"justify"} p={2} mt={1} ></Box>
                            </Box>

                            <Box w={"45%"} >

                            <Flex flexDirection={"column"} mt={"90px"} w={"100%"} border={"0px solid red"}>

                                <Box  border={"1px solid black"} w={"100%"} borderRadius={"20px"} textAlign={"justify"} p={2} mt={10} >
                                    <Text>Oh, what's going on?</Text>
                                </Box>
                                <Box  alignSelf={"flex-end"} border={"1px solid black"} w={"7%"} borderRadius={"18px"} textAlign={"justify"} p={2} mt={1} ></Box>
                            </Flex>
                            </Box>

                        </Flex>

                    </Box>

                </Box>
            </Flex>
        </Box>
    )
}

export default Chat