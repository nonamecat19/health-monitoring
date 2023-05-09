import styled from "styled-components";
import COLORS from "../../shared/constants/Colors.ts";
import SIZES from "../../shared/constants/Sizes.ts";

export const DivElement = styled.div`
  background: ${COLORS.green2};
  width: 280px;
  height: 65px;
  padding: ${SIZES.md};
  border-radius: ${SIZES.sm};
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