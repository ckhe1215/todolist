import React from "react";
import Header from "./components/Header";
import Categories from "./components/Categories";
import ToDoList from "./components/ToDoList";
import { styled } from "styled-components";

const Main = styled.div`
  display: flex;
`;

function App() {
  return (
    <div>
      <Header />
      <Main>
        <Categories />
        <ToDoList />
      </Main>
    </div>
  );
}

export default App;
