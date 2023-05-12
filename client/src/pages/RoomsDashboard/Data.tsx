import {FC} from "react";
import {Container, StatsTitle} from "./styles.ts";
import ChartElement from "./ChartElement.tsx";
import useSWR from "swr";
import REQUESTS from "../../shared/constants/Requests.ts";
import {IRoomDashboardDataProps, RoomDashboardDataRequest, StatElement} from "../../shared/types/RoomDashboard.ts";
import moment from "moment";


const Data: FC<IRoomDashboardDataProps> = ({day, month, year}) => {

    const {data} = useSWR<RoomDashboardDataRequest>(REQUESTS.ROOM_DASHBOARD(day, month, year))
    if (!data) return null

    const temperature = data.map((element: StatElement) => {
        return {
            min: 1,
            value: element.temperature,
            max: 3,
            name: moment(element.recorded_date).format('DD/MM/YYYY')
        }
    })

    const humidity = data.map((element: StatElement) => {
        return {
            min: 1,
            value: element.humidity,
            max: 3,
            name: moment(element.recorded_date).format('DD/MM/YYYY')
        }
    })

    const ozone = data.map((element: StatElement) => {
        return {
            min: 1,
            value: element.ozone,
            max: 3,
            name: moment(element.recorded_date).format('DD/MM/YYYY')
        }
    })

    const pressure = data.map((element: StatElement) => {
        return {
            min: 1,
            value: element.pressure,
            max: 3,
            name: moment(element.recorded_date).format('DD/MM/YYYY')
        }
    })

    const airIons = data.map((element: StatElement) => {
        return {
            min: 1,
            value: element.air_ions,
            max: 3,
            name: moment(element.recorded_date).format('DD/MM/YYYY')
        }
    })

    const carbonDioxide = data.map((element: StatElement) => {
        return {
            min: 1,
            value: element.carbon_dioxide,
            max: 3,
            name: moment(element.recorded_date).format('DD/MM/YYYY')
        }
    })

    return (
        <Container>
            <StatsTitle>
                Статистика за 4/9/2023
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