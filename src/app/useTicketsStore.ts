import { create } from "zustand";
import type { Ticket, Priority, Category } from "./types/ticket";
import { mockTickets } from "./api/tickets.api";
import { priorities } from "./api/priorities";
import { categories } from "./api/categories";

type TicketsState = {
  tickets: Ticket[];
  categories: Record<string, Category>;
  priorities: Record<string, Priority>;
  categoriesList: Category[];
  prioritiesList: Priority[];
  isLoading: boolean;
  loadTicketsMockData: () => void;
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const useTicketsStore = create<TicketsState>((set) => ({
  tickets: [],
  categories: {},
  priorities: {},
  categoriesList: [],
  prioritiesList: [],
  isLoading: false,

  loadTicketsMockData: async () => {
    set({ isLoading: true });
    await delay(2000);
    const categoriesMap = categories.reduce(
      (acc, c) => ({ ...acc, [c._id]: c }),
      {}
    );
    const prioritiesMap = priorities.reduce(
      (acc, p) => ({ ...acc, [p._id]: p }),
      {}
    );
    set({
      tickets: mockTickets,
      categories: categoriesMap, // Вынести в отдельный стор
      priorities: prioritiesMap, // const
      categoriesList: categories,
      prioritiesList: priorities,
      isLoading: false,
    });
  },
}));
