import { useState } from "react";
import styles from "./ButtonGroup.module.css";
import classnames from "classnames/bind";
export default function ButtonGroup({
  initialButtons,
}: {
  initialButtons: ButtonGroupProps[];
}) {
  const cx = classnames.bind(styles);
  const [active, setActive] = useState<number[]>([]);
  const handleClick = (id: number) => {
    setActive((btn) => {
      if (btn.includes(id)) {
        return btn.filter((v) => v !== id);
      } else {
        return [...btn, id];
      }
    });
  };

  const handleReset = () => {
    setActive([]);
  };

  return (
    <>
      <p>Active Count: {active.length}</p>
      {initialButtons.map((button) => (
        <button
          key={button.id}
          disabled={button.isDisabled}
          onClick={() => handleClick(button.id)}
          className={cx(
            "button",
            { active: active.includes(button.id) },
            { highlight: button.id === 2 },
          )}
        >
          {button.icon} {button.label}
        </button>
      ))}
      <div>
        <button className={cx("button")} onClick={handleReset}>
          Reset
        </button>
      </div>
    </>
  );
}
