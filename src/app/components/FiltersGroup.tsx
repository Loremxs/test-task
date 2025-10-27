import { Button, HStack } from "@chakra-ui/react";
import type { FilterItem } from "../types/types";

type FiltersItemProps<T> = {
  items: FilterItem<T>[];
  onItemSelect: (value: T) => void;
  selectedItem: T;
};

function FiltersItem<T>({
  items,
  onItemSelect,
  selectedItem,
}: FiltersItemProps<T>) {
  return (
    <HStack wrap="wrap">
      {items?.map((item) => {
        const { value } = item;
        const isSelected = selectedItem === value;
        return (
          <Button
            key={String(value)}
            variant={isSelected ? "solid" : "subtle"}
            size="md"
            onClick={() => onItemSelect(value)}
          >
            {item?.label}
          </Button>
        );
      })}
    </HStack>
  );
}

export default FiltersItem;
