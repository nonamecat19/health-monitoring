
export interface RoomRecordsContainerProps {
    data: RoomRecordType[]
}

export interface RoomRecordsElementProps {
    data: RoomRecordType
}

export type RoomRecordType = {
    id_environment_condition: number,
    id_room: number,
    id_date: number,
    humidity: number,
    air_temperature: number,
    air_pressure: number,
    nitrogen_content: number,
    is_critical_condition: boolean,
    recorded_time: Date,
    room: {
        id_room: number,
        room_number: string
    },
    date_of_recording: {
        id_date: number,
        recorded_date: Date
    }
}

export interface ParamProps {
    label: string
    value: string | number
}