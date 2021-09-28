import styled from "styled-components/macro";
import React from "react";
import { useHistory } from "react-router-dom";

const ServiceCard = ({ image, title, paragraph }) => {
  const history = useHistory();
  const redirect = () => history.push("/contact");
  return (
    <ServiceCardStyled>
      <div className="container" onClick={redirect}>
        <img src={image} alt="" className="svg" />
        <h4>{title}</h4>
        <p>{paragraph}</p>
      </div>
    </ServiceCardStyled>
  );
};

const ServiceCardStyled = styled.div`
  background-color: var(--background-dark-grey);
  border-left: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  border-top: 8px solid var(--border-color);
  border-right: 1px solid var(--border-color);
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  &:hover {
    border-top: 8px solid var(--primary-color);
    transform: translateY(3px);
  }
  .svg {
    width: 8rem;
    height: 8rem;
  }

  .container {
    padding: 1.2rem;
    h4 {
      color: var(--white-color);
      font-size: 1.6rem;
      padding: 1rem 0;
      position: relative;
      &::after {
        content: "";
        width: 2rem;
        background-color: var(--border-color);
        height: 3px;
        position: absolute;
        left: 0;
        bottom: 0;
        border-radius: 10px;
      }
    }
    p {
      padding: 0.8rem;
    }
  }
`;

export default ServiceCard;
