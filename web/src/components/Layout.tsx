import { Box } from "@chakra-ui/react";

import Navigation from "./Navigation";

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navigation />
      <Box
        mx="auto"
        w="100%"
        maxW={{
          sm: "600px",
          md: "700px",
          lg: "800px",
          xl: "900px",
          "2xl": "1000px",
        }}
        p={[0, 2, 3, 4, 5, 6]}
      >
        {children}
      </Box>
    </>
  );
};
