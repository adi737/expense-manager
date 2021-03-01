import { Box, Link, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import NextLink from 'next/link'
import { useActivateAccountQuery } from "../generated/graphql";
import ExpiredLink from "../components/ExpiredLink";
import { withApollo } from "../utils/withApollo";

interface ActivateAccountProps {
  id?: string | string[];
  token?: string | string[];
}

const ActivateAccount: NextPage<ActivateAccountProps> = ({ id, token }) => {
  if (typeof id !== 'string' || typeof token !== 'string') {
    return <Text mt={12} textAlign='center'>Wrong URL</Text>
  }

  const { data, loading } = useActivateAccountQuery({ variables: { id, token } });

  if (!data && loading) {
    return null;
  }

  if (data?.activateAccount.errors) {
    const { message } = data.activateAccount.errors[0];

    if (message.includes('Link has expired')) {
      return <ExpiredLink id={id} message={message} />
    }

    return <Text textAlign='center' mt={12}>{message}</Text>
  }

  return (
    <Box textAlign='center'>
      <Text textAlign='center' mt={12}>Account has been activated</Text>
      <NextLink href='/login' passHref>
        <Link textDecor='underline' fontWeight='medium' >Click here to sign in</Link>
      </NextLink>
    </Box>
  );
}

ActivateAccount.getInitialProps = async ctx => {
  const { id, token } = ctx.query;

  return {
    id: id ?? '',
    token: token ?? ''
  }
}


export default withApollo({ ssr: true })(ActivateAccount);