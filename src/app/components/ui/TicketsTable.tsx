"use client";

import * as React from "react";
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import type { Ticket } from "@/app/types/ticket";
import CustomTable from "../common/table/CustomTable";
import StatusBadge from "@/app/components/ui/StatusBadge";
import PriorityInfo from "@/app/components/ui/PriorityInfo";
import Pharmacy from "@/app/components/ui/Pharmacy";
import CategoryInfo from "@/app/components/ui/CategoryInfo";
import CreatedAtTime from "./CreatedAtTime";
import TimerInfo from "./TimerInfo";
import { Box } from "@chakra-ui/react";
import { useMemo } from "react";

type TicketsTableProps = {
  tickets: Ticket[];
  priorities: Record<string, any>;
  categories: Record<string, any>;
};

const columnHelper = createColumnHelper<Ticket>();

const TicketsTable: React.FC<TicketsTableProps> = ({
  tickets,
  priorities,
  categories,
}) => {
  const columns = useMemo(
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
          return <PriorityInfo priority={priorities[t.priority]} />;
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
          return <CategoryInfo category={categories[t.category]} />;
        },
      }),
      columnHelper.accessor("technician", { header: "Техник" }),
      columnHelper.display({
        id: "reaction",
        header: "Реакция",
        cell: (info) => {
          const t = info.row.original;
          return <TimerInfo timer={t.reaction} />;
        },
      }),
      columnHelper.display({
        id: "resolution",
        header: "Решение",
        cell: (info) => {
          const t = info.row.original;
          return <TimerInfo timer={t.resolution} />;
        },
      }),
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

  return (
    <Box
      border="1px solid"
      borderColor="gray.200"
      borderTopRadius="lg"
      borderBottomRadius="none"
      borderLeft="none"
      borderRight="none"
      overflow="auto"
    >
      <CustomTable table={table} />
    </Box>
  );
};

export default TicketsTable;
