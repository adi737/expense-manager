import { Box, Button, Link } from "@chakra-ui/react";
import NextLink from 'next/link'
import { useLogoutMutation, UserDocument } from "../generated/graphql";

interface NavigationProps {

}

const Navigation: React.FC<NavigationProps> = ({ }) => {
  const [logout, { loading }] = useLogoutMutation({
    update(cache) {
      cache.writeQuery({
        query: UserDocument,
        data: {
          user: null
        }
      })
    }
  });

  return (
    <Box w='100%' backgroundColor='gray.400' p={5}>
      <NextLink href='/login' passHref>
        <Link mr={3}>
          login
        </Link>
      </NextLink>
      <NextLink href='/register' passHref>
        <Link mr={3}>
          register
        </Link>
      </NextLink>
      <Button variant='link' onClick={() => logout()} isLoading={loading}>
        logout
      </Button>
    </Box>
  );
}

export default Navigation;