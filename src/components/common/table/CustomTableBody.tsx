import { Table } from "@chakra-ui/react";
import _ from "lodash";
import type { TColumn } from "@/types";

type CustomTableBodyProps<T> = {
  data: T[];
  columns: Record<string, TColumn<T>>;
};

const CustomTableBody = <T,>({ data, columns }: CustomTableBodyProps<T>) => {
  const renderContent = (item: T, columnKey: string) => {
    const column = columns[columnKey];
    if (column.component) {
      const component = column.component;
      return typeof component === "function" ? component(item) : component;
    }

    const value = _.get(item, column.path);

    if (typeof value === "object" && value !== null) {
      if ("name" in value) return (value as { name: string }).name;
      return JSON.stringify(value);
    }

    return value as React.ReactNode;
  };

  return (
    <Table.Body>
      {data.map((item: any) => (
        <Table.Row key={item.id}>
          {Object.keys(columns).map((columnKey) => (
            <Table.Cell key={columnKey}>
              {renderContent(item, columnKey)}
            </Table.Cell>
          ))}
        </Table.Row>
      ))}
    </Table.Body>
  );
};

export default CustomTableBody;
