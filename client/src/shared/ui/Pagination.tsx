import {FC} from "react";
import styled from "styled-components";
import {IPaginationProps} from "../types/Pagination.ts";
import COLORS from "../constants/Colors.ts";
import {baseSmallButton} from "../styles/styles.ts";
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'


const Pagination: FC<IPaginationProps> = ({page, prev, next}) => {
    return (
        <Container>
            <Button onClick={prev}>
                <BsChevronLeft color={COLORS.darkAccent}/>
            </Button>
            <NumberDisplay>
                {page}
            </NumberDisplay>
            <Button onClick={next}>
                <BsChevronRight color={COLORS.darkAccent}/>
            </Button>
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

const Button = styled.div`
  background: ${COLORS.green2};
  ${baseSmallButton}
`

const NumberDisplay = styled.div`
  background: ${COLORS.grey2};
  font-weight: bold;
  ${baseSmallButton}
`

export default Pagination