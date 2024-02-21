export interface IRoomDashboardDataProps {
  day: string
  month: string
  year: string
}

export type RoomDashboardDataRequest = StatElement[]

export interface IChartProps {
  title: string
  data: ChartElement[]
}

export type ChartElement = {
  min: number
  value: number | string
  max: number
  name: string
}

export type StatElement = {
  airIons: number
  carbonDioxide: number
  createdAt: Date
  humidity: number
  id: number
  isCriticalResult: true
  ozone: number
  pressure: number
  temperature: number
  room: {
    id: number
    roomNumber: string
    createdAt: Date
    updatedAt: Date
  }
}
