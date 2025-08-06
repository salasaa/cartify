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
  items: ListItem[];
};

export const dataLists: DataList[] = [
  {
    id: 1,
    name: 'Grocery List',
    isCompleted: true,
    items: [
      { id: 1, name: 'Coffee', isCompleted: true, quantity: 50, unit: 'gr' },
      { id: 2, name: 'Milk', isCompleted: true, quantity: 3, unit: 'L' },
      { id: 3, name: 'Bread', isCompleted: true, quantity: 20, unit: 'gr' },
    ],
  },
  {
    id: 2,
    name: 'Shopping List',
    isCompleted: true,
    items: [
      { id: 1, name: 'Tshirt', isCompleted: true, quantity: 2, unit: 'pcs' },
      { id: 2, name: 'Jeans', isCompleted: false, quantity: 1, unit: 'pcs' },
      { id: 3, name: 'Hat', isCompleted: false, quantity: 1, unit: 'pcs' },
    ],
  },
  {
    id: 3,
    name: 'Workshop List',
    isCompleted: false,
    items: [
      { id: 1, name: 'nails', isCompleted: true, quantity: 1, unit: 'kg' },
      { id: 2, name: 'glue', isCompleted: false, quantity: 1, unit: 'pcs' },
    ],
  },
];
