import {createGlobalStyle} from "styled-components";
import {COLORS} from "../constants";
import {SCREEN} from './screen.ts'

export const GlobalStyles = createGlobalStyle`

    body {
        margin: 0;
    }

    * {
        font-family: 'Shantell Sans', cursive;
    }

    ::-webkit-scrollbar {
        width: 20px;

        ${SCREEN.MOBILE} {
            width: 2px;
        }
    }

    ::-webkit-scrollbar-track {
        background-color: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${COLORS.darkAccent};
        border-radius: 10px;

        ${SCREEN.MOBILE} {
            background-color: ${COLORS.green3};
        }
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: ${COLORS.darkAccentHover};
    }

`
