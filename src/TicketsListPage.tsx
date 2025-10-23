import { Stack, Button, HStack } from "@chakra-ui/react";
import { statuses } from "@/fake.api/statuses";
import GroupList from "./GroupList";
import TicketsTable from "./TicketsTable";
import SearchInput from "./SearchInput";
import { useState, useEffect } from "react";
import { mockTickets } from "@/fake.api/tickets.api";
import type { TTicket } from "@/types";

const TicketsListPage = () => {
  const [tickets, setTickets] = useState<TTicket[]>([]);
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  useEffect(() => {
    const timer = setTimeout(() => setTickets(mockTickets), 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredTickets = tickets.filter((ticket) => {
    const matchesQuery =
      ticket.number.toLowerCase().includes(query.toLowerCase()) ||
      ticket.topic.toLowerCase().includes(query.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || ticket.status._id === statusFilter;

    return matchesQuery && matchesStatus;
  });
  const handleResetFilters = () => {
    setStatusFilter("all");
    setQuery("");
  };

  return (
    <Stack gap="6">
      <Stack direction="row" gap="2" flexWrap="wrap">
        <HStack gap="2" flexWrap="wrap">
          <GroupList
            items={statuses}
            selectedItem={statusFilter}
            onSelect={setStatusFilter}
          />
          <Button
            variant={statusFilter === "all" ? "solid" : "outline"}
            size="sm"
            onClick={handleResetFilters}
          >
            Все статусы
          </Button>
        </HStack>
      </Stack>
      <SearchInput value={query} onChange={setQuery} />
      <TicketsTable tickets={filteredTickets} />
    </Stack>
  );
};

export default TicketsListPage;
