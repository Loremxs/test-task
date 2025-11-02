import { create } from "zustand";
import type { Category } from "./types/ticket";
import { categories } from "./api/categories";

type CategoriesState = {
  categories: Record<string, Category>;
  categoriesList: Category[];
  loadCategoriesMockData: () => void;
};

export const useCategoriesStore = create<CategoriesState>((set) => ({
  categories: {},
  categoriesList: [],

  loadCategoriesMockData: () => {
    const categoriesMap = categories.reduce(
      (acc, c) => ({ ...acc, [c._id]: c }),
      {}
    );
    set({
      categories: categoriesMap,
      categoriesList: categories,
    });
  },
}));
