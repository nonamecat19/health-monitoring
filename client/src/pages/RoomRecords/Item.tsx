import {FC} from "react"
import {RoomRecordsElementProps} from "../../shared/types/RoomRecords.ts"
import CriticalIcon from "../../shared/ui/CriticalIcon.tsx"
import ParamElement from "../../shared/ui/ParamElement.tsx"
import moment from 'moment'
import COLORS from "../../shared/constants/Colors.ts";
import {Title, Element} from "./styles.ts";

const Item: FC<RoomRecordsElementProps> = ({data}) => {

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

    const clickHandler = (): void => {
        console.log(id_room)
    }

    return (
        <Element
            onClick={clickHandler}
            color={is_critical_condition ? COLORS.orange : COLORS.green2}
        >

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



export default Item
