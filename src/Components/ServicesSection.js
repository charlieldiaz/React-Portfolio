import React from "react";
import styled from "styled-components/macro";
import { InnerLayout } from "../styles/Layouts";
import ServiceCard from "./ServiceCard";
import Title from "./Title";
import design from "../img/design.svg";
import intelligence from "../img/intelligence.svg";
import gamedev from "../img/game-dev.svg";

const ServicesSection = () => {
  return (
    <InnerLayout>
      <ServicesSectionStyled>
        <Title title={"Services"} span={"Services"} />
        <div className="services">
          <ServiceCard
            image={design}
            title={"Web Development"}
            paragraph={
              "Do you want a fast, responsive, intuitive and dynamic layout that will work on any device? I can help you make a responsive app that will take your business to the next level."
            }
          />
          <div className="mid-card">
            <ServiceCard
              image={intelligence}
              title={"Digital Design"}
              paragraph={
                "Customized logos, Pictures and concept designs. Photo Editing and video edition"
              }
            />
          </div>
          <ServiceCard
            image={gamedev}
            title={"Agile Development"}
            paragraph={
              "I can help you find the fastest and cheapest way to finilize a project."
            }
          />
        </div>
      </ServicesSectionStyled>
    </InnerLayout>
  );
};

const ServicesSectionStyled = styled.section`
  .services {
    margin-top: 5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;
    @media screen and (max-width: 1000px) {
      flex-direction: column;
      .mid-card {
        margin: 2rem 0;
      }
    }
    @media screen and (max-width: 950px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 650px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
export default ServicesSection;
