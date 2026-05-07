export default function Calculator() {
  return (
    <>
      <article className="calculator">
        <form className="calc-form" name="forms">
          <input type="text" className="calc-output" readOnly />
          <input type="button" className="calc-clear" value="C" />
          <input type="button" className="calc-operator" value="/" />
          <input type="button" className="calc-num" value="1" />
          <input type="button" className="calc-num" value="2" />
          <input type="button" className="calc-num" value="3" />
          <input type="button" className="calc-operator" value="*" />
          <input type="button" className="calc-num" value="4" />
          <input type="button" className="calc-num" value="5" />
          <input type="button" className="calc-num" value="6" />
          <input type="button" className="calc-operator" value="+" />
          <input type="button" className="calc-num" value="7" />
          <input type="button" className="calc-num" value="8" />
          <input type="button" className="calc-num" value="9" />
          <input type="button" className="calc-operator" value="-" />
          <input type="button" className="calc-dot" value="." />
          <input type="button" className="calc-num" value="0" />
          <input
            type="button"
            className="calc-operator calc-result"
            value="="
          />
        </form>
      </article>
    </>
  );
}
