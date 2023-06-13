import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { styled } from "styled-components";
import { categoryState, currentCategoryState } from "../atoms";
import CreateCategory from "./CreateCategory";

const Aside = styled.aside`
  width: 250px;
  height: 100vh;
  border-right: 1px solid gray;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
`;

const List = styled.ul`
  margin-top: 20px;
  li {
    margin-bottom: 10px;
  }
  li:hover {
    font-size: 18px;
    cursor: pointer;
  }
`;

const Selected = styled.li`
  font-weight: bold;
`;

export default function Categories() {
  const categories = useRecoilValue(categoryState);
  const [currentCategory, setCurrentState] =
    useRecoilState(currentCategoryState);
  return (
    <Aside>
      <Title>Categories</Title>
      <List>
        {categories.map((item) =>
          item === currentCategory ? (
            <Selected key={item}>{item}</Selected>
          ) : (
            <li key={item} onClick={() => setCurrentState(item)}>
              {item}
            </li>
          )
        )}
      </List>
      <CreateCategory />
    </Aside>
  );
}
