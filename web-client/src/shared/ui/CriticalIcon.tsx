import {COLORS, SIZES} from "../constants";
import {FC} from "react";
import styled from "styled-components";
import {TiWarningOutline} from "react-icons/ti";

const Warning = styled.div`
    position: absolute;
    right: ${SIZES.md};
    top: ${SIZES.md};
`

export const CriticalIcon: FC<{ critical: boolean }> = ({critical}) => {
  if (!critical) {
    return null
  }
  return (
    <Warning>
      <TiWarningOutline
        size={50}
        color={COLORS.darkAccent}
      />
    </Warning>
  )
}
