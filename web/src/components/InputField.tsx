import { FormControl, FormLabel, Input, FormErrorMessage, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select } from "@chakra-ui/react";
import { useField } from "formik";
import React from "react";

interface InputFieldProps {
  type: string;
  name: string;
  label: string;
  placeholder: string;
  submitting: boolean;
  required?: boolean;
  option?: string;
}

const InputField: React.FC<InputFieldProps> = ({ required = true, label, submitting, option, ...props }) => {
  const [field, { error }] = useField(props);

  if (option === 'select') {
    return (
      <FormControl mt={4} isInvalid={!!error} isRequired={required} isDisabled={submitting}>
        <FormLabel htmlFor={field.name}>{label}</FormLabel>
        <Select {...field} {...props} id={field.name}>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
        {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
      </FormControl>
    )
  }

  return (
    <FormControl mt={4} isInvalid={!!error} isRequired={required} isDisabled={submitting}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <Input {...field} {...props} id={field.name} />
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  );
}

export default InputField;