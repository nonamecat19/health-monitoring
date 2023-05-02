import {IPersonRecordsElementProps} from "../../shared/types/PersonsRecords.ts";
import {FC} from "react";
import {baseDetailsElement} from "../../shared/styles/styles.ts";
import styled from "styled-components";



const PersonRecordsElement: FC<IPersonRecordsElementProps> = ({data}) => {


    return (
        <Element>
            {JSON.stringify(data)}
        </Element>
    )
}

const Element = styled.div`
  ${baseDetailsElement};
  width: 400px;
  height: 200px;
`

export default PersonRecordsElement