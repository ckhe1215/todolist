import React from "react";
import { styled } from "styled-components";

const Aside = styled.aside`
  width: 250px;
  height: 100vh;
  border-right: 1px solid gray;
  padding: 20px;
`;

export default function Categories() {
  return <Aside>Categories</Aside>;
}
