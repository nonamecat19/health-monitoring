import {SIZES} from "../../shared/constants";
import {BaseDetailsElement, SCREEN} from "../../shared/styles";
import styled from "styled-components";

export const DivElement = styled(BaseDetailsElement)`
    width: 370px;
    padding: ${SIZES.lg};
    height: 210px;
    background: ${({color}) => color};

    ${SCREEN.MOBILE} {
        width: 100%;
        height: 100%;
        font-size: 0.5rem;
    }
`
