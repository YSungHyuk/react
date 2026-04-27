import Button from "./components/ui/Button";

export default function App() {
  const handler = (message: string) => {
    alert(message);
  };

  return (
    <>
      <Button message="ok!" onClick={handler}>
        <span>Click</span>
      </Button>
    </>
  );
}
