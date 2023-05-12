

export interface IRoomDashboardDataProps {
    day: number
    month: number
    year: number
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
    id_room_records: number,
    room_number: string,
    humidity: string,
    temperature: string,
    pressure: string,
    carbon_dioxide: string,
    air_ions: string,
    ozone: string,
    is_critical_results: boolean,
    recorded_time: Date,
    recorded_date: Date,
    room: {
        room_number: string,
        room_type: string
    }
}