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
      <Box my={6}>
        <Center>
          <Heading as="h3" size="lg" noOfLines={1}>
            Check out some of my personal work and contributions:
          </Heading>
        </Center>
      </Box>
      {/* Row 2 (two cards) */}
      <Flex direction="row" justify="space-evenly">
        <Card maxW="sm" mt={4}>
          <CardBody>
            <Image
              src="JATE.gif"
              alt="placeholder"
              borderRadius="lg"
              class="cardImage"
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
                <ListItem>JavaScript</ListItem>
                <ListItem>Webpack</ListItem>
                <ListItem>IndexedDB</ListItem>
                <ListItem>Node.js</ListItem>
                <ListItem>Express</ListItem>
              </UnorderedList>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button
                variant="solid"
                colorScheme="purple"
                type="submit"
                onClick={() => {
                  window.open("https://secret-citadel-27288.herokuapp.com/");
                }}
              >
                Visit App
              </Button>
              <Button
                variant="ghost"
                colorScheme="purple"
                type="submit"
                onClick={() => {
                  window.open(
                    "https://github.com/Hudson-TD/module_nineteen_challenge_hudsontd"
                  );
                }}
              >
                Repository
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>

        <Card maxW="sm" mt={4}>
          <CardBody>
            <Image
              src="https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="placeholder"
              borderRadius="lg"
              class="cardImage"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md"> Aldente</Heading>
              <Text>
                This application is designed to help anyone and everyone looking
                for a simple and organized way to search for and save recipes.
                It features four different pages, including a home page, a
                results page, a recipe page, and "My Cookbook", which displays
                the user's saved recipes.
              </Text>
              <Text fontSize="2xl">Technologies Used:</Text>
              <UnorderedList>
                <ListItem>JQuery UI</ListItem>
                <ListItem>Moment.js</ListItem>
                <ListItem>TailwindCSS</ListItem>
                <ListItem>TheMealDB API</ListItem>
                <ListItem>TheCocktailDB API</ListItem>
              </UnorderedList>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button
                variant="solid"
                colorScheme="purple"
                type="submit"
                onClick={() => {
                  window.open(
                    "https://crhinesmith.github.io/alDente/index.html"
                  );
                }}
              >
                Visit App
              </Button>
              <Button
                variant="ghost"
                colorScheme="purple"
                type="submit"
                onClick={() => {
                  window.open("https://github.com/crhinesmith/alDente");
                }}
              >
                Repository
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>

        <Card maxW="sm" mt={4}>
          <CardBody>
            <Image
              src="https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="placeholder"
              borderRadius="lg"
              class="cardImage"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md"> Weather Forecast Dashboard</Heading>
              <Text>
                This is a responsive API driven web app that displays locational
                weather data along with a five day forecast. City searches are
                stored locally for quick access in future sessions.
              </Text>
              <Text fontSize="2xl">Technologies Used:</Text>
              <UnorderedList>
                <ListItem>JavaScript</ListItem>
                <ListItem>Tailwind CSS</ListItem>
                <ListItem>Open Weather API</ListItem>
              </UnorderedList>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button
                variant="solid"
                colorScheme="purple"
                type="submit"
                onClick={() => {
                  window.open(
                    "https://hudson-td.github.io/module_six_challenge_hudsontd/"
                  );
                }}
              >
                Visit App
              </Button>
              <Button
                variant="ghost"
                colorScheme="purple"
                type="submit"
                onClick={() => {
                  window.open(
                    "https://github.com/Hudson-TD/module_six_challenge_hudsontd"
                  );
                }}
              >
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
