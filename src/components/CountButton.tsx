export default function CountButton({
  handleCountSet,
}: {
  handleCountSet: (action: "Increment" | "Decrement" | "Reset") => void;
}) {
  return (
    <>
      <button onClick={() => handleCountSet("Increment")}>증가</button>
      <button onClick={() => handleCountSet("Decrement")}>감소</button>
      <button onClick={() => handleCountSet("Reset")}>초기화</button>
    </>
  );
}
