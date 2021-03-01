import React from "react";
import Navigation from "./Navigation";
import { Box } from "@chakra-ui/react";
import { ExpensesQuery } from "../generated/graphql";

interface LayoutProps {
  data?: ExpensesQuery;
  dataLoading: boolean;
}


export const Layout: React.FC<LayoutProps> = ({ children, data, dataLoading }) => {
  return (
    <>
      <Navigation data={data} dataLoading={dataLoading} />
      <Box mx='auto' w='100%' maxW={{ sm: '600px', md: '700px', lg: '800px', xl: '900px', '2xl': '1000px' }} p={[2, 3, 4, 5, 6]}>
        {children}
      </Box>
    </>
  );
};