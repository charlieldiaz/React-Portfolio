import React from "react";
import styled from "styled-components/macro";

const ContactItem = ({ icon, title, contact1 }) => {
  return (
    <ContactItemStyled>
      <div className="left-content">
        <p>{icon}</p>
      </div>
      <div className="right-content">
        <h6>{title}</h6>
        <p>{contact1}</p>
      </div>
    </ContactItemStyled>
  );
};

const ContactItemStyled = styled.div`
  padding: 1.5rem 2rem;
  background-color: var(--border-color);
  color: white;
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 2.5rem;
  }
  @media (max-width: 658px) {
    padding: 0;

    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }

  .left-content {
    padding: 1.5rem;
    border: 1px solid var(--border-color);
    font-size: 2rem;
    display: flex;
    align-items: left;
    justify-content: center;
    margin-right: 1.5rem;
    svg {
      font-size: 2.3rem;
    }
    @media (max-width: 485px) {
      padding: 20px 0;
      p {
        font-size: smaller;
      }
    }
  }
  .right-content {
    h6 {
      color: white;
      font-size: 1.2rem;
      padding-bottom: inherit.6rem;
    }
    p {
      padding: 0.1rem;
    }
  }
`;

export default ContactItem;
