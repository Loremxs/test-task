import { createListCollection } from "@chakra-ui/react";
import { useMemo } from "react";

export const useOptions = (list) => {
  return useMemo(() => {
    return createListCollection({
      items: list.map((item) => {
        return { value: item._id, label: item.name };
      }),
    });
  }, [list]);
};
