import {FC} from "react"
import {Container, StatsTitle} from "./styles"
import ChartElement from "./ChartElement"
import useSWR from "swr"
import REQUESTS from "../../shared/constants/Requests"
import moment from "moment"
import {HEART_RATE_MAX, HEART_RATE_MIN, OXYGEN_MAX, OXYGEN_MIN, TEMPERATURE_MAX, TEMPERATURE_MIN} from "../../shared/constants/PersonIndicators"
import {IPersonDashboardDataProps, PersonDashboardDataRequest, StatElement} from "../../shared/types/PersonDashboard"
import {useParams} from "react-router-dom";

const Data: FC<IPersonDashboardDataProps> = ({day, month, year}) => {

    const {id} = useParams()

    const {data} = useSWR<PersonDashboardDataRequest>(REQUESTS.PERSON_DASHBOARD(day, month, year, id))
    if (!data) return null

    const label = (element: StatElement): string => {
        return `${element.person.name_person} ${moment(element.recorded_date).format('DD/MM/YYYY')} ${moment(element.recorded_time).format('HH:MM')}`

    }

    const temperature = data.map((element: StatElement) => {
        return {
            min: TEMPERATURE_MIN,
            value: element.temperature,
            max: TEMPERATURE_MAX,
            name: label(element)
        }
    })

    const heartRate = data.map((element: StatElement) => {
        return {
            min: HEART_RATE_MIN,
            value: element.heart_rate,
            max: HEART_RATE_MAX,
            name: label(element)
        }
    })

    const oxygen = data.map((element: StatElement) => {
        return {
            min: OXYGEN_MIN,
            value: element.oxygen,
            max: OXYGEN_MAX,
            name: label(element)
        }
    })

    return (
        <Container>
            <StatsTitle>
                Статистика за {day}/{month}/{year} {id && `| ID: ${id}`}
            </StatsTitle>
            <ChartElement data={temperature} title={'Температура'}/>
            <ChartElement data={heartRate} title={'Частота серцевих скорочень'}/>
            <ChartElement data={oxygen} title={'Сатурація'}/>
        </Container>
    )
}
export default Data