import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  CloseButton,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Modal,
  ModalFooter,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { Form } from "react-router-dom";
import MyContext from "./ContextApi/MyContext";

const Drform = () => {
  const [executivePurpose, setExecutivePurpose] = useState("");
  const [riskPotential, setRiskPotential] = useState("");
  const [riskAction, setRiskAction] = useState("");
  const [dataProtection, setDataProtection] = useState("");
  const [dataAction, setDataAction] = useState("");
  const [infrastructureMonitoring, setInfrastructureMonitoring] = useState("");
  const [infrastructureAction, setInfrastructureAction] = useState("");
  const [backupMethods, setBackupMethods] = useState("");
  const [backupAction, setBackupAction] = useState("");
  const [communicationChannel, setCommunicationChannel] = useState("");
  const [communicationAction, setCommunicationAction] = useState("");
  const [redundancyFailover, setRedundancyFailover] = useState("");
  const [redundencyAction, setRedundencyAction] = useState("");
  const [trainingModules, setTrainingModules] = useState("");
  const [trainingAction, setTrainingAction] = useState("");
  const [testingFrequency, setTestingFrequency] = useState("");
  const [testingSimulated, setTestingSimulated] = useState("");
  const [maintenanceReview, setMaintenanceReview] = useState("");
  const [maintenanceAction, setMaintenanceAction] = useState("");
  const [vendorThirdParty, setVendorThirdParty] = useState("");
  const [vendorAction, setVendorAction] = useState("");
  const [appendices, setAppendices] = useState("");

  const { enableBox } = useContext(MyContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isOpen: isVisible, onClose, onOpen } = useDisclosure();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");
    enableBox();
    //onOpen();
    setIsModalOpen(true);
  };

  // console.log(executivePurpose);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    onOpen(); // Show the success alert
  };

  return (

      <Box
      p={4} // Padding adjusted for mobile
      w={["90%", "80%", "60%"]} // Responsive width
      m="auto"
      mt={4} // Margin-top adjusted for mobile
      boxShadow={"#691212 0px 0px 0px 1px, #691212 0px 0px 0px 1px inset"}
      bgColor="gray.300" // Background color
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
        <Input
          type="text"
          border={"1px solid black"}
          value={executivePurpose}
          onChange={(e) => setExecutivePurpose(e.target.value)}
        />

        <FormLabel mt={10} fontWeight={"700"}>
          2. Risk Assessment & System Vulnerabilities
        </FormLabel>
        <FormLabel>Potential Disasters:</FormLabel>
        <Input
          type="text"
          border={"1px solid black"}
          value={riskPotential}
          onChange={(e) => setRiskPotential(e.target.value)}
        />
        <FormLabel>Action:</FormLabel>
        <Input
          type="text"
          border={"1px solid black"}
          value={riskAction}
          onChange={(e) => setRiskAction(e.target.value)}
        />

        <FormLabel mt={10} fontWeight={"700"}>
          3. Data Protection & Integrity
        </FormLabel>
        <FormLabel>Protection Measures:</FormLabel>
        <Input
          type="text"
          border={"1px solid black"}
          value={dataProtection}
          onChange={(e) => setDataProtection(e.target.value)}
        />
        <FormLabel>Action:</FormLabel>
        <Input
          type="text"
          border={"1px solid black"}
          value={dataAction}
          onChange={(e) => setDataAction(e.target.value)}
        />

        <FormLabel mt={10} fontWeight={"700"}>
          4. Infrastructure & Failures
        </FormLabel>
        <FormLabel>Monitoring Tools:</FormLabel>
        <Input
          type="text"
          border={"1px solid black"}
          value={infrastructureMonitoring}
          onChange={(e) => setInfrastructureMonitoring(e.target.value)}
        />
        <FormLabel>Action:</FormLabel>
        <Input
          type="text"
          border={"1px solid black"}
          value={infrastructureAction}
          onChange={(e) => setInfrastructureAction(e.target.value)}
        />

        <FormLabel mt={10} fontWeight={"700"}>
          5. Backup Strategy & Failures
        </FormLabel>
        <FormLabel>Backup Methods:</FormLabel>
        <Input
          type="text"
          border={"1px solid black"}
          value={backupMethods}
          onChange={(e) => setBackupMethods(e.target.value)}
        />
        <FormLabel>Action:</FormLabel>
        <Input
          type="text"
          border={"1px solid black"}
          value={backupAction}
          onChange={(e) => setBackupAction(e.target.value)}
        />

        <FormLabel mt={10} fontWeight={"700"}>
          6. Communication Strategy & Breakdowns
        </FormLabel>
        <FormLabel>Channels:</FormLabel>
        <Input
          type="text"
          border={"1px solid black"}
          value={communicationChannel}
          onChange={(e) => setCommunicationChannel(e.target.value)}
        />
        <FormLabel>Action:</FormLabel>
        <Input
          type="text"
          border={"1px solid black"}
          value={communicationAction}
          onChange={(e) => setCommunicationAction(e.target.value)}
        />

        <FormLabel mt={10} fontWeight={"700"}>
          7. Redundancy Strategy
        </FormLabel>
        <FormLabel>Failover Systems:</FormLabel>
        <Input
          type="text"
          border={"1px solid black"}
          value={redundancyFailover}
          onChange={(e) => setRedundancyFailover(e.target.value)}
        />
        <FormLabel>Action:</FormLabel>
        <Input
          type="text"
          border={"1px solid black"}
          value={redundencyAction}
          onChange={(e) => setRedundencyAction(e.target.value)}
        />

        <FormLabel mt={10} fontWeight={"700"}>
          8. Training and Awareness
        </FormLabel>
        <FormLabel>Training Modules for the Team:</FormLabel>
        <Input
          type="text"
          border={"1px solid black"}
          value={trainingModules}
          onChange={(e) => setTrainingModules(e.target.value)}
        />
        <FormLabel>Action:</FormLabel>
        <Input
          type="text"
          border={"1px solid black"}
          value={trainingAction}
          onChange={(e) => setTrainingAction(e.target.value)}
        />

        <FormLabel mt={10} fontWeight={"700"}>
          9. Testing and Drills
        </FormLabel>
        <FormLabel>Frequency of DR Tests:</FormLabel>
        <Input
          type="text"
          border={"1px solid black"}
          value={testingFrequency}
          onChange={(e) => setTestingFrequency(e.target.value)}
        />
        <FormLabel>Simulated Disaster Scenarios:</FormLabel>
        <Input
          type="text"
          border={"1px solid black"}
          value={testingSimulated}
          onChange={(e) => setTestingSimulated(e.target.value)}
        />

        <FormLabel mt={10} fontWeight={"700"}>
          10. Maintenance & Review
        </FormLabel>
        <FormLabel>Review Schedule:</FormLabel>
        <Input
          type="text"
          border={"1px solid black"}
          value={maintenanceReview}
          onChange={(e) => setMaintenanceReview(e.target.value)}
        />
        <FormLabel>Action:</FormLabel>
        <Input
          type="text"
          border={"1px solid black"}
          value={maintenanceAction}
          onChange={(e) => setMaintenanceAction(e.target.value)}
        />

        <FormLabel mt={10} fontWeight={"700"}>
          11. Vendor Details & Dependencies
        </FormLabel>
        <FormLabel>Third-party DR Solutions:</FormLabel>
        <Input
          type="text"
          border={"1px solid black"}
          value={vendorThirdParty}
          onChange={(e) => setVendorThirdParty(e.target.value)}
        />
        <FormLabel>Action:</FormLabel>
        <Input
          type="text"
          border={"1px solid black"}
          value={vendorAction}
          onChange={(e) => setVendorAction(e.target.value)}
        />

        <FormLabel mt={10} fontWeight={"700"}>
          12. Appendices
        </FormLabel>
        <FormLabel>Additional Notes:</FormLabel>
        <Input
          type="text"
          border={"1px solid black"}
          value={appendices}
          onChange={(e) => setAppendices(e.target.value)}
        />

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
      {/* Modal to display form data */}
      {isModalOpen ? (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} >
          <ModalOverlay />
          <ModalContent maxW={'600px'}>
            <ModalHeader><strong>DR Form Data</strong></ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {/* Display form data here */}
              <div>
                <form>
                  <FormLabel fontWeight={"700"}>1. Executive Summary</FormLabel>
                  <FormLabel>
                    <strong>Purpose of the DR Plan:</strong> {executivePurpose}{" "}
                  </FormLabel>

                  <FormLabel mt={10} fontWeight={"700"}>
                    2. Risk Assessment & System Vulnerabilities
                  </FormLabel>
                  <FormLabel>
                    <strong>Potential Disasters:</strong> {riskPotential}
                  </FormLabel>
                  <FormLabel> <strong>Action:</strong> {riskAction} </FormLabel>

                  <FormLabel mt={10} fontWeight={"700"}>
                    3. Data Protection & Integrity
                  </FormLabel>
                  <FormLabel><strong>Protection Measures: {dataProtection}</strong></FormLabel>
                  <FormLabel><strong>Action: {dataAction}</strong></FormLabel>

                  <FormLabel mt={10} fontWeight={"700"}>
                    4. Infrastructure & Failures
                  </FormLabel>
                  <FormLabel><strong>Monitoring Tools: {infrastructureMonitoring}</strong></FormLabel>
                  <FormLabel><strong>Action: {infrastructureAction}</strong></FormLabel>

                  <FormLabel mt={10} fontWeight={"700"}>
                    5. Backup Strategy & Failures
                  </FormLabel>
                  <FormLabel><strong>Backup Methods: {backupMethods}</strong></FormLabel>
                  <FormLabel><strong>Action: {backupAction}</strong></FormLabel>

                  <FormLabel mt={10} fontWeight={"700"}>
                    6. Communication Strategy & Breakdowns
                  </FormLabel>
                  <FormLabel><strong>Channels: {communicationChannel}</strong></FormLabel>
                  <FormLabel><strong>Action: {communicationAction}</strong></FormLabel>

                  <FormLabel mt={10} fontWeight={"700"}>
                    7. Redundancy Strategy
                  </FormLabel>
                  <FormLabel><strong>Failover Systems: {redundancyFailover}</strong></FormLabel>
                  <FormLabel><strong>Action: {redundencyAction}</strong></FormLabel>

                  <FormLabel mt={10} fontWeight={"700"}>
                    8. Training and Awareness
                  </FormLabel>
                  <FormLabel><strong>Training Modules for the Team: {trainingModules}</strong></FormLabel>
                  <FormLabel><strong>Action: {trainingAction}</strong></FormLabel>

                  <FormLabel mt={10} fontWeight={"700"}>
                    9. Testing and Drills
                  </FormLabel>
                  <FormLabel><strong>Frequency of DR Tests: {testingFrequency}</strong></FormLabel>
                  <FormLabel><strong>Simulated Disaster Scenarios: {testingSimulated}</strong></FormLabel>
                  

                  <FormLabel mt={10} fontWeight={"700"}>
                    10. Maintenance & Review
                  </FormLabel>
                  <FormLabel><strong>Review Schedule: {maintenanceReview}</strong></FormLabel>
                  <FormLabel><strong>Action: {maintenanceAction}</strong></FormLabel>

                  <FormLabel mt={10} fontWeight={"700"}>
                    11. Vendor Details & Dependencies
                  </FormLabel>
                  <FormLabel><strong>Third-party DR Solutions: {vendorThirdParty}</strong></FormLabel>
                  <FormLabel><strong>Action: {vendorAction}</strong></FormLabel>

                  <FormLabel mt={10} fontWeight={"700"}>
                    12. Appendices
                  </FormLabel>
                  <FormLabel><strong>Additional Notes: {appendices}</strong></FormLabel>
                </form>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                colorScheme="blue"
                onClick={handleCloseModal}
                bg="#691212"
                color={"white"}
              >
                Confirm
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      ) : (
        isVisible && (
          <Alert status="success">
            <AlertIcon />
            <Box>
              <AlertTitle>Success!</AlertTitle>
              <AlertDescription>
                Your feedback has been received. Now you can click on the
                Debrief Section if you want to see debrief..
              </AlertDescription>
            </Box>
            <CloseButton
              alignSelf="flex-start"
              position="relative"
              right={-1}
              top={-1}
              onClick={onClose}
            />
          </Alert>
        )
      )}
    </Box>
  );
};

export default Drform;
