import {FC} from "react"
import {Container, StatsTitle} from "./styles.ts"
import ChartElement from "./ChartElement.tsx"
import useSWR from "swr"
import REQUESTS from "../../shared/constants/Requests.ts"
import {IRoomDashboardDataProps, RoomDashboardDataRequest, StatElement} from "../../shared/types/RoomDashboard.ts"
import {AIR_IONS_MAX, AIR_IONS_MIN, CARBON_DIOXIDE_MAX, CARBON_DIOXIDE_MIN, HUMIDITY_MAX, HUMIDITY_MIN, OZONE_MAX, OZONE_MIN, PRESSURE_MAX, PRESSURE_MIN, TEMPERATURE_MAX, TEMPERATURE_MIN} from "../../shared/constants/RoomIndicators.ts"
import moment from "moment"

const Data: FC<IRoomDashboardDataProps> = ({day, month, year}) => {

    const {data} = useSWR<RoomDashboardDataRequest>(REQUESTS.ROOM_DASHBOARD(day, month, year))
    if (!data) return null

    const label = (element: StatElement): string => {
        return `${element.room.room_number} ${moment(element.recorded_date).format('DD/MM/YYYY')} ${moment(element.recorded_time).format('HH:MM')}`

    }

    const temperature = data.map((element: StatElement) => {
        return {
            min: TEMPERATURE_MIN,
            value: element.temperature,
            max: TEMPERATURE_MAX,
            name: label(element)
        }
    })

    const humidity = data.map((element: StatElement) => {
        return {
            min: HUMIDITY_MIN,
            value: element.humidity,
            max: HUMIDITY_MAX,
            name: label(element)
        }
    })

    const ozone = data.map((element: StatElement) => {
        return {
            min: OZONE_MIN,
            value: element.ozone,
            max: OZONE_MAX,
            name: label(element)
        }
    })

    const pressure = data.map((element: StatElement) => {
        return {
            min: PRESSURE_MIN,
            value: element.pressure,
            max: PRESSURE_MAX,
            name: label(element)
        }
    })

    const airIons = data.map((element: StatElement) => {
        return {
            min: AIR_IONS_MIN,
            value: element.air_ions,
            max: AIR_IONS_MAX,
            name: label(element)
        }
    })

    const carbonDioxide = data.map((element: StatElement) => {
        return {
            min: CARBON_DIOXIDE_MIN,
            value: element.carbon_dioxide,
            max: CARBON_DIOXIDE_MAX,
            name: label(element)
        }
    })

    return (
        <Container>
            <StatsTitle>
                Статистика за {day}/{month}/{year}
            </StatsTitle>
            <ChartElement data={temperature} title={'Температура'}/>
            <ChartElement data={humidity} title={'Вологість повітря'}/>
            <ChartElement data={ozone} title={'Озон'}/>
            <ChartElement data={pressure} title={'Тиск'}/>
            <ChartElement data={airIons} title={'К-сть іонів'}/>
            <ChartElement data={carbonDioxide} title={'Вуглекислий газ'}/>
        </Container>

    )
}
export default Data