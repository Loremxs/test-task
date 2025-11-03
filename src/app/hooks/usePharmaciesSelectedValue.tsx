import { useCallback } from "react";
import { HStack, Text } from "@chakra-ui/react";
import InfoBadge from "@/app/components/ui/Ticket/InfoBadge";
import type { Pharmacy } from "@/app/types/ticket";
export const usePharmacySelectedValue = (
  pharmacies: Record<string, Pharmacy>
) => {
  return useCallback(
    (pharmacyId: string) => {
      const pharmacy = pharmacies[pharmacyId];
      if (!pharmacy) return null;

      return (
        <HStack>
          <InfoBadge info={pharmacy._id} />
          <Text>{pharmacy.name}</Text>
        </HStack>
      );
    },
    [pharmacies]
  );
};
