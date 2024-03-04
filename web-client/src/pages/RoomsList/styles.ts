import styled from "styled-components";
import {COLORS, SIZES} from "../../shared/constants";
import {SCREEN} from "../../shared/styles";

export const DivElement = styled.div`
    background: ${COLORS.green2};
    width: 280px;
    height: 65px;
    padding: ${SIZES.md};
    border-radius: ${SIZES.sm};

    ${SCREEN.MOBILE} {
        width: 100%;
        height: 100%;
        font-size: 0.7rem;
    }
`

export const DivContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: ${SIZES.sm};
    gap: 20px
`

export const FiltersSpace = styled.div`
    height: ${SIZES.xs};
    width: 100%;
`
