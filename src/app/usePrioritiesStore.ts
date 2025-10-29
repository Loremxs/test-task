import { create } from "zustand";
import type { TPriority } from "./types/types";
import { priorities } from "./api/priorities";

type PrioritiesState = {
  priorities: Record<string, TPriority>;
  prioritiesList: TPriority[];
  loadPrioritiesMockData: () => void;
};

export const usePrioritiesStore = create<PrioritiesState>((set) => ({
  priorities: {},
  prioritiesList: [],

  loadPrioritiesMockData: () => {
    const prioritiesMap = priorities.reduce(
      (acc, p) => ({ ...acc, [p._id]: p }),
      {}
    );
    set({
      priorities: prioritiesMap,
      prioritiesList: priorities,
    });
  },
}));
