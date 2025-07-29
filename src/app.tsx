export function App() {
  return (
    <div>
      <h1>Cartify</h1>
      <button>Click me</button>

      <CartList name="Grocery List" />
      <CartList name="Shopping List" />
      <CartList name="Workshop List" />
    </div>
  );
}

export function CartList({ name }: { name: string }) {
  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
}
