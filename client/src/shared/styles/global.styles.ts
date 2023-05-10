import {createGlobalStyle} from "styled-components";
import COLORS from "../constants/Colors.ts";

const GlobalStyles = createGlobalStyle`
  
  body {
    margin: 0;
  }

   *{
     font-family: 'Shantell Sans', cursive;
   }

   ::-webkit-scrollbar {
     width: 20px;
   }

  ::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${COLORS.darkAccent};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${COLORS.darkAccentHover};
  }

`
export default GlobalStyles