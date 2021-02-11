import { Container, Button } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { useRouter } from "next/dist/client/router";
import InputField from "../components/InputField";
import { useForgotPasswordMutation } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";

interface ForgotPasswordProps {

}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({ }) => {
  const [forgotPassword] = useForgotPasswordMutation();

  const router = useRouter();

  return (
    <Container maxW='md' mt='4rem'>
      <Formik
        initialValues={{ email: "" }}
        onSubmit={async (values, actions) => {
          const { data } = await forgotPassword({ variables: { email: values.email } });

          if (data?.forgotPassword.errors) {
            actions.setErrors(toErrorMap(data.forgotPassword.errors))
          } else {
            router.push('/successMessage');
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
            <Button
              width='100%'
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
}

export default ForgotPassword;