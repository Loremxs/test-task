import { createListCollection, type ListCollection } from "@chakra-ui/react";
import { useMemo } from "react";
import type { OptionItem } from "../types/common";

export const useOptions = (
  list: { _id: string; name: string }[]
): ListCollection<OptionItem> => {
  return useMemo(() => {
    return createListCollection({
      items: list.map((item) => ({
        value: item._id,
        label: item.name,
      })),
    });
  }, [list]);
};
