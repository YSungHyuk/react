import { useState } from "react";
import LoginPanel from "./components/LoginPanel";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn((isLoggedIn) => !isLoggedIn);
  };

  return (
    <>
      <LoginPanel handleLogin={handleLogin} isLoggedIn={isLoggedIn} />
    </>
  );
}
