import { create } from "zustand";
import { pharmacies } from "../api/pharmacies";
import type { Pharmacy } from "../types/ticket";

type PharmaciesState = {
  pharmacies: Record<string, Pharmacy>;
  pharmaciesList: Pharmacy[];
  loadPharmaciesMockData: () => void;
};

export const usePharmaciesStore = create<PharmaciesState>((set) => ({
  pharmacies: {},
  pharmaciesList: [],

  loadPharmaciesMockData: () => {
    const pharmaciesMap = pharmacies.reduce(
      (acc, p) => ({ ...acc, [p._id]: p }),
      {}
    );
    set({
      pharmacies: pharmaciesMap,
      pharmaciesList: pharmacies,
    });
  },
}));
