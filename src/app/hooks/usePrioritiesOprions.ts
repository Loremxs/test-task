import { createListCollection } from "@chakra-ui/react";
import { useMemo } from "react";

export const usePrioritiesOptions = (priorities) => {
  return useMemo(() => {
    return createListCollection({
      items: priorities.map((priority) => {
        return { value: priority._id, label: priority.name };
      }),
    });
  }, [priorities]);
};
