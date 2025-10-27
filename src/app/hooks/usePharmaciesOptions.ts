import { createListCollection } from "@chakra-ui/react";
import { useMemo } from "react";

export const usePharmaciesOptions = (pharmacies) => {
  return useMemo(() => {
    if (!pharmacies?.length) return createListCollection({ items: [] });

    return createListCollection({
      items: pharmacies.map((pharmacy) => ({
        value: String(pharmacy.id),
        label: `${pharmacy.pharmacyName}`,
      })),
    });
  }, [pharmacies]);
};
