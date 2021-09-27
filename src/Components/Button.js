import React from "react";
import styled from "styled-components";

const Button = ({ filterButton, button }) => {
  return (
    <DivStyled>
      {button.map((but, i) => {
        return (
          <ButtonStyled key={i} onClick={() => filterButton(but)}>
            {but}
          </ButtonStyled>
        );
      })}
    </DivStyled>
  );
};

const ButtonStyled = styled.button`
  outline: none;
  border: none;
  background-color: var(--background-light-color-2);
  padding: 0.5rem 2rem;
  font-size: inherit;
  color: white;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  margin-bottom: 0.6rem;

  &:active,
  &:focus {
    background-color: var(--primary-color);
  }
  &:hover {
    background-color: var(--button-color);
  }
  &:not(:last-child) {
    margin-right: 0.6rem;
  }
`;

const DivStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 70%;
  margin: 2.5rem auto;
`;

export default Button;
