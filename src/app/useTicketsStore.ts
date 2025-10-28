import { create } from "zustand";
import type { TTicket, TPriority, TCategory, TStatus } from "./types/types";
import { mockTickets } from "./api/tickets.api";
import { priorities } from "./api/priorities";
import { categories } from "./api/categories";

type TicketsState = {
  tickets: TTicket[];
  categories: Record<string, TCategory>;
  priorities: Record<string, TPriority>;
  search: string;
  statusFilter: TStatus | null;

  setSearch: (value: string) => void;
  setStatusFilter: (status: TStatus | null) => void;
  loadMockData: () => void;
};

export const useTicketsStore = create<TicketsState>((set) => ({
  tickets: [],
  categories: {},
  priorities: {},
  search: "",
  statusFilter: null,

  setSearch: (value) => set({ search: value }),
  setStatusFilter: (status) => set({ statusFilter: status }),

  loadMockData: () => {
    set({
      tickets: mockTickets,
      categories: categories.reduce((acc, c) => ({ ...acc, [c._id]: c }), {}),
      priorities: priorities.reduce((acc, p) => ({ ...acc, [p._id]: p }), {}),
    });
  },
}));
