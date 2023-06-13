import React, { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { styled } from "styled-components";
import {
  IToDo,
  categoryState,
  currentCategoryState,
  todoState,
} from "../atoms";

const Wrapper = styled.div`
  margin-top: 15px;
`;

const OptionWrapper = styled.div`
  margin-bottom: 5px;
  select {
    margin-right: 5px;
  }
`;

const SmallBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const MoveBtn = styled.button`
  border: 1px solid black;
  background-color: transparent;
  border-radius: 3px;
  cursor: pointer;
`;

export default function ToDoMenu({
  todoId,
  todoText,
}: {
  todoId: number;
  todoText: string;
}) {
  const categories = useRecoilValue(categoryState);
  const currentCategory = useRecoilValue(currentCategoryState);
  const setTodos = useSetRecoilState(todoState);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(currentCategory);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const deleteTodo = () => {
    setTodos((prev) => prev.filter((item) => item.id !== todoId));
  };
  const moveTodo = () => {
    setTodos((prev) => {
      const idx = prev.findIndex((item) => item.id === todoId);
      const newItem: IToDo = {
        id: todoId,
        text: todoText,
        category: selectedOption,
      };
      const front = prev.slice(0, idx);
      const back = prev.slice(idx + 1);
      return [...front, newItem, ...back];
    });
  };
  const onSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <SmallBtn onClick={toggleMenu}>{!isMenuOpen ? "+" : "-"}</SmallBtn>
      {isMenuOpen && (
        <Wrapper>
          <OptionWrapper>
            <select onChange={onSelectChange} value={selectedOption}>
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <MoveBtn onClick={moveTodo}>이동하기</MoveBtn>
          </OptionWrapper>
          <MoveBtn onClick={deleteTodo}>삭제하기</MoveBtn>
        </Wrapper>
      )}
    </>
  );
}
