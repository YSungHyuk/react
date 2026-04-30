import Greeting from "./components/Greeting";

export default function App() {
  const isLoggedIn = true;

  return <Greeting isLoggedIn={isLoggedIn} />;
}
