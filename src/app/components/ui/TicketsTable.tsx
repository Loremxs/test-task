"use client";

import * as React from "react";
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import type { TTicket } from "@/app/types/types";
import CustomTable from "../common/table/CustomTable";
import StatusBadge from "@/app/components/ui/StatusBadge";
import Priority from "@/app/components/ui/Priority";
import Pharmacy from "@/app/components/ui/Pharmacy";
import Category from "@/app/components/ui/Category";
import CreatedAtTime from "./CreatedAtTime";

type TicketsTableProps = {
  tickets: TTicket[];
  priorities: Record<string, any>;
  categories: Record<string, any>;
};

const columnHelper = createColumnHelper<TTicket>();

const TicketsTable: React.FC<TicketsTableProps> = ({
  tickets,
  priorities,
  categories,
}) => {
  const columns = React.useMemo(
    () => [
      columnHelper.accessor("number", {
        header: "№",
        cell: (info) => info.getValue(),
      }),
      columnHelper.display({
        id: "pharmacy",
        header: "Аптека",
        cell: (info) => {
          const t = info.row.original;
          return (
            <Pharmacy
              pharmacyCode={t.pharmacyCode}
              pharmacyName={t.pharmacyName}
            />
          );
        },
      }),
      columnHelper.accessor("createdAt", {
        header: "Создана",
        cell: (info) => <CreatedAtTime createdAt={info.getValue()} />,
      }),
      columnHelper.display({
        id: "priority",
        header: "Приоритет",
        cell: (info) => {
          const t = info.row.original;
          return <Priority priority={priorities[t.priority]} />;
        },
      }),
      columnHelper.accessor("topic", {
        header: "Тема",
      }),
      columnHelper.display({
        id: "category",
        header: "Категория",
        cell: (info) => {
          const t = info.row.original;
          return <Category category={categories[t.category]} />;
        },
      }),
      columnHelper.accessor("technician", { header: "Техник" }),
      columnHelper.accessor("reaction", { header: "Реакция" }),
      columnHelper.accessor("resolution", { header: "Решение" }),
      columnHelper.accessor("status", {
        header: "Статус",
        cell: (info) => <StatusBadge status={info.getValue()} />,
      }),
    ],
    [priorities, categories]
  );

  const table = useReactTable({
    data: tickets,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return <CustomTable table={table} />;
};

export default TicketsTable;
