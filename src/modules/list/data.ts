export type ListItem = {
  id: number;
  name: string;
  isCompleted: boolean;
  quantity: number;
  unit: 'gr' | 'L' | 'kg' | 'pcs';
};

export type DataList = {
  id: number;
  name: string;
  isCompleted: boolean;
  statusText: string;
  items: ListItem[];
};

export const initialDataLists: DataList[] = [];
