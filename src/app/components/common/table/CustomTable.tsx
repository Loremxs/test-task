"use client";

import { Table, Stack } from "@chakra-ui/react";
import { type Table as TanStackTable } from "@tanstack/react-table";
import CustomTableHeader from "./CustomTableHeader";
import CustomTableBody from "./CustomTableBody";

type CustomTableProps<T> = {
  table: TanStackTable<T>;
};

const CustomTable = <T,>({ table }: CustomTableProps<T>) => {
  return (
    <Stack gap="10">
      <Table.Root size="sm" variant="outline" native>
        <CustomTableHeader table={table} />
        <CustomTableBody table={table} />
      </Table.Root>
    </Stack>
  );
};

export default CustomTable;
