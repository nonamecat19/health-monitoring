import {SIZES} from "../../shared/constants";
import {BaseDetailsElement} from "../../shared/styles";
import styled from "styled-components";

export const DivElement = styled(BaseDetailsElement)`
    width: 370px;
    padding: ${SIZES.lg};
    height: 210px;
    background: ${({color}) => color};
`
