import React from "react";
import { Heading, Center, Box } from "@chakra-ui/react";

export default function Portfolio() {
  return (
    <Box mt={12}>
      <Center>
        <Heading as="h3" size="lg" noOfLines={1}>
          Check out some of my work:
        </Heading>
      </Center>
    </Box>
  );
}
