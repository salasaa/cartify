const cartifyList = [
  { id: 1, name: "Grocery List", isCompleted: true },
  { id: 2, name: "Shopping List", isCompleted: false },
  { id: 3, name: "Workshop List", isCompleted: false },
  { id: 4, name: "Kitchen List", isCompleted: true },
];

export function App() {
  return (
    <div>
      <h1>Cartify</h1>
      <p>Manage your shopping lists efficiently!</p>
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
    <div>
      <h2>
        {name} {isCompleted && "✔️"}
      </h2>
      {isCompleted && <p>Task is completed.</p>}
      {!isCompleted && <p>1 of 7 tasks are completed.</p>}
    </div>
  );
}
