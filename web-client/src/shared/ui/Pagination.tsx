import {FC} from "react";
import styled from "styled-components";
import {IPaginationProps} from "../types/Pagination.ts";
import {COLORS} from "../constants";
import {BaseSmallButton} from "../styles";
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'

export const Pagination: FC<IPaginationProps> = ({page, prev, next, max = 100}) => {
  return (
    <Container>
      {
        page === 1
          ? <ButtonInactive>
            <BsChevronLeft color={COLORS.darkAccent}/>
          </ButtonInactive>
          : <Button onClick={prev}>
            <BsChevronLeft color={COLORS.darkAccent}/>
          </Button>
      }
      <NumberDisplay>
        {page}
      </NumberDisplay>
      {
        page === max
          ? <ButtonInactive>
            <BsChevronRight color={COLORS.darkAccent}/>
          </ButtonInactive>
          : <Button onClick={next}>
            <BsChevronRight color={COLORS.darkAccent}/>
          </Button>
      }
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
`

const Button = styled(BaseSmallButton)`
    background: ${COLORS.green2};
`

const ButtonInactive = styled(BaseSmallButton)`
    background: ${COLORS.grey2};
`

const NumberDisplay = styled(BaseSmallButton)`
    background: ${COLORS.grey2};
    font-weight: bold;
`
