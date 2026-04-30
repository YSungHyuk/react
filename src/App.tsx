export default function App() {
  const fruits = ["Apple", "Banana", "Orange", "Grapes", "Mango"];
  const items = [];
  for (let i = 0; i < fruits.length; i++) {
    items.push(<li key={i}>{fruits[i]}</li>);
  }

  return (
    <>
      <h1>Fruits Lists</h1>
      <ul>{items}</ul>
    </>
  );
}
