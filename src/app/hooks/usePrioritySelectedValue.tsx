import { useCallback } from "react";
import PriorityInfo from "@/app/components/ui/Ticket/PriorityInfo";
import type { Priority } from "@/app/types/ticket";

export const usePrioritySelectedValue = (
  priorities: Record<string, Priority>
) => {
  return useCallback(
    (id: string) => {
      const priority = priorities[id];
      if (!priority) return null;
      return <PriorityInfo priority={priority} showAdditionalInfo />;
    },
    [priorities]
  );
};
