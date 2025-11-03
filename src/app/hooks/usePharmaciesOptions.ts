import { createListCollection } from "@chakra-ui/react";
import { useMemo } from "react";
import type { Ticket } from "../types/ticket";
import type { OptionItem } from "../types/common";

export const usePharmaciesOptions = (pharmacies: Ticket[]) => {
  return useMemo(() => {
    if (!pharmacies?.length)
      return createListCollection<OptionItem>({ items: [] });

    return createListCollection({
      items: pharmacies.map((pharmacy) => ({
        value: String(pharmacy.id),
        label: `${pharmacy.pharmacyName}`,
      })),
    });
  }, [pharmacies]);
};
