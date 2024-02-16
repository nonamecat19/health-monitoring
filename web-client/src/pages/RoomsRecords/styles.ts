import styled from "styled-components";
import {BaseDetailsElement} from "../../shared/styles";

export const Title = styled.div`
    font-size: 2rem;
    font-weight: bold;
`

export const DivElement = styled(BaseDetailsElement)`
    width: 400px;
    height: 220px;
    background: ${({color}) => color};
    position: relative;
`
