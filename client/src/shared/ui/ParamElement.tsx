import {FC} from "react";
import {ParamProps} from "../../shared/types/RoomRecords.ts";
import styled from "styled-components";

const ParamElement: FC<ParamProps> = ({label, value}) => {

    return (
        <Param>
            {label} - {value}
        </Param>
    )
}

const Param = styled.div`
  font-size: 1rem;
`
export default ParamElement