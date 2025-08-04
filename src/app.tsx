const cartifyList = [
  {
    id: 1,
    name: 'Grocery List',
    isCompleted: true,
    items: [
      { id: 1, name: 'Coffee', isCompleted: true },
      { id: 2, name: 'Milk', isCompleted: true },
      { id: 3, name: 'Bread', isCompleted: false },
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
  return (
    <div className="min-h-screen bg-white p-4 text-gray-900 transition-colors duration-200 sm:p-6 md:p-8 dark:bg-gray-900 dark:text-gray-100">
      <div className="mx-auto flex min-h-[calc(100vh-2rem)] max-w-xl flex-col sm:min-h-[calc(100vh-3rem)]">
        <header className="mb-6 flex items-center justify-between">
          <div className="flex items-end space-x-2">
            <h1 className="font-['Inter'] text-2xl font-bold sm:text-3xl">
              Cartify
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Manage your shopping lists efficiently!
            </p>
          </div>
        </header>
        <ul className="flex flex-col space-y-4">
          {cartifyList.map((list) => {
            return (
              <li key={list.id}>
                <CartList name={list.name} isCompleted={list.isCompleted} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export function CartList({
  name,
  isCompleted,
}: {
  name: string;
  isCompleted?: boolean;
}) {
  return (
    <div className="mb-4 rounded-lg bg-white p-4 shadow-md transition-shadow duration-200 hover:shadow-lg dark:bg-gray-800">
      <h2 className="mb-2 text-xl font-semibold">
        {name} {isCompleted && '✔️'}
      </h2>
      {isCompleted && <p>Task is completed.</p>}
      {!isCompleted && <p>1 of 7 tasks are completed.</p>}
    </div>
  );
}
