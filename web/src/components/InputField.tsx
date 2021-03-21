import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Select,
} from "@chakra-ui/react";
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

const InputField: React.FC<InputFieldProps> = ({
  required = true,
  label,
  submitting,
  option,
  ...props
}) => {
  const [field, { error }] = useField(props);

  if (option === "select") {
    return (
      <FormControl
        mt={4}
        isInvalid={!!error}
        isRequired={required}
        isDisabled={submitting}
      >
        <FormLabel htmlFor={field.name}>{label}</FormLabel>
        <Select {...field} {...props} id={field.name}>
          <option value="Groceries">Groceries</option>
          <option value="Medical & Healthcare">Medical & Healthcare</option>
          <option value="House Items/Supplies">House Items/Supplies</option>
          <option value="Transport">Transport</option>
          <option value="Taxes and fees">Taxes and fees</option>
          <option value="Entertainment & travels">
            Entertainment & travels
          </option>
          <option value="Installments">Installments</option>
          <option value="Personal">Personal</option>
          <option value="Education">Education</option>
          <option value="Gifts/Donations">Gifts/Donations</option>
          <option value="Other">Other</option>
        </Select>
        {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
      </FormControl>
    );
  }

  return (
    <FormControl
      mt={4}
      isInvalid={!!error}
      isRequired={required}
      isDisabled={submitting}
    >
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <Input {...field} {...props} id={field.name} step={0.01} min={0.01} />
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  );
};

export default InputField;
