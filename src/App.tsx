import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const handleCountSet = (operation: string) => {
    switch (operation) {
      case "+":
        setCount((count) => count + 1);
        break;
      case "-":
        setCount((count) => count - 1);
        break;
      case "reset":
        setCount(0);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => handleCountSet("+")}>Increment</button>
      <button onClick={() => handleCountSet("-")}>Decrement</button>
      <button onClick={() => handleCountSet("reset")}>Reset</button>
    </>
  );
}
