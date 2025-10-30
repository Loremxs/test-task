import { useEffect, useMemo, useCallback, useState } from "react";
import { Stack, HStack, Separator } from "@chakra-ui/react";
import { statuses } from "@/app/api/statuses";
import FiltersGroup from "../../FiltersGroup";
import TicketsTable from "../../ui/TicketsTable";
import SearchInput from "../../ui/SearchInput";
import { statusesConfig } from "../../../constants/statuses";
import { useFilterTickets } from "../../../hooks/useFilterTickets";
import TicketsModal from "../../ui/TicketsModal";
import PDFExportButton from "../../ui/PDFExportButton";
import OnlyMyTicketsFilter from "../../ui/OnlyMyTicketsFilter";
import { useTicketsPageStore } from "@/app/hooks/useTicketsPageStore";
import { useTicketsStore } from "@/app/useTicketsStore";
import { usePrioritiesStore } from "@/app/usePrioritiesStore";
import { useCategoriesStore } from "@/app/useCategoriesStore";

const TicketsListPageDesktop = () => {
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
    return [...baseStatuses, { value: null, label: "Все статусы" }];
  }, []);

  const handleSelectStatus = useCallback((value: TStatus | null) => {
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
          <PDFExportButton /> {/*заглушка */}
          <TicketsModal />
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
      <Stack px={10} py={7}>
        <TicketsTable
          tickets={filteredTickets}
          priorities={priorities}
          categories={categories}
        />
      </Stack>
    </Stack>
  );
};

export default TicketsListPageDesktop;
