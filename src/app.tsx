export function App() {
  return (
    <div>
      <h1>Cartify</h1>
      <button>Click me</button>

      <CartList />
    </div>
  );
}

export function CartList() {
  const name = "Grocery List";
  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
}
