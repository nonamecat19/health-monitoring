import styled from "styled-components";
import SIZES from "../constants/Sizes.ts";
import COLORS from "../constants/Colors.ts";

export const ToCenter = styled.div`
  display: flex;
  justify-content: center;
`
export const BetweenItems = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ColumnItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Block = styled.div`
  display: block;
  width: 100%;
`

export const DetailsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: start;
  gap: ${SIZES.md};
`

export const baseDetailsElement = `
  background: ${COLORS.green2};
  padding: ${SIZES.md};
  border-radius: ${SIZES.md};
  position: relative;
  color: ${COLORS.darkAccent};
`

export const baseCenter = `  
  display: flex;
  justify-content: center;
  align-items: center;
`

export const baseSmallButton = `
  height: 40px;
  width: 40px;
  border-radius: ${SIZES.sm};
  color: ${COLORS.darkAccent};
  ${baseCenter};
`