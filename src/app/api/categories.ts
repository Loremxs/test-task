import type { TCategory } from "../types/common";

export const categories: TCategory[] = [
  { _id: "cat_001", name: "Кассы" },
  { _id: "cat_002", name: "Холодильники" },
  { _id: "cat_003", name: "Кондиционеры" },
  { _id: "cat_004", name: "Изм. оборуд." },
  { _id: "cat_005", name: "Помещения" },
  { _id: "cat_006", name: "ИТ" },
  { _id: "cat_007", name: "Сантехника" },
];

export const categoriesById = categories.reduce((acc, category) => {
  return {
    ...acc,
    [category._id]: category,
  };
}, {});
