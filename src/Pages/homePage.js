import React from "react";
import styled from "styled-components/macro";
import Particle from "../Components/Particle";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";

const homePage = () => {
  const text = `youCanCode( it );`;
  return (
    <HomePageStyled>
      <div className="particle-con">
        <Particle />
      </div>
      <div className="typography">
        <h1>
          Hi, I'm <span>Carlos</span>
        </h1>
        <p>Welcome to my page. I create Functional code and Creative design.</p>
        <p className="dream">if (youCanDreamIt) {text}</p>
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/carlos-diaz-vancouver/"
            className="icon i-linkedin"
          >
            <LinkedInIcon />
          </a>
          <a href="https://github.com/charlieldiaz" className="icon i-github">
            <GithubIcon />
          </a>
          <a
            href="https://www.instagram.com/the_carlosdiaz/"
            className="icon i-instagram"
          >
            <InstagramIcon />
          </a>
        </div>
      </div>
    </HomePageStyled>
  );
};

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .p-particles-js {
    position: absolute;
    top: 0;
    left: 0;
  }
  .dream {
    background-color: var(--border-color);
    display: inline-block;
    color: white;
  }
  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4 ease-in-out;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
          cursor: pointer;
        }
        svg {
          margin: 1rem;
        }
      }
    }
  }
`;
export default homePage;
