import styled from "styled-components";
import SIZES from "../../shared/constants/Sizes.ts";
import COLORS from "../../shared/constants/Colors.ts";


export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${SIZES.sm}
`
export const ChartTitle = styled.h1`
  text-align: center;
`

export const ChartWrapper = styled.div`
  border: ${SIZES.xxs} solid ${COLORS.grey3};
  padding: ${SIZES.xs};
  width: calc(${SIZES.lg} * 2 + 350px);
  border-radius: ${SIZES.xl};
`

export const Sidebar = styled.div`
  min-width: 340px;
  width: 340px;
  height: 360px;
  border: ${SIZES.xxs} solid ${COLORS.grey3};
  border-radius: ${SIZES.xl};
  padding: ${SIZES.md};
`

export const StatsTitle = styled.div`
  font-size: 1.5rem;
  width: 100%;
  text-align: center;
`

export const Button = styled.div`
  padding: ${SIZES.md};
  background: ${COLORS.green2};
  border-radius: ${SIZES.md};
  text-align: center;
  font-weight: bold;
`

export const CurrentDate = styled.div`
  height: ${SIZES.lg};
  margin-top: -${SIZES.sm};
  text-align: center;
`