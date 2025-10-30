import { Button, HStack, Box, useBreakpointValue } from "@chakra-ui/react";
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
  if (isMobile) {
    return (
      <Box
        w="100%"
        overflowX="auto"
        overflowY="hidden"
        css={{
          "&::-webkit-scrollbar": { display: "none" },
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        }}
      >
        <HStack gap="2" py="2" px="1" w="max-content">
          {items?.map((item) => {
            const isSelected = selectedItem === item.value;
            return (
              <Button
                key={String(item.value)}
                variant={isSelected ? "solid" : "subtle"}
                size="sm"
                onClick={() => onItemSelect(item.value)}
                whiteSpace="nowrap"
                flexShrink={0}
              >
                {item.label}
              </Button>
            );
          })}
        </HStack>
      </Box>
    );
  }

  return (
    <HStack wrap="wrap" gap="2" py="2">
      {items?.map((item) => {
        const isSelected = selectedItem === item.value;
        return (
          <Button
            key={String(item.value)}
            variant={isSelected ? "solid" : "subtle"}
            size="md"
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
