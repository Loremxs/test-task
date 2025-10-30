import FiltersGroup from "../../FiltersGroup";
import { useState, useEffect, useMemo, useCallback } from "react";
import { useTicketsPageStore } from "@/app/hooks/useTicketsPageStore";
import { useTicketsStore } from "@/app/useTicketsStore";
import { usePrioritiesStore } from "@/app/usePrioritiesStore";
import { useCategoriesStore } from "@/app/useCategoriesStore";
import { useFilterTickets } from "../../../hooks/useFilterTickets";
import { statusesConfig } from "@/app/constants/statuses";
import { statuses } from "@/app/api/statuses";
import type { TStatus } from "@/app/types/types";
import type { FilterItem } from "@/app/types/types";
import { HStack, Stack } from "@chakra-ui/react";
import OnlyMyTicketsFilter from "../../ui/OnlyMyTicketsFilter";
import TicketsCard from "../../ui/TicketsCard";
import MobileSearchBar from "../../ui/MobileSearchBar";

const TicketsListPageMobile = () => {
  const { priorities } = usePrioritiesStore();
  const { categories } = useCategoriesStore();
  const { tickets } = useTicketsStore();
  const { loadAll } = useTicketsPageStore();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState(null);

  useEffect(() => {
    loadAll();
  }, []);
  const filteredTickets = useFilterTickets({ search, statusFilter, tickets });
  const statusesFilterList = useMemo<FilterItem<TStatus | null>[]>(() => {
    const baseStatuses = Object.keys(statuses).map((status) => ({
      key: "status",
      value: status as TStatus,
      label: statusesConfig[status as TStatus].localization,
    }));
    return [{ value: null, label: "Все статусы" }, ...baseStatuses];
  }, []);

  const handleSelectStatus = useCallback((value: TStatus | null) => {
    setStatusFilter(value);
  }, []);
  return (
    <Stack>
      <HStack gap="2" flexWrap="wrap" align={"center"}>
        <OnlyMyTicketsFilter /> {/*заглушка */}
        <FiltersGroup
          items={statusesFilterList}
          selectedItem={statusFilter}
          onItemSelect={handleSelectStatus}
        />
      </HStack>
      {filteredTickets.map((ticket) => {
        const priority = priorities[ticket.priority];
        return (
          <TicketsCard key={ticket.id} ticket={ticket} priority={priority} />
        );
      })}
      <MobileSearchBar value={search} onChange={setSearch} />
    </Stack>
  );
};

export default TicketsListPageMobile;
