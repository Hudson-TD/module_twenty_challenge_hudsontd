import React from "react";
import { Box, Center, Text, Divider, Button, HStack } from "@chakra-ui/react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <Divider orientation="horizontal" mb={10} mt={10} />
      <footer>
        <Box>
          <Center>
            <Text fontSize="2xl" mb={6}>
              Let's Connect:
            </Text>
          </Center>
        </Box>

        <Box>
          <Center>
            <HStack>
              <Button colorScheme="purple" leftIcon={<FaGithubSquare />}>
                Github
              </Button>
              <Button colorScheme="purple" leftIcon={<FaLinkedin />}>
                LinkedIn
              </Button>
            </HStack>
          </Center>
        </Box>

        <Box mt={8} fontSize="sm">
          <Center>Built with Chakra UI ⚡️</Center>
        </Box>
      </footer>
    </>
  );
}
