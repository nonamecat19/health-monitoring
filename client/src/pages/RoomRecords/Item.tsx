import {FC} from "react"
import {RoomRecordsElementProps} from "../../shared/types/RoomRecords.ts"
import CriticalIcon from "../../shared/ui/CriticalIcon.tsx"
import ParamElement from "../../shared/ui/ParamElement.tsx"
import moment from 'moment'
import COLORS from "../../shared/constants/Colors.ts";
import {Title, Element} from "./styles.ts";
import styled from "styled-components";
import SIZES from "../../shared/constants/Sizes.ts";

const Item: FC<RoomRecordsElementProps> = ({data}) => {

    const {
        id_room_records,
        humidity,
        temperature,
        pressure,
        carbon_dioxide,
        air_ions,
        ozone,
        is_critical_results,
        room,
        recorded_date,
        recorded_time
    } = data


    const clickHandler = (): void => {
        console.log(id_room_records)
    }

    return (
        <Element
            onClick={clickHandler}
            color={is_critical_results ? COLORS.orange : COLORS.green2}
        >

            <CriticalIcon critical={is_critical_results}/>

            <Title>
                Кімната {room.room_number}
            </Title>

            <ParamElement label={'Температура повітря'} value={temperature}/>
            <ParamElement label={'Вологість повітря'} value={humidity}/>
            <ParamElement label={'Тиск повітря'} value={pressure}/>
            <ParamElement label={'Вуглекислий газ'} value={carbon_dioxide}/>
            <ParamElement label={'Аероіони'} value={air_ions}/>
            <ParamElement label={'Озон'} value={ozone}/>
            <Date>
                {moment(recorded_time).format('HH:MM')}
                {' '}
                {moment(recorded_date).format('L')}
            </Date>
        </Element>
    )
}

const Date = styled.div`
  position: absolute;
  bottom: ${SIZES.sm};
  right: ${SIZES.md};
  font-size: 1.3rem;
  font-weight: bold;
`

export default Item
