import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  StackDivider,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useLogoutMutation } from "../generated/graphql";
import NextLnik from "next/link";

const Navigation: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [
    logout,
    {
      client: { resetStore },
    },
  ] = useLogoutMutation();

  const [loading, setLoading] = useState(false);

  return (
    <>
      <Box
        position="fixed"
        top={[1, 2, 4]}
        right={[1, 2, 4]}
        color="teal"
        onClick={onOpen}
        boxSize="10"
        cursor="pointer"
        fontSize={["2rem", "2.3rem"]}
      >
        <FontAwesomeIcon icon="bars" />
      </Box>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Expense Manager</DrawerHeader>

            <DrawerBody>
              <VStack
                divider={<StackDivider borderColor="gray.200" />}
                spacing={3}
                align="stretch"
              >
                <Menu isLazy>
                  <MenuButton>
                    Categories <FontAwesomeIcon icon="angle-down" />
                  </MenuButton>
                  <MenuList>
                    {/* MenuItems are not rendered unless Menu is open */}
                    <NextLnik href="/" passHref>
                      <MenuItem as="a">All</MenuItem>
                    </NextLnik>
                    <NextLnik href="/expenses/groceries" passHref>
                      <MenuItem as="a">Groceries</MenuItem>
                    </NextLnik>
                    <NextLnik href="/expenses/medical" passHref>
                      <MenuItem as="a">Medical & Healthcare</MenuItem>
                    </NextLnik>
                    <NextLnik href="/expenses/house" passHref>
                      <MenuItem as="a">House Items/Supplies</MenuItem>
                    </NextLnik>
                    <NextLnik href="/expenses/transport" passHref>
                      <MenuItem as="a">Transport</MenuItem>
                    </NextLnik>
                    <NextLnik href="/expenses/taxes" passHref>
                      <MenuItem as="a">Taxes and fees</MenuItem>
                    </NextLnik>
                    <NextLnik href="/expenses/entertainment" passHref>
                      <MenuItem as="a">Entertainment & travels</MenuItem>
                    </NextLnik>
                    <NextLnik href="/expenses/installments" passHref>
                      <MenuItem as="a">Installments</MenuItem>
                    </NextLnik>
                    <NextLnik href="/expenses/personal" passHref>
                      <MenuItem as="a">Personal</MenuItem>
                    </NextLnik>
                    <NextLnik href="/expenses/education" passHref>
                      <MenuItem as="a">Education</MenuItem>
                    </NextLnik>
                    <NextLnik href="/expenses/gifts" passHref>
                      <MenuItem as="a">Gifts/Donations</MenuItem>
                    </NextLnik>
                    <NextLnik href="/expenses/other" passHref>
                      <MenuItem as="a">Other</MenuItem>
                    </NextLnik>
                  </MenuList>
                </Menu>
                <Button
                  d="block"
                  mx="auto"
                  variant="link"
                  onClick={async () => {
                    try {
                      setLoading(true);
                      await logout();
                      await resetStore();
                    } catch (error) {
                      throw new Error(error);
                    }
                  }}
                  isLoading={loading}
                >
                  Sign out
                </Button>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default Navigation;
