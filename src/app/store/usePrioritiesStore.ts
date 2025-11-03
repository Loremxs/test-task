import { priorities } from "./../api/priorities";
import { create } from "zustand";
import type { Priority } from "../types/ticket";

type PrioritiesState = {
  priorities: Record<string, Priority>;
  prioritiesList: Priority[];
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
