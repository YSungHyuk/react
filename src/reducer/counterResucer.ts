export default function counterReducer(
  count: number,
  action: { type: string },
) {
  switch (action.type) {
    case "Increment":
      return count + 1;
    case "Decrement":
      return count - 1;
    case "Reset":
      return 0;
    default:
      return count;
  }
}
