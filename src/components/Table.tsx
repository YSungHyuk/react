export default function Table() {
  return (
    <>
      <table border={1} onClickCapture={() => console.log("table")}>
        <tbody onClickCapture={() => console.log("tbody")}>
          <tr onClickCapture={() => console.log("tr")}>
            <td
              onClickCapture={(event) => {
                event.stopPropagation();
                console.log("td");
              }}
            >
              Mike
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
