import { useState, useEffect, useMemo, useCallback } from "react";
import { Stack, HStack } from "@chakra-ui/react";
import { statuses } from "@/app/api/statuses";
import { mockTickets } from "@/app/api/tickets.api";
import type { TTicket, TStatus } from "@/app/types/types";
import type { FilterItem } from "../FiltersGroup";
import FiltersGroup from "../FiltersGroup";
import TicketsTable from "../ui/TicketsTable";
import SearchInput from "../ui/SearchInput";
import { statusesConfig } from "../../constants/statuses";
import { useFilterTickets } from "../../hooks/useFilterTickets";

const TicketsListPage = () => {
  const [tickets, setTickets] = useState<TTicket[]>([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<TStatus | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setTickets(mockTickets), 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredTickets = useFilterTickets({ search, statusFilter, tickets });

  const statusesFilterList = useMemo<FilterItem<TStatus | null>[]>(() => {
    const baseStatuses = Object.keys(statuses).map((status) => ({
      key: "status",
      value: status as TStatus,
      label: statusesConfig[status as TStatus].localization,
    }));
    return [...baseStatuses, { value: null, label: "Все статусы" }];
  }, []);

  const handleSelectStatus = useCallback((value: TStatus | null) => {
    setStatusFilter(value);
  }, []);

  return (
    <Stack gap="6">
      <Stack direction="row" gap="2" flexWrap="wrap">
        <HStack gap="2" flexWrap="wrap">
          <FiltersGroup
            items={statusesFilterList}
            selectedItem={statusFilter}
            onItemSelect={handleSelectStatus}
          />
        </HStack>
      </Stack>
      <SearchInput value={search} onChange={setSearch} />
      <TicketsTable tickets={filteredTickets} />
    </Stack>
  );
};

export default TicketsListPage;
