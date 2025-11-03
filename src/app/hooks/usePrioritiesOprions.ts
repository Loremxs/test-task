import { createListCollection } from "@chakra-ui/react";
import { useMemo } from "react";
import type { Priority } from "../types/ticket";
export const usePrioritiesOptions = (priorities: Priority[] = []) => {
  return useMemo(() => {
    return createListCollection({
      items: priorities.map((priority) => {
        return { value: priority._id, label: priority.name };
      }),
    });
  }, [priorities]);
};
