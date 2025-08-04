import { Button } from '@/components/ui/button';

const cartifyList = [
  {
    id: 1,
    name: 'Grocery List',
    isCompleted: true,
    items: [
      { id: 1, name: 'Coffee', isCompleted: true },
      { id: 2, name: 'Milk', isCompleted: true },
      { id: 3, name: 'Bread', isCompleted: true },
    ],
  },
  {
    id: 2,
    name: 'Shopping List',
    isCompleted: true,
    items: [
      { id: 1, name: 'Tshirt', isCompleted: true },
      { id: 2, name: 'Jeans', isCompleted: true },
      { id: 3, name: 'Hat', isCompleted: false },
    ],
  },
  { id: 3, name: 'Workshop List', isCompleted: false, items: [] },
];

export function App() {
  const calculatedLists = cartifyList.map((list) => {
    const completedItems = list.items.filter((item) => item.isCompleted).length;
    const totalItems = list.items.length;

    // this is the logic to determaine the status of list
    let statusText = '';
    let isListCompleted = false;

    if (totalItems === 0) {
      statusText = 'No items in list.';
    } else if (completedItems === totalItems) {
      statusText = 'Task is completed.';
      isListCompleted = true;
    } else {
      statusText = `${completedItems} of ${totalItems} tasks are completed.`;
    }

    return {
      ...list,
      statusText,
      isListCompleted,
    };
  });

  return (
    <div className="min-h-screen bg-white p-4 text-gray-900 transition-colors duration-200 sm:p-6 md:p-8 dark:bg-gray-900 dark:text-gray-100">
      <div className="mx-auto flex min-h-[calc(100vh-2rem)] max-w-xl flex-col sm:min-h-[calc(100vh-3rem)]">
        <section className="mb-4 flex items-center justify-between">
          <div className="flex items-end space-x-2">
            <h1 className="font-['Inter'] text-2xl font-bold sm:text-3xl">
              Cartify
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Manage your shopping lists efficiently!
            </p>
          </div>
        </section>

        <div className="flex flex-1/2">
          <Button>Add List</Button>
          <Button>check</Button>
        </div>

        <ul className="space-y-2 pt-4">
          {calculatedLists.map((list) => (
            <li key={list.id}>
              {}
              <CartList
                name={list.name}
                isListCompleted={list.isListCompleted}
                statusText={list.statusText}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function CartList({
  name,
  isListCompleted,
  statusText,
}: {
  name: string;
  isListCompleted?: boolean;
  statusText: string;
}) {
  return (
    <div className="mb-4 rounded-lg bg-white p-4 shadow-md transition-shadow duration-200 hover:shadow-lg dark:bg-gray-800">
      <h2 className="mb-2 text-xl font-semibold">
        {name} {isListCompleted && '✔️'}
      </h2>
      <p>{statusText}</p>
    </div>
  );
}
