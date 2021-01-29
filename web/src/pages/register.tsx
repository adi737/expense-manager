import { Button, Container } from '@chakra-ui/react';
import {
  Formik,
  Form,
} from 'formik';
import { useRouter } from 'next/dist/client/router';

import InputField from '../components/InputField';
import { useRegisterMutation } from '../generated/graphql';
import { toErrorMap } from '../utils/toErrorMap';

interface RegisterProps {

}

const Register: React.FC<RegisterProps> = ({ }) => {
  const [register] = useRegisterMutation();

  const router = useRouter();
  return (
    <Container maxW='3xl' mt='4rem'>
      <Formik
        initialValues={{ username: "", password: '' }}
        onSubmit={async (values, actions) => {
          const { data } = await register({ variables: { options: values } });

          if (data?.register.errors) {
            actions.setErrors(toErrorMap(data.register.errors))
          } else {
            router.push('/');
          }

          actions.setSubmitting(false)
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              type='text'
              name="username"
              placeholder="username"
              label="Username"
              submitting={isSubmitting}
            />
            <InputField
              type='password'
              name="password"
              placeholder="password"
              label="Password"
              submitting={isSubmitting}
            />
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

export default Register;