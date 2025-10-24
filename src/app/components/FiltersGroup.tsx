import { Button, HStack } from "@chakra-ui/react";
export type FilterItem<T> = {
  key?: string;
  value: T;
  label: string;
};

type FiltersGroupProps<T> = {
  items: FilterItem<T>[];
  onItemSelect: (value: T) => void;
  selectedItem: T;
};

function FiltersGroup<T>({
  items,
  onItemSelect,
  selectedItem,
}: FiltersGroupProps<T>) {
  return (
    <HStack wrap="wrap">
      {items?.map((item) => {
        const { value } = item;
        const isSelected = selectedItem === value;
        return (
          <Button
            key={String(value)}
            variant={isSelected ? "solid" : "outline"}
            size="sm"
            onClick={() => onItemSelect(value)}
          >
            {item?.label}
          </Button>
        );
      })}
    </HStack>
  );
}

export default FiltersGroup;
