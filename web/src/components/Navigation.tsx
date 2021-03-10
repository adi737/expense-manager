import { Button } from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import { useLogoutMutation } from "../generated/graphql";
import MenuLinks from "./MenuLinks";
import MenuToggle from "./MenuToggle";
import NavbarContainer from "./NavbarContainer";

// interface NavigationProps {}

const Navigation: React.FC = () => {
  const [
    logout,
    {
      client: { resetStore },
    },
  ] = useLogoutMutation();

  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const body: ReactNode = (
    <Button
      color="black"
      variant="link"
      onClick={async () => {
        try {
          setLoading(true);
          await logout();
          await resetStore();
        } catch (error) {
          throw new Error(error);
        }
      }}
      isLoading={loading}
    >
      Sign out
    </Button>
  );

  return (
    <NavbarContainer>
      <MenuToggle toggle={() => setIsOpen(!isOpen)} isOpen={isOpen} />
      <MenuLinks body={body} isOpen={isOpen} />
    </NavbarContainer>
  );
};

export default Navigation;
