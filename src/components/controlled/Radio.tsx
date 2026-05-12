import { useState } from "react";

export default function Radio() {
  const [selectedValue, setSelectedValue] = useState("color1");
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(e.currentTarget.value);
  };

  const [formState, setFormState] = useState({
    option: "option1",
    color: "color1",
  });

  const handleFormStateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setFormState((formState) => ({
      ...formState,
      [name]: value,
    }));
  };

  return (
    <section>
      <section>
        <div>
          <label>
            <input
              type="radio"
              name="option"
              value="option1"
              checked={formState.option === "option1"}
              onChange={handleFormStateChange}
            />
            옵션 1
          </label>
          <label>
            <input
              type="radio"
              name="option"
              value="option2"
              checked={formState.option === "option2"}
              onChange={handleFormStateChange}
            />
            옵션 2
          </label>
          <label>
            <input
              type="radio"
              name="option"
              value="option3"
              checked={formState.option === "option3"}
              onChange={handleFormStateChange}
            />
            옵션 3
          </label>
        </div>
      </section>
      <div>
        <label>
          <input
            type="radio"
            name="color"
            value="color1"
            checked={formState.color === "color1"}
            onChange={handleFormStateChange}
          />
          컬러 옵션 1
        </label>
        <label>
          <input
            type="radio"
            name="color"
            value="color2"
            checked={formState.color === "color2"}
            onChange={handleFormStateChange}
          />
          컬러 옵션 2
        </label>
        <label>
          <input
            type="radio"
            name="color"
            value="color3"
            checked={formState.color === "color3"}
            onChange={handleFormStateChange}
          />
          컬러 옵션 3
        </label>
      </div>
    </section>
  );
}
