import { useCallback } from "react";
import { HStack, Text } from "@chakra-ui/react";
import InfoBadge from "@/app/components/ui/InfoBadge";
import type { Ticket } from "@/app/types/ticket";

export const usePharmacySelectedValue = (tickets: Ticket[]) => {
  return useCallback(
    (pharmacyId: string | number) => {
      const pharmacy = tickets.find((t) => t.id === Number(pharmacyId));
      if (!pharmacy) return null;

      return (
        <HStack>
          <InfoBadge info={pharmacy.pharmacyCode} />
          <Text>{pharmacy.pharmacyName}</Text>
        </HStack>
      );
    },
    [tickets]
  );
};
