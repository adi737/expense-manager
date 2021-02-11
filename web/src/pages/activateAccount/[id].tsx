import { Box, Link, Text } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import NextLink from 'next/link'
import { useActivateAccountQuery } from "../../generated/graphql";
import { isServer } from "../../utils/isServer";
import ExpiredLink from "../../components/ExpiredLink";

interface ActivateAccountProps {
  id: string;
  token: string;
}

const ActivateAccount: React.FC<ActivateAccountProps> = ({ id, token }) => {
  const { data } = useActivateAccountQuery({ variables: { id, token }, skip: isServer });

  if (!data) {
    return null;
  }

  if (data.activateAccount.errors) {
    const { message } = data.activateAccount.errors[0];

    if (message.includes('Activation link has expired')) {
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

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { id, token } = ctx.query;


  return {
    props: {
      id,
      token: token ?? ""
    },
  };
}

export default ActivateAccount;