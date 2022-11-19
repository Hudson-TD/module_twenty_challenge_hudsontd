import React from "react";
import { Heading, Center, Box, Image } from "@chakra-ui/react";

export default function About() {
  return (
    <>
      <Center>
        <Image
          borderRadius="full"
          boxSize="250px"
          src="sticker.png"
          alt="Tyler Dale Hudson"
          mt={12}
          mb={12}
        />
      </Center>

      <Box m={1}>
        <Center>
          <Heading as="h3" size="lg" noOfLines={1}>
            Aspiring Full-Stack Developer
          </Heading>
        </Center>
      </Box>
    </>
  );
}
