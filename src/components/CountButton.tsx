export default function CountButton({
  countDispatch,
}: {
  countDispatch: (action: { type: string }) => void;
}) {
  return (
    <>
      <button onClick={() => countDispatch({ type: "Increment" })}>증가</button>
      <button onClick={() => countDispatch({ type: "Decrement" })}>감소</button>
      <button onClick={() => countDispatch({ type: "Reset" })}>초기화</button>
    </>
  );
}
