"use client";

import { Select } from "@chakra-ui/react";

const SelectField = ({
  label,
  placeholder,
  options,
  value,
  size,
  onChange,
  CustomSelectedValue,
  CustomIndicator,
}) => {
  return (
    <Select.Root
      collection={options}
      size={size}
      onValueChange={(e) => {
        onChange(e.value);
      }}
      value={value}
      borderRadius="lg"
    >
      <Select.HiddenSelect />
      <Select.Label>{label}</Select.Label>
      <Select.Control>
        <Select.Trigger>
          {!!CustomSelectedValue ? (
            CustomSelectedValue
          ) : (
            <Select.ValueText placeholder={placeholder} />
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
