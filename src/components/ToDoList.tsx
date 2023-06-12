import React from "react";
import { styled } from "styled-components";

const Wrapper = styled.div`
  padding: 20px;
`;

export default function ToDoList() {
  return (
    <Wrapper>
      <form>
        <input type="text" placeholder="add new todo" />
        <button>add</button>
      </form>
    </Wrapper>
  );
}
