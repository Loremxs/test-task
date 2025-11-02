import type { ReactNode } from "react";

export type FilterItem<T> = {
  key?: string;
  value?: T;
  label?: string;
  CustomComponent?: ReactNode;
};

export type InfoSection = {
  title: string;
  list: string[];
};

export type InfoData = {
  warning: InfoSection;
  danger: InfoSection;
};

export type OptionItem = {
  value: string;
  label: string;
};
