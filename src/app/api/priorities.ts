import type { Priority } from "../types/ticket";
export const priorities: Priority[] = [
  { _id: "pr_1", name: "Критический" },
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
