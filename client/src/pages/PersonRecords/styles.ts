import SIZES from "../../shared/constants/Sizes.ts";
import {baseDetailsElement} from "../../shared/styles/styles.ts";
import styled from "styled-components";

export const DivElement = styled.div`
  ${baseDetailsElement};
  width: 370px;
  padding: ${SIZES.lg};
  height: 210px;
  background: ${props => props.color};
`