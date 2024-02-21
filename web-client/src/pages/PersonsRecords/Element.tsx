import {IPersonRecordsElementProps} from "../../shared/types/PersonsRecords.ts";
import {FC} from "react";
import styled from "styled-components";
import {CriticalIcon, ParamElement} from "../../shared/ui";
import moment from "moment";
import {COLORS, SIZES} from "../../shared/constants";
import {DivElement} from "./styles.ts";

export const Element: FC<IPersonRecordsElementProps> = ({data}) => {
  const date = moment(data.recordedDate).format('D/M/YYYY');

  return (
    <DivElement color={data.isCriticalResult ? COLORS.red : COLORS.green2}>
      <Name>{data.person.name}</Name>
      <CriticalIcon critical={data.isCriticalResult}/>
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
