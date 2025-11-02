"use client";
import { Select } from "@chakra-ui/react";
import type { SelectFieldProps } from "@/app/types/forms";
import { useBreakpointValue } from "@chakra-ui/react";
const SelectField = <T,>({
  label,
  placeholder,
  options,
  value,
  size,
  onChange,
  CustomSelectedValue,
  CustomIndicator,
}: SelectFieldProps<T>) => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Select.Root
      collection={options}
      size={size}
      onValueChange={(e) => {
        onChange(e.value);
      }}
      value={value}
    >
      <Select.HiddenSelect />
      <Select.Label fontSize="12px" fontWeight={400}>
        {label}
      </Select.Label>
      <Select.Control>
        <Select.Trigger
          borderRadius="lg"
          borderColor="#B0B0B0"
          cursor="pointer"
        >
          {!!CustomSelectedValue ? (
            CustomSelectedValue
          ) : (
            <Select.ValueText
              placeholder={placeholder}
              fontSize={isMobile ? "12px" : "14px"}
            />
          )}
        </Select.Trigger>
        <Select.IndicatorGroup>
          {!!CustomIndicator ? CustomIndicator : <Select.Indicator />}
        </Select.IndicatorGroup>
      </Select.Control>
      <Select.Positioner>
        <Select.Content>
          {options.items.map((item) => (
            <Select.Item item={item} key={item.value}>
              {item.label}
              <Select.ItemIndicator />
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Positioner>
    </Select.Root>
  );
};

export default SelectField;
