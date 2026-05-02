import { useState } from "react";

export default function FruitList() {
  const [items, setItems] = useState(["사과", "바나나", "오렌지"]);

  const addFruits = (fruit: string) => {
    setItems([...items, fruit]);
  };

  const isDisabled = items.includes("포도");

  return (
    <>
      <h1>Fruits Lists</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={() => addFruits("포도")} disabled={isDisabled}>
        과일 추가
      </button>
    </>
  );
}
