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

export type CategoryKey =
  | "cat_001"
  | "cat_002"
  | "cat_003"
  | "cat_004"
  | "cat_005"
  | "cat_006"
  | "cat_007";

export type CategoryInfo = {
  warning: { title: string; list: string[] };
  danger: { title: string; list: string[] };
};
