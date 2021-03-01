import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, CloseButton, IconButton, Menu, MenuButton } from "@chakra-ui/react"
import React from "react";

interface MenuToggleProps {
  isOpen: boolean;
  toggle: () => void;
}

const MenuToggle: React.FC<MenuToggleProps> = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {
        isOpen ?
          <CloseButton size='md' />
          :
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              size="sm"
              variant="outline"
            />
          </Menu>
      }
    </Box>
  );
}

export default MenuToggle;