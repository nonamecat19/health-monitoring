import {IPersonRecordsElementProps} from "../../shared/types/PersonsRecords.ts";
import {FC} from "react";
import {baseDetailsElement} from "../../shared/styles/styles.ts";
import styled from "styled-components";
import ParamElement from "../../shared/ui/ParamElement.tsx";
import CriticalIcon from "../../shared/ui/CriticalIcon.tsx";
import moment from "moment";
import SIZES from "../../shared/constants/Sizes.ts";
import COLORS from "../../shared/constants/Colors.ts";



const Element: FC<IPersonRecordsElementProps> = ({data}) => {

    const date = moment(data.date_of_recording.recorded_date).format('D/M/YYYY');

    return (
        <DivElement color={data.is_critical_condition ? COLORS.orange : COLORS.green2}>
            <Name>{data.person.name_person}</Name>
            <CriticalIcon critical={data.is_critical_condition}/>
            <ParamElement label={'Група'} value={data.person.study_group}/>
            <ParamElement label={'Кисень'} value={data.oxygen}/>
            <ParamElement label={'Частота серцебиття'} value={data.heart_rate}/>
            <ParamElement label={'Температура тіла'} value={data.body_temperature}/>
            <ParamElement label={'Кімната'} value={data.room.room_number}/>
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

const DivElement = styled.div`
  ${baseDetailsElement};
  width: 370px;
  padding: ${SIZES.lg};
  height: 210px;
  background: ${props => props.color};
`

export default Element