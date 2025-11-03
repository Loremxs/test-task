import { useEffect, useMemo, useCallback, useState } from "react";
import { Stack, HStack, Separator, Loader } from "@chakra-ui/react";
import { statuses } from "@/app/api/statuses";
import FiltersGroup from "../../FiltersGroup";
import TicketsTable from "../../ui/TicketsTable";
import SearchInput from "../../ui/SearchInput";
import { statusesConfig } from "../../../constants/statuses";
import { useFilterTickets } from "../../../hooks/useFilterTickets";
import TicketsModal from "../../ui/TicketModal";
import PDFExportButton from "../../ui/PDFExportButton";
import OnlyMyTicketsFilter from "../../ui/OnlyMyTicketsFilter";
import { useTicketsPageStore } from "@/app/store/useTicketsPageStore";
import { useTicketsStore } from "@/app/store/useTicketsStore";
import { usePrioritiesStore } from "@/app/store/usePrioritiesStore";
import { useCategoriesStore } from "@/app/store/useCategoriesStore";
import type { FilterItem } from "@/app/types/common";
import type { Status } from "@/app/types/ticket";

const TicketsListPageDesktop = () => {
  const { priorities } = usePrioritiesStore();
  const { categories } = useCategoriesStore();
  const { tickets, isLoading } = useTicketsStore();
  const { loadAll } = useTicketsPageStore();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<Status | null>(null);
  useEffect(() => {
    loadAll();
  }, []);

  const filteredTickets = useFilterTickets({ search, statusFilter, tickets });
  const statusesFilterList = useMemo<FilterItem<Status | null>[]>(() => {
    const baseStatuses = Object.keys(statuses).map((status) => ({
      key: "status",
      value: status as Status,
      label: statusesConfig[status as Status].localization,
    }));
    return [
      ...baseStatuses,
      { value: null, label: "Все статусы" },
      {
        CustomComponent: (
          <HStack>
            <Separator orientation="vertical" height="9" size="lg" />
            <OnlyMyTicketsFilter />
          </HStack>
        ),
      },
    ];
  }, []);

  const handleSelectStatus = useCallback((value: Status | null) => {
    setStatusFilter(value);
  }, []);

  return (
    <Stack>
      <Stack
        py={5}
        px={10}
        borderBottom="1px solid"
        borderColor="#D9E1EC"
        gap={3}
      >
        <HStack>
          <SearchInput value={search} onChange={setSearch} />
          <PDFExportButton />
          <TicketsModal />
        </HStack>
        <FiltersGroup
          items={statusesFilterList}
          selectedItem={statusFilter}
          onItemSelect={handleSelectStatus}
        />
      </Stack>
      <Stack px={10} py={7}>
        {!isLoading ? (
          <TicketsTable
            tickets={filteredTickets}
            priorities={priorities}
            categories={categories}
          />
        ) : (
          <Loader />
        )}
      </Stack>
    </Stack>
  );
};

export default TicketsListPageDesktop;
