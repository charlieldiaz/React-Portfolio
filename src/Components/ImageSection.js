import React from "react";
import styled from "styled-components";
import skill from "../img/skill.jpg";
import PrimaryButton from "./PrimaryButton";

const ImageSection = () => {
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src={skill} alt="" />
      </div>
      <div className="right-content">
        <div className="sub-title">
          <h4>
            I am <span>Carlos</span>
          </h4>
        </div>
        <p className="paragraph">
          A Vancouver-based developer who happens to love programming,
          designing, traveling and meeting people. I specially love solving
          problems with the use of logic and creativity. My desire to code
          started when I was in my teenage years and I wanted to customize my PC
          games. From then on I was obsessed with the idea of creating from
          scratch.
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Full Name:</p>
            <p>Languages:</p>
            <p>Location:</p>
            <p>Skills:</p>
          </div>
          <div className="info">
            <p> Carlos Diaz</p>
            <p> English, Spanish, Portuguese.</p>
            <p> Vancouver, Canada </p>
            <p>React, HTML5, CSS3, SASS, Javascript, Typescript, Next.js</p>
            <p>Python, Adobe Creative Cloud, Graphic Design. </p>
          </div>
        </div>
        <a href="/documents/CarlosDiaz-Resume.pdf" download>
          <PrimaryButton title={"Download CV"} />
        </a>
      </div>
    </ImageSectionStyled>
  );
};

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
  }
  .left-content {
    width: 100%;
    img {
      width: 90%;
      height: 100%;
      object-fit: cover;
      z-index: 1;
    }
  }
  .right-content {
    padding-left: 1rem;
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      width: 80%;
      padding: 1rem 0;
    }
    .about-info {
      display: flex;
      padding-bottom: 1rem;
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.5rem 0;
        }
      }
    }
  }
`;

export default ImageSection;
