import { useMemo } from "react";
import { parseISO, isToday, isYesterday, format } from "date-fns";
import { ru } from "date-fns/locale";
import type { Ticket } from "@/app/types/ticket";

type GroupedTickets = [string, Ticket[]][];

const getGroupLabel = (dateStr: string) => {
  const date = parseISO(dateStr);

  if (isToday(date)) return "СЕГОДНЯ";
  if (isYesterday(date)) return "ВЧЕРА";
  return `${format(date, "LLLL yyyy", { locale: ru })}`;
};

export const useGroupedTickets = (tickets: Ticket[]) => {
  const groupedTickets = useMemo(() => {
    if (!tickets?.length) return [];

    const groups = tickets.reduce((acc, ticket) => {
      const dateKey = format(parseISO(ticket.createdAt), "yyyy-MM-dd");
      if (!acc[dateKey]) acc[dateKey] = [];
      acc[dateKey].push(ticket);
      return acc;
    }, {} as Record<string, Ticket[]>);

    return Object.entries(groups)
      .sort(([a], [b]) => new Date(b).getTime() - new Date(a).getTime())
      .map(([dateKey, tickets]) => [
        getGroupLabel(dateKey),
        tickets,
      ]) as GroupedTickets;
  }, [tickets]);

  return groupedTickets;
};
