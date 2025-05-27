import { createGlobalStyle } from "styled-components";

const GlobalSstyle = createGlobalStyle`
    * {
    margin : 0;
    padding : 0;
    box-sizing : border-box;
}
    html, body, #root {
        height: 100%;
        width: 100%;
        background-color: rgb(255, 255, 255);
        color: black;              
        font-family: "Noto Sans KR", sans-serif;
    }
  }
`;

export default GlobalSstyle;
