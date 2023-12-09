

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
    roomRecordId: number
    humidity: number
    temperature: number
    pressure: number
    carbonDioxide: number
    airIons: number
    ozone: number
    isCriticalResults: boolean
    recordedDate: Date | string
    roomId: number
    roomNumber: string
    roomType: string
}