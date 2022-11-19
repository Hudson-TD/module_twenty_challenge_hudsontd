import React from "react";
import { Heading, Center, Box, Image, Text, Badge } from "@chakra-ui/react";

export default function About() {
  return (
    <>
      <Center>
        <Image
          borderRadius="full"
          boxSize="250px"
          src="sticker.png"
          alt="Tyler Dale Hudson"
          mb={8}
        />
      </Center>

      <Box m={1} mb={1}>
        <Center>
          <Heading as="h3" size="lg" noOfLines={1}>
            Aspiring Full-Stack Developer
          </Heading>
        </Center>
      </Box>

      <Box m={1} mb={12}>
        <Center>
          <Text fontSize="xl">
            <Badge ml="1" fontSize="0.8em" colorScheme="green">
              Looking for Opportunities! ChatIcon
            </Badge>
          </Text>
        </Center>
      </Box>

      <Text fontSize="2xl">
        I have a Bachelors degree in Business from the University of South
        Carolina where I majored in Marketing. I am currently particpating in
        the Georgia Tech Full-Stack coding bootcamp and I am on track to finish
        and recieve my certification in December of 2022.
      </Text>
    </>
  );
}
