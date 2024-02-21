import {FC} from "react"
import {Container, StatsTitle} from "./styles.ts"
import {ChartElement} from "./ChartElement.tsx"
import {IRoomDashboardDataProps, StatElement} from "../../shared/types/RoomDashboard.ts"
import {
  ROOM_AIR_IONS_MAX,
  ROOM_AIR_IONS_MIN,
  ROOM_CARBON_DIOXIDE_MAX,
  ROOM_CARBON_DIOXIDE_MIN,
  ROOM_HUMIDITY_MAX,
  ROOM_HUMIDITY_MIN,
  ROOM_OZONE_MAX,
  ROOM_OZONE_MIN,
  ROOM_PRESSURE_MAX,
  ROOM_PRESSURE_MIN,
  ROOM_TEMPERATURE_MAX,
  ROOM_TEMPERATURE_MIN
} from "../../shared/constants"
import moment from "moment"
import {useParams} from "react-router-dom";
import {useRoomDashboard} from "../../shared/api";

export const Data: FC<IRoomDashboardDataProps> = ({day, month, year}) => {
  const {id} = useParams()

  const {data} = useRoomDashboard(day, month, year, id)
  console.log({data})
  if (!data) return null

  const label = (element: StatElement): string => {
    return `${element.room.roomNumber} ${moment(element.createdAt).format('HH:mm')}`
  }

  const temperature = data.map((element: StatElement) => {
    return {
      min: ROOM_TEMPERATURE_MIN,
      value: element.temperature,
      max: ROOM_TEMPERATURE_MAX,
      name: label(element)
    }
  })

  const humidity = data.map((element: StatElement) => {
    return {
      min: ROOM_HUMIDITY_MIN,
      value: element.humidity,
      max: ROOM_HUMIDITY_MAX,
      name: label(element)
    }
  })

  const ozone = data.map((element: StatElement) => {
    return {
      min: ROOM_OZONE_MIN,
      value: element.ozone,
      max: ROOM_OZONE_MAX,
      name: label(element)
    }
  })

  const pressure = data.map((element: StatElement) => {
    return {
      min: ROOM_PRESSURE_MIN,
      value: element.pressure,
      max: ROOM_PRESSURE_MAX,
      name: label(element)
    }
  })

  const airIons = data.map((element: StatElement) => {
    return {
      min: ROOM_AIR_IONS_MIN,
      value: element.airIons,
      max: ROOM_AIR_IONS_MAX,
      name: label(element)
    }
  })

  const carbonDioxide = data.map((element: StatElement) => {
    return {
      min: ROOM_CARBON_DIOXIDE_MIN,
      value: element.carbonDioxide,
      max: ROOM_CARBON_DIOXIDE_MAX,
      name: label(element)
    }
  })

  return (
    <Container>
      <StatsTitle>
        Статистика за {day}/{month}/{year} {id && `| Кімната ${id}`}
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
