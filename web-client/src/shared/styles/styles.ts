import styled from "styled-components";
import {COLORS, SIZES} from "../constants";
import {SCREEN} from './screen.ts'

export const ToCenter = styled.div`
    display: flex;
    justify-content: center;
`
export const BetweenItems = styled.div`
    display: flex;
    justify-content: space-between;
`

export const ColumnItems = styled(BetweenItems)`
    flex-direction: column;
`

export const Block = styled.div`
    display: block;
    width: 100%;
`

export const DetailsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: start;
    gap: ${SIZES.md};
`

export const BaseDetailsElement = styled.div`
    padding: ${SIZES.md};
    border-radius: ${SIZES.sm};
    position: relative;
    color: ${COLORS.darkAccent};

    ${SCREEN.MOBILE} {

    }
`

export const BaseCenter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BaseSmallButton = styled(BaseCenter)`
    height: ${SIZES.lg};
    width: ${SIZES.lg};
    border-radius: ${SIZES.sm};
    color: ${COLORS.darkAccent};
`
