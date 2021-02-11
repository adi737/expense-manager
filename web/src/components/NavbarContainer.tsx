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
      mb={4}
      p={8}
      bg={["teal.500", "teal.500", "transparent", "transparent"]}
    >
      {children}
    </Flex>
  );
}

export default NavbarContainer;