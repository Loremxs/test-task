import { Checkbox } from "@chakra-ui/react";
import React from "react";

type CheckboxFieldProps = {
  label: string;
  value: boolean;
  onChange: (checked: boolean) => void;
};

const CheckboxField: React.FC<CheckboxFieldProps> = ({
  label,
  value,
  onChange,
}) => {
  return (
    <Checkbox.Root
      checked={value}
      onCheckedChange={(e) => onChange(!!e.checked)}
      className="checkbox-field"
    >
      <Checkbox.HiddenInput />
      <Checkbox.Control borderRadius="5px" cursor="pointer" />
      <Checkbox.Label fontWeight={400}>{label}</Checkbox.Label>
    </Checkbox.Root>
  );
};

export default CheckboxField;
