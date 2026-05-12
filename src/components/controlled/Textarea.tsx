import { useState } from "react";

export default function Textarea() {
  const [text, setText] = useState("");

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.currentTarget.value);
  };

  const [formState, setFormState] = useState({
    desc: "",
    introduce: "",
  });

  const handleFormStateChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.currentTarget;

    setFormState((formState) => ({
      ...formState,
      [name]: value,
    }));
  };

  return (
    <div>
      <textarea
        name="desc"
        value={formState.desc}
        onChange={handleFormStateChange}
      />
      <p>입력된 텍스트1 : {text}</p>
      <textarea
        name="introduce"
        value={formState.introduce}
        onChange={handleFormStateChange}
      />
      <p>입력된 텍스트2 : {text}</p>
    </div>
  );
}
