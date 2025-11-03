import { create } from "zustand";
import type { Ticket } from "./../types/ticket";
import { mockTickets } from "./../api/tickets.api";

type TicketsState = {
  tickets: Ticket[];
  isLoading: boolean;
  loadTicketsMockData: () => void;
};

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const useTicketsStore = create<TicketsState>((set) => ({
  tickets: [],
  isLoading: false,

  loadTicketsMockData: async () => {
    set({ isLoading: true });
    await delay(2000);
    set({
      tickets: mockTickets,
      isLoading: false,
    });
  },
}));
