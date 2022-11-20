import React from "react";
import { Heading, Center, Box, Image, Text, Badge } from "@chakra-ui/react";

export default function About() {
  return (
    <>
      <Box bg="tomato">
        <Center>
          <Image
            borderRadius="full"
            boxSize="250px"
            src="sticker.png"
            alt="Tyler Dale Hudson"
            mb={8}
          />
        </Center>
      </Box>

      <Box m={1} mb={1}>
        <Center>
          <Heading as="h3" size="lg" noOfLines={1}>
            Aspiring Full-Stack Developer
          </Heading>
        </Center>

          <Center>
            <Badge ml="1" fontSize="0.8em" colorScheme="purple">
              Currently looking for Opportunities!
            </Badge>
          </Center>
      </Box>

      <Box>
        <Center>
          <Text fontSize="2xl" w={750} mt={12}>
            Thank you for taking the time to visit my website! I am a driven and
            motivated individual looking to break into a career in web
            development. I am an avid PC enthusiast (gaming & building) and love
            learning new things.
            <br />
            <Box>
              <Center>-</Center>
            </Box>
            <br />I have a bachelors degree in business from the University of
            South Carolina where I majored in marketing. I am currently
            particpating in the Georgia Tech Full-Stack coding bootcamp and I am
            on track to finish and recieve my certification in December of 2022.
            In addition to this prospective certification I have 4+ years of
            experience in the tech space primarily in a business operations
            capacity.
          </Text>
        </Center>
      </Box>
    </>
  );
}
