import { useReducer, useState } from "react";
import CountButton from "./CountButton";
import CountDisplay from "./CountDisplay";
import counterReducer from "../reducer/counterResucer";

export default function Count() {
  const [count, countDispatch] = useReducer(counterReducer, 0);

  return (
    <>
      <CountDisplay count={count} />
      <CountButton countDispatch={countDispatch} />
    </>
  );
}
