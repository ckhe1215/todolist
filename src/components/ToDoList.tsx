import React from "react";
import { styled } from "styled-components";
import ToDos from "./ToDos";
import CreateToDo from "./CreateToDo";

const Wrapper = styled.div`
  padding: 20px;
`;

export default function ToDoList() {
  return (
    <Wrapper>
      <CreateToDo />
      <ToDos />
    </Wrapper>
  );
}
