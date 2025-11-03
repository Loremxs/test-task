import FiltersGroup from "../../FiltersGroup";
import { useState, useEffect, useMemo, useCallback } from "react";
import { useTicketsPageStore } from "@/app/store/useTicketsPageStore";
import { useTicketsStore } from "@/app/store/useTicketsStore";
import { usePrioritiesStore } from "@/app/store/usePrioritiesStore";
import { useFilterTickets } from "../../../hooks/useFilterTickets";
import { useGroupedTickets } from "../../../hooks/useGroupedTickets";
import { statusesConfig } from "@/app/constants/statuses";
import { statuses } from "@/app/api/statuses";
import type { Status } from "@/app/types/ticket";
import type { FilterItem } from "@/app/types/common";
import { Stack, Text, Box } from "@chakra-ui/react";
import OnlyMyTicketsFilter from "../../ui/OnlyMyTicketsFilter";
import TicketsCard from "../../ui/TicketsCard";
import MobileSearchBar from "../../ui/MobileSearchBar";
import TicketModal from "../../ui/TicketModal";

const TicketsListPageMobile = () => {
  const { priorities } = usePrioritiesStore();
  const { tickets } = useTicketsStore();
  const { loadAll } = useTicketsPageStore();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<Status | null>(null);

  useEffect(() => {
    loadAll();
  }, []);

  const filteredTickets = useFilterTickets({ search, statusFilter, tickets });
  const groupedTickets = useGroupedTickets(filteredTickets);

  const statusesFilterList = useMemo<FilterItem<Status | null>[]>(() => {
    const baseStatuses = Object.keys(statuses).map((status) => ({
      key: "status",
      value: status as Status,
      label: statusesConfig[status as Status].localization,
    }));
    return [
      { CustomComponent: <OnlyMyTicketsFilter /> },
      { value: null, label: "Все статусы" },
      ...baseStatuses,
    ];
  }, []);

  const handleSelectStatus = useCallback((value: Status | null) => {
    setStatusFilter(value);
  }, []);

  return (
    <Stack>
      <FiltersGroup
        items={statusesFilterList}
        selectedItem={statusFilter}
        onItemSelect={handleSelectStatus}
      />

      <Stack px="10px" pb="70px">
        {groupedTickets.map(([label, tickets]) => (
          <Box key={label} mt={3}>
            <Text
              fontSize="14px"
              fontWeight={"semibold"}
              color="#1C1C1C"
              mb={1}
              ml={2}
              textTransform="uppercase"
            >
              {label}
            </Text>

            <Stack>
              {tickets.map((ticket) => {
                const priority = priorities[ticket.priority];
                return (
                  <TicketsCard
                    key={ticket.id}
                    ticket={ticket}
                    priority={priority}
                  />
                );
              })}
            </Stack>
          </Box>
        ))}
      </Stack>

      <Stack>
        <MobileSearchBar value={search} onChange={setSearch} />
        <TicketModal />
      </Stack>
    </Stack>
  );
};

export default TicketsListPageMobile;
