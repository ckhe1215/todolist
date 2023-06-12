import React from "react";
import { styled } from "styled-components";

const Nav = styled.nav`
  padding: 20px 20px;
  border-bottom: 1px solid gray;
`;

const Title = styled.h1`
  font-size: 25px;
  font-weight: bold;
`;

export default function Header() {
  return (
    <Nav>
      <Title>My ToDos</Title>
    </Nav>
  );
}
