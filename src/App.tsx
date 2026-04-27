import Button from "./components/ui/Button";

export default function App() {
  const handleClick = (
    message: string,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    // event.currentTarget.innerText = message;
    // event.target.innerText = message; // 타입 에러
    (event.target as HTMLButtonElement).innerText = message; // alias 사용하여 타입 별칭
  };
  return (
    <>
      <Button handleClick={handleClick} />
    </>
  );
}
