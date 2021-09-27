import React, { useState } from "react";
import styled from "styled-components";
import Title from "../Components/Title";
import { InnerLayout, MainLayout } from "../styles/Layouts";
import Works from "../data/works";
import Menu from "../Components/Menu";
import Button from "../Components/Button";

const categArrays = Works.map((item) => item.category);
const finalCategory = categArrays.flat();
const allButtons = ["All", ...new Set(finalCategory)];

const WorksPage = () => {
  const [menuItem, setMenuItem] = useState(Works);
  let button = allButtons;

  const filterButtonHandler = (button) => {
    if (button === "All") {
      setMenuItem(Works);
      return;
    }
    console.log(button);
    const filteredData = Works.filter((item) => item.category.includes(button));

    setMenuItem(filteredData);
    console.log(filteredData);
  };
  return (
    <MainLayout>
      <Title title={"Works"} span={"Works"} />
      <InnerLayout>
        <WorksPageStyled>
          <Button filterButton={filterButtonHandler} button={button} />
          <Menu menuItem={menuItem} />
        </WorksPageStyled>
      </InnerLayout>
    </MainLayout>
  );
};

const WorksPageStyled = styled.div``;

export default WorksPage;
