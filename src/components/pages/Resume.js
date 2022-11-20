import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Center,
  Container,
  Heading,
} from "@chakra-ui/react";

export default function Resume() {
  return (
    <>
      <Box my={6}>
        <Center>
          <Heading as="h3" size="lg" noOfLines={1}>
            Skills
          </Heading>
        </Center>
      </Box>

      <Container>
        <Accordion defaultIndex={[0]} allowMultiple textAlign="center">
          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "purple.500", color: "white" }}>
                <Box flex="1">Front-End</Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>Todo</AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "purple.500", color: "white" }}>
                <Box flex="1">Back-End</Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <ul>
                <li>test1</li>
                <li>test2</li>
              </ul>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "purple.500", color: "white" }}>
                <Box flex="1">Database</Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>Todo</AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </>
  );
}
