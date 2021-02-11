import { Button, Link } from "@chakra-ui/react";
import NextLink from 'next/link'
import { useState } from "react";
import { useLogoutMutation, UserDocument, UserQuery } from "../generated/graphql";
import MenuLinks from "./MenuLinks";
import MenuToggle from "./MenuToggle";
import NavbarContainer from "./NavbarContainer";

interface NavigationProps {
  data?: UserQuery;
  dataLoading: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ data, dataLoading }) => {
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

  const [isOpen, setIsOpen] = useState(false);

  let body = null;

  if (dataLoading) {
    // return null;
  } else if (!data) {
    // return null;
  } else if (data?.user === null) {
    body = (
      <>
        <NextLink href='/login' passHref>
          <Link>
            Sign in
          </Link>
        </NextLink>
        <NextLink href='/register' passHref>
          <Link>
            Sign up
          </Link>
        </NextLink>
      </>
    )
  } else {
    body = (
      <Button variant='link' onClick={() => logout()} isLoading={loading}>
        Sign out
      </Button>
    )
  }

  return (
    <NavbarContainer>
      <MenuToggle toggle={() => setIsOpen(!isOpen)} isOpen={isOpen} />
      <MenuLinks body={body} isOpen={isOpen} />
    </NavbarContainer>
  );
}

// <Box w='100%' p={5}>
//   {body}
// </Box>


export default Navigation;