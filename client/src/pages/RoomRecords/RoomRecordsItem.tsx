import {FC} from "react";
import styled from "styled-components";
import {RoomRecordsElementProps} from "../../shared/types/RoomRecords.ts";
import CriticalIcon from "./CriticalIcon.tsx";
import ParamElement from "./ParamElement.tsx";
import moment from 'moment'
import {baseDetailsElement} from "../../shared/styles/styles.ts";

const RoomRecordsItem: FC<RoomRecordsElementProps> = ({data}) => {

    const {
        id_room,
        humidity,
        air_temperature,
        air_pressure,
        nitrogen_content,
        is_critical_condition,
        room,
        date_of_recording
    } = data

    const currentDate = moment(date_of_recording.recorded_date).format('L')

    const clickHandler = () => {
        console.log(id_room)
    }

    return (
        <Element onClick={clickHandler}>

            <CriticalIcon critical={is_critical_condition}/>

            <Title>
                Кімната {room.room_number}
            </Title>

            <ParamElement label={'Температура повітря'} value={air_temperature}/>
            <ParamElement label={'Вологість повітря'} value={humidity}/>
            <ParamElement label={'Тиск повітря'} value={air_pressure}/>
            <ParamElement label={'Вміст кисню'} value={nitrogen_content}/>
            <ParamElement label={'Дата'} value={currentDate}/>
        </Element>
    )
}

const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
`

const Element = styled.data`
  ${baseDetailsElement};
  width: 400px;
  height: 200px;
`

export default RoomRecordsItem
