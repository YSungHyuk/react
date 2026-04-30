export default function StatusMessage({ status }: { status: string }) {
  // loading, success, error, default
  switch (status) {
    case "loading":
      return (
        <>
          <h1>Loading...</h1>
        </>
      );
    case "success":
      return (
        <>
          <h1>Data fetched successfully!</h1>
        </>
      );
    case "error":
      return (
        <>
          <h1>Error fetching data.</h1>
        </>
      );
    default:
      return <h1>Unknown status</h1>;
  }
}
