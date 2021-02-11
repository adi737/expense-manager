import { Alert, AlertIcon, Box, Button, Container, Link } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { useRouter } from "next/dist/client/router";
import NextLink from 'next/link';

import InputField from "../components/InputField";
import { useLoginMutation, UserDocument } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";

interface LoginProps {

}

const Login: React.FC<LoginProps> = ({ }) => {
  const [login, { data }] = useLoginMutation({
    update(cache, { data }) {
      cache.writeQuery({
        query: UserDocument,
        data: {
          user: data?.login.user
        }
      })
    }
  });

  const router = useRouter();
  return (
    <Container maxW='3xl' mt='4rem'>
      <Formik
        initialValues={{ email: "", password: '' }}
        onSubmit={async (values, actions) => {
          const { data } = await login({ variables: { options: values } });

          if (data?.login.errors) {
            actions.setErrors(toErrorMap(data.login.errors))
          } else {
            router.push('/');
          }

          actions.setSubmitting(false)
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
            <Box>
              <NextLink href='/forgotPassword' passHref>
                <Link color="teal.500">
                  Forgot password?
                </Link>
              </NextLink>
            </Box>
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
              Submit
          </Button>
          </Form>
        )}
      </Formik>
    </Container>
  )
}

export default Login;