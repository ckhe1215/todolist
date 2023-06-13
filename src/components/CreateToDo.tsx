import React, { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { currentCategoryState, todoState } from "../atoms";

export default function CreateToDo() {
  const [inputValue, setInputValue] = useState("");
  const currentCategory = useRecoilValue(currentCategoryState);
  const setToDo = useSetRecoilState(todoState);
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setInputValue("");
    setToDo((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: inputValue,
        category: currentCategory,
      },
    ]);
  };
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        onChange={onChange}
        value={inputValue}
        placeholder="add new todo"
      />
      <button>add</button>
    </form>
  );
}
