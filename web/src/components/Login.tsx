import { Alert, AlertIcon, Button, Container, Link, Stack } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { useRouter } from "next/dist/client/router";
import NextLink from 'next/link';

import InputField from "./InputField";
import { useLoginMutation } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";
import { useApolloClient } from "@apollo/client";

interface LoginProps {

}

const Login: React.FC<LoginProps> = () => {
  const [login, { data }] = useLoginMutation();

  const router = useRouter();

  const { resetStore } = useApolloClient();

  return (
    <Container mt='4rem'>
      <Formik
        initialValues={{ email: "", password: '' }}
        onSubmit={async (values, actions) => {
          const { data } = await login({ variables: { options: values } });

          if (data?.login.errors) {
            actions.setErrors(toErrorMap(data.login.errors))
            actions.setSubmitting(false)
          } else if (typeof router.query.next === 'string') {
            // pending
            router.push(router.query.next);
          } else {
            await resetStore();
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              type='email'
              name="email"
              placeholder="email"
              label="Email"
              submitting={isSubmitting}
            />
            <InputField
              type='password'
              name="password"
              placeholder="password"
              label="Password"
              submitting={isSubmitting}
            />
            <Stack>
              <NextLink href='/register' passHref>
                <Link color="teal.500">
                  Don't have an account?
                </Link>
              </NextLink>
              <NextLink href='/forgotPassword' passHref>
                <Link color="teal.500">
                  Forgot password?
                </Link>
              </NextLink>
            </Stack>
            {
              data?.login.errors ?
                data?.login.errors.map(error => {
                  if (error.field === 'user') {
                    return (
                      <Alert key={error.message} mt={3} status="error">
                        <AlertIcon />
                        {error.message}
                      </Alert>
                    )
                  }
                  return;
                })
                :
                null
            }
            <Button
              mt={4}
              colorScheme="teal"
              isLoading={isSubmitting}
              type="submit"
            >
              Login
          </Button>
          </Form>
        )}
      </Formik>
    </Container>
  )
}

export default Login;