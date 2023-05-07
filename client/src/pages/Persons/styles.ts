import styled from "styled-components";
import COLORS from "../../shared/constants/Colors.ts";
import SIZES from "../../shared/constants/Sizes.ts";

export const DivElement = styled.div`
  background: ${COLORS.green2};
  width: 330px;
  padding: ${SIZES.md};
  border-radius: ${SIZES.sm};
`

export const DivContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: ${SIZES.sm};
  gap: 20px
`