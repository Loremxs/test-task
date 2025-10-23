import CustomTable from "./components/common/table/CustomTable";
import type { TColumn, TicketsTableProps, TTicket } from "@/types";
import Status from "@/components/ui/Status";
import Priority from "@/components/ui/Priority";
import Pharmacy from "@/components/ui/Pharmacy";
import Category from "@/components/ui/Category";

const columns: Record<string, TColumn<TTicket>> = {
  number: { path: "number", name: "№" },
  pharmacyName: {
    path: "pharmacyName",
    name: "Аптека",
    component: (ticket: TTicket) => (
      <Pharmacy
        pharmacyCode={ticket.pharmacyCode}
        pharmacyName={ticket.pharmacyName}
      />
    ),
  },
  createdAt: { path: "createdAt", name: "Создана" },
  priority: {
    path: "priority",
    name: "Приоритет",
    component: (ticket: TTicket) => <Priority priority={ticket.priority} />,
  },
  topic: { path: "topic", name: "Тема" },
  category: {
    path: "category",
    name: "Категория",
    component: (ticket: TTicket) => <Category category={ticket.category} />,
  },
  technician: { path: "technician", name: "Техник" },
  reaction: { path: "reaction", name: "Реакция" },
  resolution: { path: "resolution", name: "Решение" },
  status: {
    path: "status",
    name: "Статус",
    component: (ticket: TTicket) => <Status status={ticket.status} />,
  },
};
const TicketsTable: React.FC<TicketsTableProps> = ({ tickets }) => {
  return <CustomTable<TTicket> data={tickets} columns={columns} />;
};

export default TicketsTable;
