import { Flex } from "@chakra-ui/react";
import React from "react";

interface NavbarContainerProps {

}

const NavbarContainer: React.FC<NavbarContainerProps> = ({ children }) => {
  return (
    <Flex
      as="nav"
      wrap="wrap"
      w="100%"
      p={4}
      bg="teal.500"
      position="sticky"
      top={0}
    >
      {children}
    </Flex>
  );
}

export default NavbarContainer;