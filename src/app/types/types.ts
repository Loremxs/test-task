import { statuses } from "../api/statuses";
import React from "react";

export type TCategory = {
  _id: string;
  name: string;
};

export type TPriority = {
  _id: string;
  name: string;
};
export type TStatus = keyof typeof statuses;

export type TTicket = {
  id: string | number;
  number: string;
  pharmacyCode: string;
  pharmacyName: string;
  createdAt: string;
  priority: string;
  topic: string;
  category: string;
  technician: string;
  reaction?: string;
  resolution?: string;
  status: TStatus;
};

export type TColumn<T> = {
  path: keyof T;
  name: string;
  component?: (item: T) => React.ReactNode;
};

export type TTableProps<T> = {
  data: T[];
  columns: Record<string, TColumn<T>>;
};

export type TTableHeaderProps<T> = {
  columns: Record<string, TColumn<T>>;
};

export type TTableBodyProps<T> = {
  data: T[];
  columns: Record<string, TColumn<T>>;
};

export type TicketsTableProps = {
  tickets: TTicket[];
};

export type FilterItem<T> = {
  key?: string;
  value: T;
  label: string;
};
