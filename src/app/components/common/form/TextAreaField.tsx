import { Textarea, HStack, Field } from "@chakra-ui/react";

const TextAreaField = ({ placeholder, label, value, onChange, rows }) => {
  return (
    <HStack gap="10" width="full">
      <Field.Root>
        <Field.Label fontSize={"12px"} fontWeight={400}>
          {label}
        </Field.Label>
        <Textarea
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={rows}
          resize="none"
          borderRadius={"lg"}
          borderColor={"#B0B0B0"}
        />
      </Field.Root>
    </HStack>
  );
};

export default TextAreaField;
