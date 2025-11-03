export type TicketFormData = {
  pharmacy: string[];
  category: string[];
  guarantee: boolean;
  topic: string;
  priority: string[];
  description: string;
  files: File[];
};

export type TicketFormBaseProps = {
  data: TicketFormData;
  setData: React.Dispatch<React.SetStateAction<TicketFormData>>;
  initialData: TicketFormData;
  onClose?: () => void;
};

export type HandleChangeFn = <K extends keyof TicketFormData>(
  key: K,
  value: TicketFormData[K]
) => void;
