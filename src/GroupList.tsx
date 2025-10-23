import { Button, HStack } from "@chakra-ui/react";

type GroupListProps<T extends { _id: string; name: string }> = {
  items: Record<string, T> | T[];
  valueProperty?: keyof T;
  contentProperty?: keyof T;
  selectedItem?: string;
  onSelect: (id: string) => void;
};

function GroupList<T extends { _id: string; name: string }>({
  items,
  valueProperty = "_id",
  contentProperty = "name",
  selectedItem,
  onSelect,
}: GroupListProps<T>) {
  const isArray = Array.isArray(items);
  const list = isArray ? items : Object.values(items);
  return (
    <HStack wrap="wrap">
      {list.map((item) => {
        const value = item[valueProperty];
        const label = item[contentProperty];
        const isActive = selectedItem === value;
        console.log(selectedItem);
        return (
          <Button
            key={String(value)}
            variant={isActive ? "solid" : "outline"}
            size="sm"
            onClick={() => onSelect(String(value))}
          >
            {String(label)}
          </Button>
        );
      })}
    </HStack>
  );
}

export default GroupList;
