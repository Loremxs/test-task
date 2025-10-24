import { useMemo } from "react";
import type { TTicket, TStatus } from "@/app/types/types";

type UseFilterTicketsParams = {
  search: string;
  statusFilter: TStatus | null;
  tickets: TTicket[];
};

export const useFilterTickets = ({
  search,
  statusFilter,
  tickets,
}: UseFilterTicketsParams): TTicket[] => {
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
