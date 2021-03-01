import { Box, Stack } from "@chakra-ui/react";

interface MenuLinksProps {
  isOpen: boolean;
  body: any;
}

const MenuLinks: React.FC<MenuLinksProps> = ({ isOpen, body }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={2}
        align="center"
        justify={["center", "center", "flex-start", "flex-start"]}
        direction={["column", "column", "row", "row"]}
      >
        {body}
      </Stack>
    </Box>

  );
}

export default MenuLinks;