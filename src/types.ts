import React from "react";

export type TCategory = {
  _id: string;
  name: string;
};

export type TPriority = {
  _id: string;
  name: string;
};
export type TStatuses = {
  _id: string;
  name: string;
  color: string;
};
export type TTicket = {
  id: string | number;
  number: string;
  pharmacyCode: string;
  pharmacyName: string;
  createdAt: string;
  priority: TPriority;
  topic: string;
  category: TCategory;
  technician: string;
  reaction: string;
  resolution: string;
  status: TStatuses;
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
