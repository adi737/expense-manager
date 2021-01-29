import { FormControl, FormLabel, Input, FormErrorMessage } from "@chakra-ui/react";
import { useField } from "formik";

interface InputFieldProps {
  type: string;
  name: string;
  label: string;
  placeholder: string;
  submitting: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ label, submitting, ...props }) => {
  const [field, { error }] = useField(props);

  return (
    <FormControl isInvalid={!!error} isRequired isDisabled={submitting}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <Input {...field} {...props} id={field.name} />
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  );
}

export default InputField;