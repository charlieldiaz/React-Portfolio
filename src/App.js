import { useEffect, useState } from "react";
import { Route, Switch as Switching } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./Components/Sidebar";
import HomePage from "./Pages/homePage";
import WorksPage from "./Pages/WorksPage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import BlogPage from "./Pages/BlogPage";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Switch from "@material-ui/core/Switch";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";

function App() {
  const [theme, setTheme] = useState("light-theme");
  const [checked, setChecked] = useState(false);
  const [navToggle, setNaveToggle] = useState(false);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const themeToggler = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
      setChecked(true);
    } else {
      setTheme("light-theme");
      setChecked(false);
    }
  };

  return (
    <div className="App">
      <Sidebar navToggle={navToggle} />
      <div className="theme">
        <div className="light-dark-mode">
          <div className="left-content">
            <Brightness4Icon />
          </div>
          <div className="right-content">
            <Switch
              value=""
              checked={checked}
              inputProps={{ "aria-label": "" }}
              size="medium"
              onClick={themeToggler}
            />
          </div>
        </div>
      </div>
      <div className="ham-burger-menu">
        <IconButton
          onClick={() => {
            setNaveToggle(!navToggle);
          }}
        >
          <MenuIcon />
        </IconButton>
      </div>

      <MainContentStyled>
        <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div>

        <Switching>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/works" exact>
            <WorksPage />
          </Route>
          <Route path="/about" exact>
            <AboutPage />
          </Route>
          <Route path="/blog" exact>
            <BlogPage />
          </Route>
          <Route path="/contact" exact>
            <ContactPage />
          </Route>
        </Switching>
      </MainContentStyled>
      <div className="main-content"></div>
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  @media screen and (max-width: 1200px) {
    margin-left: 0px;
  }

  .lines {
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    opacity: 0.4;
    z-index: -1;
    .line-1,
    .line-2,
    .line-3,
    .line-4 {
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`;

export default App;
