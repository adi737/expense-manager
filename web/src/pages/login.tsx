import { Button, Container } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { useRouter } from "next/dist/client/router";

import InputField from "../components/InputField";
import { useLoginMutation, UserDocument } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";

interface LoginProps {

}

const Login: React.FC<LoginProps> = ({ }) => {
  const [login] = useLoginMutation({
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
        initialValues={{ username: "", password: '' }}
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

export default Login;