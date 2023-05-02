import SIZES from "../../shared/constants/Sizes.ts";
import COLORS from "../../shared/constants/Colors.ts";
import {FC} from "react";
import styled from "styled-components";
import {TiWarningOutline} from "react-icons/ti";

const Warning = styled.div`
  position: absolute;
  right: ${SIZES.md};
  top: ${SIZES.md};
`

const CriticalIcon: FC<{critical: boolean}> = ({critical}) => {
    if (critical) {
        return (
            <Warning>
                <TiWarningOutline
                    size={50}
                    color={COLORS.darkAccent}
                />
            </Warning>
        )
    }
    return null
}
export default CriticalIcon