import React from "react";
import {
  Heading,
  Center,
  Flex,
  Box,
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Text,
  Divider,
  ButtonGroup,
  Button,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

export default function Portfolio() {
  return (
    <>
      <Box>
        <Center>
          <Heading as="h3" size="lg" noOfLines={1}>
            Check out some of my work:
          </Heading>
        </Center>
      </Box>
      {/* Row 2 (two cards) */}
      <Flex direction="row" justify="space-evenly">
        <Card maxW="sm" mt={4}>
          <CardBody>
            <Image
              src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="placeholder"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md"> Just Another Text Editor (J.A.T.E)</Heading>
              <Text>
                J.A.T.E is a progressive web application allowing the user to
                store notes or code snippets via IndexedDB. The app functions
                with or without an internet connection and has the ability to be
                downloaded.
              </Text>
              <Text fontSize="2xl">Technologies Used:</Text>
              <UnorderedList>
                <ListItem>Example</ListItem>
                <ListItem>Example</ListItem>
                <ListItem>Example</ListItem>
              </UnorderedList>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="purple">
                Visit App
              </Button>
              <Button variant="ghost" colorScheme="purple">
                Repository
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>

        <Card maxW="sm" mt={4}>
          <CardBody>
            <Image
              src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="placeholder"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md"> Just Another Text Editor (J.A.T.E)</Heading>
              <Text>
                J.A.T.E is a progressive web application allowing the user to
                store notes or code snippets via IndexedDB. The app functions
                with or without an internet connection and has the ability to be
                downloaded.
              </Text>
              <Text fontSize="2xl">Technologies Used:</Text>
              <UnorderedList>
                <ListItem>Example</ListItem>
                <ListItem>Example</ListItem>
                <ListItem>Example</ListItem>
              </UnorderedList>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="purple">
                Visit App
              </Button>
              <Button variant="ghost" colorScheme="purple">
                Repository
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>

        <Card maxW="sm" mt={4}>
          <CardBody>
            <Image
              src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="placeholder"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md"> Just Another Text Editor (J.A.T.E)</Heading>
              <Text>
                J.A.T.E is a progressive web application allowing the user to
                store notes or code snippets via IndexedDB. The app functions
                with or without an internet connection and has the ability to be
                downloaded.
              </Text>
              <Text fontSize="2xl">Technologies Used:</Text>
              <UnorderedList>
                <ListItem>Example</ListItem>
                <ListItem>Example</ListItem>
                <ListItem>Example</ListItem>
              </UnorderedList>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="purple">
                Visit App
              </Button>
              <Button variant="ghost" colorScheme="purple">
                Repository
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </Flex>

      {/* Row 3 (two cards) */}
      <Flex direction="row" justify="space-evenly">
        <Card maxW="sm" mt={4}>
          <CardBody>
            <Image
              src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="placeholder"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md"> Just Another Text Editor (J.A.T.E)</Heading>
              <Text>
                J.A.T.E is a progressive web application allowing the user to
                store notes or code snippets via IndexedDB. The app functions
                with or without an internet connection and has the ability to be
                downloaded.
              </Text>
              <Text fontSize="2xl">Technologies Used:</Text>
              <UnorderedList>
                <ListItem>Example</ListItem>
                <ListItem>Example</ListItem>
                <ListItem>Example</ListItem>
              </UnorderedList>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="purple">
                Visit App
              </Button>
              <Button variant="ghost" colorScheme="purple">
                Repository
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>

        <Card maxW="sm" mt={4}>
          <CardBody>
            <Image
              src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="placeholder"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md"> Just Another Text Editor (J.A.T.E)</Heading>
              <Text>
                J.A.T.E is a progressive web application allowing the user to
                store notes or code snippets via IndexedDB. The app functions
                with or without an internet connection and has the ability to be
                downloaded.
              </Text>
              <Text fontSize="2xl">Technologies Used:</Text>
              <UnorderedList>
                <ListItem>Example</ListItem>
                <ListItem>Example</ListItem>
                <ListItem>Example</ListItem>
              </UnorderedList>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="purple">
                Visit App
              </Button>
              <Button variant="ghost" colorScheme="purple">
                Repository
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>

        <Card maxW="sm" mt={4}>
          <CardBody>
            <Image
              src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="placeholder"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md"> Just Another Text Editor (J.A.T.E)</Heading>
              <Text>
                J.A.T.E is a progressive web application allowing the user to
                store notes or code snippets via IndexedDB. The app functions
                with or without an internet connection and has the ability to be
                downloaded.
              </Text>
              <Text fontSize="2xl">Technologies Used:</Text>
              <UnorderedList>
                <ListItem>Example</ListItem>
                <ListItem>Example</ListItem>
                <ListItem>Example</ListItem>
              </UnorderedList>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="purple">
                Visit App
              </Button>
              <Button variant="ghost" colorScheme="purple">
                Repository
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </Flex>
    </>
  );
}
