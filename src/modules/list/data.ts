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

export const dataLists: DataList[] = [
  {
    id: 1,
    name: 'Grocery List',
    isCompleted: true, // buat semuanya udah oke ada centang
    statusText: 'Task is completed.',
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
    statusText: '2 of 3 tasks are completed.',
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
    statusText: '1 of 2 tasks are completed.',
    items: [
      { id: 1, name: 'nails', isCompleted: true, quantity: 1, unit: 'kg' },
      { id: 2, name: 'glue', isCompleted: false, quantity: 1, unit: 'pcs' },
    ],
  },
  {
    id: 4,
    name: 'New List',
    isCompleted: false, // buat semuanya udah oke ada centang
    statusText: '',
    items: [],
  },
];
