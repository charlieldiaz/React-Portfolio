import React from "react";
import styled from "styled-components/macro";
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
          A Vancouver-based developer who loves programming, designing,
          traveling, and meeting people. I especially love solving problems with
          the use of logic and creativity. My desire to code started when I was
          in my teenage years and I wanted to customize my PC games. From then
          on I was obsessed with the idea of creating from scratch.
        </p>

        <div className="about-info">
          <p className="bigger">Full Name:</p>
          <p> Carlos Diaz</p>
          <p className="bigger">Location:</p>
          <p> Vancouver, BC, Canada. </p>
          <p className="bigger">Languages:</p>
          <p>English, Spanish, Portuguese.</p>
          <p className="bigger">Skills:</p>
          <p>React, HTML5, CSS3, SASS, Javascript, Typescript, Next.js,</p>
          <p> </p>
          <p>Python, Adobe Creative Cloud, Graphic Design.</p>
        </div>

        <PrimaryButton title={"Download CV"} />
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
    @media screen and (max-width: 1611px) {
      display: none;
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
      width: 90%;
      padding: 1rem 0;
      text-align: justify;
      word-spacing: -3px;
    }

    .about-info {
      display: grid;
      grid-template-columns: 25% 65%;
      grid-gap: 0.4em;
      margin-bottom: 20px;
      .bigger {
        font-size: larger;
        font-weight: bold;
      }
      @media screen and (max-width: 773px) {
        grid-template-columns: 30% 65%;
      }
      @media screen and (max-width: 428px) {
        grid-template-columns: 100%;
      }
    }
  }
`;

export default ImageSection;
