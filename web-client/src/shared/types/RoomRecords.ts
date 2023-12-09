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

export interface ParamProps {
    label: string
    value: string | number
    units?: string
}