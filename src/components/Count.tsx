import { useState } from "react";
import CountButton from "./CountButton";
import CountDisplay from "./CountDisplay";

export default function Count() {
  const [count, setCount] = useState<number>(0);

  const handleCountSet = (action: "Increment" | "Decrement" | "Reset") => {
    switch (action) {
      case "Increment":
        setCount(count + 1);
        break;
      case "Decrement":
        setCount(count - 1);
        break;
      case "Reset":
        setCount(0);
        break;
    }
  };

  return (
    <>
      <CountDisplay count={count} />
      <CountButton handleCountSet={handleCountSet} />
    </>
  );
}
