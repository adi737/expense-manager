import { Box, Button, Container, Link } from '@chakra-ui/react';
import {
  Formik,
  Form,
} from 'formik';
import { useRouter } from 'next/dist/client/router';
import NextLink from 'next/link';
import React from 'react';

import InputField from '../components/InputField';
import { useRegisterMutation } from '../generated/graphql';
import { toErrorMap } from '../utils/toErrorMap';
import { withApollo } from '../utils/withApollo';

interface RegisterProps {

}

const Register: React.FC<RegisterProps> = ({ }) => {
  const [register] = useRegisterMutation();

  const router = useRouter();

  return (
    <Container mt='4rem'>
      <Formik
        initialValues={{ email: "", password: '' }}
        onSubmit={async (values, actions) => {
          const { data } = await register({ variables: { options: values } });

          if (data?.register.errors) {
            actions.setErrors(toErrorMap(data.register.errors));
            actions.setSubmitting(false);
          } else {
            router.push('/successMessage');
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
            <NextLink href='/' passHref>
              <Box>
                <Link color="teal.500">
                  Already have an account?
                </Link>
              </Box>
            </NextLink>
            <Button
              mt={4}
              colorScheme="teal"
              isLoading={isSubmitting}
              type="submit"
            >
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  )
}

export default withApollo({ ssr: false })(Register);