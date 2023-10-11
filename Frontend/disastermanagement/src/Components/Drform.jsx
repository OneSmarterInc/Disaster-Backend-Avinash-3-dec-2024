import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Form } from "react-router-dom";

const Drform = () => {
  return (
    <Box p={20} w={"60%"} m={"auto"} mt={20} boxShadow={"#691212 0px 0px 0px 1px, #691212 0px 0px 0px 1px inset"}>
      <Text mb={20} fontFamily={"Fredoka"} fontSize={25} fontWeight={"700"}>Please fill the form.</Text>
      <FormControl>
        <FormLabel fontWeight={"700"}>1. Executive Summary</FormLabel>
        <FormLabel>Purpose of the DR Plan:</FormLabel>
        <Input type="text" />

        <FormLabel mt={10} fontWeight={"700"}>
          2. Risk Assessment & System Vulnerabilities
        </FormLabel>
        <FormLabel>Potential Disasters:</FormLabel>
        <Input type="text" />
        <FormLabel>Action:</FormLabel>
        <Input type="text" />

        <FormLabel mt={10} fontWeight={"700"}>3. Data Protection & Integrity</FormLabel>
        <FormLabel>Protection Measures:</FormLabel>
        <Input type="text" />
        <FormLabel>Action:</FormLabel>
        <Input type="text" />

        <FormLabel mt={10} fontWeight={"700"}>4. Infrastructure & Failures</FormLabel>
        <FormLabel>Monitoring Tools:</FormLabel>
        <Input type="text" />
        <FormLabel>Action:</FormLabel>
        <Input type="text" />

        <FormLabel mt={10} fontWeight={"700"}>5. Backup Strategy & Failures</FormLabel>
        <FormLabel>Backup Methods:</FormLabel>
        <Input type="text" />
        <FormLabel>Action:</FormLabel>
        <Input type="text" />

        <FormLabel mt={10} fontWeight={"700"}>6. Communication Strategy & Breakdowns</FormLabel>
        <FormLabel>Channels:</FormLabel>
        <Input type="text" />
        <FormLabel>Action:</FormLabel>
        <Input type="text" />

        <FormLabel mt={10} fontWeight={"700"}>7. Redundancy Strategy</FormLabel>
        <FormLabel>Failover Systems:</FormLabel>
        <Input type="text" />
        <FormLabel>Action:</FormLabel>
        <Input type="text" />

        <FormLabel mt={10} fontWeight={"700"}>8. Training and Awareness</FormLabel>
        <FormLabel>Training Modules for the Team:</FormLabel>
        <Input type="text" />
        <FormLabel>Action:</FormLabel>
        <Input type="text" />

        <FormLabel mt={10} fontWeight={"700"}>9. Testing and Drills</FormLabel>
        <FormLabel>Frequency of DR Tests:</FormLabel>
        <Input type="text" />
        <FormLabel>Simulated Disaster Scenarios:</FormLabel>
        <Input type="text" />

        <FormLabel mt={10} fontWeight={"700"}>10. Maintenance & Review</FormLabel>
        <FormLabel>Review Schedule:</FormLabel>
        <Input type="text" />
        <FormLabel>Action:</FormLabel>
        <Input type="text" />

        <FormLabel mt={10} fontWeight={"700"}>11. Vendor Details & Dependencies</FormLabel>
        <FormLabel>Third-party DR Solutions:</FormLabel>
        <Input type="text" />
        <FormLabel>Action:</FormLabel>
        <Input type="text" />

        <FormLabel mt={10} fontWeight={"700"}>12. Appendices</FormLabel>
        <FormLabel>Additional Notes:</FormLabel>
        <Input type="text" />

        <Input mt={20} bg="#691212" color={"white"} fontSize={20} fontFamily={"Fredoka"} fontWeight={500} cursor={"pointer"} type="submit" value={"Submit"} />
      </FormControl>
    </Box>
  );
};

export default Drform;
