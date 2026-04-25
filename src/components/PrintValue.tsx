export default function PrintValue(props: PrintValueProps) {
  return (
    <>
      <p>number: {props.numberValue}</p>
      <p>string: {props.stringValue}</p>
      <p>boolean: {props.booleanValue.toString()}</p>
      <p>array: {props.arrayValue}</p>
      <p>object: {JSON.stringify(props.objectValue)}</p>
      <p>function : {props.handleClick.toString()}</p>
    </>
  );
}
