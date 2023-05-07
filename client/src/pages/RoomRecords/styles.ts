import styled from "styled-components";
import {baseDetailsElement} from "../../shared/styles/styles.ts";

export const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
`

export const Element = styled.data`
  ${baseDetailsElement};
  width: 400px;
  height: 220px;
  background: ${props => props.color};
  position: relative;
`