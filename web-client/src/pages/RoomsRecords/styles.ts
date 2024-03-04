import styled from "styled-components";
import {BaseDetailsElement, SCREEN} from "../../shared/styles";

export const Title = styled.div`
    font-size: 2rem;
    font-weight: bold;

    ${SCREEN.MOBILE} {
        font-size: 1.1rem;
        width: 100%;
    }
`

export const DivElement = styled(BaseDetailsElement)`
    width: 400px;
    height: 220px;
    background: ${({color}) => color};
    position: relative;

    ${SCREEN.MOBILE} {
        height: 300px;
        width: 100%;
        font-size: 0.5rem;
    }
`
