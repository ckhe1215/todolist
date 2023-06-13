import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { categoryState } from "../atoms";

export default function CreateCategory() {
  const [inputValue, setInputValue] = useState("");
  const setCategories = useSetRecoilState(categoryState);
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setInputValue("");
    setCategories((prev) => [...prev, inputValue]);
  };
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={onChange}
          value={inputValue}
          placeholder="add new category"
        />
        <button>+</button>
      </form>
    </div>
  );
}
