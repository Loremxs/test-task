import { Checkbox } from "@chakra-ui/react";

const CheckboxField = ({ label, value, onChange }) => {
  return (
    <Checkbox.Root
      checked={value}
      onCheckedChange={(e) => onChange(!!e.checked)}
    >
      <Checkbox.HiddenInput />
      <Checkbox.Control borderRadius="5px" />
      <Checkbox.Label fontWeight={400}>{label}</Checkbox.Label>
    </Checkbox.Root>
  );
};

export default CheckboxField;
