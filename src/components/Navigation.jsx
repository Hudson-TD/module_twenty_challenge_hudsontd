import React from "react";
import { Tabs, TabList, Tab } from "@chakra-ui/react";

export default function Navigation({ handlePageChange }) {
  return (
    <>
      <Tabs variant="soft-rounded" colorScheme="purple">
        <TabList>
          <Tab>
            <a href="#about" onClick={() => handlePageChange("About")}>
              About Me
            </a>
          </Tab>
          <Tab>
            <a href="#portfolio" onClick={() => handlePageChange("Portfolio")}>
              Portfolio
            </a>
          </Tab>
          <Tab>
            <a href="#contact" onClick={() => handlePageChange("Contact")}>
              Contact
            </a>
          </Tab>
          <Tab>
            <a href="#resume" onClick={() => handlePageChange("Resume")}>
              Resume
            </a>
          </Tab>
        </TabList>
      </Tabs>
    </>
  );
}
