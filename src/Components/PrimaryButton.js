import React from "react";
import styled from "styled-components/macro";

const PrimaryButton = ({ title }) => {
  return (
    <PrimaryButtonStyled href="/documents/CarlosDiaz-Resume.pdf" download>
      {title}
    </PrimaryButtonStyled>
  );
};

const PrimaryButtonStyled = styled.a`
  background-color: var(--primary-color);
  padding: 0.8rem 2.5rem;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-size: inherit;
  text-transform: uppercase;
  position: relative;
  transition: all 0.4s ease-in-out;
  @media screen and (max-width: 440px) {
    font-size: 1rem;
  }
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0.2rem;
    transition: all 0.4s ease-in-out;
    left: 0;
    bottom: 0;
    opacity: inherit.7;
  }
  &:hover::after {
    width: 100%;
    background-color: var(--white-color);
  }
`;
export default PrimaryButton;
