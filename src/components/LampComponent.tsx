import on from "../assets/images/lamp_on.png";
import off from "../assets/images/lamp_off.png";
import { useState } from "react";

export default function LampComponent() {
  const [isLight, setIsLight] = useState(false);

  const handleClick = () => {
    setIsLight((prev) => !prev);
  };

  return (
    <>
      <img src={isLight ? on : off} alt="Lamp" onClick={handleClick} />
    </>
  );
}
