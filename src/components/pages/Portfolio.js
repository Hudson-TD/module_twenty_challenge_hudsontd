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

      <Flex direction="row" justify="space-evenly">
        <Card maxW="sm" mt={4}>
          <CardBody>
            <Image
              src="https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Dinner table with food"
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
              src="JATE.gif"
              alt="J.A.T.E Just Another Text Editor"
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
                <ListItem>Express.js</ListItem>
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
              src="https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Storm with lightning in the sky"
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

      <Flex direction="row" justify="space-evenly">
        <Card maxW="sm" mt={4}>
          <CardBody>
            <Image
              src="MeowWoof.gif"
              alt="gif of the website homepage"
              borderRadius="lg"
              class="cardImage"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">MeowWoof</Heading>
              <Text>
                This application is designed to help with pet shelters of any
                size. The major functions of the application include a search
                function where animals can be filtered by a variety of
                characteristics, a volunteers dashboard where volunteers can
                choose from volunteer-less pets to assist, and a surrender
                functionality where users can surrender any pet for which they
                feel they cannot adequately care.
              </Text>
              <Text fontSize="2xl">Technologies Used:</Text>
              <UnorderedList>
                <ListItem>Node.js</ListItem>
                <ListItem>JQuery UI</ListItem>
                <ListItem>Tailwind CSS</ListItem>
                <ListItem>sendgrid</ListItem>
                <ListItem>Sequelize</ListItem>
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
                  window.open("https://shielded-harbor-87736.herokuapp.com/");
                }}
              >
                Visit App
              </Button>
              <Button
                variant="ghost"
                colorScheme="purple"
                type="submit"
                onClick={() => {
                  window.open("https://github.com/TeryKing/Project-MeowWoof");
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
              src="JSQuizGame.png"
              alt="placeholder"
              borderRadius="lg"
              class="JavaScript quiz website"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md"> JavaScript Coding Quiz Game</Heading>
              <Text>
                This quiz will test your knowledge of Javascript. You will have
                60 seconds to complete a 5 question quiz. For each question you
                answer incorrectly your alloted time will be reduced by 10
                seconds. This quiz is over when all questions are answered or
                when the alloted time reaches 0.
              </Text>
              <Text fontSize="2xl">Technologies Used:</Text>
              <UnorderedList>
                <ListItem>JavaScript</ListItem>
                <ListItem>HTML</ListItem>
                <ListItem>Vanilla CSS</ListItem>
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
                    "https://hudson-td.github.io/module_four_challenge_hudsontd/"
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
                    "https://github.com/Hudson-TD/module_four_challenge_hudsontd"
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
              src="NoteTaker.png"
              alt="Express.js note taking website"
              borderRadius="lg"
              class="cardImage"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md"> Express.js Note Taker</Heading>
              <Text>
                Simple and easy to use note taking application. Using this
                application is quite simple. Select the '+' icon in the top
                right to display the new note entry fields (title & content).
                Entering both values will illuminate the save icon in the top
                right corner. Once the note is saved the left-hand list will
                populate all of your saved noted, and you can click between them
                to display the contents on the right-hand side of the webpage.
              </Text>
              <Text fontSize="2xl">Technologies Used:</Text>
              <UnorderedList>
                <ListItem>Express.js</ListItem>
                <ListItem>JavaScript</ListItem>
                <ListItem>HTML</ListItem>
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
                    "https://enigmatic-dusk-21030.herokuapp.com/notes"
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
                    "https://github.com/Hudson-TD/module_eleven_challenge_hudsontd"
                  );
                }}
              >
                Repository
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </Flex>
    </>
  );
}
