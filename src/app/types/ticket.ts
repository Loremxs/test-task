import { statuses } from "../api/statuses";
import { additionalInfoByPriorityId } from "../constants/additionalInfoByPriorityId";

export type Status = keyof typeof statuses;

export type Priority = {
  _id: keyof typeof additionalInfoByPriorityId;
  name: string;
};

export type Category = {
  _id: string;
  name: string;
};

export type Ticket = {
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
  status: Status;
};
