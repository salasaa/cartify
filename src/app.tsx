const cartifyList = [
  {
    id: 1,
    name: "Grocery List",
    isCompleted: true,
    items: [
      { id: 1, name: "Coffee", isCompleted: true },
      { id: 2, name: "Milk", isCompleted: true },
      { id: 3, name: "Bread", isCompleted: false },
    ],
  },
  {
    id: 2,
    name: "Shopping List",
    isCompleted: true,
    items: [
      { id: 1, name: "Tshirt", isCompleted: true },
      { id: 2, name: "Jeans", isCompleted: true },
      { id: 3, name: "Hat", isCompleted: false },
    ],
  },
  { id: 3, name: "Workshop List", isCompleted: false, items: [] },
];

export function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200 text-gray-900 dark:text-gray-100 p-4 sm:p-6 md:p-8">
      <div className="max-w-xl mx-auto flex flex-col min-h-[calc(100vh-2rem)] sm:min-h-[calc(100vh-3rem)]">
        <header className="flex justify-between items-center mb-6">
          <div className="flex items-end space-x-2">
            <h1 className="text-2xl sm:text-3xl font-bold font-['Inter']">
              Cartify
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Manage your shopping lists efficiently!
            </p>
          </div>
        </header>
        <ul>
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
    <div className="p-4 mb-4 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-shadow duration-200 hover:shadow-lg">
      <h2 className="text-xl font-semibold mb-2">
        {name} {isCompleted && "✔️"}
      </h2>
      {isCompleted && <p>Task is completed.</p>}
      {!isCompleted && <p>1 of 7 tasks are completed.</p>}
    </div>
  );
}
