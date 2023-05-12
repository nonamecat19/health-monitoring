import {Dispatch, SetStateAction} from "react";

export interface RoomRecordsContainerProps {
    data: RoomRecordType[]
}

export interface IRoomsRecordsFilter {
    onlyCritical: boolean
    setOnlyCritical: Dispatch<SetStateAction<boolean>>
}

export interface IDataProps {
    onlyCritical: boolean
}

export interface RoomRecordsElementProps {
    data: RoomRecordType
}

export type RoomRecordType = {
    "id_room_records": number
    "room_number": string
    "humidity": string
    "temperature": string
    "pressure":string
    "carbon_dioxide":string
    "air_ions":string
    "ozone": string
    "is_critical_results": boolean
    "recorded_time": Date
    "recorded_date": Date
    "room": {
        "room_number": string
        "room_type": string
    }
}

export interface ParamProps {
    label: string
    value: string | number
    units?: string
}