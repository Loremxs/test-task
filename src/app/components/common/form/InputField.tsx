import { Input, Field } from "@chakra-ui/react";
import React from "react";

type InputFieldProps = {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  value,
  onChange,
}) => {
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
