import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Box,
  Center,
} from "@chakra-ui/react";

export default function Contact() {
  return (
    <>
      <Center>
        <Box mt={12}>
          <FormControl isRequired>
            <FormLabel>First Name:</FormLabel>
            <Input type="text" />
            <FormLabel>Last Name:</FormLabel>
            <Input type="text" />
            <FormLabel>Email Address:</FormLabel>
            <Input type="email" />
            <FormLabel>Message:</FormLabel>
            <Input type="email" />
          </FormControl>
        </Box>
      </Center>
    </>
  );
}
