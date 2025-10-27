import { Input, Field } from "@chakra-ui/react";

const InputField = ({ label, placeholder, value, onChange }) => {
  return (
    <Field.Root>
      <Field.Label>
        {label} <Field.RequiredIndicator />
      </Field.Label>
      <Input
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </Field.Root>
  );
};

export default InputField;
