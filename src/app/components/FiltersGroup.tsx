import { Button, HStack, Box, useBreakpointValue } from "@chakra-ui/react";
import "../styles/FiltersGroup.css";
import type { FilterItem } from "../types/types";

type FiltersGroupProps<T> = {
  items: FilterItem<T>[];
  onItemSelect: (value: T) => void;
  selectedItem: T;
};

const FiltersGroup = <T,>({
  items,
  onItemSelect,
  selectedItem,
}: FiltersGroupProps<T>) => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <HStack
      wrap={isMobile ? undefined : "wrap"}
      overflowX={isMobile ? "auto" : undefined}
      gap="2"
      py="2"
      className={"filters-group-container"}
    >
      {items?.map((item) => {
        const isSelected = selectedItem === item.value;

        if (item.CustomComponent) {
          return item.CustomComponent;
        }

        return (
          <Button
            key={String(item.value)}
            variant={isSelected ? "solid" : "subtle"}
            size={isMobile ? "sm" : "md"}
            onClick={() => onItemSelect(item.value)}
          >
            {item.label}
          </Button>
        );
      })}
    </HStack>
  );
};

export default FiltersGroup;
