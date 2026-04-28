import counterReducer from "./reducer/counterResucer.ts";
import { useReducer } from "react";

export default function App() {
  const [count, countDispatch] = useReducer(counterReducer, 0);
  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={() => countDispatch({ type: "Decrement" })}>감소</button>
      <button onClick={() => countDispatch({ type: "Reset" })}>초기화</button>
      <button onClick={() => countDispatch({ type: "Increment" })}>증가</button>
    </>
  );
}
