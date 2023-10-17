import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  Alert, AlertDescription, AlertIcon, AlertTitle,
  CloseButton, useDisclosure
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { Form } from "react-router-dom";
import MyContext from "./ContextApi/MyContext";


const Drform = () => {

  const {enableBox} = useContext(MyContext);
  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure()


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");
    enableBox();
    onOpen();
  };

  return (
    <Box
      p={20}
      w={"60%"}
      m={"auto"}
      mt={20}
      boxShadow={"#691212 0px 0px 0px 1px, #691212 0px 0px 0px 1px inset"}
      bgColor={"gray.300"}
    >
      <Text mb={5} fontFamily={"Fredoka"} fontSize={20} fontWeight={"500"}>
        Based on the technical issues and preventive/corrective actions you
        chose; can you complete a Disaster Recovery Plan for the organization?
        Use the following template if necessary or you can design your own.
      </Text>
      <Text mb={20} fontFamily={"Fredoka"} fontSize={25} fontWeight={"700"}>
        Please fill the form.
      </Text>
      <form onSubmit={handleSubmit}>
        <FormLabel fontWeight={"700"}>1. Executive Summary</FormLabel>
        <FormLabel>Purpose of the DR Plan:</FormLabel>
        <Input type="text" border={"1px solid black"} />

        <FormLabel mt={10} fontWeight={"700"}>
          2. Risk Assessment & System Vulnerabilities
        </FormLabel>
        <FormLabel>Potential Disasters:</FormLabel>
        <Input type="text" border={"1px solid black"}/>
        <FormLabel>Action:</FormLabel>
        <Input type="text" border={"1px solid black"}/>

        <FormLabel mt={10} fontWeight={"700"}>
          3. Data Protection & Integrity
        </FormLabel>
        <FormLabel>Protection Measures:</FormLabel>
        <Input type="text" border={"1px solid black"}/>
        <FormLabel>Action:</FormLabel>
        <Input type="text" border={"1px solid black"}/>

        <FormLabel mt={10} fontWeight={"700"}>
          4. Infrastructure & Failures
        </FormLabel>
        <FormLabel>Monitoring Tools:</FormLabel>
        <Input type="text" border={"1px solid black"}/>
        <FormLabel>Action:</FormLabel>
        <Input type="text" border={"1px solid black"}/>

        <FormLabel mt={10} fontWeight={"700"}>
          5. Backup Strategy & Failures
        </FormLabel>
        <FormLabel>Backup Methods:</FormLabel>
        <Input type="text" border={"1px solid black"}/>
        <FormLabel>Action:</FormLabel>
        <Input type="text" border={"1px solid black"}/>

        <FormLabel mt={10} fontWeight={"700"}>
          6. Communication Strategy & Breakdowns
        </FormLabel>
        <FormLabel>Channels:</FormLabel>
        <Input type="text" border={"1px solid black"}/>
        <FormLabel>Action:</FormLabel>
        <Input type="text" border={"1px solid black"}/>

        <FormLabel mt={10} fontWeight={"700"}>
          7. Redundancy Strategy
        </FormLabel>
        <FormLabel>Failover Systems:</FormLabel>
        <Input type="text" border={"1px solid black"}/>
        <FormLabel>Action:</FormLabel>
        <Input type="text" border={"1px solid black"}/>

        <FormLabel mt={10} fontWeight={"700"}>
          8. Training and Awareness
        </FormLabel>
        <FormLabel>Training Modules for the Team:</FormLabel>
        <Input type="text" border={"1px solid black"}/>
        <FormLabel>Action:</FormLabel>
        <Input type="text" border={"1px solid black"}/>

        <FormLabel mt={10} fontWeight={"700"}>
          9. Testing and Drills
        </FormLabel>
        <FormLabel>Frequency of DR Tests:</FormLabel>
        <Input type="text" border={"1px solid black"}/>
        <FormLabel>Simulated Disaster Scenarios:</FormLabel>
        <Input type="text" border={"1px solid black"}/>

        <FormLabel mt={10} fontWeight={"700"}>
          10. Maintenance & Review
        </FormLabel>
        <FormLabel>Review Schedule:</FormLabel>
        <Input type="text" border={"1px solid black"}/>
        <FormLabel>Action:</FormLabel>
        <Input type="text" border={"1px solid black"}/>

        <FormLabel mt={10} fontWeight={"700"}>
          11. Vendor Details & Dependencies
        </FormLabel>
        <FormLabel>Third-party DR Solutions:</FormLabel>
        <Input type="text" border={"1px solid black"}/>
        <FormLabel>Action:</FormLabel>
        <Input type="text" border={"1px solid black"}/>

        <FormLabel mt={10} fontWeight={"700"}>
          12. Appendices
        </FormLabel>
        <FormLabel>Additional Notes:</FormLabel>
        <Input type="text" border={"1px solid black"}/>

        <Input
          mt={10}
          bg="#691212"
          color={"white"}
          fontSize={20}
          fontFamily={"Fredoka"}
          fontWeight={500}
          cursor={"pointer"}
          type="submit"
          value={"Submit"}
        />
      </form>
      {isVisible && <Alert status='success'>
        <AlertIcon />
        <Box>
          <AlertTitle>Success!</AlertTitle>
          <AlertDescription>
            Your feedback has been received. Now you can click on the Debrief Section if you want to see debrief..
          </AlertDescription>
        </Box>
        <CloseButton
          alignSelf='flex-start'
          position='relative'
          right={-1}
          top={-1}
          onClick={onClose}
        />
      </Alert>}
      
    </Box>
  );
};

export default Drform;
