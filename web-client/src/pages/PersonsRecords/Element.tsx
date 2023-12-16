import {IPersonRecordsElementProps} from "../../shared/types/PersonsRecords.ts";
import {FC} from "react";
import styled from "styled-components";
import ParamElement from "../../shared/ui/ParamElement.tsx";
import CriticalIcon from "../../shared/ui/CriticalIcon.tsx";
import moment from "moment";
import SIZES from "../../shared/constants/Sizes.ts";
import COLORS from "../../shared/constants/Colors.ts";
import {DivElement} from "./styles.ts";



const Element: FC<IPersonRecordsElementProps> = ({data}) => {

    const date = moment(data.recordedDate).format('D/M/YYYY');

    return (
        <DivElement color={data.isCriticalResults ? COLORS.red : COLORS.green2}>
            <Name>{data.person.name}</Name>
            <CriticalIcon critical={data.isCriticalResults}/>
            <ParamElement label={'Група'} value={data.person.studyGroup}/>
            <ParamElement label={'Кисень'} value={data.saturation} units={''}/>
            <ParamElement label={'Частота серцебиття'} value={data.heartRate} units={'уд./хв.'}/>
            <ParamElement label={'Температура тіла'} value={data.temperature} units={'°С'}/>
            <ParamElement label={'Кімната'} value={data.room.roomNumber}/>
            <Date>{date}</Date>
        </DivElement>
    )
}

const Name = styled.div`
  font-weight: bold;
  font-size: 1.3rem;
  width: 260px;
  height: 57px;
  margin-top: -15px;
`

const Date = styled.div`
  font-weight: bold;
  position: absolute;
  font-size: 1.2rem;
  right: ${SIZES.md};
  bottom: ${SIZES.sm};
`


export default Element