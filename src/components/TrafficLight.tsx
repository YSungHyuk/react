export default function TrafficLight({
  light,
  handleLightChange,
  text,
}: {
  light: string;
  handleLightChange: (light: string) => void;
  text: string;
}) {
  return (
    <>
      <p style={{ color: light }}>{text}</p>
      <button onClick={() => handleLightChange(light)}>변경</button>
    </>
  );
}
