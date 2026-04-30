import { useState } from "react";
import TrafficLight from "./components/TrafficLight";

export default function App() {
  const [light, setLight] = useState("red");
  const [text, setText] = useState("멈추세요!");

  const handleLightChange = (light: string) => {
    switch (light) {
      case "red":
        setLight("yellow");
        setText("주의하세요!");
        break;
      case "yellow":
        setLight("green");
        setText("지나가세요!");
        break;
      case "green":
        setLight("red");
        setText("멈추세요!");
        break;
      default:
        setLight("red");
        setText("멈추세요!");
        break;
    }
  };

  return (
    <>
      <TrafficLight
        handleLightChange={handleLightChange}
        light={light}
        text={text}
      />
    </>
  );
}
