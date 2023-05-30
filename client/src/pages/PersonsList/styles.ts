import styled from "styled-components";
import COLORS from "../../shared/constants/Colors.ts";
import SIZES from "../../shared/constants/Sizes.ts";
import {Input} from "antd";

export const DivElement = styled.div`
  background: ${COLORS.green2};
  width: 330px;
  height: 100px;
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
  height: ${SIZES.lg};
  width: 100%;
`

export const NameFilter = styled(Input)`
  width: 300px;
  margin: -15px auto 0 auto;
`