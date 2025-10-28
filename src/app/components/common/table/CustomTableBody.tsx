"use client";
import { Table } from "@chakra-ui/react";
import { flexRender, type Table as TanStackTable } from "@tanstack/react-table";

type CustomTableBodyProps<T> = {
  table: TanStackTable<T>;
};

const CustomTableBody = <T,>({ table }: CustomTableBodyProps<T>) => {
  const rows = table.getRowModel().rows;

  if (rows.length === 0) {
    return (
      <Table.Body>
        <Table.Row>
          <Table.Cell colSpan={table.getAllColumns().length} textAlign="center">
            Нет данных
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    );
  }

  return (
    <Table.Body>
      {rows.map((row) => (
        <Table.Row key={row.id}>
          {row.getVisibleCells().map((cell) => (
            <Table.Cell key={cell.id}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </Table.Cell>
          ))}
        </Table.Row>
      ))}
    </Table.Body>
  );
};

export default CustomTableBody;
