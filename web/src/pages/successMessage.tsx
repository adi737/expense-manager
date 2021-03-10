import { Box, Link, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import NextLink from "next/link";

const SuccessMessage = (): ReactNode => {
  return (
    <Box textAlign="center">
      <Text mt={12}>Email has been send. Check your mailbox</Text>
      <NextLink href="/" passHref>
        <Link color="teal.500">Go to homepage</Link>
      </NextLink>
    </Box>
  );
};

export default SuccessMessage;
