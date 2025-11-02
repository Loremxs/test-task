import { Checkbox } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";
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
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Checkbox.Root
      checked={value}
      onCheckedChange={(e) => onChange(!!e.checked)}
    >
      <Checkbox.HiddenInput />
      <Checkbox.Control borderRadius="5px" cursor="pointer" />
      <Checkbox.Label fontWeight={400} fontSize={isMobile ? "12px" : "14px"}>
        {label}
      </Checkbox.Label>
    </Checkbox.Root>
  );
};

export default CheckboxField;
