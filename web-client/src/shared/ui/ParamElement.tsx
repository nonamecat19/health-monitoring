import {FC} from "react";
import {ParamProps} from "../types/RoomRecords.ts";
import styled from "styled-components";

export const ParamElement: FC<ParamProps> = ({label, value, units}) => {
    return (
        <Param>
            {label} - {value}{units}
        </Param>
    )
}

const Param = styled.div`
  font-size: 1rem;
`
