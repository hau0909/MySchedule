export interface Item {
  _id?: string;
  title: string;
  description: string;
  type: ItemType;
  status: ItemStatus;
  priority: ItemPriority;
  startTime: string;
  endTime: string;
  userId: string;
  createdAt?: string;
}

export type ItemType = "task" | "event" | "meeting";
export type ItemStatus =
  | "pending"
  | "in-progress"
  | "completed"
  | "cancelled"
  | "archived";
export type ItemPriority = "low" | "medium" | "high";
