import { createListCollection } from "@chakra-ui/react";
import { useMemo } from "react";

export const useCategoriesOptions = (categories) => {
  return useMemo(() => {
    return createListCollection({
      items: categories.map((category) => {
        return { value: category._id, label: category.name };
      }),
    });
  }, [categories]);
};
