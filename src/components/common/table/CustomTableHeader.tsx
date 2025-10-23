import { Table } from "@chakra-ui/react";
import type { TColumn } from "@/types";

type CustomTableHeaderProps<T> = {
  columns: Record<string, TColumn<T>>;
};

const CustomTableHeader = <T,>({ columns }: CustomTableHeaderProps<T>) => {
  return (
    <Table.Header>
      <Table.Row>
        {Object.keys(columns).map((columnKey) => (
          <Table.ColumnHeader key={columnKey}>
            {columns[columnKey].name}
          </Table.ColumnHeader>
        ))}
      </Table.Row>
    </Table.Header>
  );
};

export default CustomTableHeader;
