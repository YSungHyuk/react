import { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { v4 as uuidv4 } from "uuid";

type LightColor = "red" | "yellow" | "green";

type LightType = {
  id: string;
  color: LightColor;
  isActive: boolean;
};

const createBlink = (
  bgColor: string,
  blinkColor: string,
  shadowColor: string,
) => keyframes`
    0% {
        background-color: ${bgColor};
        box-shadow: 0 0 6em ${shadowColor};
    }

    50% {
        background-color: ${blinkColor};
        box-shadow: 0 0 0em transparent;
    }
`;

type LightStyle = {
  bgColor: string;
  activeShadow: string;
  blink: ReturnType<typeof createBlink>;
  duration: string;
};

const colorStyle: Record<LightColor, LightStyle> = {
  red: {
    bgColor: "#ff0000",
    activeShadow: "0 0 6em #ff3333",
    blink: createBlink("#ff0000", "#b30000", "#ff3333"),
    duration: "1.1s",
  },
  yellow: {
    bgColor: "#ffff00",
    activeShadow: "0 0 6em #ffff33",
    blink: createBlink("#ffff00", "#b2b300", "#ffff33"),
    duration: "1s",
  },
  green: {
    bgColor: "#00ff00",
    activeShadow: "0 0 6em #33ff33",
    blink: createBlink("#00ff00", "#00b300", "#33ff33"),
    duration: "1s",
  },
};

const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #333;
  width: 120px;
  height: 320px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 20px 0;
`;

const LightObject = styled.button<{
  $color: LightColor;
  $isActive: boolean;
}>`
  width: 80px;
  height: 80px;
  background-color: grey;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition:
    background-color 0.3s,
    box-shadow 0.3s;
  ${({ $color, $isActive }) =>
    $isActive &&
    css`
      background-color: ${colorStyle[$color].bgColor};
      box-shadow: ${colorStyle[$color].activeShadow};
      &:hover {
        animation: ${colorStyle[$color].blink} ${colorStyle[$color].duration}
          step-end infinite;
      }
    `};
`;

const initialData: LightColor[] = ["red", "yellow", "green"];

export default function TrafficLight() {
  const [lights, setLights] = useState<LightType[]>(() =>
    initialData.map((data) => ({
      id: uuidv4(),
      color: data,
      isActive: false,
    })),
  );

  const handleClick = (id: string) => {
    setLights((prevLights) =>
      prevLights.map((light) => {
        return {
          ...light,
          isActive: light.id === id ? !light.isActive : false,
        };
      }),
    );
  };

  return (
    <Wrapper>
      {lights.map((o) => (
        <LightObject
          key={o.id}
          type="button"
          $color={o.color}
          $isActive={o.isActive}
          aria-pressed={o.isActive}
          aria-label={`${o.color} light`}
          onClick={() => handleClick(o.id)}
        />
      ))}
    </Wrapper>
  );
}
