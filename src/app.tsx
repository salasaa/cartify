export function App() {
  return (
    <div>
      <h1>Cartify</h1>
      <button>Click me</button>

      <CartList name="Grocery List" isCompleted />
      <CartList name="Shopping List" />
      <CartList name="Workshop List" />
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
