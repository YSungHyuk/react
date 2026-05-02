import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const items = ["apple", "banana", "orange"];
  const [fruits, setFruits] = useState(() =>
    items.map((item) => ({ id: uuidv4(), name: item })),
  );

  const handleAddFruit = (fruit: string) => {
    setFruits([{ id: uuidv4(), name: fruit }, ...fruits]);
  };

  return (
    <>
      <p>fruits List</p>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>
            <input type="text" placeholder={fruit.name} />
          </li>
        ))}
      </ul>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>
            <input type="text" placeholder={fruit.name} />
          </li>
        ))}
      </ul>
      <button onClick={() => handleAddFruit("grape")}>Add Fruit</button>
    </>
  );
}
