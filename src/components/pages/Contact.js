import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { MdOutlineEmail } from "react-icons/md";
import { BsPerson } from "react-icons/bs";

export default function Contact() {
  return (
    <Box
      bg={useColorModeValue("white", "gray.700")}
      borderRadius="lg"
      p={8}
      color={useColorModeValue("gray.700", "whiteAlpha.900")}
    >
      <VStack spacing={5}>
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>

          <InputGroup>
            <InputLeftElement children={<BsPerson />} />
            <Input type="text" name="name" placeholder="Your Name" />
          </InputGroup>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Email</FormLabel>

          <InputGroup>
            <InputLeftElement children={<MdOutlineEmail />} />
            <Input type="email" name="email" placeholder="Your Email" />
          </InputGroup>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Message</FormLabel>

          <Textarea
            name="message"
            placeholder="Your Message"
            rows={6}
            resize="none"
          />
        </FormControl>

        <Button
          colorScheme="purple"
          bg="purple.400"
          color="white"
          _hover={{
            bg: "purple.500",
          }}
          isFullWidth
        >
          Send Message
        </Button>
      </VStack>
    </Box>
  );
}
