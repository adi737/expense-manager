import { Container, Button, Link } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { useRouter } from "next/dist/client/router";
import React from "react";
import NextLink from "next/link";
import InputField from "../components/InputField";
import { useForgotPasswordMutation } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";
import { withApollo } from "../utils/withApollo";

// interface ForgotPasswordProps {}

const ForgotPassword: React.FC = () => {
  const [forgotPassword] = useForgotPasswordMutation();

  const router = useRouter();

  return (
    <Container maxW="sm" mt="4rem">
      <Formik
        initialValues={{ email: "" }}
        onSubmit={async (values, actions) => {
          const { data } = await forgotPassword({
            variables: { email: values.email },
          });

          if (data?.forgotPassword.errors) {
            actions.setErrors(toErrorMap(data.forgotPassword.errors));
          } else {
            router.push("/successMessage");
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              type="email"
              name="email"
              placeholder="email"
              label="Email"
              submitting={isSubmitting}
            />
            <NextLink href="/" passHref>
              <Link color="teal.500">Go to homepage</Link>
            </NextLink>
            <Button
              width="100%"
              mt={4}
              colorScheme="teal"
              isLoading={isSubmitting}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default withApollo({ ssr: false })(ForgotPassword);
