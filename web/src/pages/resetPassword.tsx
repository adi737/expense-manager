import {
  Container,
  Button,
  AlertIcon,
  Alert,
  Text,
  Link,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { GetServerSideProps } from "next";
import { useRouter } from "next/dist/client/router";
import InputField from "../components/InputField";
import { useResetPasswordMutation } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";
import { withApollo } from "../utils/withApollo";
import NextLink from "next/link";

interface ResetPasswordProps {
  id?: string | string[];
  token?: string | string[];
}

const ResetPassword: React.FC<ResetPasswordProps> = ({ id, token }) => {
  const [resetPassword, { data }] = useResetPasswordMutation();

  const router = useRouter();

  if (
    typeof id !== "string" ||
    typeof token !== "string" ||
    id === "" ||
    token === ""
  ) {
    return (
      <Text mt={12} textAlign="center">
        Wrong URL
      </Text>
    );
  }

  return (
    <Container maxW="sm" mt="4rem">
      <Formik
        initialValues={{ password: "", repassword: "" }}
        onSubmit={async (values, actions) => {
          const { data } = await resetPassword({
            variables: { options: values, id, token },
          });

          if (data?.resetPassword.errors) {
            actions.setErrors(toErrorMap(data.resetPassword.errors));
          } else {
            router.push("/");
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              type="password"
              name="password"
              placeholder="password"
              label="Password"
              submitting={isSubmitting}
            />
            <InputField
              type="password"
              name="repassword"
              placeholder="repassword"
              label="Repassword"
              submitting={isSubmitting}
            />
            <NextLink href="/" passHref>
              <Link color="teal.500">Go to homepage</Link>
            </NextLink>
            {data?.resetPassword.errors
              ? data?.resetPassword.errors.map((error) => {
                  if (error.field === "user") {
                    return (
                      <Alert key={error.message} mt={3} status="error">
                        <AlertIcon />
                        {error.message}
                      </Alert>
                    );
                  }
                  return;
                })
              : null}
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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id, token } = ctx.query;

  return {
    props: {
      id: id ?? "",
      token: token ?? "",
    },
  };
};

export default withApollo({ ssr: false })(ResetPassword);
