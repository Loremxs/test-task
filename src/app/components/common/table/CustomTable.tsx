import { Table, Stack } from "@chakra-ui/react";
import CustomTableBody from "./CustomTableBody";
import CustomTableHeader from "./CustomTableHeader";
import type { TTableProps } from "@/app/types/types";
const CustomTable = <T,>({ data, columns }: TTableProps<T>) => {
  return (
    <Stack gap="10">
      <Table.Root size="sm" variant="outline">
        <CustomTableHeader<T> columns={columns} />{" "}
        <CustomTableBody<T> data={data} columns={columns} />{" "}
      </Table.Root>{" "}
    </Stack>
  );
};
export default CustomTable;
