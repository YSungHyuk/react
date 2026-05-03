import Inline from "./components/Inline";

export default function App() {
  const isLoggedIn = false;
  // const h1Style = { color: "rgb(0,0,255)", fontSize: "30px" };
  const h1Style = { color: isLoggedIn ? "red " : "blue", fontSize: "30px" };
  return (
    <>
      <h1 style={{ color: "red" }}>Inline Style</h1>
      <h1 style={{ color: "rgb(255, 0, 0)" }}>Inline Style</h1>
      <h1 style={{ color: "rgba(255, 0, 0, 1)" }}>Inline Style</h1>
      <h1 style={{ fontSize: "25px;" }}>Inline Style</h1>
      <h1 style={h1Style}>Inline Style</h1>
      <Inline h1Style={h1Style} />
    </>
  );
}
