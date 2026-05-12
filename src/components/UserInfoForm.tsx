import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  gender: string;
  stack: string[];
  bio: string;
};

export default function UserInfoForm() {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    gender: "남성",
    stack: [],
    bio: "",
  });

  const handleFormState = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormState((formState) => {
      if (name === "stack" && e.target instanceof HTMLInputElement) {
        const { checked } = e.target;
        return {
          ...formState,
          stack: checked
            ? [...formState.stack, value]
            : formState.stack.filter((item) => item !== value),
        };
      } else {
        return {
          ...formState,
          [name]: value,
        };
      }
    });
  };

  return (
    <div className="user-info">
      <h1 className="user-info__title">User Information</h1>
      <form
        className="user-info__form"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(formState);
        }}
      >
        <div className="form-group">
          <label className="form-group__label" htmlFor="name">
            이름:
          </label>
          <input
            className="form-group__input"
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleFormState}
          />
        </div>

        <div className="form-group">
          <label className="form-group__label" htmlFor="email">
            이메일:
          </label>
          <input
            className="form-group__input"
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleFormState}
          />
        </div>

        <div className="form-group form-group--radio">
          <label className="form-group__label">성별:</label>
          <label className="form-group__radio">
            <input
              type="radio"
              id="male"
              value="남성"
              name="gender"
              checked={formState.gender === "남성"}
              onChange={handleFormState}
            />
            남성
          </label>
          <label className="form-group__radio">
            <input
              type="radio"
              id="female"
              value="여성"
              name="gender"
              checked={formState.gender === "여성"}
              onChange={handleFormState}
            />
            여성
          </label>
        </div>

        <div className="form-group form-group--checkbox">
          <label className="form-group__label">기술 관심:</label>
          <label className="form-group__checkbox">
            <input
              type="checkbox"
              value="JavaScript"
              name="stack"
              checked={formState.stack.includes("JavaScript")}
              onChange={handleFormState}
            />
            JavaScript
          </label>
          <label className="form-group__checkbox">
            <input
              type="checkbox"
              value="React"
              name="stack"
              checked={formState.stack.includes("React")}
              onChange={handleFormState}
            />
            React
          </label>
          <label className="form-group__checkbox">
            <input
              type="checkbox"
              value="Node.js"
              name="stack"
              checked={formState.stack.includes("Node.js")}
              onChange={handleFormState}
            />
            Node.js
          </label>
        </div>

        <div className="form-group">
          <label className="form-group__label" htmlFor="bio">
            자기소개:
          </label>
          <textarea
            className="form-group__textarea"
            id="bio"
            placeholder="자기소개를 작성해주세요"
            name="bio"
            value={formState.bio}
            onChange={handleFormState}
          ></textarea>
        </div>

        <button className="user-info__submit" type="submit">
          제출
        </button>
      </form>

      <div className="formStateview">
        <h2 className="formStateview__title">실시간 입력값</h2>
        <p className="formStateview__item">이름: {formState.name}</p>
        <p className="formStateview__item">이메일: {formState.email}</p>
        <p className="formStateview__item">성별: {formState.gender}</p>
        <p className="formStateview__item">
          기술 관심: {formState.stack.toString()}
        </p>
        <p className="formStateview__item">자기소개: {formState.bio}</p>
      </div>
    </div>
  );
}
