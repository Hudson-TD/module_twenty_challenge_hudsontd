import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Center,
  Heading,
} from "@chakra-ui/react";

export default function Resume() {
  return (
    <>
      <Box mb={6}>
        <Center>
          <Heading>Proficiencies</Heading>
        </Center>
      </Box>
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: "purple.500", color: "white" }}>
              <Box flex="1" textAlign="left">
                Front End
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>Todo</AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: "purple.500", color: "white" }}>
              <Box flex="1" textAlign="left">
                Back End
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>Todo</AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: "purple.500", color: "white" }}>
              <Box flex="1" textAlign="left">
                Database
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>Todo</AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}
