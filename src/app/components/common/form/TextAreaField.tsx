import { Textarea, HStack, Field } from "@chakra-ui/react";

const TextAreaField = ({ placeholder, label, value, onChange }) => {
  return (
    <HStack gap="10" width="full">
      <Field.Root>
        <Field.Label>{label}</Field.Label>
        <Textarea
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={7}
          resize="none"
        />
      </Field.Root>
    </HStack>
  );
};

export default TextAreaField;
