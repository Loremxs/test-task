import type { TPriority } from "../types/types";

export const priorities: TPriority[] = [
  { _id: "pr_1", name: "Критич." },
  { _id: "pr_2", name: "Высокий" },
  { _id: "pr_3", name: "Средний" },
  { _id: "pr_4", name: "Низкий" },
];

export const prioritiesById = priorities.reduce((acc, priority) => {
  return {
    ...acc,
    [priority._id]: priority,
  };
}, {});
