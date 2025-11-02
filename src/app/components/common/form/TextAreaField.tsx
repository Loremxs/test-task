import { Textarea, HStack, Field } from "@chakra-ui/react";
import React from "react";
import { useBreakpointValue } from "@chakra-ui/react";

type TextAreaFieldProps = {
  placeholder?: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  rows?: number;
};

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  placeholder,
  label,
  value,
  onChange,
  rows,
}) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <HStack gap="10" width="full">
      <Field.Root>
        <Field.Label fontSize="12px" fontWeight={400}>
          {label}
        </Field.Label>
        <Textarea
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={rows}
          resize="none"
          borderRadius="lg"
          borderColor="#B0B0B0"
          fontSize={isMobile ? "12px" : "14px"}
        />
      </Field.Root>
    </HStack>
  );
};

export default TextAreaField;
