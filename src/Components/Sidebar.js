import React from "react";

import styled from "styled-components/macro";
import Navigation from "./Navigation";

const Sidebar = ({
  navToggle,
  setNavToggle,
  showMenuIcon,
  setShowMenuIcon,
}) => {
  return (
    <SidebarStyled
      onClick={() => {
        setNavToggle(!navToggle);
        setShowMenuIcon(!showMenuIcon);
      }}
      className={`${navToggle ? "nav-toggle" : ""}`}
    >
      <Navigation />
    </SidebarStyled>
  );
};

const SidebarStyled = styled.div`
  width: 16.3rem;
  position: fixed;
  height: 100vh;
  background-color: var(--sidebar-dark-color);
  overflow: hidden;
  transition: all 0.4s ease-in-out;
  @media screen and (max-width: 1200px) {
    transform: translateX(-100%);
    z-index: 20;
  }
`;

export default Sidebar;
