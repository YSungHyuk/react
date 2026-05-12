import { useState } from "react";

export default function Input() {
  const [input, setInput] = useState("");
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    setInput(e.target.value);
  };

  const [pw, setPw] = useState("");
  const handlePwChange = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    setPw(e.target.value);
  };

  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const handleFormStateChange = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    setFormState((formState) => ({
      ...formState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <form>
        <h1>
          Input: {formState.email} / {formState.password}
        </h1>
        <input
          className="border"
          type="text"
          name="email"
          value={formState.email}
          onChange={handleFormStateChange}
        />
        <input
          className="border"
          type="password"
          name="password"
          value={formState.password}
          onChange={handleFormStateChange}
        />
      </form>
    </>
  );
}
