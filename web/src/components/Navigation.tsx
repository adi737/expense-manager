import { Button, Link } from "@chakra-ui/react";
// import { useRouter } from "next/dist/client/router";
import NextLink from 'next/link'
import { useState } from "react";
import { ExpensesQuery, useLogoutMutation } from "../generated/graphql";
import MenuLinks from "./MenuLinks";
import MenuToggle from "./MenuToggle";
import NavbarContainer from "./NavbarContainer";

interface NavigationProps {
  data?: ExpensesQuery;
  dataLoading: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ data, dataLoading }) => {
  const [logout, { client: { resetStore } }] = useLogoutMutation();

  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  let body = null;

  if (dataLoading) {
    // return null;
  } else if (!data?.expenses) {
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
      <Button
        color='black'
        variant='link'
        onClick={
          async () => {
            try {
              setLoading(true);
              await logout();
              await resetStore();
            } catch (error) {
              throw new Error(error);
            }
          }
        }
        isLoading={loading}>
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


export default Navigation;