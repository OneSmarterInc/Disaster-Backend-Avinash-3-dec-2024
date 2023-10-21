import { Box, Divider, Text } from '@chakra-ui/react'
import React, { useContext, useEffect } from 'react'
import MyContext from '../Components/ContextApi/MyContext'

const Prepare = () => {

    const {setShowCloseBtn} = useContext(MyContext);

    useEffect(()=>{
        setShowCloseBtn(false);
    })
    return (
        <Box textAlign={"left"} w={"80%"} m={"auto"} border={"0px solid red"} bg={"gray.100"}>
            <Text mt={10} mb={2} fontSize={30}>Prepare</Text>
            <Divider border={"2px solid black"}/>
            <Text mt={10} textAlign={"justify"} fontSize={20}>You are Jill Bradley, the chief technology officer (CTO) for OnlineRetailCo (ORC). This makes you the top IT executive at the company. You have been in your position for just six months.

                ORC is a publicly traded online retailer that has grown rapidly in recent years and is now modestly profitable. In the last few months, the company has embarked on an effort to mature and professionalize its operations, to move beyond startup mode.

                ORC is based in Seattle, Washington, and is in the pacific time zone.

                On this particular day, you are in New York City to meet with Wall Street analysts to update them on ORC’s operational plans. The CEO has chosen you to make this trip to project operational and technical professionalism, and to portray ORC as a mature tech firm with state-of-the-art IT systems. You were delighted and honored to be chosen for this assignment.

                It is 8:23 a.m. in New York, and you are having breakfast in the hotel cafe. It is 5:23 a.m. in Seattle, so you are surprised to see an incoming call from one of your direct reports.</Text>
        </Box>
    )
}

export default Prepare