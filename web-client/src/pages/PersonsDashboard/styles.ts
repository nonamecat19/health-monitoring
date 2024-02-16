import styled from "styled-components";
import {COLORS, SIZES} from "../../shared/constants";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: ${SIZES.sm}
`
export const ChartTitle = styled.h1`
    text-align: center;
`

interface ChartWrapperProps {
  readonly fullscreen: boolean
}

export const ChartWrapper = styled.div<ChartWrapperProps>`
    border: ${props => props.fullscreen ? SIZES.md : SIZES.xxs} solid ${COLORS.grey3};
    background-color: ${COLORS.white};
    padding: ${SIZES.xs};
    width: ${props => props.fullscreen ? '90vw' : `calc(${SIZES.lg} * 2 + 350px)`};
    height: ${props => props.fullscreen ? '90vh' : 'auto'};
    border-radius: ${props => props.fullscreen ? SIZES.xxl : SIZES.xl};
    position: ${props => props.fullscreen ? 'fixed' : 'block'};
    left: 5vw;
    z-index: ${props => props.fullscreen ? 10 : 1};
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
