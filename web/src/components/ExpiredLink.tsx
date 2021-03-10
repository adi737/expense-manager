import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import { Link, Text } from "@chakra-ui/react";
import { useSendActivationLinkMutation } from "../generated/graphql";

interface ExpiredLinkProps {
  id: string;
  message: string;
}

const ExpiredLink: React.FC<ExpiredLinkProps> = ({ id, message }) => {
  const [sendActivationLink, { loading }] = useSendActivationLinkMutation();

  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleOnClick = async () => {
    const { data } = await sendActivationLink({ variables: { id } });

    if (data?.sendActivationLink.errors) {
      return setError("Activation link could not be sent");
    }
    router.push("/successMessage");
  };
  return (
    <>
      <Text textAlign="center" mt={12}>
        {message}
      </Text>
      {loading ? (
        <Text textAlign="center">loading...</Text>
      ) : (
        <>
          <Link
            textDecor="underline"
            textAlign="center"
            fontWeight="medium"
            as="p"
            onClick={handleOnClick}
          >
            Click here to send it again
          </Link>
          {error ? (
            <Text textAlign="center" color="red.500">
              {error}
            </Text>
          ) : null}
        </>
      )}
    </>
  );
};

export default ExpiredLink;
