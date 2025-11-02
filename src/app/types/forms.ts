import type { ListCollection } from "@chakra-ui/react";
import type { OptionItem } from "./common";

export type SelectFieldProps<T extends OptionItem> = {
  label: string;
  placeholder?: string;
  options: ListCollection<T>;
  value: string[];
  size?: "sm" | "md" | "lg";
  onChange: (value: string[]) => void;
  CustomSelectedValue?: React.ReactNode;
  CustomIndicator?: React.ReactNode;
};
export type UploadFileFieldProps = {
  label?: string;
  placeholder?: string;
  value?: File[];
  onChange: (files: File[]) => void;
};

export type TicketFormData = {
  pharmacy: string[];
  category: string[];
  guarantee: boolean;
  topic: string;
  priority: string[];
  description: string;
  files: File[];
};

export type TicketAddFormDesktopProps = {
  onClose?: () => void;
  data: TicketFormData;
  setData: React.Dispatch<React.SetStateAction<TicketFormData>>;
  initialData: TicketFormData;
};
