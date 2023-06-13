import React from "react";
import { useRecoilValue } from "recoil";
import { styled } from "styled-components";
import { currentTodoState } from "../atoms";
import ToDoMenu from "./ToDoMenu";

const Wrapper = styled.div`
  margin-top: 20px;
`;

const Card = styled.div`
  border: 1px solid gray;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
  width: 500px;
`;

export default function ToDos() {
  const todos = useRecoilValue(currentTodoState);
  return (
    <Wrapper>
      {todos.map((item) => (
        <Card key={item.id}>
          {item.text}
          <ToDoMenu todoId={item.id} todoText={item.text} />
        </Card>
      ))}
    </Wrapper>
  );
}
