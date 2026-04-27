type ButtonProps = {
  message: string;
  onClick: (message: string) => void;
  children: React.ReactNode;
};

export default function Button({ message, onClick, children }: ButtonProps) {
  console.log("msg : ", message);
  console.log("handle : ", onClick);
  console.log("children : ", children);

  return (
    <>
      <button onClick={() => onClick(message)}>{children}</button>
    </>
  );
}
