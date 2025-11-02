import type { TStatus } from "@/app/types/common";
export const statusesConfig: Record<
  TStatus,
  { localization: string; color: string }
> = {
  new: { localization: "Новые", color: "#F0CDFA" },
  rejected: { localization: "Отклонены", color: "red" },
  review: { localization: "На рассмотрении", color: "orange" },
  processed: { localization: "В работе", color: "#FFEBB3" },
  waiting: { localization: "Ожидают запчасти", color: "cyan" },
  ready: { localization: "Готово", color: "green" },
  closed: { localization: "Закрыты", color: "gray" },
};
