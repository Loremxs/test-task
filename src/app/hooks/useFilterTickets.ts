import { useMemo } from "react";
import type { Ticket, Status } from "@/app/types/ticket";

type UseFilterTicketsParams = {
  search: string;
  statusFilter: Ticket | null;
  tickets: Status[];
};

export const useFilterTickets = ({
  search,
  statusFilter,
  tickets,
}: UseFilterTicketsParams): Ticket[] => {
  return useMemo(() => {
    const ticketsFilteredByStatus = statusFilter
      ? tickets?.filter((item) => item?.status === statusFilter)
      : [...tickets];

    const ticketsFilteredBySearch = ticketsFilteredByStatus?.filter((item) => {
      return (
        item?.number?.toLowerCase()?.includes(search.toLowerCase()) ||
        item?.topic?.toLowerCase()?.includes(search.toLowerCase())
      );
    });

    return ticketsFilteredBySearch;
  }, [search, statusFilter, tickets]);
};
