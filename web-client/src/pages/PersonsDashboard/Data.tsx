import {FC} from "react"
import {Container, StatsTitle} from "./styles"
import {ChartElement} from "./ChartElement"
import {
  PERSON_HEART_RATE_MAX,
  PERSON_HEART_RATE_MIN,
  PERSON_OXYGEN_MAX,
  PERSON_OXYGEN_MIN,
  PERSON_TEMPERATURE_MAX,
  PERSON_TEMPERATURE_MIN,
} from "../../shared/constants"
import moment from "moment"
import {IPersonDashboardDataProps, StatElement} from "../../shared/types/PersonDashboard"
import {useParams} from "react-router-dom";
import {usePersonDashboard} from "../../shared/api";

export const Data: FC<IPersonDashboardDataProps> = ({day, month, year}) => {
  const {id} = useParams()

  const {data} = usePersonDashboard(day, month, year, id)
  if (!data) return null

  console.log({data})

  const label = (element: StatElement): string => {
    return `${element.person.name} ${moment(element.createdAt).format('HH:mm')}`
  }

  const temperature = data.map((element: StatElement) => {
    return {
      min: PERSON_TEMPERATURE_MIN,
      value: element.temperature,
      max: PERSON_TEMPERATURE_MAX,
      name: label(element)
    }
  })

  const heartRate = data.map((element: StatElement) => {
    return {
      min: PERSON_HEART_RATE_MIN,
      value: element.heartRate,
      max: PERSON_HEART_RATE_MAX,
      name: label(element)
    }
  })

  const oxygen = data.map((element: StatElement) => {
    return {
      min: PERSON_OXYGEN_MIN,
      value: element.saturation,
      max: PERSON_OXYGEN_MAX,
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
