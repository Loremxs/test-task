import { useState, useEffect, useMemo, useCallback } from "react";
import { Stack, HStack, Separator } from "@chakra-ui/react";
import { statuses } from "@/app/api/statuses";
import { mockTickets } from "@/app/api/tickets.api";
import type { TTicket, TStatus, TCategory, TPriority } from "@/app/types/types";
import type { FilterItem } from "@/app/types/types";
import FiltersGroup from "../FiltersGroup";
import TicketsTable from "../ui/TicketsTable";
import SearchInput from "../ui/SearchInput";
import { statusesConfig } from "../../constants/statuses";
import { useFilterTickets } from "../../hooks/useFilterTickets";
import TicketsModal from "../ui/TicketsModal";
import { categories } from "@/app/api/categories";
import { priorities } from "@/app/api/priorities";
import PDFExportButton from "../ui/PDFExportButton";
import OnlyMyTicketsFilter from "../ui/OnlyMyTicketsFilter";

const TicketsListPage = () => {
  const [tickets, setTickets] = useState<TTicket[]>([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<TStatus | null>(null);
  const [categoriesData, setCategories] = useState<Record<string, TCategory>>(
    {}
  );
  const [prioritiesData, setPriorities] = useState<Record<string, TPriority>>(
    {}
  );
  useEffect(() => {
    const timer = setTimeout(() => {
      setTickets(mockTickets);
      setCategories(categories);
      setPriorities(priorities);
    }, 1000);

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
    <Stack>
      <Stack
        py={5}
        borderBottom="1px solid"
        borderColor="#D9E1EC"
        px={7}
        gap={3}
      >
        <HStack>
          <SearchInput value={search} onChange={setSearch} />
          <PDFExportButton /> {/*заглушка */}
          <TicketsModal
            tickets={tickets}
            categories={categoriesData}
            priorities={prioritiesData}
          />
        </HStack>
        <Stack direction="row" gap="2" flexWrap="wrap">
          <HStack gap="2" flexWrap="wrap">
            <FiltersGroup
              items={statusesFilterList}
              selectedItem={statusFilter}
              onItemSelect={handleSelectStatus}
            />
            <Separator orientation="vertical" height="9" size="lg" />
            <OnlyMyTicketsFilter /> {/*заглушка */}
          </HStack>
        </Stack>
      </Stack>
      <TicketsTable tickets={filteredTickets} />
    </Stack>
  );
};

export default TicketsListPage;
