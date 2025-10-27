import { Checkbox } from "@chakra-ui/react";

const CheckboxField = ({ label, value, onChange }) => {
  return (
    <Checkbox.Root
      checked={value}
      onCheckedChange={(e) => onChange(!!e.checked)}
    >
      <Checkbox.HiddenInput />
      <Checkbox.Control />
      <Checkbox.Label>{label}</Checkbox.Label>
    </Checkbox.Root>
  );
};

export default CheckboxField;
