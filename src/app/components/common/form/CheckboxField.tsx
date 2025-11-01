import { Checkbox } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";
const CheckboxField = ({ label, value, onChange }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Checkbox.Root
      checked={value}
      onCheckedChange={(e) => onChange(!!e.checked)}
    >
      <Checkbox.HiddenInput />
      <Checkbox.Control borderRadius="5px" />
      <Checkbox.Label fontWeight={400} fontSize={isMobile ? "12px" : "14px"}>
        {label}
      </Checkbox.Label>
    </Checkbox.Root>
  );
};

export default CheckboxField;
