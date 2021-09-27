import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    /* :root{
        
        --primary-color: #007bff;
        --primary-color-light: #057FFF;
        --secondary-color: #6c757d;
        --background-dark-color: #10121A;
        --background-dark-grey: #191D2B;
        --border-color: #2e344e;
        --background-light-color: #F1F1F1;
        --background-light-color-2: rgba(3,127,255,.3);
        --white-color: #FFF;
        --font-light-color: #a4acc4;
        --font-dark-color: #313131;
        --font-dark-color-2: #151515;
        --sidebar-dark-color: #191D2B;
        --scrollbar-bg-color: #383838;
        --scrollbar-thump-color: #6b6b6b;
        --scrollbar-track-color: #383838;
    } */

    .light-theme{
    --primary-color: #b93d3a;

    --primary-color-light: #057FFF;
    --switch-color-light: black;
    --secondary-color: #ff7675;
    --background-dark-color: #F1F1F1;
    --background-dark-grey: #9a9898;
    --border-color: #494454;
    --button-color: #b93d3a;
    --background-light-color: #F1F1F1;
    --background-light-color-2: #494454
;
    --white-color: black;
    --font-light-color: #313131;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #f5f0f3
;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
    }

    .dark-theme{
        --primary-color: #4086f4;
        --primary-color-light: #057FFF;
        --secondary-color: #6c757d;
        --background-dark-color: #10121A;
        --background-dark-grey: #191D2B;
        --border-color: #999cac;
        --button-color: #2e344e;
        --background-light-color: #F1F1F1;
        --background-light-color-2: #4086f4;
        --white-color: #FFF;
        --font-light-color: #a4acc4;
        --font-dark-color: #313131;
        --font-dark-color-2: #151515;
        --sidebar-dark-color: #17181a;
        --scrollbar-bg-color: #383838;
        --scrollbar-thump-color: #6b6b6b;
        --scrollbar-track-color: #383838;
}


    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: 'Nunito', sans-serif;
        font-size: 1.2rem;
    }

    body{
        background-color: var(--background-dark-color);
        color: var(--font-light-color)
    }

    body::-webkit-scrollbar{
        width: 9px;
        background-color: #383838;

    }

    body::-webkit-scrollbar-thumb{
        border-radius: 10px;
        background-color: var(--primary-color);
    }

    body::-webkit-scrollbar-track{
        border-radius: 10px;
        background-color: #383838;
    }
    a{
        font-family: inherit;
        color: inherit;
        font-size:inherit;
        font-size: 2rem;
    }
    h1{
        font-size: 4rem;
        color: var(--white-color);
        span{
            font-size: 4rem;
            @media screen and (max-width: 502px) {
                font-size: 3rem;
 
             }
     }
            }
    
    span{
        color: var(--primary-color);
    }



//Floating Toggler - Dark mode / Light Mode

.light-dark-mode {
    position: fixed;
    right: 0;
    top: 50%;
    background-color: white;
    width: 6.5rem;
    height: 3rem;
    z-index: 15;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      display: flex;
      align-items: center;
      font-size: 1.7;
      color: var(--font-dark-color-2);
    }
  }

//Nav Toggler

.ham-burger-menu{
    position: absolute;
    right: 5%;
    top: 3%;
    display: none;
    z-index: 15;
    svg{
    font-size: 3rem;
}}

.nav-toggle{
    transform: translateX(0);
    z-index: 20;
}

@media screen and (max-width: 1200px) {
    .ham-burger-menu{
        display: block;
    }
  }

// Global Media Queries



  `;
export default GlobalStyle;
