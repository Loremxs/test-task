"use client";
import { HStack, Table, Text, Icon } from "@chakra-ui/react";
import { flexRender, type Table as TanStackTable } from "@tanstack/react-table";
import { FiFilter } from "react-icons/fi";

type CustomTableHeaderProps<T> = {
  table: TanStackTable<T>;
};

const CustomTableHeader = <T,>({ table }: CustomTableHeaderProps<T>) => {
  return (
    <Table.Header>
      {table.getHeaderGroups().map((headerGroup) => (
        <Table.Row key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <Table.ColumnHeader key={header.id}>
              <HStack justify="space-between" align="center">
                <Text fontWeight="medium" whiteSpace="nowrap">
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </Text>

                {header.column.id !== "number" && (
                  <Icon as={FiFilter} boxSize={3.5} opacity={0.3} />
                )}
              </HStack>
            </Table.ColumnHeader>
          ))}
        </Table.Row>
      ))}
    </Table.Header>
  );
};

export default CustomTableHeader;
